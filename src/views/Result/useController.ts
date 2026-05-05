import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import { authService } from '@/services/auth.service'
import { QUIZZES, TOPIC_LABEL } from '@/views/Home/constant'
import type { QuestionResult, QuizRecord } from '@/types'

export function useController() {
  const router = useRouter()
  const authStore = useAuthStore()
  const { username } = storeToRefs(authStore)

  // history.state 是 browser API
  // router.push({ state: { quizId, results } }) 存進去，這裡讀出來
  const state = history.state as {
    quizId: string
    results: QuestionResult[]
  } | null

  const quizId = state?.quizId ?? ''
  const results = state?.results ?? []
  const quizInfo = QUIZZES.find((q) => q.id === quizId)
  const quizTitle = quizInfo?.title ?? ''
  const topicLabel = quizInfo ? TOPIC_LABEL[quizInfo.topic] : ''

  const correctCount = results.filter((r) => r.isCorrect).length
  const totalCount = results.length
  const accuracy =
    totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0
  const avgTime =
    totalCount > 0
      ? Math.round(results.reduce((sum, r) => sum + r.timeUsed, 0) / totalCount)
      : 0

  const detailItems = results.map((result) => ({
    questionId: result.questionId,
    questionText: result.questionText,
    isCorrect: result.isCorrect,
    isTimeout: result.isTimeout,
    selectedAnswer: result.selectedAnswer,
    correctAnswer: result.correctAnswer,
    timeUsed: result.timeUsed,
  }))

  const bookmarkedIds = ref<string[]>([])

  const resultMeta = computed(() => {
    if (accuracy >= 80) return { emoji: '🎉', title: '太厲害了！' }
    if (accuracy >= 60) return { emoji: '👍', title: '做得不錯！' }
    return { emoji: '📚', title: '繼續加油！' }
  })

  const statItems = [
    {
      num: `${correctCount} / ${totalCount}`,
      label: '答對題數',
      color: accuracy >= 60 ? 'text-green-800' : 'text-amber-800',
    },
    {
      num: `${accuracy}%`,
      label: '正確率',
      color: accuracy >= 60 ? 'text-green-800' : 'text-amber-800',
    },
    { num: `${avgTime} 秒`, label: '平均用時', color: 'text-text-base' },
  ]

  function handleGoHome() {
    router.replace('/home')
  }
  function handleRetry() {
    router.replace(`/quiz?id=${quizId}`)
  }

  function handleToggleBookmark(questionId: string) {
    if (!username.value) return
    if (bookmarkedIds.value.includes(questionId)) {
      authService.removeBookmark(username.value, questionId)
      bookmarkedIds.value = bookmarkedIds.value.filter(
        (id) => id !== questionId,
      )
    } else {
      authService.addBookmark(username.value, questionId)
      bookmarkedIds.value.push(questionId)
    }
  }

  const breadcrumbItems = [
    { label: '首頁', onClick: handleGoHome },
    { label: topicLabel },
    { label: quizTitle },
    { label: '測驗結果' },
  ]

  // onMounted：元件掛載後執行一次
  // 對應 React useEffect(fn, []) + useRef 防重複執行的組合
  // Vue 不需要 useRef guard，onMounted 本來就只跑一次
  onMounted(() => {
    if (!state || !username.value) return

    bookmarkedIds.value = authService
      .getBookmarkedQuestions(username.value)
      .map((b) => b.questionId)

    const record: QuizRecord = {
      quizId,
      correctCount,
      totalCount,
      accuracy,
      avgTime,
      completedAt: new Date().toISOString(),
    }
    authService.saveQuizRecord(username.value, record)
    authStore.refreshStats() // 更新 Navbar 的統計數字
  })

  return {
    quizTitle,
    breadcrumbItems,
    statItems,
    resultMeta,
    detailItems,
    isValidState: !!state,
    bookmarkedIds,
    handleGoHome,
    handleRetry,
    handleToggleBookmark,
  }
}
