import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authService } from '@/services/auth.service'
import { QUIZZES } from '@/views/Home/constant'

export const useAuthStore = defineStore('auth', () => {
  const username = ref<string | null>(null)
  const isInitialized = ref(false)
  const statsVersion = ref(0)

  const isLoggedIn = computed(() => username.value !== null)
  const stats = computed(() => {
    void statsVersion.value // 觸發重新計算

    if (!username.value) {
      return {
        completed: 0,
        total: QUIZZES.length,
        correct: 0,
        wrong: 0,
        totalQuestions: 0,
        accuracy: 0,
      }
    }

    const records = authService.getQuizRecords(username.value)
    const completed = records.length
    const total = QUIZZES.length
    const totalQuestions = records.reduce((sum, r) => sum + r.totalCount, 0)
    const correct = records.reduce((sum, r) => sum + r.correctCount, 0)
    const wrong = totalQuestions - correct
    const accuracy =
      totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0

    return { completed, total, correct, wrong, totalQuestions, accuracy }
  })

  function login(user: string) {
    username.value = user
  }

  function logout() {
    authService.clearSession()
    username.value = null
  }

  function refreshStats() {
    statsVersion.value++
  }

  function init() {
    if (isInitialized.value) return
    authService.initDefaultUsers()
    const session = authService.getSession()
    if (session) username.value = session
    isInitialized.value = true
  }

  return {
    username,
    isInitialized,
    isLoggedIn,
    stats,
    login,
    logout,
    refreshStats,
    init,
  }
})
