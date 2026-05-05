import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '@/views/Auth/AuthPage.vue'
import HomePage from '@/views/Home/HomePage.vue'
import QuizPage from '@/views/Quiz/QuizPage.vue'
import ResultPage from '@/views/Result/ResultPage.vue'
import BookmarkPage from '@/views/Bookmark/BookmarkPage.vue'
import LayoutContainer from '@/components/container/LayoutContainer/LayoutContainer.vue'
import { useAuthStore } from '@/stores/useAuthStore'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/auth', component: AuthPage },
    {
      path: '/',
      component: LayoutContainer,
      children: [
        { path: '', redirect: '/home' },
        { path: 'home', component: HomePage },
        { path: 'quiz', component: QuizPage },
        { path: 'result', component: ResultPage },
        { path: 'bookmark', component: BookmarkPage },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/home' },
  ],
})

const PUBLIC_ROUTES = ['/auth']

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (!authStore.isInitialized) authStore.init()

  const isPublic = PUBLIC_ROUTES.includes(to.path)
  if (authStore.isLoggedIn && isPublic) return '/home'
  if (!authStore.isLoggedIn && !isPublic) return '/auth'
})

export default router
