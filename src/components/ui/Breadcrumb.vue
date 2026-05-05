<script setup lang="ts">
defineProps<{
  items: Array<{ label: string; onClick?: () => void }>
}>()
</script>

<template>
  <nav class="text-hint text-text-muted mb-4 flex items-center gap-1">
    <template v-for="(item, index) in items" :key="item.label">
      <span v-if="index > 0" class="mx-1">›</span>
      <button
        v-if="item.onClick"
        class="hover:text-text-base transition-colors"
        @click="item.onClick"
      >
        {{ item.label }}
      </button>
      <span v-else class="text-text-base">{{ item.label }}</span>
    </template>
  </nav>
</template>
