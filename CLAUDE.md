# codeQuiz (Vue 重構版)

前端面試題測驗平台。原版為 React 18，此版本用 Vue 3 重構，目的是展示跨框架能力。

## Tech Stack

- **Vue 3** — Composition API，一律使用 `<script setup lang="ts">`，不使用 Options API
- **TypeScript**
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin
- **Pinia** — 全域狀態管理（對應 React Context）
- **Vue Router v4** — Navigation Guards 取代 React 的 ProtectedRoute
- **VeeValidate** — 表單驗證（對應 React Hook Form）
- **VueUse** — utility composables（對應手刻 custom hooks）

## Conventions

### Component 寫法
```vue
<script setup lang="ts">
// 永遠放第一個
</script>

<template>
  <!-- 單一根節點或使用 Fragment -->
</template>
```

### 檔案命名
- Components / Views: `PascalCase.vue`
- Composables: `useXxx.ts`
- Stores: `useXxxStore.ts`（Pinia 慣例）
- Services: `xxx.service.ts`

### 狀態管理原則
- 跨頁面共享 → Pinia store
- 單一元件內部 → `ref` / `reactive`
- 禁止使用 `provide/inject` 做全域狀態（用 Pinia）

### 表單
VeeValidate 使用 `useForm` + `useField` composable 模式。

### Styling
Tailwind utility class only。不使用 CSS Modules，不使用 `<style scoped>`。

## Directory Structure
```
src/
  components/      # 可重用 UI 元件（Breadcrumb, ConfirmModal, Loading...）
  composables/     # Vue composables（useQuizTimer, useDropdown...）
  router/          # Vue Router 設定 + beforeEach navigation guard
  services/        # 純邏輯（auth.service.ts, localStorage）
  stores/          # Pinia stores（useAuthStore.ts）
  types/           # TypeScript interfaces
  data/            # 靜態資料（questions.db.ts）
  views/           # Route-level 頁面元件（Auth/, Home/, Quiz/...）
  style/           # 全域 CSS
```

## Vue ↔ React 對照（快速查詢）
| React | Vue 3 |
|-------|-------|
| `useState` | `ref` / `reactive` |
| `useMemo` | `computed` |
| `useEffect` | `watch` / `watchEffect` / `onMounted` |
| Custom hook | Composable (`useXxx.ts`) |
| React Context | Pinia store |
| `children` | `<slot>` |
| `useNavigate` | `useRouter().push()` |
| `useSearchParams` | `useRoute().query` |
| `<Outlet>` | `<RouterView>` |
| `<Navigate>` | `<RouterRedirect>` / `router.replace()` |

## 原始 React 版參考路徑
`/Users/jasminelin/Desktop/codeQuiz`
移植邏輯時對照原版，但不要直接複製 JSX — 用 Vue template 重寫。

## 開發流程
- **複雜的多檔案修改**：先進 Plan Mode（Shift+Tab）確認策略再動手
- **每次完成一個 feature**：跑 `/vue-review` 做程式碼品質檢查
- **準備 commit**：用 `/commit` 產生 conventional commit 訊息
