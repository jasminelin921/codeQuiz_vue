<script setup lang="ts">
import { useController } from './useController'

const {
  currentMode,
  errorMsg,
  username,
  usernameAttrs,
  password,
  passwordAttrs,
  confirmPassword,
  confirmPasswordAttrs,
  errors,
  onSubmit,
  switchMode,
} = useController()
</script>

<template>
  <div
    class="bg-primary flex min-h-screen flex-col items-center justify-center p-5 md:p-6 lg:p-8"
  >
    <div class="bg-page-bg w-full max-w-sm rounded-3xl p-8 shadow-lg">
      <div class="mb-8 text-center">
        <img src="@/assets/logo.svg" alt="Code Quiz Logo" class="mx-auto mb-2 h-20 w-20" />
        <h1 class="text-text-base text-logo-title font-semibold">Code Quiz</h1>
        <p class="text-text-muted text-subtitle mt-1">程式技能測驗平台</p>
      </div>

      <div class="bg-card-bg border-border rounded-2xl border p-6">
        <div class="border-border mb-6 flex border-b">
          <button
            type="button"
            :class="[
              'text-tab flex-1 border-b-2 pb-2.5 transition-colors',
              currentMode === 'login'
                ? 'border-primary text-primary font-medium'
                : 'text-text-muted border-transparent',
            ]"
            @click="switchMode('login')"
          >
            登入
          </button>
          <button
            type="button"
            :class="[
              'text-tab flex-1 border-b-2 pb-2.5 transition-colors',
              currentMode === 'register'
                ? 'border-primary text-primary font-medium'
                : 'text-text-muted border-transparent',
            ]"
            @click="switchMode('register')"
          >
            註冊
          </button>
        </div>

        <p
          v-if="errorMsg"
          class="bg-primary-tint border-border-hint text-primary text-hint mb-4 rounded-lg border px-3 py-2"
        >
          ⚠️ {{ errorMsg }}
        </p>

        <form class="space-y-4" @submit.prevent="onSubmit">
          <div>
            <label
              for="username"
              class="text-label text-text-muted mb-1.5 block"
              >帳號</label
            >
            <input
              id="username"
              v-model="username"
              v-bind="usernameAttrs"
              type="text"
              :placeholder="
                currentMode === 'login'
                  ? '輸入帳號'
                  : '設定帳號（至少 3 個字元）'
              "
              :class="[
                'border-border placeholder:text-text-placeholder focus:border-primary text-input w-full rounded-lg border px-3 py-2 transition-colors outline-none',
                errors.username ? 'bg-primary-tint' : 'bg-white',
              ]"
            />
            <p v-if="errors.username" class="text-hint text-primary mt-1">
              {{ errors.username }}
            </p>
          </div>

          <div>
            <label
              for="password"
              class="text-label text-text-muted mb-1.5 block"
              >密碼</label
            >
            <input
              id="password"
              v-model="password"
              v-bind="passwordAttrs"
              type="password"
              :placeholder="
                currentMode === 'login'
                  ? '輸入密碼'
                  : '設定密碼（至少 4 個字元）'
              "
              :class="[
                'border-border placeholder:text-text-placeholder focus:border-primary text-input w-full rounded-lg border px-3 py-2 transition-colors outline-none',
                errors.password ? 'bg-primary-tint' : 'bg-white',
              ]"
            />
            <p v-if="errors.password" class="text-hint text-primary mt-1">
              {{ errors.password }}
            </p>
          </div>

          <div v-if="currentMode === 'register'">
            <label
              for="confirmPassword"
              class="text-label text-text-muted mb-1.5 block"
            >
              確認密碼
            </label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              v-bind="confirmPasswordAttrs"
              type="password"
              placeholder="再次輸入密碼"
              :class="[
                'border-border placeholder:text-text-placeholder focus:border-primary text-input w-full rounded-lg border px-3 py-2 transition-colors outline-none',
                errors.confirmPassword ? 'bg-primary-tint' : 'bg-white',
              ]"
            />
            <p
              v-if="errors.confirmPassword"
              class="text-hint text-primary mt-1"
            >
              {{ errors.confirmPassword }}
            </p>
          </div>

          <button
            type="submit"
            class="bg-primary hover:bg-primary-hover text-button mt-2 w-full rounded-lg py-2.5 font-medium text-white transition-colors"
          >
            {{ currentMode === 'login' ? '登入' : '註冊' }}
          </button>
        </form>

        <p class="text-hint text-text-muted mt-4 text-center">
          測試帳號：<span class="font-medium">demo</span> / 密碼：
          <span class="font-medium">1234</span>
        </p>
      </div>
    </div>

    <p class="text-footer mt-3 text-center text-gray-300">
      Code Quiz © {{ new Date().getFullYear() }}
      <img
        src="@/assets/github_icon.svg"
        alt="GitHub Icon"
        class="inline h-4.5 w-4.5 mb-1 mx-1"
      /><a
        href="https://github.com/jasminelin921/codeQuiz_vue"
        class="underline"
        >Jasmine Lin</a
      >
    </p>
  </div>
</template>
