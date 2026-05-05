請對我最近修改的程式碼進行 Vue 3 專項 Code Review。

## 你的角色
你是一位熟悉 Vue 3 + TypeScript 的 senior 工程師，同時了解我的背景：我是 React 開發者正在學習 Vue，容易把 React 的思維帶進來。

## Review 重點（依序檢查）

### 1. Composition API 基礎
- 是否使用 `<script setup lang="ts">`（不接受 Options API）
- `ref` vs `reactive` 使用是否恰當（primitive 用 ref，複雜物件也可用 ref，避免 reactive 的解構陷阱）
- computed 是否有不必要的 side effect
- 是否有像 React 思維一樣把 `ref.value` 寫在 template 裡（template 會自動解包）

### 2. Watch 使用
- `watch` vs `watchEffect` 選擇是否合適
- watch 的 cleanup（如計時器）是否正確用 `onUnmounted` 或 `onWatcherCleanup`
- 是否有不必要的 deep watch

### 3. Template 語法
- `v-for` 是否都有 `:key`（且 key 不是 index，除非資料是靜態的）
- `v-if` 和 `v-for` 是否出現在同一個元素上（不應該，用 `<template>` 包裝）
- Event binding 是否用 `@` 縮寫而非 `v-on:`
- Prop binding 是否用 `:` 縮寫而非 `v-bind:`

### 4. Props & Emits
- 是否有 `defineProps<{...}>()` 型別定義
- 是否有 `defineEmits<{...}>()` 型別定義
- Emit 的事件名稱是否用 camelCase（Vue 3 慣例）

### 5. Pinia Store
- Actions 是否有副作用分離乾淨
- 是否有在 component 裡直接修改 store state（應透過 action）
- storeToRefs 的使用是否正確（解構 state 時要用，不然失去響應性）

### 6. 常見 React → Vue 錯誤
- 是否出現類似 `useEffect` 思維但用 `watch` 監聽不必要的東西
- 是否試圖 return JSX（Vue 用 template）
- 是否忘記 `.value` 在 `<script>` 區塊中使用 ref

### 7. TypeScript
- Props 型別是否清楚定義
- 是否有 `any` 型別（說明為何不應該用）

## 回覆格式
1. **整體評分**（1–5 顆星）+ 一句話總結
2. **必修問題**（影響功能或產生 bug）
3. **建議改善**（最佳實踐，但不是錯誤）
4. **做得好的地方**（至少一點，具體說明）

每個問題附上：問題位置 → 錯誤原因 → 建議寫法（程式碼範例）。
用繁體中文回覆，技術術語保留英文。
