<script setup lang="ts">
import { useAuthStore } from '@/stores/useAuthStore'
import { onClickOutside } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { authService } from '@/services/auth.service'
import ConfirmModal from '@/components/ui/ConfirmModal.vue'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const { isLoggedIn, username, stats } = storeToRefs(authStore)
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const modalInfo = ref<{
  title: string
  description: string
  confirmLabel: string
  onConfirm: () => void
} | null>(null)

const avatarText = computed(() =>
  username.value ? username.value[0].toUpperCase() : '',
)
const recordCount = computed(() => (username.value ? stats.value.completed : 0))
const statItems = computed(() => [
  { num: stats.value.correct, label: '答對題數' },
  { num: stats.value.wrong, label: '答錯題數' },
  { num: stats.value.totalQuestions, label: '總題數' },
  { num: `${stats.value.accuracy}%`, label: '正確率' },
])

onClickOutside(dropdownRef, () => {
  isOpen.value = false
})

function handleGoHome() {
  if (route.path === '/quiz') {
    modalInfo.value = {
      title: '離開測驗',
      description: '確定要離開測驗嗎？目前進度將不會儲存。',
      confirmLabel: '離開',
      onConfirm: () => {
        modalInfo.value = null
        router.replace('/home')
      },
    }
    return
  }
  router.push('/home')
}

function handleLogout() {
  isOpen.value = false
  authStore.logout()
  router.push('/auth')
}

function handleClearRecords() {
  isOpen.value = false
  modalInfo.value = {
    title: '清除測驗紀錄',
    description: '確定要清除所有測驗紀錄嗎？此操作無法復原。',
    confirmLabel: '清除',
    onConfirm: () => {
      authService.clearQuizRecords(username.value!)
      modalInfo.value = null
      window.location.reload()
    },
  }
}

function handleDeleteAccount() {
  isOpen.value = false
  if (username.value === 'demo') {
    window.alert('測試用帳號無法刪除。')
    return
  }
  modalInfo.value = {
    title: '確定刪除？',
    description: '無法復原',
    confirmLabel: '刪除',
    onConfirm: () => {
      authService.deleteUser(username.value!)
      authStore.logout()
      router.push('/auth')
      modalInfo.value = null
    },
  }
}
</script>

<template>
  <nav
    class="bg-card-bg fixed top-0 left-0 z-50 flex h-14 w-full items-center justify-between px-5 shadow-sm"
  >
    <button
      @click="handleGoHome"
      class="flex cursor-pointer items-center gap-2"
    >
      <img src="@/assets/logo.svg" alt="CodeQuiz" class="h-7 w-7" />
      <span class="text-logo-title text-text-base font-medium">CodeQuiz</span>
    </button>

    <div v-if="isLoggedIn" class="flex items-center gap-6">
      <button
        @click="
          () => {
            router.push('/bookmark')
          }
        "
        class="text-label text-text-muted hover:text-primary hidden items-center gap-1 transition-colors md:flex"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path d="M3 2h10v13l-5-3-5 3V2z" />
        </svg>
        收藏題目
      </button>

      <div ref="dropdownRef" class="relative">
        <button
          class="bg-primary-tint text-primary text-hint flex h-8 w-8 items-center justify-center rounded-full font-medium"
          @click="isOpen = !isOpen"
        >
          {{ avatarText }}
        </button>
        <div
          v-show="isOpen"
          class="absolute top-10 right-0 w-48 rounded-xl bg-white p-2 shadow"
        >
          <div class="border-border mb-1 border-b p-3 md:hidden">
            <p class="text-hint text-text-base mb-1 font-medium">測驗總覽</p>
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="item in statItems"
                :key="item.label"
                class="bg-page-bg rounded-md p-2"
              >
                <p class="text-label text-text-base font-medium">
                  {{ item.num }}
                </p>
                <p class="text-hint text-text-muted text-nowrap">
                  {{ item.label }}
                </p>
              </div>
            </div>
          </div>
          <button
            @click="
              () => {
                router.push('/bookmark')
                isOpen = false
              }
            "
            class="text-hint text-text-base hover:bg-page-bg flex w-full items-center gap-2 px-4 py-2 transition-colors md:hidden"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="opacity-50"
            >
              <path d="M3 2h10v13l-5-3-5 3V2z" />
            </svg>
            收藏題目
          </button>

          <div class="border-border my-1 border-t md:hidden" />

          <button
            @click="handleClearRecords"
            :disabled="recordCount === 0"
            :class="[
              'text-hint flex w-full items-center gap-2 px-4 py-2 transition-colors',
              recordCount === 0
                ? 'text-text-placeholder cursor-not-allowed'
                : 'text-text-base hover:bg-page-bg',
            ]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="opacity-50"
            >
              <path
                d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10"
                strokeLinecap="round"
              />
            </svg>
            清除測驗紀錄
          </button>

          <button
            @click="handleDeleteAccount"
            class="text-hint text-text-base hover:bg-page-bg flex w-full items-center gap-2 px-4 py-2 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="opacity-50"
            >
              <path d="M8 2a3 3 0 100 6 3 3 0 000-6z" strokeLinecap="round" />
              <path
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3z"
                strokeLinecap="round"
              />
              <path d="M12 6l3 3M15 6l-3 3" strokeLinecap="round" />
            </svg>
            刪除帳號
          </button>

          <div class="border-border my-1 border-t" />

          <button
            @click="handleLogout"
            class="text-hint text-primary hover:bg-primary-tint flex w-full items-center gap-2 px-4 py-2 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#aa0a41"
              stroke-width="1.5"
            >
              <path
                d="M6 14H2V2h4M11 11l3-3-3-3M14 8H6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            登出
          </button>
        </div>
      </div>
    </div>

    <button @click="router.push('/auth')" v-else>登入</button>
  </nav>
  <ConfirmModal
    v-if="modalInfo"
    :title="modalInfo.title"
    :description="modalInfo.description"
    :confirm-label="modalInfo.confirmLabel"
    @confirm="modalInfo.onConfirm()"
    @cancel="modalInfo = null"
  />
</template>
