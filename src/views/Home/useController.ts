import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { QUIZZES, TOPIC_ORDER, type Difficulty, type Quiz, type TabType } from './constant'
import { useAuthStore } from '@/stores/useAuthStore'
import { authService } from '@/services/auth.service'

export function useController() {
  const authStore = useAuthStore()
  const { isLoggedIn, username, stats } = storeToRefs(authStore)
  const route = useRoute()
  const router = useRouter()
  const collapsedTopics = ref<string[]>([])

  const selectedTab = computed(() => (route.query.tab as TabType) ?? 'all')
  const selectedDifficulty = computed(
    () => (route.query.difficulty as Difficulty | 'all') ?? 'all',
  )
  const completedQuizIds = computed(() => {
    if (!username.value) return []
    return authService.getQuizRecords(username.value).map((r) => r.quizId)
  })
  const filteredQuizzes = computed(() =>
    QUIZZES.filter((quiz) => {
      const diffMatch =
        selectedDifficulty.value === 'all' ||
        quiz.difficulty === selectedDifficulty.value
      const tabMatch =
        selectedTab.value === 'all' || completedQuizIds.value.includes(quiz.id)
      return diffMatch && tabMatch
    }),
  )
  const groupedQuizzes = computed(() =>
    filteredQuizzes.value.reduce<Record<string, Quiz[]>>((group, quiz) => {
      if (!group[quiz.topic]) group[quiz.topic] = []
      group[quiz.topic].push(quiz)
      return group
    }, {}),
  )
  const topics = computed(() =>
    TOPIC_ORDER.filter((topic) => groupedQuizzes.value[topic]),
  )

  function setSelectedTab(tab: TabType) {
    router.replace({ query: { ...route.query, tab } })
  }

  function setSelectedDifficulty(difficulty: Difficulty | 'all') {
    const query = { ...route.query }
    if (difficulty === 'all') {
      delete query.difficulty
    } else {
      query.difficulty = difficulty
    }
    router.replace({ query })
  }

  function toggleTopic(topic: string) {
    if (collapsedTopics.value.includes(topic)) {
      collapsedTopics.value = collapsedTopics.value.filter((t) => t !== topic)
    } else {
      collapsedTopics.value.push(topic)
    }
  }

  function isTopicCollapsed(topic: string): boolean {
    return collapsedTopics.value.includes(topic)
  }

  function isCompleted(quizId: string): boolean {
    return completedQuizIds.value.includes(quizId)
  }

  function handleLogin() {
    router.push('/auth')
  }

  function handleStartQuiz(quizId: string) {
    if (!isLoggedIn.value) {
      router.push(`/auth?redirect=/quiz?id=${quizId}`)
      return
    }
    router.push(`/quiz?id=${quizId}`)
  }

  return {
    isLoggedIn,
    username,
    stats,
    selectedTab,
    selectedDifficulty,
    completedQuizIds,
    groupedQuizzes,
    topics,
    setSelectedTab,
    setSelectedDifficulty,
    toggleTopic,
    isTopicCollapsed,
    isCompleted,
    handleLogin,
    handleStartQuiz,
  }
}
