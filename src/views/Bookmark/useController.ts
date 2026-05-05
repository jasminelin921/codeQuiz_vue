import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import { authService } from '@/services/auth.service'
import { QUESTIONS } from '@/data/questions.db'
import {
  DIFFICULTY_OPTIONS,
  TOPIC_ORDER,
  TOPIC_LABEL,
  DIFFICULTY_LABEL,
  type Topic,
  type Difficulty,
} from '@/views/Home/constant'

export interface BookmarkItem {
  questionId: string
  questionText: string
  code?: string
  correctAnswer: string
  topic: Topic
  topicLabel: string
  difficulty: Difficulty
  difficultyLabel: string
  explanation: string
}

const DIFFICULTY_ORDER: Record<Difficulty, number> = {
  easy: 0,
  medium: 1,
  hard: 2,
}

export function useController() {
  const router = useRouter()
  const authStore = useAuthStore()
  const { username } = storeToRefs(authStore)

  const selectedTopic = ref<'all' | Topic>('all')
  const selectedDifficulty = ref<'all' | Difficulty>('all')
  const bookmarks = ref<BookmarkItem[]>([])
  const isLoading = ref(true)
  const modalInfo = ref<{
    title: string
    description: string
    confirmLabel: string
    onConfirm: () => void
  } | null>(null)

  const filteredBookmarks = computed(() =>
    bookmarks.value
      .filter((item) => {
        const topicMatch =
          selectedTopic.value === 'all' || item.topic === selectedTopic.value
        const difficultyMatch =
          selectedDifficulty.value === 'all' ||
          item.difficulty === selectedDifficulty.value
        return topicMatch && difficultyMatch
      })
      .sort(
        (a, b) =>
          DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty],
      ),
  )

  const groupedBookmarks = computed(() =>
    TOPIC_ORDER.reduce<Record<string, BookmarkItem[]>>((groups, topic) => {
      const items = filteredBookmarks.value.filter(
        (item) => item.topic === topic,
      )
      if (items.length > 0) groups[topic] = items
      return groups
    }, {}),
  )

  const groupedTopics = computed(
    () => Object.keys(groupedBookmarks.value) as Topic[],
  )

  const availableTopics = computed(() =>
    TOPIC_ORDER.filter((topic) =>
      bookmarks.value.some((b) => b.topic === topic),
    ),
  )

  const availableDifficulties = computed(() =>
    DIFFICULTY_OPTIONS.filter(
      (opt) =>
        opt.value === 'all' ||
        bookmarks.value.some((b) => b.difficulty === opt.value),
    ),
  )

  function loadBookmarks() {
    if (!username.value) return
    const saved = authService.getBookmarkedQuestions(username.value)
    bookmarks.value = saved.flatMap((b) => {
      const q = QUESTIONS.find((q) => q.id === b.questionId)
      if (!q) return []
      return [
        {
          questionId: q.id,
          questionText: q.text,
          code: q.code,
          correctAnswer: q.options[q.answer],
          topic: q.topic,
          topicLabel: TOPIC_LABEL[q.topic],
          difficulty: q.difficulty,
          difficultyLabel: DIFFICULTY_LABEL[q.difficulty],
          explanation: q.explanation,
        },
      ]
    })
    isLoading.value = false
  }

  function handleRemove(questionId: string) {
    if (!username.value) return
    modalInfo.value = {
      title: '移除收藏題目',
      description: '確定要移除這道題目嗎？',
      confirmLabel: '移除',
      onConfirm: () => {
        authService.removeBookmark(username.value!, questionId)
        bookmarks.value = bookmarks.value.filter(
          (b) => b.questionId !== questionId,
        )
        modalInfo.value = null
      },
    }
  }

  function handleGoHome() {
    router.push('/home')
  }

  onMounted(loadBookmarks)

  return {
    isLoading,
    bookmarks,
    selectedTopic,
    selectedDifficulty,
    filteredBookmarks,
    groupedBookmarks,
    groupedTopics,
    availableTopics,
    availableDifficulties,
    handleRemove,
    handleGoHome,
    modalInfo,
  }
}
