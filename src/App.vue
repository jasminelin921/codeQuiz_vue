<script setup lang="ts">
import { useAuthStore } from '@/stores/useAuthStore'
import Loading from '@/components/ui/Loading.vue'
import { onMounted } from 'vue'

const authStore = useAuthStore()
onMounted(() => {
  authStore.init()
})
</script>

<template>
  <Loading v-if="!authStore.isInitialized" />
  <RouterView v-else />
</template>
