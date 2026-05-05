<script setup lang="ts">
import { Breadcrumb } from '@/components/ui'
import { useController } from './useController'

const {
  quizTitle,
  breadcrumbItems,
  statItems,
  resultMeta,
  detailItems,
  isValidState,
  bookmarkedIds,
  handleGoHome,
  handleRetry,
  handleToggleBookmark,
} = useController()
</script>

<template>
  <div v-if="!isValidState" class="mx-auto max-w-2xl p-5 md:p-6.5 lg:p-8">
    <p class="text-label text-text-muted mb-4">
      請從測驗頁完成測驗後再查看結果。
    </p>
    <button
      @click="handleGoHome"
      class="text-hint text-primary hover:underline"
    >
      ← 返回首頁
    </button>
  </div>
  <div v-else class="mx-auto max-w-2xl p-5 md:p-6.5 lg:p-8">
    <Breadcrumb :items="breadcrumbItems" />

    <div class="mb-6 text-center">
      <div class="mb-3 text-4xl md:text-5xl">{{ resultMeta.emoji }}</div>
      <h1 class="text-logo-title text-text-base mb-1 font-medium">
        {{ resultMeta.title }}
      </h1>
      <p class="text-hint text-text-muted">
        {{ quizTitle }} · 完成於 {{ new Date().toLocaleDateString('zh-TW') }}
      </p>
    </div>

    <div class="mb-5 grid grid-cols-3 gap-2">
      <div
        v-for="item in statItems"
        :key="item.label"
        class="bg-card-bg border-border rounded-xl border p-2.5 text-center md:p-3"
      >
        <p :class="['text-title mb-0.5 font-medium', item.color]">
          {{ item.num }}
        </p>
        <p class="text-hint text-text-muted">{{ item.label }}</p>
      </div>
    </div>

    <p class="text-hint text-text-muted mb-3 font-medium">題目明細</p>
    <div class="mb-3 flex flex-col gap-2 md:mb-4">
      <div
        v-for="(item, index) in detailItems"
        :key="item.questionId"
        class="bg-card-bg border-border mb-1 rounded-xl border p-3"
      >
        <div class="mb-2 flex items-start justify-between gap-3">
          <p class="text-label text-text-base flex-1 leading-snug font-medium">
            Q{{ index + 1 }}. {{ item.questionText }}
          </p>
          <div class="flex items-center gap-1">
            <button
              @click="handleToggleBookmark(item.questionId)"
              :class="[
                'group relative pr-1 transition-colors',
                bookmarkedIds.includes(item.questionId)
                  ? 'text-primary hover:text-primary-hover'
                  : 'text-text-muted hover:text-text-base',
              ]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                :fill="
                  bookmarkedIds.includes(item.questionId)
                    ? 'currentColor'
                    : 'none'
                "
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 2h10v13l-5-3-5 3V2z" />
              </svg>
              <span
                class="bg-text-muted text-hint pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 rounded-md px-2 py-1 whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
              >
                {{
                  bookmarkedIds.includes(item.questionId)
                    ? '取消收藏'
                    : '加入收藏'
                }}
              </span>
            </button>
            <span
              :class="[
                'text-hint shrink-0 rounded-md px-2 py-0.5 font-medium',
                item.isTimeout
                  ? 'bg-page-bg text-text-muted'
                  : item.isCorrect
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800',
              ]"
            >
              {{ item.isTimeout ? '超時' : item.isCorrect ? '答對' : '答錯' }}
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-hint text-text-muted">
            {{
              item.isCorrect
                ? item.selectedAnswer
                : `正確答案：${item.correctAnswer}`
            }}
          </p>
          <p class="text-hint text-text-placeholder ml-3 shrink-0">
            {{ item.timeUsed }} 秒
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
      <button
        @click="handleGoHome"
        class="text-button text-text-muted border-border hover:border-text-muted h-9 rounded-lg border px-4 transition-colors"
      >
        ← 返回首頁
      </button>
      <button
        @click="handleRetry"
        class="bg-primary text-button hover:bg-primary-hover h-9 rounded-lg px-4 font-medium text-white"
      >
        ↻ 再做一次
      </button>
    </div>
  </div>
</template>
