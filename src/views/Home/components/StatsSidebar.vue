<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  completed: number
  total: number
  correct: number
  wrong: number
  totalQuestions: number
  accuracy: number
}>()

const circumference = 2 * Math.PI * 78
const pct = computed(() => Math.round((props.completed / props.total) * 100))
const offset = computed(() => circumference - circumference * (pct.value / 100))

const statItems = computed(() => [
  { num: props.correct, label: '答對題數' },
  { num: props.wrong, label: '答錯題數' },
  { num: props.totalQuestions, label: '總題數' },
  { num: `${props.accuracy}%`, label: '正確率' },
])
</script>

<template>
  <div class="hidden p-5 md:block md:p-6.5 lg:p-8">
    <p class="text-title text-text-base mb-4 font-medium">
      測驗總覽
      <span class="text-subtitle text-text-muted ml-3 lg:hidden">
        {{ completed }} / {{ total }} 完成
      </span>
    </p>

    <div class="flex items-center gap-5 lg:block">
      <div class="flex flex-col items-center lg:mb-8">
        <div class="relative">
          <svg
            class="h-20 w-20 md:h-25 md:w-25 lg:h-45 lg:w-45"
            viewBox="0 0 180 180"
          >
            <circle
              cx="90"
              cy="90"
              r="78"
              fill="none"
              stroke="#e5ebe7"
              stroke-width="13"
            />
            <circle
              cx="90"
              cy="90"
              r="78"
              fill="none"
              stroke="#aa0a41"
              stroke-width="13"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="offset"
              stroke-linecap="round"
              transform="rotate(-90 90 90)"
            />
          </svg>

          <div
            class="absolute inset-0 flex flex-col items-center justify-center"
          >
            <span class="text-primary text-2xl font-medium lg:text-[35px]"
              >{{ pct }}%</span
            >
          </div>
        </div>
        <p class="text-subtitle text-text-muted mt-4 hidden lg:block">
          {{ completed }} / {{ total }} 完成
        </p>
      </div>

      <div
        class="grid h-22 w-full grid-cols-4 gap-5 lg:h-auto lg:grid-cols-2 lg:gap-3"
      >
        <div
          v-for="item in statItems"
          :key="item.label"
          class="bg-card-bg border-border flex w-auto flex-col justify-between rounded-xl border p-3"
        >
          <p class="text-text-base mb-1 text-2xl font-medium">{{ item.num }}</p>
          <p class="text-label lg:text-hint text-text-muted leading-snug">
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
