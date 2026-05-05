<div align="center">
  <img width="200" src="src/assets/logo.svg" alt="codeQuiz logo">

### CodeQuiz｜程式題庫測驗平台（Vue 3 重構版）

</div>

> 專為軟體工程師設計的面試準備工具，涵蓋前端 JavaScript、TypeScript、React、Vue、HTML、CSS、瀏覽器等 7 大主題測驗題庫。
> 本版本為 [React 原版](https://github.com/jasminelin921/codequiz) 的 Vue 3 重構，目的是展示跨框架撰寫能力。

## 📋 目錄

<details>
<summary>展開目錄</summary>

- [🔗 線上體驗](#-線上體驗)
- [💡 專案介紹](#-專案介紹)
- [✨ 功能介紹](#-功能介紹)
- [🛠 技術棧](#-技術棧)
- [📐 架構設計](#-架構設計)
- [🤖 使用 Claude 輔助開發](#-使用-claude-輔助開發)
- [🤔 未來規劃](#-未來規劃)
- [📖 本地執行](#-本地執行)

</details>

## 🔗 線上體驗：[code-quiz-vue.vercel.app](https://code-quiz-vue.vercel.app)

測試帳號：`demo` / 密碼：`1234`

## 💡 專案介紹

CodeQuiz 是一個專為軟體工程師設計的測驗練習平台，幫助開發者在面試前系統性複習相關知識。每道題目都有詳細解說，答錯的題目可以收藏，方便面試前快速複習。

**為什麼重構成 Vue 3？**

原版以 React 18 開發，此版本使用 Vue 3 完整重構，作為跨框架能力的實作展示。選擇相同的產品功能與設計，讓技術選型的差異更容易對照比較。

## ✨ 功能介紹

**首頁：選擇主題與難度，開始測驗**

支援前端 7 大主題、三種難度篩選，依主題分組顯示，點擊主題標題可收合展開（附平滑動畫）。

**測驗頁：計時作答，立即顯示解說**

每題 30 秒倒數，計時器剩餘 10 秒變色提醒，作答後立即顯示對錯與詳細解說。

**測驗結果頁：分析作答狀況，收藏題目**

顯示答對題數、正確率、平均用時，逐題列出作答明細，對每道題目可一鍵收藏。

**收藏頁：面試前快速複習**

依主題分組、依難度排序，支援篩選，點擊「顯示答案與解說」可展開複習。

### 其他功能

- 帳號系統：本地註冊、登入，支援清除測驗紀錄、刪除帳號
- 已登入時：首頁提供測驗列表 Tab（全部／已完成）篩選，並顯示個人統計側欄（完成進度環形圖、答對答錯統計）
- 未登入時：可瀏覽首頁，點擊測驗後導向登入頁
- 首頁 Tab 和難度篩選的狀態存於 URL，重新整理後恢復
- 全站 RWD，支援手機、平板、桌機

## 🛠 技術棧

| 類別 | 技術 |
|------|------|
| 框架 | [Vue 3](https://vuejs.org) + [TypeScript](https://www.typescriptlang.org) |
| 建構工具 | [Vite](https://vitejs.dev) |
| 樣式 | [Tailwind CSS v4](https://tailwindcss.com) |
| 路由 | [Vue Router v4](https://router.vuejs.org) |
| 狀態管理 | [Pinia](https://pinia.vuejs.org) |
| 表單驗證 | [VeeValidate](https://vee-validate.logaretm.com) |
| Utility Composables | [VueUse](https://vueuse.org) |
| 資料儲存 | localStorage |
| 部署 | [Vercel](https://vercel.com) |

## 📐 架構設計

### Feature-based 資料夾結構

```
src/
├── views/                    # Feature-based 頁面
│   ├── Home/                 # 首頁
│   │   ├── HomePage.vue      # 畫面層（只負責 template）
│   │   ├── useController.ts  # 邏輯層（composable）
│   │   ├── constant.ts       # 常數與靜態資料
│   │   └── components/       # 頁面專屬子元件
│   ├── Auth/                 # 登入／註冊頁
│   ├── Quiz/                 # 測驗頁
│   ├── Result/               # 結果頁
│   └── Bookmark/             # 收藏頁
├── components/
│   ├── ui/                   # 共用 UI 元件（Breadcrumb、ConfirmModal、Loading）
│   └── container/            # 佈局元件（LayoutContainer 含 Navbar）
├── stores/                   # Pinia stores（useAuthStore）
├── services/                 # 資料存取層（authService）
├── router/                   # 路由設定 + Navigation Guard
├── types/                    # 共用型別（QuestionResult、QuizRecord）
├── utils/                    # 工具函式（storage）
└── data/                     # 題庫資料
```

### 畫面與邏輯分離

每個頁面拆為畫面層（`XxxPage.vue`）和邏輯層（`useController.ts`），對應 React 版本的 component + custom hook 分離：

```ts
// HomePage.vue 只負責渲染，不含資料邏輯
const { topics, groupedQuizzes, isCompleted, handleStartQuiz } = useController()
```

### React → Vue 關鍵對照

| React | Vue 3 |
|-------|-------|
| `useState` | `ref` / `reactive` |
| `useMemo` | `computed` |
| `useEffect` | `watch` / `watchEffect` / `onMounted` |
| Custom Hook | Composable（`useXxx.ts`）|
| React Context | Pinia store |
| `children` prop | `<slot>` |
| `useNavigate` | `useRouter().push()` |
| `useSearchParams` | `useRoute().query` |
| `<Outlet>` | `<RouterView>` |

### 重要架構決策

**1. Pinia store 設計**

全域共享狀態集中在 `useAuthStore`，使用 `statsVersion` 計數器手動觸發 `computed` 失效，解決 localStorage 不具響應式的問題：

```ts
const stats = computed(() => {
  void statsVersion.value  // 讀取此 ref 讓 computed 追蹤它
  return calcStats()
})
```

**2. URL 狀態同步**

首頁的 Tab 和難度篩選存於 URL Query String，以 `computed` 讀取、`router.replace` 更新，不需要額外 `watch`：

```ts
const selectedTab = computed(() => (route.query.tab as TabType) ?? 'all')
function setSelectedTab(tab: TabType) {
  router.replace({ query: { ...route.query, tab } })
}
```

**3. 計時器管理**

Quiz 頁使用 `watch` + `onWatcherCleanup`，確保每次換題時前一個計時器被清除：

```ts
watch([currentIndex, isAnswered], () => {
  const timer = setInterval(() => { ... }, 1000)
  onWatcherCleanup(() => clearInterval(timer))
}, { immediate: true })
```

**4. 收合動畫**

使用 CSS Grid 的 `grid-template-rows: 0fr → 1fr` 過渡動畫，取代 `max-height` 方案。前者動畫範圍自動對齊實際內容高度，不會有卡頓感：

```html
<div :class="['grid transition-[grid-template-rows] duration-300',
  isCollapsed ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]']">
  <div class="min-h-0 overflow-hidden"><!-- 內容 --></div>
</div>
```

**5. 捲軸版面補償**

切換 Tab 時捲軸出現／消失會造成版面跳動，以 `ResizeObserver` 動態測量捲軸寬度，在不需要捲動時補上等寬的 `padding-right`（macOS overlay scrollbar 自動跳過）。

## 🤖 使用 Claude 輔助開發

這個專案全程使用 [Claude Code](https://claude.ai/code) 作為網站重構助手，從零到完整產品以**步驟式教學**的方式完成重構。

### 學習流程

```
1. Claude 說明 React → Vue 的概念對照與 Vue 慣用寫法
2. 我自己動手實作
3. Claude 檢查並指出問題（附正確寫法與原因）
4. 完成一個 feature 後執行 /vue-review 做完整 code review
```

### 使用的 Claude Code 功能

| 功能 | 此專案的使用場景 |
|------|----------------|
| **MCP 整合** | 設定 Notion MCP Server，讓 Claude 直接對 Notion Workspace 做 CRUD 操作建立學習筆記 |
| **Plan Mode（規劃模式）** | 複雜的多檔案修改前先確認策略（Navigation Guard 流程、題庫新增規劃），不直接動檔案 |
| **記憶系統（Memory）** | 跨對話記憶使用者背景（React 轉 Vue）、Notion 筆記格式規範、commit 訊息語言偏好 |
| **CLAUDE.md（專案指令）** | 定義專案層級的規範（禁止 Options API、命名慣例、狀態管理原則、React ↔ Vue 對照表） |
| **Custom Skills（自訂斜線指令）** | `/vue-review` 觸發程式碼審查；`/commit` 自動產生 Conventional Commits 訊息，定義於 `.claude/commands/` |
| **Sub-Agent（子代理）** | `vue-code-reviewer` 自訂審查 agent，專門針對 Vue 3 + TypeScript 的程式碼做品質審查 |

### 使用 Vue 重構網站時遇到的困難

**1. 響應式系統理解錯誤 → StatsSidebar 數據不更新**
`pct`（完成百分比）和 `offset`（SVG 路徑長度）最初用普通變數計算，導致 props 傳入新數據後畫面不更新。根本原因是把 React「每次 render 重算」的思維套用到 Vue——Vue 的響應式系統只追蹤在 `computed` 或 `watchEffect` 中被讀取的依賴，普通變數不在追蹤範圍。改用 `computed` 後，任何 prop 變動都會自動重算。

**2. SVG 屬性無效 → Vue template 的靜態屬性規則**

設定 `strokeWidth="1.5"` 後圓弧線條粗細完全沒有變化。排查後發現：Vue template 中**靜態** SVG 屬性（不加 `:`）會直接輸出為 HTML attribute，必須使用 kebab-case（`stroke-width`）。動態綁定（`:strokeWidth`）才會走 Vue 的 camelCase 轉換。這是 React JSX 和 Vue template 處理屬性方式的根本差異。

**3. history.state 傳遞 Vue Proxy 物件導致資料遺失**

Quiz 頁用 `router.push({ state: { results: results.value } })` 傳遞答題結果，Result 頁讀取時資料是空的。原因是 `results.value` 是 Vue 的 `Proxy` 物件，`history.state` 在序列化時無法處理 Proxy，導致資料被丟棄。解法是先序列化：`JSON.parse(JSON.stringify(results.value))`，轉成純物件再傳遞。

**4. Vercel 部署後重新整理 404 → SPA routing 設定缺失**

本機開發正常，部署到 Vercel 後，直接輸入 `/home`、`/quiz` 等路徑或重新整理頁面時出現 404。原因是 Vue Router 使用 HTML5 History API，重新整理時瀏覽器向伺服器請求實際路徑，但伺服器只有 `index.html`。新增 `vercel.json` 設定所有請求 rewrite 到 `index.html`，讓 Vue Router 在客戶端接管路由後解決。

## 🤔 未來規劃

- [ ] 深色模式切換
- [ ] 錯題本測驗模式（直接對收藏題目重新作答）
- [ ] 管理後台：動態新增與編輯題目
- [ ] 學習後端開發，串接自製 API，將資料從 localStorage 遷移至資料庫

## 📖 本地執行

```bash
# 複製專案
git clone https://github.com/jasminelin921/codeQuiz_vue.git
cd codeQuiz_vue

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

測試帳號：`demo` / 密碼：`1234`，或自行註冊新帳號。

## 📝 授權聲明

本專案僅供學習與個人作品集展示，未提供任何商業授權。
未經授權，請勿將本專案的程式碼或設計用於商業用途。