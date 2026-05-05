<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './Navbar.vue'

const gutterPadding = ref('')
let observer: ResizeObserver | null = null

onMounted(() => {
  // 測量捲軸寬度（macOS overlay scrollbar 為 0，直接 return）
  const probe = document.createElement('div')
  probe.style.cssText = 'overflow:scroll;position:absolute;visibility:hidden;width:100px;height:100px'
  document.body.appendChild(probe)
  const scrollbarWidth = probe.offsetWidth - probe.clientWidth
  document.body.removeChild(probe)

  if (scrollbarWidth === 0) return

  function update() {
    // 頁面高度未超出視窗 → 捲軸消失 → 補上等寬的 padding 防止版面跳動
    const noScrollbar = document.documentElement.scrollHeight <= window.innerHeight
    gutterPadding.value = noScrollbar ? `${scrollbarWidth}px` : ''
  }

  observer = new ResizeObserver(update)
  observer.observe(document.documentElement)
  update()
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="bg-page-bg min-h-screen" :style="gutterPadding ? { paddingRight: gutterPadding } : {}">
    <Navbar />
    <main class="pt-14">
      <RouterView />
    </main>
  </div>
</template>
