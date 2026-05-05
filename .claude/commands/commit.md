根據目前 git diff 的變更，幫我產生一個 conventional commit 訊息。

## 規則

使用格式：`<type>(<scope>): <subject>`

**type 選擇：**
- `feat` — 新功能（新增一個 view、store、composable）
- `fix` — 修 bug
- `refactor` — 重構（沒有新功能也沒修 bug）
- `style` — 只改了 CSS / Tailwind class，沒動邏輯
- `chore` — 設定檔、依賴、CLAUDE.md 等非業務程式碼
- `docs` — 文件

**scope 選擇（這個專案的模組）：**
`auth` | `home` | `quiz` | `result` | `bookmark` | `router` | `store` | `composable` | `ui` | `config`

**subject 規則：**
- 動詞開頭，用現在式（add, implement, fix，不是 added/implemented）
- 不超過 72 字元
- 中文描述 OK，技術詞彙用英文

## 輸出格式

```
<commit 訊息>
```

---

**變更摘要：**（2–4 條 bullet，說明這次改了什麼）

---

如果這次變更橫跨多個 scope，提供兩個方案：
1. 拆成多個 commit（列出每個）
2. 合併一個 commit（用最主要的 scope）

並建議哪個比較適合。
