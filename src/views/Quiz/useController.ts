import { ref, computed, watch, onWatcherCleanup } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { QUIZ_TIME_LIMIT } from './constant'
import { QUESTIONS } from '@/data/questions.db'
import { QUIZZES, TOPIC_LABEL } from '@/views/Home/constant'
import type { QuestionResult } from '@/types'

export function useController() {
  const route = useRoute()
  const router = useRouter()
  const modalInfo = ref<{
    title: string
    description: string
    confirmLabel: string
    onConfirm: () => void
  } | null>(null)

  const quizId = computed(() => (route.query.id as string) ?? '')
  const quizInfo = computed(() => QUIZZES.find((q) => q.id === quizId.value))
  const quizTitle = computed(() => quizInfo.value?.title ?? '')
  const topicLabel = computed(() =>
    quizInfo.value ? TOPIC_LABEL[quizInfo.value?.topic] : '',
  )
  const quizQuestions = computed(() =>
    QUESTIONS.filter((q) => q.quizId === quizId.value),
  )

  const currentIndex = ref(0)
  const selectedOption = ref<number | null>(null)
  const isAnswered = ref(false)
  const timeLeft = ref(QUIZ_TIME_LIMIT)
  const results = ref<QuestionResult[]>([])

  const currentQuestion = computed(
    () => quizQuestions.value[currentIndex.value],
  )
  const totalQuestions = computed(() => quizQuestions.value.length)
  const isLastQuestion = computed(
    () => currentIndex.value === totalQuestions.value - 1,
  )
  const progressPct = computed(() =>
    isLastQuestion.value && isAnswered.value
      ? 100
      : Math.round((currentIndex.value / totalQuestions.value) * 100),
  )
  const isWarning = computed(() => timeLeft.value <= 10)

  function handleSelectOption(index: number) {
    if (isAnswered.value || !currentQuestion.value) return
    const timeUsed = QUIZ_TIME_LIMIT - timeLeft.value

    selectedOption.value = index
    isAnswered.value = true

    results.value.push({
      questionId: currentQuestion.value.id,
      questionText: currentQuestion.value.text,
      selectedIndex: index,
      selectedAnswer: `${String.fromCharCode(65 + index)}. ${currentQuestion.value.options[index]}`,
      correctAnswer: `${String.fromCharCode(65 + currentQuestion.value.answer)}. ${currentQuestion.value.options[currentQuestion.value.answer]}`,
      isCorrect: index === currentQuestion.value.answer,
      isTimeout: false,
      timeUsed,
    })
  }

  function handleNextQuestion() {
    if (isLastQuestion.value) {
      const plainResults = JSON.parse(JSON.stringify(results.value))
      router.push({
        path: '/result',
        state: { quizId: quizId.value, results: plainResults },
      })
      return
    }
    currentIndex.value++
    selectedOption.value = null
    isAnswered.value = false
  }

  function handleGoHome() {
    if (currentIndex.value === 0 && !isAnswered.value) {
      router.push('/home')
      return
    }
    modalInfo.value = {
      title: '離開測驗',
      description: '確定要離開測驗嗎？目前進度將不會儲存。',
      confirmLabel: '離開',
      onConfirm: () => {
        modalInfo.value = null
        router.replace('/home')
      },
    }
  }

  const breadcrumbItems = computed(() => [
    { label: '首頁', onClick: handleGoHome },
    { label: topicLabel.value },
    { label: quizTitle.value },
  ])

  function clearModal() {
    modalInfo.value = null
  }

  function handleTimeout() {
    if (!currentQuestion.value) return
    isAnswered.value = true
    results.value = [
      ...results.value,
      {
        questionId: currentQuestion.value.id,
        questionText: currentQuestion.value.text,
        selectedIndex: null,
        selectedAnswer: null,
        correctAnswer: `${String.fromCharCode(65 + currentQuestion.value.answer)}. ${currentQuestion.value.options[currentQuestion.value.answer]}`,
        isCorrect: false,
        isTimeout: true,
        timeUsed: QUIZ_TIME_LIMIT,
      },
    ]
  }

  watch(
    [currentIndex, isAnswered],
    () => {
      if (isAnswered.value) return
      timeLeft.value = QUIZ_TIME_LIMIT
      const timer = setInterval(() => {
        if (timeLeft.value <= 1) {
          clearInterval(timer)
          handleTimeout()
          timeLeft.value = 0
          return
        }
        timeLeft.value--
      }, 1000)
      onWatcherCleanup(() => clearInterval(timer)) // 在下次 watch 觸發 或 元件卸載時自動執行
    },
    { immediate: true }, // 元件掛載時立即執行一次
  )

  return {
    breadcrumbItems,
    quizInfo,
    quizTitle,
    currentIndex,
    currentQuestion,
    totalQuestions,
    selectedOption,
    isAnswered,
    isLastQuestion,
    isWarning,
    timeLeft,
    progressPct,
    modalInfo,
    clearModal,
    handleSelectOption,
    handleNextQuestion,
    handleGoHome,
  }
}
