<script setup lang="ts">
import { ref } from 'vue'
import {
  DIFFICULTY_STYLE,
  DIFFICULTY_LABEL,
  DIFFICULTY_STARS,
} from '@/views/Home/constant'
import type { BookmarkItem } from '@/views/Bookmark/useController'

defineProps<{ item: BookmarkItem }>()
const emit = defineEmits<{ remove: [questionId: string] }>()

const isRevealed = ref(false)
</script>

<template>
  <div class="bg-card-bg border-border mb-3 rounded-xl border p-3">
    <div class="mb-2 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span
          :class="[
            'text-hint rounded-md px-2 py-0.5 font-medium',
            DIFFICULTY_STYLE[item.difficulty],
          ]"
        >
          {{ DIFFICULTY_LABEL[item.difficulty] }}
        </span>
        <span class="text-hint text-text-placeholder">
          {{ DIFFICULTY_STARS[item.difficulty] }}
        </span>
      </div>
      <button
        @click="emit('remove', item.questionId)"
        class="text-hint text-text-placeholder hover:text-primary transition-colors"
      >
        ✕ 移除
      </button>
    </div>

    <p class="text-label text-text-base mb-2 leading-snug font-medium">
      {{ item.questionText }}
    </p>

    <pre
      v-if="item.code"
      class="text-hint mb-3 overflow-x-auto rounded-lg bg-[#1e2a3a] p-3 font-mono leading-relaxed text-wrap text-[#d4e6f1]"
      >{{ item.code }}</pre
    >

    <button
      v-if="!isRevealed"
      @click="isRevealed = true"
      class="border-border text-hint text-text-muted hover:border-primary hover:text-primary w-full rounded-lg border border-dashed py-1.5 transition-colors"
    >
      ▷ 顯示答案與解說
    </button>

    <div v-else>
      <div class="mb-2 flex items-baseline gap-2">
        <span class="text-hint text-text-muted shrink-0 whitespace-nowrap"
          >正確答案</span
        >
        <span
          class="text-hint rounded-md bg-[#effae2] px-2 py-0.5 leading-snug font-medium text-[#394d21]"
        >
          {{ item.correctAnswer }}
        </span>
      </div>

      <p
        class="text-hint text-text-muted border-primary border-l-[3px] pl-2 leading-relaxed"
      >
        {{ item.explanation }}
      </p>

      <button
        @click="isRevealed = false"
        class="text-hint text-text-placeholder hover:text-text-muted mt-1 w-full text-right transition-colors"
      >
        收起 ↑
      </button>
    </div>
  </div>
</template>
