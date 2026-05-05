<script setup lang="ts">
import {
  DIFFICULTY_STYLE,
  DIFFICULTY_LABEL,
  DIFFICULTY_STARS,
  type Quiz,
} from '@/views/Home/constant'

defineProps<{
  quiz: Quiz
  isCompleted: boolean
}>()

const emit = defineEmits<{
  start: [quizId: string]
}>()
</script>

<template>
  <div
    class="bg-card-bg border-border flex flex-col justify-between rounded-xl border p-3"
  >
    <div>
      <div class="mb-2 flex items-start justify-between">
        <span
          :class="[
            'text-hint rounded-md px-2 py-0.5 font-medium',
            DIFFICULTY_STYLE[quiz.difficulty],
          ]"
        >
          {{ DIFFICULTY_LABEL[quiz.difficulty] }}
        </span>
        <span class="text-text-placeholder text-[11px] tracking-widest">
          {{ DIFFICULTY_STARS[quiz.difficulty] }}
        </span>
      </div>

      <p class="text-label text-text-base mt-1.5 mb-3 font-medium">
        {{ quiz.title }}
      </p>
    </div>

    <div class="flex items-center justify-between">
      <span class="text-hint text-text-muted"
        >◎ {{ quiz.questionCount }} 題</span
      >

      <button
        @click="emit('start', quiz.id)"
        :class="[
          'text-hint h-5.5 rounded-full px-3 font-medium',
          isCompleted
            ? 'bg-primary-tint text-primary hover:bg-primary hover:text-white'
            : 'bg-primary hover:bg-primary-hover text-white',
        ]"
      >
        {{ isCompleted ? '↺ 重做' : '▶ 開始' }}
      </button>
    </div>
  </div>
</template>
