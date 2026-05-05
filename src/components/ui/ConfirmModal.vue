<script setup lang="ts">
// TODO: 你將在 Phase 3 重新實作此元件，加入 <Teleport> 概念
defineProps<{
  title: string
  description: string
  confirmLabel?: string
}>()

defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
    >
      <div
        class="bg-card-bg border-border w-full max-w-sm rounded-2xl border p-6 shadow-lg"
      >
        <h3 class="text-label text-text-base mb-2 font-semibold">
          {{ title }}
        </h3>
        <p class="text-hint text-text-muted mb-5">{{ description }}</p>
        <div class="flex justify-end gap-2">
          <button
            class="text-label border-border text-text-muted rounded-lg border px-4 py-2"
            @click="$emit('cancel')"
          >
            取消
          </button>
          <button
            class="bg-primary hover:bg-primary-hover text-label rounded-lg px-4 py-2 text-white"
            @click="$emit('confirm')"
          >
            {{ confirmLabel ?? '確定' }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
