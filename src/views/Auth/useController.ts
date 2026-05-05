import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import { authService } from '@/services/auth.service'

export function useController() {
  const currentMode = ref<'login' | 'register'>('login')
  const errorMsg = ref('')
  const authStore = useAuthStore()
  const router = useRouter()

  const { handleSubmit, errors, defineField, resetForm, setFieldError } = useForm({
    validationSchema: {
      username: (val: string) => {
        if (!val) return '請輸入帳號'
        if (val.length < 3) return '帳號至少需要 3 個字元'
        return true
      },
      password: (val: string) => {
        if (!val) return '請輸入密碼'
        if (val.length < 4) return '密碼至少需要 4 個字元'
        return true
      },
      confirmPassword: (val: string) => {
        if (currentMode.value !== 'register') return true
        if (!val) return '請再次輸入密碼'
        return true
      },
    },
  })

  const [username, usernameAttrs] = defineField('username')
  const [password, passwordAttrs] = defineField('password')
  const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword')

  const onSubmit = handleSubmit((values) => {
    errorMsg.value = ''

    if (currentMode.value === 'register') {
      if (values.confirmPassword !== values.password) {
        setFieldError('confirmPassword', '密碼不一致')
        return
      }
      const users = authService.getUsers() ?? {}
      if (users[values.username]) {
        setFieldError('username', '此帳號已存在')
        return
      }
      users[values.username] = {
        username: values.username,
        password: values.password,
        createdAt: new Date().toISOString(),
      }
      authService.setUsers(users)
      authService.setSession(values.username)
      authStore.login(values.username)
      router.push('/home')
    } else {
      const users = authService.getUsers() ?? {}
      const user = users[values.username]
      if (!user || user.password !== values.password) {
        errorMsg.value = '帳號或密碼錯誤'
        return
      }
      authService.setSession(values.username)
      authStore.login(values.username)
      router.push('/home')
    }
  })

  function switchMode(mode: 'login' | 'register') {
    currentMode.value = mode
    errorMsg.value = ''
    resetForm()
  }

  return {
    currentMode, errorMsg,
    username, usernameAttrs,
    password, passwordAttrs,
    confirmPassword, confirmPasswordAttrs,
    errors, onSubmit, switchMode,
  }
}