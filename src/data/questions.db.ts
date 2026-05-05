import { type Topic, type Difficulty } from '@/views/Home/constant'

export interface Question {
  id: string
  quizId: string
  topic: Topic
  difficulty: Difficulty
  text: string
  code?: string
  options: string[]
  answer: number
  explanation: string
}

export const QUESTIONS: Question[] = [
  // ─────────────────────────────────────────
  // JavaScript 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'js-1-q1',
    quizId: 'js-1',
    topic: 'javascript',
    difficulty: 'easy',
    text: '以下程式碼的輸出為何？',
    code: 'console.log(typeof null)',
    options: ['"object"', '"undefined"', '"null"', '"boolean"'],
    answer: 0,
    explanation:
      'typeof null 回傳 "object" 是 JavaScript 的歷史錯誤，為維持向後相容性而未修正。',
  },
  {
    id: 'js-1-q2',
    quizId: 'js-1',
    topic: 'javascript',
    difficulty: 'easy',
    text: '以下哪個是宣告變數的正確方式（不可重新賦值）？',
    options: [
      'var name = "John"',
      'const name = "John"',
      'let name = "John"',
      'variable name = "John"',
    ],
    answer: 1,
    explanation:
      'const 宣告的變數不可重新賦值，是宣告常數的正確方式。var 和 let 可以重新賦值。',
  },
  {
    id: 'js-1-q3',
    quizId: 'js-1',
    topic: 'javascript',
    difficulty: 'easy',
    text: '以下程式碼的輸出為何？',
    code: 'console.log(1 + "2")',
    options: ['3', 'NaN', '"12"', 'Error'],
    answer: 2,
    explanation:
      '當數字和字串相加時，JavaScript 會將數字轉為字串，進行字串串接，結果為 "12"。',
  },
  {
    id: 'js-1-q4',
    quizId: 'js-1',
    topic: 'javascript',
    difficulty: 'easy',
    text: '下列哪個值在 JavaScript 中是 falsy？',
    options: ['"false"', '[]', '{}', '0'],
    answer: 3,
    explanation:
      'JavaScript 中的 falsy 值包含：false、0、""、null、undefined、NaN。"false" 是非空字串，[] 和 {} 是物件，都是 truthy。',
  },
  {
    id: 'js-1-q5',
    quizId: 'js-1',
    topic: 'javascript',
    difficulty: 'easy',
    text: '以下程式碼的輸出為何？',
    code: 'console.log(2 ** 3)',
    options: ['8', '6', '9', 'Error'],
    answer: 0,
    explanation: '** 是指數運算子，2 ** 3 等於 2 的 3 次方，結果為 8。',
  },
  {
    id: 'js-1-q6',
    quizId: 'js-1',
    topic: 'javascript',
    difficulty: 'easy',
    text: '如何取得陣列的最後一個元素？',
    code: 'const arr = [1, 2, 3, 4, 5]',
    options: [
      'arr.last()',
      'arr[arr.length - 1]',
      'arr[arr.length]',
      'arr.end()',
    ],
    answer: 1,
    explanation:
      '陣列索引從 0 開始，最後一個元素的索引是 length - 1，所以用 arr[arr.length - 1] 取得。',
  },

  // ─────────────────────────────────────────
  // JavaScript 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'js-2-q1',
    quizId: 'js-2',
    topic: 'javascript',
    difficulty: 'easy',
    text: '以下哪個方法可以將陣列元素合併成字串？',
    options: ['arr.concat()', 'arr.merge()', 'arr.join()', 'arr.toString()'],
    answer: 2,
    explanation:
      'join() 方法將陣列所有元素合併成一個字串，可以指定分隔符號，例如 arr.join(", ")。',
  },
  {
    id: 'js-2-q2',
    quizId: 'js-2',
    topic: 'javascript',
    difficulty: 'easy',
    text: 'Array.map() 的作用是什麼？',
    options: [
      '過濾陣列元素',
      '找到符合條件的第一個元素',
      '將陣列排序',
      '對每個元素執行函式並回傳新陣列',
    ],
    answer: 3,
    explanation:
      'map() 對陣列中每個元素執行提供的函式，並回傳一個包含所有結果的新陣列，不改變原陣列。',
  },
  {
    id: 'js-2-q3',
    quizId: 'js-2',
    topic: 'javascript',
    difficulty: 'easy',
    text: '以下程式碼的輸出為何？',
    code: 'console.log([] == false)',
    options: ['true', 'false', 'undefined', 'Error'],
    answer: 0,
    explanation:
      '空陣列 [] 在比較時會被轉換為空字串 ""，空字串再轉換為 0，false 也轉換為 0，所以 [] == false 為 true。',
  },
  {
    id: 'js-2-q4',
    quizId: 'js-2',
    topic: 'javascript',
    difficulty: 'easy',
    text: '以下哪個方法不會改變原陣列？',
    options: ['push()', 'map()', 'pop()', 'splice()'],
    answer: 1,
    explanation:
      'map() 回傳新陣列，不改變原陣列。push()、pop()、splice() 都會直接修改原陣列。',
  },
  {
    id: 'js-2-q5',
    quizId: 'js-2',
    topic: 'javascript',
    difficulty: 'easy',
    text: 'Object.keys() 回傳什麼？',
    code: 'const obj = { a: 1, b: 2, c: 3 }',
    options: [
      '物件的值陣列',
      '物件的鍵值對陣列',
      '物件的鍵名陣列',
      '物件的長度',
    ],
    answer: 2,
    explanation:
      'Object.keys() 回傳物件所有可列舉屬性的鍵名陣列，此例回傳 ["a", "b", "c"]。',
  },
  {
    id: 'js-2-q6',
    quizId: 'js-2',
    topic: 'javascript',
    difficulty: 'easy',
    text: '以下程式碼的輸出為何？',
    code: 'const a = { x: 1 }\nconst b = a\nb.x = 2\nconsole.log(a.x)',
    options: ['1', 'Error', 'undefined', '2'],
    answer: 3,
    explanation:
      '物件是參考型別，b = a 讓 b 和 a 指向同一個物件，修改 b.x 也會影響 a.x。',
  },

  // ─────────────────────────────────────────
  // JavaScript 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'js-3-q1',
    quizId: 'js-3',
    topic: 'javascript',
    difficulty: 'medium',
    text: 'JavaScript 中的閉包是什麼？',
    options: [
      '外部函式執行結束後，內部函式仍能存取其作用域',
      '關閉瀏覽器的函式',
      '結束迴圈的方式',
      '私有類別方法',
    ],
    answer: 0,
    explanation:
      '閉包是指內部函式在外部函式返回後，依然能存取外部函式變數的特性。',
  },
  {
    id: 'js-3-q2',
    quizId: 'js-3',
    topic: 'javascript',
    difficulty: 'medium',
    text: '以下程式碼的輸出為何？',
    code: 'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0)\n}',
    options: ['0, 1, 2', '3, 3, 3', '0, 0, 0', 'undefined'],
    answer: 1,
    explanation:
      'var 是函式作用域，迴圈結束後 i 已變為 3，setTimeout 的回呼執行時存取的 i 都是 3。改用 let 可解決此問題。',
  },
  {
    id: 'js-3-q3',
    quizId: 'js-3',
    topic: 'javascript',
    difficulty: 'medium',
    text: 'Promise.all() 和 Promise.allSettled() 的主要差別是什麼？',
    options: [
      '執行速度不同',
      '支援的 Promise 數量不同',
      'Promise.all() 任一 rejected 就立即 reject；Promise.allSettled() 等全部完成',
      '回傳格式完全相同',
    ],
    answer: 2,
    explanation:
      'Promise.all() 只要有一個 rejected 就立即 reject。Promise.allSettled() 會等所有 Promise 完成，無論 fulfilled 或 rejected，並回傳每個結果的狀態。',
  },
  {
    id: 'js-3-q4',
    quizId: 'js-3',
    topic: 'javascript',
    difficulty: 'medium',
    text: '以下程式碼的輸出順序為何？',
    code: 'console.log("A")\nsetTimeout(() => console.log("B"), 0)\nPromise.resolve().then(() => console.log("C"))\nconsole.log("D")',
    options: ['A, B, C, D', 'A, D, B, C', 'A, C, D, B', 'A, D, C, B'],
    answer: 3,
    explanation:
      '同步程式碼先執行（A, D），接著 microtask queue（Promise）的 C，最後才是 macrotask queue（setTimeout）的 B。',
  },
  {
    id: 'js-3-q5',
    quizId: 'js-3',
    topic: 'javascript',
    difficulty: 'medium',
    text: '以下關於 this 的描述，何者正確？',
    code: 'const obj = {\n  name: "test",\n  fn: () => console.log(this.name)\n}',
    options: [
      'this 指向 window/global',
      'this 指向 obj',
      'this 指向 undefined',
      '以上皆非',
    ],
    answer: 0,
    explanation:
      '箭頭函式沒有自己的 this，會繼承外層作用域的 this。在此例中，外層是全域作用域，this 指向 window（瀏覽器）或 global（Node.js）。',
  },
  {
    id: 'js-3-q6',
    quizId: 'js-3',
    topic: 'javascript',
    difficulty: 'medium',
    text: '展開運算子（Spread Operator）的正確用途為何？',
    code: 'const arr1 = [1, 2, 3]\nconst arr2 = [...arr1, 4, 5]',
    options: [
      '只能用於陣列',
      '可用於陣列和物件的淺拷貝與合併',
      '進行深拷貝',
      '只能在函式參數中使用',
    ],
    answer: 1,
    explanation:
      '展開運算子可用於陣列和物件的淺拷貝與合併。注意它只做淺拷貝，巢狀物件仍是參考。',
  },
  {
    id: 'js-3-q7',
    quizId: 'js-3',
    topic: 'javascript',
    difficulty: 'medium',
    text: '以下程式碼的輸出為何？',
    code: 'console.log(0.1 + 0.2 === 0.3)',
    options: ['true', 'NaN', 'false', 'Error'],
    answer: 2,
    explanation:
      '浮點數運算在 IEEE 754 標準下有精度問題，0.1 + 0.2 的結果是 0.30000000000000004，不等於 0.3。',
  },
  {
    id: 'js-3-q8',
    quizId: 'js-3',
    topic: 'javascript',
    difficulty: 'medium',
    text: 'Array.reduce() 的第二個參數代表什麼？',
    code: 'const sum = [1, 2, 3].reduce((acc, cur) => acc + cur, 0)',
    options: ['回呼函式', '最大迭代次數', '陣列的起始索引', '累積值的初始值'],
    answer: 3,
    explanation:
      'reduce() 的第二個參數是累積值（accumulator）的初始值。此例從 0 開始累加，結果為 6。',
  },

  // ─────────────────────────────────────────
  // JavaScript 中級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'js-4-q1',
    quizId: 'js-4',
    topic: 'javascript',
    difficulty: 'medium',
    text: 'var、let、const 在作用域上的主要差異為何？',
    options: [
      'var 是函式作用域，let 和 const 是區塊作用域',
      'var 是區塊作用域，let 和 const 是函式作用域',
      '三者都是函式作用域',
      '三者都是區塊作用域',
    ],
    answer: 0,
    explanation:
      'var 是函式作用域（function scope），let 和 const 是區塊作用域（block scope）。區塊作用域讓變數只在 {} 內有效。',
  },
  {
    id: 'js-4-q2',
    quizId: 'js-4',
    topic: 'javascript',
    difficulty: 'medium',
    text: '以下程式碼的輸出為何？',
    code: 'console.log(typeof undefined)\nconsole.log(typeof undeclaredVar)',
    options: [
      '"undefined", Error',
      '"undefined", "undefined"',
      '"null", "undefined"',
      'Error, Error',
    ],
    answer: 1,
    explanation:
      'typeof 對未宣告的變數也回傳 "undefined"，不會拋出錯誤。這是 typeof 的特殊行為。',
  },
  {
    id: 'js-4-q3',
    quizId: 'js-4',
    topic: 'javascript',
    difficulty: 'medium',
    text: '以下哪個方法可以用來深拷貝一個簡單物件？',
    options: [
      'Object.assign({}, obj)',
      'const copy = obj',
      'JSON.parse(JSON.stringify(obj))',
      '展開運算子 { ...obj }',
    ],
    answer: 2,
    explanation:
      'JSON.parse(JSON.stringify(obj)) 可以深拷貝不含 function、undefined、Symbol 的簡單物件。Object.assign 和展開運算子只做淺拷貝。',
  },
  {
    id: 'js-4-q4',
    quizId: 'js-4',
    topic: 'javascript',
    difficulty: 'medium',
    text: 'async/await 的本質是什麼？',
    options: [
      '全新的非同步機制',
      'Generator 的別名',
      'setTimeout 的改進版',
      'Promise 的語法糖',
    ],
    answer: 3,
    explanation:
      'async/await 是 Promise 的語法糖，讓非同步程式碼看起來像同步程式碼，底層仍是 Promise。',
  },
  {
    id: 'js-4-q5',
    quizId: 'js-4',
    topic: 'javascript',
    difficulty: 'medium',
    text: '以下程式碼中，如何正確處理錯誤？',
    code: 'async function fetchData() {\n  const res = await fetch("/api/data")\n  return res.json()\n}',
    options: [
      '用 try/catch 包住 await',
      '加上 .catch()',
      '加上 onerror 事件',
      '不需要錯誤處理',
    ],
    answer: 0,
    explanation:
      '在 async 函式中，應用 try/catch 包住 await 來捕捉錯誤，這是處理非同步錯誤的標準方式。',
  },
  {
    id: 'js-4-q6',
    quizId: 'js-4',
    topic: 'javascript',
    difficulty: 'medium',
    text: '事件冒泡（Event Bubbling）是什麼？',
    options: [
      '事件從根元素往下傳遞到目標元素',
      '事件從目標元素往上傳遞到根元素',
      '事件在同一元素上反覆觸發',
      '事件被取消後的行為',
    ],
    answer: 1,
    explanation:
      '事件冒泡是指事件從觸發的目標元素開始，向上傳遞到父元素，直到根元素（document）。可用 event.stopPropagation() 阻止冒泡。',
  },
  {
    id: 'js-4-q7',
    quizId: 'js-4',
    topic: 'javascript',
    difficulty: 'medium',
    text: 'localStorage 和 sessionStorage 的主要差異為何？',
    options: [
      '儲存容量不同',
      'sessionStorage 可跨域存取',
      'localStorage 關閉瀏覽器後仍存在，sessionStorage 關閉分頁後清除',
      'localStorage 只能儲存字串',
    ],
    answer: 2,
    explanation:
      'localStorage 的資料會永久保存直到手動清除；sessionStorage 的資料在分頁關閉後就會清除。兩者都只能儲存字串且受同源政策限制。',
  },
  {
    id: 'js-4-q8',
    quizId: 'js-4',
    topic: 'javascript',
    difficulty: 'medium',
    text: '以下關於 Map 和 Object 的描述，何者正確？',
    options: [
      'Map 的 key 只能是字串',
      'Map 和 Object 完全相同',
      'Object 的迭代效能比 Map 好',
      'Map 的 key 可以是任何型別，且插入順序有保證',
    ],
    answer: 3,
    explanation:
      'Map 的 key 可以是任何型別（包含物件、函式等），且保證按插入順序迭代。Object 的 key 只能是字串或 Symbol。',
  },

  // ─────────────────────────────────────────
  // JavaScript 高級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'js-5-q1',
    quizId: 'js-5',
    topic: 'javascript',
    difficulty: 'hard',
    text: '以下程式碼的輸出為何？',
    code: 'function foo() {\n  console.log(this.x)\n}\nconst obj = { x: 1, foo }\nconst bar = obj.foo\nobj.foo()\nbar()',
    options: ['1, undefined', '1, 1', '1, Error', 'undefined, undefined'],
    answer: 0,
    explanation:
      'obj.foo() 執行時透過物件呼叫，this 隱性綁定至 obj，故輸出 1。而 const bar = obj.foo 僅是複製函式參考，執行 bar() 時屬於獨立函式呼叫（Default Binding），在非嚴格模式下 this 指向全域物件，因全域無 x 變數故輸出 undefined（若在嚴格模式下則會因 this 為 undefined 而報錯）。',
  },
  {
    id: 'js-5-q2',
    quizId: 'js-5',
    topic: 'javascript',
    difficulty: 'hard',
    text: '實作一個 curry 函式，讓以下呼叫方式成立',
    code: 'curry(add)(1)(2)(3) // 回傳 6\n// add = (a, b, c) => a + b + c',
    options: [
      'function curry(fn) { return fn }',
      'function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) return fn(...args)\n    return (...more) => curried(...args, ...more)\n  }\n}',
      'function curry(fn) { return (...args) => fn(...args) }',
      'function curry(fn) { return function() { return fn.apply(this, arguments) } }',
    ],
    answer: 1,
    explanation:
      'Currying 將多參數函式轉換為一系列單參數函式。關鍵是比較已收集的參數數量與原函式的 length，足夠時執行，不夠時繼續收集參數。',
  },
  {
    id: 'js-5-q3',
    quizId: 'js-5',
    topic: 'javascript',
    difficulty: 'hard',
    text: '以下 Proxy 程式碼的輸出為何？',
    code: 'const handler = {\n  get(target, key) {\n    return key in target ? target[key] : `${key} 不存在`\n  }\n}\nconst p = new Proxy({ name: "John" }, handler)\nconsole.log(p.name)\nconsole.log(p.age)',
    options: [
      '"John", undefined',
      'Error, Error',
      '"John", "age 不存在"',
      '"John", null',
    ],
    answer: 2,
    explanation:
      'Proxy 可以攔截物件的操作。get trap 在存取屬性時觸發，這裡實作了當屬性不存在時回傳自訂訊息而非 undefined，是 Proxy 的典型應用。',
  },
  {
    id: 'js-5-q4',
    quizId: 'js-5',
    topic: 'javascript',
    difficulty: 'hard',
    text: '以下 Generator 函式的輸出為何？',
    code: 'function* gen() {\n  yield 1\n  yield 2\n  return 3\n}\nconst g = gen()\nconsole.log(g.next())\nconsole.log(g.next())\nconsole.log(g.next())',
    options: [
      '1, 2, 3',
      'Error',
      '{ value: 1 }, { value: 2 }, { value: 3 }',
      '{ value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }',
    ],
    answer: 3,
    explanation:
      'Generator 函式每次呼叫 next() 執行到下一個 yield，回傳 { value, done }。yield 的 done 是 false，return 的 done 是 true，表示迭代結束。',
  },
  {
    id: 'js-5-q5',
    quizId: 'js-5',
    topic: 'javascript',
    difficulty: 'hard',
    text: '以下關於 WeakMap 和 Map 的差異，何者正確？',
    options: [
      'WeakMap 的 key 只能是物件，且是弱參考（不阻止垃圾回收），不可迭代',
      '完全相同',
      'WeakMap 效能比 Map 好',
      'WeakMap 可以用基本型別作為 key',
    ],
    answer: 0,
    explanation:
      'WeakMap 的 key 必須是物件，且持有弱參考：當 key 物件沒有其他參考時，可被垃圾回收，對應的條目也自動移除。適合儲存 DOM 元素相關資料，避免記憶體洩漏。',
  },
  {
    id: 'js-5-q6',
    quizId: 'js-5',
    topic: 'javascript',
    difficulty: 'hard',
    text: '實作 Promise.all 的核心邏輯，以下哪個實作最接近正確？',
    code: 'function myPromiseAll(promises) { ??? }',
    options: [
      'return Promise.resolve(promises.map(p => p))',
      'return new Promise((resolve, reject) => {\n  const results = []\n  let count = 0\n  promises.forEach((p, i) => {\n    Promise.resolve(p).then(val => {\n      results[i] = val\n      if (++count === promises.length) resolve(results)\n    }).catch(reject)\n  })\n})',
      'return promises.reduce((acc, p) => acc.then(() => p), Promise.resolve())',
      'return Promise.resolve(promises)',
    ],
    answer: 1,
    explanation:
      'Promise.all 的關鍵是：並行執行所有 Promise，用計數器追蹤完成數量，用索引保持結果順序，任一 reject 立即 reject 整體。',
  },

  // ─────────────────────────────────────────
  // TypeScript 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'ts-1-q1',
    quizId: 'ts-1',
    topic: 'typescript',
    difficulty: 'easy',
    text: 'Partial<T> 工具型別的效果是什麼？',
    options: [
      '將所有屬性設為必填',
      '將所有屬性設為唯讀',
      '將所有屬性設為可選',
      '移除所有屬性',
    ],
    answer: 2,
    explanation:
      'Partial<T> 會將 T 的所有屬性加上 ?，使其變為可選，常用於更新操作。',
  },
  {
    id: 'ts-1-q2',
    quizId: 'ts-1',
    topic: 'typescript',
    difficulty: 'easy',
    text: '以下程式碼的回傳型別是什麼？',
    code: 'function identity<T>(arg: T): T {\n  return arg\n}',
    options: ['void', 'any', 'unknown', 'T'],
    answer: 3,
    explanation: '泛型函式 identity 的回傳型別和輸入型別相同，都是 T。',
  },
  {
    id: 'ts-1-q3',
    quizId: 'ts-1',
    topic: 'typescript',
    difficulty: 'easy',
    text: 'keyof 運算子的作用是什麼？',
    code: 'type Keys = keyof { name: string; age: number }',
    options: [
      '取得型別的所有 key 組成的聯集',
      '取得物件的值',
      '刪除物件的 key',
      '複製物件的型別',
    ],
    answer: 0,
    explanation:
      'keyof 會產生型別所有鍵名組成的聯集型別，結果為 "name" | "age"。',
  },
  {
    id: 'ts-1-q4',
    quizId: 'ts-1',
    topic: 'typescript',
    difficulty: 'easy',
    text: 'TypeScript 中 interface 和 type 的主要差異為何？',
    options: [
      '完全相同，可以互換',
      'interface 可以被繼承和合併宣告，type 適合聯集和交叉型別',
      'type 比 interface 效能更好',
      'interface 只能用於物件',
    ],
    answer: 1,
    explanation:
      'interface 支援繼承（extends）和宣告合併（Declaration Merging），適合物件結構。type 更靈活，可用於聯集（|）、交叉（&）等複雜型別。',
  },
  {
    id: 'ts-1-q5',
    quizId: 'ts-1',
    topic: 'typescript',
    difficulty: 'easy',
    text: '以下哪個是正確的 TypeScript 陣列型別宣告？',
    options: ['Array(string)', 'String[]', 'string[]', '以上 B 和 C 都正確'],
    answer: 2,
    explanation:
      'string[] 是 TypeScript 中宣告字串陣列的標準方式。也可以寫成 Array<string>，但 String（大寫）是包裝物件型別，不建議使用。',
  },
  {
    id: 'ts-1-q6',
    quizId: 'ts-1',
    topic: 'typescript',
    difficulty: 'easy',
    text: 'any 和 unknown 的主要差異為何？',
    options: [
      '完全相同',
      'unknown 只能用於函式回傳值',
      'any 比 unknown 更安全',
      'unknown 使用前需要型別縮窄，any 跳過型別檢查',
    ],
    answer: 3,
    explanation:
      'unknown 是型別安全的 any，使用前必須透過型別縮窄（typeof、instanceof 等）確認型別。any 直接跳過型別檢查，不安全。',
  },

  // ─────────────────────────────────────────
  // TypeScript 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'ts-2-q1',
    quizId: 'ts-2',
    topic: 'typescript',
    difficulty: 'easy',
    text: '以下程式碼中，? 的作用是什麼？',
    code: 'interface User {\n  name: string\n  age?: number\n}',
    options: [
      'age 是可選欄位',
      'age 是必填欄位',
      'age 可以是 null',
      'age 是唯讀欄位',
    ],
    answer: 0,
    explanation:
      '在 interface 中，屬性名稱後面加上 ? 表示該屬性是可選的，可以不提供。',
  },
  {
    id: 'ts-2-q2',
    quizId: 'ts-2',
    topic: 'typescript',
    difficulty: 'easy',
    text: 'readonly 修飾詞的作用是什麼？',
    code: 'interface Point {\n  readonly x: number\n  readonly y: number\n}',
    options: [
      '屬性只能在類別中存取',
      '屬性建立後不可修改',
      '屬性是私有的',
      '屬性是可選的',
    ],
    answer: 1,
    explanation:
      'readonly 讓屬性在物件建立後不可被修改，嘗試修改會在編譯時報錯。',
  },
  {
    id: 'ts-2-q3',
    quizId: 'ts-2',
    topic: 'typescript',
    difficulty: 'easy',
    text: 'Union Type（聯集型別）的語法是什麼？',
    code: 'type ID = ???',
    options: [
      'string & number',
      'string + number',
      'string | number',
      'string, number',
    ],
    answer: 2,
    explanation:
      '聯集型別使用 | 符號，表示值可以是多種型別之一。string | number 表示可以是字串或數字。',
  },
  {
    id: 'ts-2-q4',
    quizId: 'ts-2',
    topic: 'typescript',
    difficulty: 'easy',
    text: 'Required<T> 工具型別的效果是什麼？',
    options: [
      '將所有屬性設為可選',
      '移除所有可選屬性',
      '將所有屬性設為唯讀',
      '將所有屬性設為必填',
    ],
    answer: 3,
    explanation:
      'Required<T> 是 Partial<T> 的相反，會移除所有屬性的 ?，使所有屬性變為必填。',
  },
  {
    id: 'ts-2-q5',
    quizId: 'ts-2',
    topic: 'typescript',
    difficulty: 'easy',
    text: '以下程式碼中 as 的用途是什麼？',
    code: 'const el = document.getElementById("app") as HTMLElement',
    options: [
      '型別斷言（告訴 TypeScript 這個型別）',
      '型別轉換（改變執行時的型別）',
      '型別守衛',
      '型別排除',
    ],
    answer: 0,
    explanation:
      'as 是型別斷言，告訴 TypeScript 你知道這個值的型別，讓編譯器信任你。它不改變執行時的型別，只影響型別檢查。',
  },
  {
    id: 'ts-2-q6',
    quizId: 'ts-2',
    topic: 'typescript',
    difficulty: 'easy',
    text: 'Pick<T, K> 工具型別的作用是什麼？',
    code: 'type Name = Pick<{ name: string; age: number; email: string }, "name" | "email">',
    options: [
      '從型別中移除指定屬性',
      '從型別中選取指定屬性建立新型別',
      '合併兩個型別',
      '將屬性設為可選',
    ],
    answer: 1,
    explanation:
      'Pick<T, K> 從型別 T 中選取指定的屬性 K 建立新型別。此例結果為 { name: string; email: string }。',
  },

  // ─────────────────────────────────────────
  // TypeScript 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'ts-3-q1',
    quizId: 'ts-3',
    topic: 'typescript',
    difficulty: 'medium',
    text: '以下映射型別的效果是什麼？',
    code: 'type Optional<T> = { [K in keyof T]?: T[K] }',
    options: [
      '等同於 Required<T>',
      '等同於 Readonly<T>',
      '等同於 Partial<T>',
      '等同於 Record<T, T>',
    ],
    answer: 2,
    explanation:
      '這個映射型別遍歷 T 的所有鍵並加上 ?，效果與 Partial<T> 完全相同。',
  },
  {
    id: 'ts-3-q2',
    quizId: 'ts-3',
    topic: 'typescript',
    difficulty: 'medium',
    text: 'ReturnType<T> 的作用是什麼？',
    code: 'function getUser() {\n  return { name: "John", age: 30 }\n}\ntype User = ReturnType<typeof getUser>',
    options: [
      '取得函式的參數型別',
      '取得 Promise 的解析值型別',
      '取得類別的實例型別',
      '取得函式的回傳值型別',
    ],
    answer: 3,
    explanation:
      'ReturnType<T> 取得函式型別 T 的回傳值型別。搭配 typeof 可以從函式本身推斷出回傳值的型別。',
  },
  {
    id: 'ts-3-q3',
    quizId: 'ts-3',
    topic: 'typescript',
    difficulty: 'medium',
    text: '以下程式碼中 never 型別代表什麼？',
    code: 'function throwError(msg: string): never {\n  throw new Error(msg)\n}',
    options: [
      '函式永遠不會正常返回',
      '函式回傳 undefined',
      '函式回傳 null',
      '函式是非同步的',
    ],
    answer: 0,
    explanation:
      'never 表示永遠不會有值的型別，用於永遠不會正常返回的函式（如拋出錯誤或無限迴圈）。',
  },
  {
    id: 'ts-3-q4',
    quizId: 'ts-3',
    topic: 'typescript',
    difficulty: 'medium',
    text: '以下 Discriminated Union 的優點是什麼？',
    code: 'type Shape =\n  | { kind: "circle"; radius: number }\n  | { kind: "square"; side: number }',
    options: [
      '減少程式碼量',
      'TypeScript 可根據 kind 欄位縮窄型別，提供精確的型別推斷',
      '提升執行效能',
      '自動產生型別守衛',
    ],
    answer: 1,
    explanation:
      'Discriminated Union 使用共同的字面量屬性（如 kind）作為辨識符，讓 TypeScript 在 switch/if 判斷後能精確縮窄型別。',
  },
  {
    id: 'ts-3-q5',
    quizId: 'ts-3',
    topic: 'typescript',
    difficulty: 'medium',
    text: '以下 infer 關鍵字的用途是什麼？',
    code: 'type UnpackPromise<T> = T extends Promise<infer U> ? U : T',
    options: [
      '繼承型別',
      '建立泛型約束',
      '在條件型別中推斷並擷取型別',
      '宣告型別變數',
    ],
    answer: 2,
    explanation:
      'infer 用於條件型別中，可以推斷並擷取型別的一部分。此例從 Promise<U> 中擷取 U，讓你取得 Promise 解析後的型別。',
  },
  {
    id: 'ts-3-q6',
    quizId: 'ts-3',
    topic: 'typescript',
    difficulty: 'medium',
    text: 'Exclude<T, U> 的作用是什麼？',
    code: 'type T = Exclude<"a" | "b" | "c", "a" | "b">',
    options: [
      '從 T 中選取在 U 中的型別',
      '取得 T 和 U 的交集',
      '合併 T 和 U',
      '從 T 中移除在 U 中的型別',
    ],
    answer: 3,
    explanation:
      'Exclude<T, U> 從聯集型別 T 中移除可以賦值給 U 的型別。此例結果為 "c"。',
  },
  {
    id: 'ts-3-q7',
    quizId: 'ts-3',
    topic: 'typescript',
    difficulty: 'medium',
    text: 'as const 斷言的作用是什麼？',
    code: 'const config = {\n  endpoint: "/api",\n  timeout: 3000\n} as const',
    options: [
      '將所有屬性推斷為字面量型別並設為 readonly',
      '讓物件變為不可變（immutable）',
      '將物件轉為常數',
      '防止物件被序列化',
    ],
    answer: 0,
    explanation:
      'as const 讓 TypeScript 將值推斷為最窄的字面量型別，並將所有屬性標記為 readonly。endpoint 的型別會是 "/api" 而不是 string。',
  },
  {
    id: 'ts-3-q8',
    quizId: 'ts-3',
    topic: 'typescript',
    difficulty: 'medium',
    text: '以下程式碼為什麼需要型別守衛？',
    code: 'function process(val: string | number) {\n  if (typeof val === "string") {\n    val.toUpperCase() // 這裡 val 是 string\n  }\n}',
    options: [
      '為了效能優化',
      '縮窄聯集型別，讓 TypeScript 知道在特定分支中的確切型別',
      '避免執行時錯誤',
      '這是多餘的',
    ],
    answer: 1,
    explanation:
      '型別守衛（typeof、instanceof、in 等）讓 TypeScript 在條件分支中縮窄型別。在 typeof val === "string" 的分支裡，TypeScript 確認 val 是 string，可以安全使用字串方法。',
  },

  // ─────────────────────────────────────────
  // React 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'react-1-q1',
    quizId: 'react-1',
    topic: 'react',
    difficulty: 'easy',
    text: 'useState 的回傳值是什麼？',
    options: [
      '只有狀態值',
      '只有更新函式',
      '[狀態值, 更新函式]',
      '{ state, setState }',
    ],
    answer: 2,
    explanation:
      'useState 回傳一個陣列，第一個元素是目前的狀態值，第二個元素是更新狀態的函式。',
  },
  {
    id: 'react-1-q2',
    quizId: 'react-1',
    topic: 'react',
    difficulty: 'easy',
    text: 'useEffect 的依賴陣列為空陣列 [] 時，effect 何時執行？',
    options: [
      '每次 render 都執行',
      '永遠不執行',
      '只在元件卸載時執行',
      '只在元件掛載時執行一次',
    ],
    answer: 3,
    explanation:
      'useEffect 的依賴陣列為空 [] 時，effect 只在元件第一次掛載（mount）時執行一次，類似 class 元件的 componentDidMount。',
  },
  {
    id: 'react-1-q3',
    quizId: 'react-1',
    topic: 'react',
    difficulty: 'easy',
    text: 'React 中為什麼列表渲染需要 key？',
    options: [
      '幫助 React 識別哪些元素有變化，提升 diff 效率',
      '只是語法要求',
      '讓 CSS 樣式生效',
      '防止重複渲染',
    ],
    answer: 0,
    explanation:
      'key 幫助 React 在 Virtual DOM diff 時識別哪些元素新增、刪除或移動，提升渲染效率。key 應該是唯一且穩定的值，不建議用 index。',
  },
  {
    id: 'react-1-q4',
    quizId: 'react-1',
    topic: 'react',
    difficulty: 'easy',
    text: '以下哪個是 React 中正確的事件處理方式？',
    options: [
      '<button onclick="handleClick()">',
      '<button onClick={handleClick}>',
      '<button onClick={handleClick()}>',
      '<button on-click={handleClick}>',
    ],
    answer: 1,
    explanation:
      'React 使用 camelCase 的事件名稱，傳入函式的參考（不加括號）。加括號 handleClick() 會在渲染時立即執行函式。',
  },
  {
    id: 'react-1-q5',
    quizId: 'react-1',
    topic: 'react',
    difficulty: 'easy',
    text: 'props 和 state 的主要差異是什麼？',
    options: [
      '兩者完全相同',
      'state 由父元件傳入，props 是內部資料',
      'props 由父元件傳入且唯讀，state 是元件內部管理的可變資料',
      'props 可以直接修改，state 不行',
    ],
    answer: 2,
    explanation:
      'props 是從父元件傳入的唯讀資料，不應直接修改。state 是元件內部維護的可變資料，透過 setState 或 useState 的更新函式修改。',
  },
  {
    id: 'react-1-q6',
    quizId: 'react-1',
    topic: 'react',
    difficulty: 'easy',
    text: 'JSX 中如何在屬性中插入 JavaScript 表達式？',
    options: [
      '用雙引號 "expression"',
      '用 ${expression}',
      '用 (expression)',
      '用大括號 {expression}',
    ],
    answer: 3,
    explanation:
      'JSX 中用大括號 {} 插入 JavaScript 表達式，例如 <div className={styles.container}> 或 <p>{count}</p>。',
  },

  // ─────────────────────────────────────────
  // React 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'react-2-q1',
    quizId: 'react-2',
    topic: 'react',
    difficulty: 'easy',
    text: 'useRef 的主要用途是什麼？',
    options: [
      '存取 DOM 元素或儲存不觸發 re-render 的可變值',
      '管理元件狀態',
      '替代 useState',
      '處理副作用',
    ],
    answer: 0,
    explanation:
      'useRef 回傳一個 { current } 物件，可用來存取 DOM 元素或儲存在 render 之間持久化但不觸發 re-render 的值。',
  },
  {
    id: 'react-2-q2',
    quizId: 'react-2',
    topic: 'react',
    difficulty: 'easy',
    text: 'React.Fragment 的用途是什麼？',
    options: [
      '建立新的 React 元素',
      '讓多個元素不需要包裹在額外的 DOM 節點中回傳',
      '防止元件重新渲染',
      '建立 Portal',
    ],
    answer: 1,
    explanation:
      'React.Fragment（或簡寫 <>）讓你回傳多個元素而不需要額外的包裹 div，避免不必要的 DOM 節點。',
  },
  {
    id: 'react-2-q3',
    quizId: 'react-2',
    topic: 'react',
    difficulty: 'easy',
    text: '以下哪個是 React 中正確的條件渲染方式？',
    code: 'const isLoggedIn = true',
    options: [
      '<if condition={isLoggedIn}>...</if>',
      '{isLoggedIn && then <UserPanel />}',
      '{isLoggedIn ? <UserPanel /> : <Login />}',
      'if(isLoggedIn) return <UserPanel />',
    ],
    answer: 2,
    explanation:
      'JSX 中常用三元運算子或 && 進行條件渲染。三元運算子適合有兩種情況，&& 適合只有一種情況。',
  },
  {
    id: 'react-2-q4',
    quizId: 'react-2',
    topic: 'react',
    difficulty: 'easy',
    text: 'useContext 的用途是什麼？',
    options: [
      '建立 Context',
      '監聽 Context 的變化',
      '更新 Context 的值',
      '在不透過 props 的情況下，讀取 Context 的值',
    ],
    answer: 3,
    explanation:
      'useContext 讓你在函式元件中讀取 Context 的值，避免 props drilling（多層傳遞 props 的問題）。',
  },
  {
    id: 'react-2-q5',
    quizId: 'react-2',
    topic: 'react',
    difficulty: 'easy',
    text: '以下關於 React 元件命名的規則，何者正確？',
    options: [
      '元件名稱必須大寫開頭',
      '元件名稱可以小寫開頭',
      '元件名稱必須以 Component 結尾',
      '元件名稱只能用英文',
    ],
    answer: 0,
    explanation:
      'React 元件必須以大寫字母開頭，這樣 JSX 才能區分自訂元件（大寫）和 HTML 標籤（小寫）。',
  },
  {
    id: 'react-2-q6',
    quizId: 'react-2',
    topic: 'react',
    difficulty: 'easy',
    text: 'children prop 的用途是什麼？',
    code: '<Card>\n  <p>Hello World</p>\n</Card>',
    options: [
      '傳遞陣列資料',
      '存取元件標籤之間的內容',
      '設定元件的子元件數量',
      '以上皆非',
    ],
    answer: 1,
    explanation:
      'children 是特殊的 prop，代表放在元件開閉標籤之間的內容。這讓元件可以作為容器包裹其他內容。',
  },

  // ─────────────────────────────────────────
  // React 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'react-3-q1',
    quizId: 'react-3',
    topic: 'react',
    difficulty: 'medium',
    text: 'useMemo 和 useCallback 的差異是什麼？',
    options: [
      '完全相同',
      'useCallback 快取計算結果，useMemo 快取函式',
      'useMemo 快取計算結果（值），useCallback 快取函式',
      '只有效能差異',
    ],
    answer: 2,
    explanation:
      'useMemo 用於快取昂貴的計算結果（回傳值），useCallback 用於快取函式（回傳函式本身）。兩者都在依賴改變時重新計算。',
  },
  {
    id: 'react-3-q2',
    quizId: 'react-3',
    topic: 'react',
    difficulty: 'medium',
    text: '以下關於 useEffect cleanup 的描述，何者正確？',
    code: 'useEffect(() => {\n  const timer = setInterval(fn, 1000)\n  return () => clearInterval(timer)\n}, [])',
    options: [
      'cleanup 只在元件掛載時執行',
      'cleanup 不會自動執行',
      'cleanup 每次 render 都執行',
      'cleanup 在元件卸載時，以及 effect 重新執行前執行',
    ],
    answer: 3,
    explanation:
      'useEffect 的 cleanup 函式在兩個時機執行：元件卸載時，以及 effect 因依賴改變而重新執行之前。這可以防止記憶體洩漏。',
  },
  {
    id: 'react-3-q3',
    quizId: 'react-3',
    topic: 'react',
    difficulty: 'medium',
    text: 'React 中為什麼 state 更新後要傳入新物件，而不是直接修改？',
    code: '// 錯誤\nstate.count = 1\nsetState(state)\n\n// 正確\nsetState({ ...state, count: 1 })',
    options: [
      'React 用參考比較（reference equality）來偵測變化，直接修改不會觸發 re-render',
      '這只是習慣，沒有技術原因',
      '直接修改會造成效能問題',
      '語法要求',
    ],
    answer: 0,
    explanation:
      'React 用 Object.is 比較新舊 state，直接修改原物件後傳入相同參考，React 認為沒有變化就不會 re-render。必須傳入新物件才能觸發更新。',
  },
  {
    id: 'react-3-q4',
    quizId: 'react-3',
    topic: 'react',
    difficulty: 'medium',
    text: 'useReducer 適合在什麼情況下使用？',
    options: [
      '所有 state 都應該用 useReducer',
      '狀態邏輯複雜、多個子值相互關聯，或下一個 state 依賴前一個 state',
      '只有全域狀態才用 useReducer',
      '需要效能優化時',
    ],
    answer: 1,
    explanation:
      '當狀態邏輯複雜（多個值相互關聯）或有多種更新動作時，useReducer 比多個 useState 更易維護。它也讓狀態轉換邏輯集中在 reducer 函式中。',
  },
  {
    id: 'react-3-q5',
    quizId: 'react-3',
    topic: 'react',
    difficulty: 'medium',
    text: '以下關於 React.memo 的描述，何者正確？',
    options: [
      '讓元件完全不會重新渲染',
      '快取元件的 state',
      '當 props 沒有變化時，跳過元件的重新渲染',
      '替代 useMemo',
    ],
    answer: 2,
    explanation:
      'React.memo 是高階元件，會淺比較 props，如果 props 沒有變化就跳過重新渲染。適合用在父元件頻繁 re-render 但子元件 props 不常改變的情況。',
  },
  {
    id: 'react-3-q6',
    quizId: 'react-3',
    topic: 'react',
    difficulty: 'medium',
    text: 'Custom Hook 的命名規則和主要用途是什麼？',
    options: [
      '沒有命名規則限制',
      '命名以 Hook 結尾，用於效能優化',
      '命名以 use 開頭，只能在 class 元件中使用',
      '命名以 use 開頭，用於封裝和重用含有 Hook 的邏輯',
    ],
    answer: 3,
    explanation:
      'Custom Hook 必須以 use 開頭（React 的規則），用於封裝可重用的有狀態邏輯。讓不同元件共享邏輯而不是共享狀態。',
  },
  {
    id: 'react-3-q7',
    quizId: 'react-3',
    topic: 'react',
    difficulty: 'medium',
    text: 'React 中的受控元件（Controlled Component）是什麼？',
    options: [
      '表單元素的值由 React state 控制',
      '由 ref 控制的元件',
      '父元件可以控制的子元件',
      '使用 Redux 管理的元件',
    ],
    answer: 0,
    explanation:
      '受控元件的表單值由 React state 控制，每次輸入都觸發 onChange 更新 state。這讓 React 成為資料的唯一來源（single source of truth）。',
  },
  {
    id: 'react-3-q8',
    quizId: 'react-3',
    topic: 'react',
    difficulty: 'medium',
    text: 'Lifting State Up（狀態提升）的目的是什麼？',
    options: [
      '提升應用程式效能',
      '讓多個元件共享同一份 state，將 state 移到最近的共同父元件',
      '讓 state 存在 Redux 中',
      '減少元件的 props 數量',
    ],
    answer: 1,
    explanation:
      '當多個元件需要共享資料時，將 state 提升到它們最近的共同父元件，再透過 props 傳下去。這是 React 管理共享狀態的基本模式。',
  },

  // ─────────────────────────────────────────
  // React 中級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'react-4-q1',
    quizId: 'react-4',
    topic: 'react',
    difficulty: 'medium',
    text: 'React Router 中 useNavigate 和 Link 的差異是什麼？',
    options: [
      '完全相同',
      'Link 效能較好',
      'useNavigate 用於程式碼中觸發導覽，Link 用於 JSX 中的導覽連結',
      'useNavigate 只能用於 class 元件',
    ],
    answer: 2,
    explanation:
      'Link 是 JSX 元件，用於宣告式導覽（超連結）。useNavigate 是 Hook，用於在事件處理或邏輯中程式碼式地觸發導覽。',
  },
  {
    id: 'react-4-q2',
    quizId: 'react-4',
    topic: 'react',
    difficulty: 'medium',
    text: '以下關於 useLayoutEffect 和 useEffect 的差異，何者正確？',
    options: [
      '完全相同',
      'useEffect 比 useLayoutEffect 效能更差',
      'useLayoutEffect 只能用於 class 元件',
      'useLayoutEffect 在 DOM 更新後、瀏覽器繪製前同步執行，useEffect 在繪製後非同步執行',
    ],
    answer: 3,
    explanation:
      'useLayoutEffect 在瀏覽器繪製前同步執行，適合需要在使用者看到畫面前讀取或修改 DOM 的情況。useEffect 在繪製後執行，適合大部分副作用。',
  },
  {
    id: 'react-4-q3',
    quizId: 'react-4',
    topic: 'react',
    difficulty: 'medium',
    text: 'React 18 引入的 Concurrent Mode 的主要優點是什麼？',
    options: [
      '讓 React 可以中斷、暫停和恢復渲染，提升使用者體驗',
      '讓 React 支援多執行緒',
      '讓渲染速度提升 10 倍',
      '支援 Server-Side Rendering',
    ],
    answer: 0,
    explanation:
      'Concurrent Mode 讓 React 能夠中斷長時間的渲染，先處理更緊急的更新（如使用者輸入），再繼續其他渲染，使 UI 保持響應。',
  },
  {
    id: 'react-4-q4',
    quizId: 'react-4',
    topic: 'react',
    difficulty: 'medium',
    text: 'React 的 Virtual DOM 如何提升效能？',
    options: [
      '直接跳過 DOM 操作',
      '在記憶體中比較新舊 Virtual DOM，只更新實際有變化的 DOM 節點',
      '讓 DOM 操作變成非同步',
      '快取所有 DOM 節點',
    ],
    answer: 1,
    explanation:
      'Virtual DOM 是 DOM 的 JavaScript 物件表示。React 在記憶體中 diff 新舊 Virtual DOM，找出最小差異後，批次更新實際 DOM，減少昂貴的 DOM 操作。',
  },
  {
    id: 'react-4-q5',
    quizId: 'react-4',
    topic: 'react',
    difficulty: 'medium',
    text: '以下哪種情況最適合使用 Context API？',
    options: [
      '所有 state 管理都用 Context',
      '替代 useState',
      '需要在多個層級的元件中共享資料（如主題、語言、登入狀態）',
      '只用於效能優化',
    ],
    answer: 2,
    explanation:
      'Context 適合全域性且變動不頻繁的資料，如使用者登入狀態、主題設定、語言偏好。頻繁更新的資料會導致所有消費元件重新渲染，效能較差。',
  },
  {
    id: 'react-4-q6',
    quizId: 'react-4',
    topic: 'react',
    difficulty: 'medium',
    text: '以下關於 React Hooks 的規則，何者正確？',
    options: [
      'Hooks 可以在條件式或迴圈中呼叫',
      'Hooks 可以在一般 JavaScript 函式中使用',
      'Hooks 可以在 class 元件中使用',
      'Hooks 只能在函式元件或自訂 Hook 的頂層呼叫',
    ],
    answer: 3,
    explanation:
      'React Hooks 有兩條規則：只能在函式元件或自訂 Hook 的最頂層呼叫（不能在條件、迴圈或巢狀函式中），且只能在 React 函式中呼叫。',
  },
  {
    id: 'react-4-q7',
    quizId: 'react-4',
    topic: 'react',
    difficulty: 'medium',
    text: 'forwardRef 的用途是什麼？',
    options: [
      '讓父元件可以透過 ref 存取子元件的 DOM 節點',
      '轉發事件到父元件',
      '建立可複用的 ref',
      '替代 useRef',
    ],
    answer: 0,
    explanation:
      'forwardRef 讓你將 ref 從父元件透傳到子元件內部的 DOM 節點，適合封裝 input、button 等需要 ref 存取的元件。',
  },
  {
    id: 'react-4-q8',
    quizId: 'react-4',
    topic: 'react',
    difficulty: 'medium',
    text: 'React 中 key prop 為什麼不建議用陣列 index？',
    options: [
      'index 不是唯一的',
      '當列表項目重新排序或刪除時，index 改變會導致不必要的重新渲染或狀態錯誤',
      'React 不支援 index 作為 key',
      '效能較差',
    ],
    answer: 1,
    explanation:
      '用 index 作為 key，當陣列項目重新排序、插入或刪除時，key 和項目的對應關係改變，React 可能錯誤地複用 DOM 節點，導致狀態混亂。應使用穩定唯一的 ID。',
  },

  // ─────────────────────────────────────────
  // React 高級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'react-5-q1',
    quizId: 'react-5',
    topic: 'react',
    difficulty: 'hard',
    text: '以下 useEffect 程式碼有什麼問題？',
    code: 'function Counter() {\n  const [count, setCount] = useState(0)\n  useEffect(() => {\n    const id = setInterval(() => {\n      setCount(count + 1)\n    }, 1000)\n    return () => clearInterval(id)\n  }, [])\n  return <div>{count}</div>\n}',
    options: [
      '沒有問題',
      'setInterval 在 useEffect 中不能使用',
      'count 在 setInterval 回呼中形成閉包，永遠讀到初始值 0，count 不會正確遞增',
      'clearInterval 的位置錯誤',
    ],
    answer: 2,
    explanation:
      '這是經典的 stale closure 問題。setInterval 的回呼在建立時捕捉了 count = 0，之後永遠用舊值。解法：用 setCount(prev => prev + 1) 的函式形式，或將 count 加入依賴陣列。',
  },
  {
    id: 'react-5-q2',
    quizId: 'react-5',
    topic: 'react',
    difficulty: 'hard',
    text: 'React Reconciliation 演算法（Diffing）的核心假設是什麼？',
    options: [
      '完整比較所有節點',
      '從右到左比較節點',
      '只比較葉節點',
      '相同層級不同型別的元素會產生完全不同的樹；開發者用 key 標示哪些元素在不同渲染間保持穩定',
    ],
    answer: 3,
    explanation:
      'React diff 演算法有兩個假設：1. 不同型別的元素產生不同樹（遇到型別不同直接重建）；2. key prop 讓開發者標示穩定的元素（key 相同才會嘗試複用）。這讓複雜度從 O(n³) 降到 O(n)。',
  },
  {
    id: 'react-5-q3',
    quizId: 'react-5',
    topic: 'react',
    difficulty: 'hard',
    text: '以下程式碼中，哪種方式可以正確避免子元件不必要的重新渲染？',
    code: 'function Parent() {\n  const [count, setCount] = useState(0)\n  const handleClick = () => console.log("clicked")\n  return <Child onClick={handleClick} />\n}',
    options: [
      '用 useCallback 包住 handleClick，再用 React.memo 包住 Child',
      '不需要任何優化',
      '只用 React.memo 包住 Child',
      '只用 useCallback 包住 handleClick',
    ],
    answer: 0,
    explanation:
      '只用 React.memo 不夠，因為每次 Parent render 都會建立新的 handleClick 函式（參考不同），props 比較會失敗。需要 useCallback 讓函式參考穩定，React.memo 的淺比較才能有效避免重新渲染。',
  },
  {
    id: 'react-5-q4',
    quizId: 'react-5',
    topic: 'react',
    difficulty: 'hard',
    text: 'React 18 的 useTransition 主要解決什麼問題？',
    options: [
      '建立 CSS 過場動畫',
      '讓開發者標記非緊急的狀態更新，讓 React 優先處理緊急更新（如輸入），保持 UI 響應',
      '替代 useEffect',
      '管理表單狀態',
    ],
    answer: 1,
    explanation:
      'useTransition 讓你將某些更新標記為低優先（transition），React 會優先處理使用者輸入等緊急更新。例如搜尋過濾大量資料時，輸入框保持響應，過濾結果可以延遲更新。',
  },
  {
    id: 'react-5-q5',
    quizId: 'react-5',
    topic: 'react',
    difficulty: 'hard',
    text: '實作一個自訂 Hook usePrevious，取得前一次的值',
    code: 'function usePrevious(value) {\n  // 如何實作？\n}',
    options: [
      'return useState(value)',
      'return useCallback(() => value, [])',
      'const ref = useRef()\nuseEffect(() => { ref.current = value })\nreturn ref.current',
      'const [prev] = useState(value)\nreturn prev',
    ],
    answer: 2,
    explanation:
      '利用 useRef 在 render 間保持值，useEffect 在渲染後執行，所以 render 過程中 ref.current 還是上一次的值，渲染完成後才更新。這就實現了「回傳前一次值」的效果。',
  },
  {
    id: 'react-5-q6',
    quizId: 'react-5',
    topic: 'react',
    difficulty: 'hard',
    text: '以下關於 React Server Components（RSC）的描述，何者正確？',
    options: [
      'RSC 完全取代 Client Components',
      'RSC 需要 Redux 才能管理狀態',
      'RSC 和 SSR 完全相同',
      'RSC 在伺服器執行，不傳送 JavaScript 到客戶端，可以直接存取後端資源，但不能使用 state 和瀏覽器 API',
    ],
    answer: 3,
    explanation:
      'React Server Components 在伺服器執行，渲染結果直接傳給客戶端，不需要傳送元件的 JavaScript 程式碼，減少 bundle 大小。代價是不能使用 useState、useEffect 或瀏覽器 API。',
  },

  // ─────────────────────────────────────────
  // HTML 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'html-1-q1',
    quizId: 'html-1',
    topic: 'html',
    difficulty: 'easy',
    text: '以下哪個是正確的 HTML5 文件宣告？',
    options: [
      '<!DOCTYPE html>',
      '<!DOCTYPE HTML5>',
      '<html version="5">',
      '<?xml version="1.0">',
    ],
    answer: 0,
    explanation:
      'HTML5 的文件宣告是 <!DOCTYPE html>，不分大小寫且非常簡潔，告訴瀏覽器使用 HTML5 標準解析文件。',
  },
  {
    id: 'html-1-q2',
    quizId: 'html-1',
    topic: 'html',
    difficulty: 'easy',
    text: '語意化標籤 <article> 和 <div> 的主要差異是什麼？',
    options: [
      '樣式不同',
      '<article> 表達內容的語意（獨立完整的文章），<div> 只是無語意的容器',
      '<article> 比 <div> 渲染更快',
      '<div> 只能用一次',
    ],
    answer: 1,
    explanation:
      '語意化標籤讓 HTML 有意義，有助於 SEO 和無障礙。<article> 代表獨立完整的內容，<section> 代表主題區塊，<nav> 代表導覽，<div> 純粹是佈局容器。',
  },
  {
    id: 'html-1-q3',
    quizId: 'html-1',
    topic: 'html',
    difficulty: 'easy',
    text: '<img> 標籤的 alt 屬性用途是什麼？',
    options: [
      '設定圖片標題',
      '設定圖片大小',
      '圖片無法載入時顯示的替代文字，也用於螢幕閱讀器',
      '設定圖片連結',
    ],
    answer: 2,
    explanation:
      'alt 屬性提供圖片的替代文字，在圖片無法載入時顯示，也讓螢幕閱讀器能描述圖片給視障使用者。對無障礙（accessibility）和 SEO 都很重要。',
  },
  {
    id: 'html-1-q4',
    quizId: 'html-1',
    topic: 'html',
    difficulty: 'easy',
    text: 'HTML 表單中 label 的 for 屬性用途是什麼？',
    code: '<label for="username">帳號</label>\n<input id="username" type="text">',
    options: [
      '設定表單提交的目標',
      '以上皆非',
      '設定輸入框的名稱',
      '將 label 與對應的 input 關聯，點擊 label 可聚焦 input',
    ],
    answer: 3,
    explanation:
      'label 的 for 屬性值對應 input 的 id，點擊 label 時會聚焦對應的 input，提升使用者體驗和無障礙性。',
  },
  {
    id: 'html-1-q5',
    quizId: 'html-1',
    topic: 'html',
    difficulty: 'easy',
    text: 'meta viewport 標籤的用途是什麼？',
    code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    options: [
      '控制行動裝置的顯示比例，讓網頁正確呈現在各種螢幕尺寸',
      '設定網頁標題',
      '設定網頁編碼',
      '設定 SEO 關鍵字',
    ],
    answer: 0,
    explanation:
      'viewport meta 標籤告訴瀏覽器如何控制頁面的尺寸和縮放。width=device-width 讓網頁寬度配合裝置寬度，是 RWD 響應式設計的基礎。',
  },
  {
    id: 'html-1-q6',
    quizId: 'html-1',
    topic: 'html',
    difficulty: 'easy',
    text: '<script> 標籤的 defer 屬性有什麼作用？',
    options: [
      '讓腳本非同步載入且立即執行',
      '讓腳本在 HTML 解析完成後、DOMContentLoaded 前執行',
      '讓腳本不執行',
      '讓腳本在頁面完全載入後執行',
    ],
    answer: 1,
    explanation:
      'defer 讓腳本非同步下載，等 HTML 全部解析完後按順序執行，不阻塞 HTML 解析。適合需要操作 DOM 的腳本。',
  },

  // ─────────────────────────────────────────
  // HTML 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'html-2-q1',
    quizId: 'html-2',
    topic: 'html',
    difficulty: 'easy',
    text: 'href="#" 和 href="javascript:void(0)" 有何差異？',
    options: [
      '完全相同',
      'href="javascript:void(0)" 是推薦做法',
      'href="#" 會讓頁面跳到頂部，href="javascript:void(0)" 不會有任何行為',
      '兩者都不建議使用',
    ],
    answer: 2,
    explanation:
      'href="#" 會讓頁面跳到頂部（改變 URL hash）。href="javascript:void(0)" 不會有任何行為但不符合語意。現代做法是用 button 或 event.preventDefault() 處理。',
  },
  {
    id: 'html-2-q2',
    quizId: 'html-2',
    topic: 'html',
    difficulty: 'easy',
    text: '以下哪個 input type 適合用來輸入電話號碼？',
    options: ['type="number"', 'type="phone"', 'type="text"', 'type="tel"'],
    answer: 3,
    explanation:
      'type="tel" 專門用於電話號碼輸入，在行動裝置上會顯示數字鍵盤。type="number" 限制只能輸入數字且有上下箭頭，不適合電話號碼。',
  },
  {
    id: 'html-2-q3',
    quizId: 'html-2',
    topic: 'html',
    difficulty: 'easy',
    text: 'HTML 中的 data- 屬性用途是什麼？',
    code: '<div data-user-id="123" data-role="admin">...</div>',
    options: [
      '在 HTML 元素上儲存自訂資料，可用 JavaScript 讀取',
      '設定元素樣式',
      '設定元素的資料庫連接',
      '以上皆非',
    ],
    answer: 0,
    explanation:
      'data- 屬性讓你在 HTML 元素上儲存自訂資料，不影響頁面呈現。可用 element.dataset.userId 或 getAttribute("data-user-id") 讀取。',
  },
  {
    id: 'html-2-q4',
    quizId: 'html-2',
    topic: 'html',
    difficulty: 'easy',
    text: '<header>、<main>、<footer> 在一個頁面中可以使用幾次？',
    options: [
      'header 和 footer 只能用一次，main 可以多次',
      'main 只能用一次，header 和 footer 可以在每個 section 中使用',
      '三者都只能用一次',
      '三者都可以多次使用',
    ],
    answer: 1,
    explanation:
      '<main> 代表頁面主要內容，每個頁面只應有一個。<header> 和 <footer> 可以出現在 <article>、<section> 等區塊元素中多次使用。',
  },
  {
    id: 'html-2-q5',
    quizId: 'html-2',
    topic: 'html',
    difficulty: 'easy',
    text: 'HTML 中 required 屬性的用途是什麼？',
    code: '<input type="email" required>',
    options: [
      '設定輸入框為唯讀',
      '設定預設值',
      '表單提交前必須填寫此欄位',
      '限制輸入格式',
    ],
    answer: 2,
    explanation:
      'required 屬性讓表單在提交前驗證該欄位是否已填寫，若未填寫瀏覽器會顯示提示並阻止提交。這是 HTML5 原生表單驗證的一部分。',
  },
  {
    id: 'html-2-q6',
    quizId: 'html-2',
    topic: 'html',
    difficulty: 'easy',
    text: 'srcset 屬性的用途是什麼？',
    code: '<img src="image.jpg" srcset="image-2x.jpg 2x, image-3x.jpg 3x">',
    options: [
      '設定圖片大小',
      '設定圖片的備用來源',
      '讓圖片延遲載入',
      '設定圖片的來源集合，讓瀏覽器根據裝置像素密度選擇最適合的圖片',
    ],
    answer: 3,
    explanation:
      'srcset 讓你提供不同解析度的圖片，瀏覽器根據裝置像素密度（DPR）自動選擇最適合的版本，高解析度螢幕顯示更清晰的圖片，節省一般螢幕的頻寬。',
  },

  // ─────────────────────────────────────────
  // HTML 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'html-3-q1',
    quizId: 'html-3',
    topic: 'html',
    difficulty: 'medium',
    text: 'ARIA 屬性的主要用途是什麼？',
    code: '<button aria-label="關閉對話框" aria-expanded="false">X</button>',
    options: [
      '增強無障礙性，讓螢幕閱讀器能更正確地描述互動元素',
      '提升頁面效能',
      '設定元素動畫',
      '替代 CSS 樣式',
    ],
    answer: 0,
    explanation:
      'ARIA（Accessible Rich Internet Applications）屬性補充 HTML 的語意，讓螢幕閱讀器能正確描述動態內容和互動元件，提升視障使用者的體驗。',
  },
  {
    id: 'html-3-q2',
    quizId: 'html-3',
    topic: 'html',
    difficulty: 'medium',
    text: '以下關於 <picture> 元素的描述，何者正確？',
    code: '<picture>\n  <source media="(min-width: 800px)" srcset="large.jpg">\n  <img src="small.jpg" alt="...">\n</picture>',
    options: [
      '只用於設定圖片動畫',
      '根據媒體查詢或圖片格式支援，讓瀏覽器選擇最適合的圖片來源',
      '替代 img 標籤',
      '只能用於 WebP 格式',
    ],
    answer: 1,
    explanation:
      '<picture> 讓你根據螢幕尺寸或支援的圖片格式提供不同來源，瀏覽器選擇第一個符合條件的 <source>，若都不符合則使用 <img> 的 src。',
  },
  {
    id: 'html-3-q3',
    quizId: 'html-3',
    topic: 'html',
    difficulty: 'medium',
    text: 'SEO 方面，以下哪個做法最正確？',
    options: [
      '每個頁面使用多個 <h1>',
      'heading 層級不重要，用 CSS 控制大小就好',
      '每個頁面只有一個 <h1> 描述主要主題，heading 層級依序使用',
      '使用 <div class="heading"> 替代 <h1>',
    ],
    answer: 2,
    explanation:
      '每個頁面應只有一個 <h1> 作為主要標題，heading 層級（h1-h6）應按邏輯順序使用，不應跳層。搜尋引擎依賴 heading 結構理解頁面內容。',
  },
  {
    id: 'html-3-q4',
    quizId: 'html-3',
    topic: 'html',
    difficulty: 'medium',
    text: 'preload 和 prefetch 的差異是什麼？',
    code: '<link rel="preload" href="font.woff2" as="font">\n<link rel="prefetch" href="next-page.js">',
    options: [
      '完全相同',
      'preload 只用於字體',
      'prefetch 比 preload 優先順序高',
      'preload 立即下載當前頁面需要的資源，prefetch 在閒置時下載未來可能需要的資源',
    ],
    answer: 3,
    explanation:
      'preload 告訴瀏覽器立即下載當前頁面需要的重要資源（字體、關鍵 CSS）。prefetch 在瀏覽器閒置時下載未來導覽可能需要的資源，優先順序低。',
  },
  {
    id: 'html-3-q5',
    quizId: 'html-3',
    topic: 'html',
    difficulty: 'medium',
    text: '以下關於 <canvas> 和 <svg> 的比較，何者正確？',
    options: [
      'canvas 用像素繪圖（點陣），放大會失真；SVG 是向量圖，縮放不失真',
      'canvas 適合靜態圖形，SVG 適合動態圖形',
      'SVG 效能永遠比 canvas 好',
      '兩者只有語法差異',
    ],
    answer: 0,
    explanation:
      'canvas 是像素繪圖，適合遊戲、圖片處理等複雜動態繪圖。SVG 是向量圖，縮放不失真，適合 icon、圖表，支援 DOM 操作和 CSS 樣式。',
  },
  {
    id: 'html-3-q6',
    quizId: 'html-3',
    topic: 'html',
    difficulty: 'medium',
    text: '以下關於 Web Storage 的描述，何者正確？',
    options: [
      'localStorage 和 sessionStorage 可以跨域存取',
      'localStorage 持久存儲，sessionStorage 僅限當前分頁會話，兩者都受同源政策限制',
      'Web Storage 可以儲存任何 JavaScript 物件',
      'localStorage 容量是 sessionStorage 的兩倍',
    ],
    answer: 1,
    explanation:
      'localStorage 資料不過期，sessionStorage 在分頁關閉後清除。兩者都受同源政策（Same-Origin Policy）限制，且只能儲存字串（物件需先 JSON.stringify）。',
  },
  {
    id: 'html-3-q7',
    quizId: 'html-3',
    topic: 'html',
    difficulty: 'medium',
    text: 'Shadow DOM 的主要用途是什麼？',
    options: [
      '讓元素變透明',
      '建立隱藏的 DOM 元素',
      '封裝元件的 HTML 和 CSS，避免樣式和行為與外部衝突',
      '提升渲染效能',
    ],
    answer: 2,
    explanation:
      'Shadow DOM 是 Web Components 的一部分，讓你建立封裝的 DOM 子樹，其樣式和行為不受外部 CSS 影響，也不會影響外部，是真正的元件封裝。',
  },
  {
    id: 'html-3-q8',
    quizId: 'html-3',
    topic: 'html',
    difficulty: 'medium',
    text: '以下哪個 meta 標籤對 SEO 最重要？',
    options: [
      '<meta name="keywords">',
      '<meta name="author">',
      '<meta http-equiv="refresh">',
      '<meta name="description">',
    ],
    answer: 3,
    explanation:
      'meta description 雖然不直接影響排名，但會顯示在搜尋結果中，影響點擊率。meta keywords 已被主流搜尋引擎忽略。',
  },

  // ─────────────────────────────────────────
  // CSS 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'css-1-q1',
    quizId: 'css-1',
    topic: 'css',
    difficulty: 'easy',
    text: 'CSS 盒模型（Box Model）由哪幾個部分組成？',
    options: [
      'content、padding、border、margin',
      'content、spacing、border、outline',
      'width、height、border、margin',
      'content、padding、shadow、margin',
    ],
    answer: 0,
    explanation:
      'CSS 盒模型由內到外分別是：content（內容）、padding（內距）、border（邊框）、margin（外距）。理解盒模型是掌握 CSS 佈局的基礎。',
  },
  {
    id: 'css-1-q2',
    quizId: 'css-1',
    topic: 'css',
    difficulty: 'easy',
    text: 'box-sizing: border-box 的效果是什麼？',
    options: [
      '讓元素顯示邊框',
      '讓 width 和 height 包含 padding 和 border，不再只是 content',
      '讓元素使用 flex 佈局',
      '移除預設的 margin',
    ],
    answer: 1,
    explanation:
      '預設 content-box 的 width 只計算 content，加上 padding 和 border 後總寬度會超過設定值。border-box 讓 width 包含 padding 和 border，更直觀易用。',
  },
  {
    id: 'css-1-q3',
    quizId: 'css-1',
    topic: 'css',
    difficulty: 'easy',
    text: 'Flexbox 中 justify-content 和 align-items 的差異是什麼？',
    options: [
      '完全相同',
      'align-items 控制主軸，justify-content 控制交叉軸',
      'justify-content 控制主軸（main axis）對齊，align-items 控制交叉軸（cross axis）對齊',
      '兩者都只控制水平對齊',
    ],
    answer: 2,
    explanation:
      'Flexbox 中，justify-content 控制主軸方向的對齊（預設為水平），align-items 控制交叉軸方向的對齊（預設為垂直）。',
  },
  {
    id: 'css-1-q4',
    quizId: 'css-1',
    topic: 'css',
    difficulty: 'easy',
    text: 'position: absolute 的定位基準是什麼？',
    options: [
      '相對於瀏覽器視窗',
      '相對於文件根元素',
      '相對於父元素',
      '相對於最近的 position 不為 static 的祖先元素',
    ],
    answer: 3,
    explanation:
      'position: absolute 讓元素脫離文件流，相對於最近的 position 不為 static（relative、absolute、fixed、sticky）的祖先元素定位。若沒有則相對於 <html>。',
  },
  {
    id: 'css-1-q5',
    quizId: 'css-1',
    topic: 'css',
    difficulty: 'easy',
    text: 'z-index 在什麼條件下有效？',
    options: [
      '只有 position 不為 static 的元素，z-index 才有效',
      '所有元素都可以使用 z-index',
      'z-index 只在 flex 容器中有效',
      'z-index 需要搭配 opacity 使用',
    ],
    answer: 0,
    explanation:
      'z-index 只對 position 為 relative、absolute、fixed、sticky 的元素有效。position: static（預設值）的元素設定 z-index 無效。',
  },
  {
    id: 'css-1-q6',
    quizId: 'css-1',
    topic: 'css',
    difficulty: 'easy',
    text: 'CSS 中的 em 和 rem 有什麼差異？',
    options: [
      '完全相同',
      'em 相對於父元素的字體大小，rem 相對於根元素（html）的字體大小',
      'rem 相對於父元素，em 相對於根元素',
      '兩者都相對於視窗大小',
    ],
    answer: 1,
    explanation:
      'em 是相對單位，基於父元素的 font-size，巢狀時會疊加。rem（root em）始終基於根元素（<html>）的 font-size，通常是 16px，更容易預測。',
  },

  // ─────────────────────────────────────────
  // CSS 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'css-2-q1',
    quizId: 'css-2',
    topic: 'css',
    difficulty: 'easy',
    text: 'CSS 選擇器的優先順序（由高到低）為何？',
    options: [
      'id > class > tag > inline',
      'class > id > tag > inline',
      'inline > id > class > tag',
      'tag > class > id > inline',
    ],
    answer: 2,
    explanation:
      'CSS 優先順序：inline style > id 選擇器 > class/屬性/偽類選擇器 > tag/偽元素選擇器。!important 可覆蓋所有，但應避免濫用。',
  },
  {
    id: 'css-2-q2',
    quizId: 'css-2',
    topic: 'css',
    difficulty: 'easy',
    text: 'display: flex 和 display: inline-flex 的差異是什麼？',
    options: [
      '完全相同',
      'flex 只能用於水平佈局',
      'inline-flex 效能更好',
      'flex 讓容器變為 block 級，inline-flex 讓容器變為 inline 級，但內部都是 flex 佈局',
    ],
    answer: 3,
    explanation:
      'display: flex 讓容器本身是 block 級元素（佔滿整行），display: inline-flex 讓容器本身是 inline 元素（只佔內容大小）。兩者內部的 flex 行為相同。',
  },
  {
    id: 'css-2-q3',
    quizId: 'css-2',
    topic: 'css',
    difficulty: 'easy',
    text: 'CSS transition 和 animation 的主要差異是什麼？',
    options: [
      'transition 需要狀態改變觸發，animation 可以自動播放和循環',
      '完全相同',
      'animation 只能用於 transform',
      'transition 效能更好',
    ],
    answer: 0,
    explanation:
      'transition 在屬性值改變時（如 hover）產生過渡效果，只有開始和結束兩個狀態。animation 使用 @keyframes 定義多個狀態，可自動播放、循環、反向。',
  },
  {
    id: 'css-2-q4',
    quizId: 'css-2',
    topic: 'css',
    difficulty: 'easy',
    text: 'CSS 變數（Custom Properties）如何定義和使用？',
    code: ':root {\n  --primary-color: #3498db;\n}\n.button {\n  background: ???\n}',
    options: [
      'background: $primary-color',
      'background: var(--primary-color)',
      'background: @primary-color',
      'background: --primary-color',
    ],
    answer: 1,
    explanation:
      'CSS 變數用 --variable-name 定義，用 var(--variable-name) 使用。通常在 :root 定義全域變數，也可在特定選擇器定義局部變數。',
  },
  {
    id: 'css-2-q5',
    quizId: 'css-2',
    topic: 'css',
    difficulty: 'easy',
    text: '如何用 CSS 讓一個 div 在頁面上水平垂直置中？',
    options: [
      'margin: center',
      'position: center',
      'display: flex; justify-content: center; align-items: center（在父元素上）',
      'text-align: center; vertical-align: middle',
    ],
    answer: 2,
    explanation:
      '最常見的置中方式是在父元素加上 display: flex; justify-content: center; align-items: center。也可用 grid + place-items: center 或 position: absolute + transform。',
  },
  {
    id: 'css-2-q6',
    quizId: 'css-2',
    topic: 'css',
    difficulty: 'easy',
    text: 'media query 的用途是什麼？',
    code: '@media (max-width: 768px) {\n  .sidebar { display: none; }\n}',
    options: [
      '播放媒體檔案',
      '偵測使用者的瀏覽器',
      '載入不同的 CSS 檔案',
      '根據裝置特性（螢幕寬度、方向等）套用不同的 CSS 樣式',
    ],
    answer: 3,
    explanation:
      'media query 讓你根據螢幕尺寸、解析度、方向等條件套用不同樣式，是響應式設計（RWD）的核心工具。',
  },

  // ─────────────────────────────────────────
  // CSS 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'css-3-q1',
    quizId: 'css-3',
    topic: 'css',
    difficulty: 'medium',
    text: 'CSS Grid 和 Flexbox 的主要差異是什麼？',
    options: [
      'Flexbox 是一維佈局（一行或一列），Grid 是二維佈局（同時控制行和列）',
      'Grid 只能用於水平排列',
      'Grid 效能比 Flexbox 差',
      '兩者完全相同',
    ],
    answer: 0,
    explanation:
      'Flexbox 適合一維佈局（沿單一軸排列元素）。Grid 適合二維佈局（同時控制行列），更適合整體頁面結構。實際上兩者可以搭配使用。',
  },
  {
    id: 'css-3-q2',
    quizId: 'css-3',
    topic: 'css',
    difficulty: 'medium',
    text: 'Stacking Context（堆疊上下文）是什麼？何時會建立新的堆疊上下文？',
    options: [
      '任何元素都在同一個堆疊上下文',
      'position 不為 static 且 z-index 不為 auto 的元素，或是 opacity < 1、transform 等屬性會建立新的堆疊上下文',
      '只有 z-index 才會建立堆疊上下文',
      '堆疊上下文只有一個',
    ],
    answer: 1,
    explanation:
      '建立新堆疊上下文的條件包含：position 且 z-index 不為 auto、opacity < 1、transform、filter 不為 none 等。堆疊上下文內的 z-index 只與同一上下文的元素比較。',
  },
  {
    id: 'css-3-q3',
    quizId: 'css-3',
    topic: 'css',
    difficulty: 'medium',
    text: 'BFC（Block Formatting Context）可以解決什麼問題？',
    options: [
      '讓元素變透明',
      '建立新的 CSS 層',
      '清除浮動、防止 margin collapse、隔離元素避免與外部浮動重疊',
      '讓元素 display: block',
    ],
    answer: 2,
    explanation:
      'BFC 是獨立的渲染區塊，可以：包含浮動子元素（清除浮動）、防止父子 margin collapse、避免與浮動元素重疊。觸發 BFC 的方式包含 overflow: hidden、display: flex 等。',
  },
  {
    id: 'css-3-q4',
    quizId: 'css-3',
    topic: 'css',
    difficulty: 'medium',
    text: 'CSS 的 will-change 屬性用途是什麼？',
    code: '.animated {\n  will-change: transform;\n}',
    options: [
      '定義 CSS 動畫',
      '防止樣式被修改',
      '監聽 CSS 屬性變化',
      '提示瀏覽器某個元素即將發生的變化，讓瀏覽器提前優化（如建立獨立的合成層）',
    ],
    answer: 3,
    explanation:
      'will-change 告訴瀏覽器哪個屬性即將變化，讓瀏覽器提前進行優化（如將元素提升到 GPU 合成層）。應謹慎使用，過度使用會消耗大量記憶體。',
  },
  {
    id: 'css-3-q5',
    quizId: 'css-3',
    topic: 'css',
    difficulty: 'medium',
    text: 'CSS 中 contain 屬性的用途是什麼？',
    options: [
      '限制元素的渲染作用域，讓瀏覽器只重新計算受影響的範圍，提升效能',
      '限制元素的大小',
      '防止內容溢出',
      '設定 overflow: hidden',
    ],
    answer: 0,
    explanation:
      'contain 讓瀏覽器知道元素的子樹與外部獨立，發生變化時只需重新計算該元素內部，不影響外部佈局，可顯著提升大型應用的渲染效能。',
  },
  {
    id: 'css-3-q6',
    quizId: 'css-3',
    topic: 'css',
    difficulty: 'medium',
    text: 'CSS 選擇器 :is() 和 :where() 的差異是什麼？',
    code: ':is(header, main, footer) p { color: red }\n:where(header, main, footer) p { color: red }',
    options: [
      '完全相同',
      ':is() 的優先順序取決於其中最高的選擇器，:where() 的優先順序永遠為 0',
      ':where() 比 :is() 效能更好',
      ':is() 只支援現代瀏覽器',
    ],
    answer: 1,
    explanation:
      ':is() 的優先順序取決於參數中最高的選擇器優先順序。:where() 的優先順序始終為 0（零優先順序），更容易被覆蓋，適合建立可覆蓋的基礎樣式。',
  },
  {
    id: 'css-3-q7',
    quizId: 'css-3',
    topic: 'css',
    difficulty: 'medium',
    text: 'CSS 中 transform 為什麼比改變 top/left 效能更好？',
    options: [
      '語法更簡短',
      'transform 不觸發重排（reflow），直接在合成層進行，由 GPU 處理',
      '以上 B 和 C 都是原因',
      'transform 的動畫更流暢',
    ],
    answer: 2,
    explanation:
      'transform 不影響文件流，不觸發重排和重繪，直接在 GPU 合成層處理，動畫更流暢且效能更好。改變 top/left 需要重新計算佈局（reflow），成本高。',
  },
  {
    id: 'css-3-q8',
    quizId: 'css-3',
    topic: 'css',
    difficulty: 'medium',
    text: 'CSS 的 clamp() 函式用途是什麼？',
    code: 'font-size: clamp(1rem, 2.5vw, 2rem)',
    options: [
      '設定顏色範圍',
      '限制動畫時間',
      '計算元素大小',
      '設定有最小值和最大值限制的響應式數值',
    ],
    answer: 3,
    explanation:
      'clamp(min, ideal, max) 讓值在最小值和最大值之間響應式縮放。此例字體大小最小 1rem，最大 2rem，中間根據視窗寬度（2.5vw）動態調整，無需 media query。',
  },

  // ─────────────────────────────────────────
  // 瀏覽器 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'browser-1-q1',
    quizId: 'browser-1',
    topic: 'browser',
    difficulty: 'easy',
    text: '瀏覽器的關鍵渲染路徑（Critical Rendering Path）順序為何？',
    options: [
      'HTML 解析（DOM）→ CSS 解析（CSSOM）→ Render Tree → Layout → Paint',
      'JavaScript → HTML 解析 → CSS 解析 → 渲染',
      'Paint → Layout → Render Tree → DOM → CSSOM',
      'CSS 解析 → HTML 解析 → Layout → Paint',
    ],
    answer: 0,
    explanation:
      '瀏覽器渲染步驟：解析 HTML 建立 DOM → 解析 CSS 建立 CSSOM → 合併成 Render Tree → Layout（計算位置大小）→ Paint（繪製像素）→ Composite（合成層）。',
  },
  {
    id: 'browser-1-q2',
    quizId: 'browser-1',
    topic: 'browser',
    difficulty: 'easy',
    text: '什麼是 CORS（跨來源資源共享）？',
    options: [
      '一種快取機制',
      '允許或拒絕來自不同來源的 HTTP 請求的瀏覽器安全機制',
      '一種壓縮演算法',
      '瀏覽器的 Cookie 管理機制',
    ],
    answer: 1,
    explanation:
      'CORS 是瀏覽器的安全機制，基於同源政策（Same-Origin Policy）。當前端向不同來源（協議、域名、端口不同）發請求時，瀏覽器會先確認伺服器是否允許此跨域請求。',
  },
  {
    id: 'browser-1-q3',
    quizId: 'browser-1',
    topic: 'browser',
    difficulty: 'easy',
    text: 'DOMContentLoaded 和 load 事件的差異是什麼？',
    options: [
      '完全相同',
      'load 先觸發，DOMContentLoaded 後觸發',
      'DOMContentLoaded 在 HTML 解析完成後觸發，load 在所有資源（圖片、CSS 等）載入完成後觸發',
      'DOMContentLoaded 只在 Chrome 中有效',
    ],
    answer: 2,
    explanation:
      'DOMContentLoaded 在 HTML 解析並建立 DOM 後觸發，不等圖片等資源。load 事件等所有資源（圖片、樣式表、腳本）都載入完成後才觸發，通常較慢。',
  },
  {
    id: 'browser-1-q4',
    quizId: 'browser-1',
    topic: 'browser',
    difficulty: 'easy',
    text: '什麼是 Cookie 的 HttpOnly 屬性？',
    options: [
      'Cookie 只能透過 HTTP 協議傳送',
      'Cookie 只能儲存純文字',
      'Cookie 只在 HTTP 下有效，HTTPS 下無效',
      'Cookie 無法被 JavaScript 存取，只能被 HTTP 請求使用，防止 XSS 攻擊竊取',
    ],
    answer: 3,
    explanation:
      'HttpOnly Cookie 無法被 JavaScript 的 document.cookie 存取，只能在 HTTP/HTTPS 請求中傳送。這讓攻擊者即使成功執行 XSS，也無法竊取 session cookie。',
  },
  {
    id: 'browser-1-q5',
    quizId: 'browser-1',
    topic: 'browser',
    difficulty: 'easy',
    text: '瀏覽器的 Event Loop 中，Microtask 和 Macrotask 的執行順序為何？',
    options: [
      '每個 Macrotask 執行完後，清空所有 Microtask，再執行下一個 Macrotask',
      'Macrotask → Microtask',
      'Microtask 和 Macrotask 交替執行',
      '同時執行',
    ],
    answer: 0,
    explanation:
      'Event Loop 每次執行一個 Macrotask（setTimeout、setInterval）後，會清空整個 Microtask 佇列（Promise.then、queueMicrotask）再繼續。Microtask 比 Macrotask 優先。',
  },
  {
    id: 'browser-1-q6',
    quizId: 'browser-1',
    topic: 'browser',
    difficulty: 'easy',
    text: '什麼是 XSS（跨站腳本攻擊）？如何防範？',
    options: [
      '竊取 Cookie 的攻擊，用 HTTPS 防範',
      '攻擊者注入惡意腳本在其他使用者的瀏覽器執行，用 CSP 和對輸出內容 Escape 防範',
      '暴力破解密碼的攻擊，用強密碼防範',
      '偽造請求的攻擊，用 CSRF Token 防範',
    ],
    answer: 1,
    explanation:
      'XSS 攻擊者在網頁注入惡意腳本，當其他使用者瀏覽時執行。防範方式：對輸出內容進行 HTML Escape、設定 Content Security Policy（CSP）、使用 HttpOnly Cookie。',
  },

  // ─────────────────────────────────────────
  // 瀏覽器 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'browser-2-q1',
    quizId: 'browser-2',
    topic: 'browser',
    difficulty: 'medium',
    text: '瀏覽器的 Reflow（重排）和 Repaint（重繪）有什麼差異？',
    options: [
      '完全相同',
      'Repaint 比 Reflow 耗費更多資源',
      'Reflow 重新計算佈局（位置和大小），Repaint 重新繪製外觀但不影響佈局；Reflow 一定觸發 Repaint',
      'Reflow 只影響被修改的元素',
    ],
    answer: 2,
    explanation:
      'Reflow 在元素的幾何屬性（大小、位置、邊距）改變時觸發，需重新計算整個佈局，效能開銷大。Repaint 只改變外觀（顏色、背景），不影響佈局，開銷較小。Reflow 必然引發 Repaint。',
  },
  {
    id: 'browser-2-q2',
    quizId: 'browser-2',
    topic: 'browser',
    difficulty: 'medium',
    text: '什麼是 CSP（Content Security Policy）？',
    options: [
      '一種 CSS 優化技術',
      '跨站請求防護機制',
      '瀏覽器的快取策略',
      'HTTP 標頭，讓伺服器告訴瀏覽器哪些資源來源是可信任的，防止 XSS 和資料注入攻擊',
    ],
    answer: 3,
    explanation:
      'CSP 透過 HTTP 標頭（Content-Security-Policy）告訴瀏覽器允許載入哪些來源的資源。可以限制 script、style、image 的來源，有效防止 XSS 攻擊。',
  },
  {
    id: 'browser-2-q3',
    quizId: 'browser-2',
    topic: 'browser',
    difficulty: 'medium',
    text: 'requestAnimationFrame 相比 setTimeout 有什麼優點？',
    options: [
      '與瀏覽器刷新率同步（通常 60fps），頁面不可見時暫停，動畫更流暢且省電',
      '執行速度更快',
      '可以設定精確的執行時間',
      '支援更多回呼函式',
    ],
    answer: 0,
    explanation:
      'requestAnimationFrame 在瀏覽器下次重繪前執行，與螢幕刷新率同步。當頁面隱藏時會暫停，節省資源。setTimeout 的執行時機不精確，不建議用於動畫。',
  },
  {
    id: 'browser-2-q4',
    quizId: 'browser-2',
    topic: 'browser',
    difficulty: 'medium',
    text: '瀏覽器的 HTTP 快取機制中，Cache-Control: no-cache 和 no-store 的差異為何？',
    options: [
      '完全相同',
      'no-cache 快取但每次使用前驗證是否過期；no-store 完全不快取',
      'no-store 允許快取，no-cache 不允許',
      '兩者都完全不快取',
    ],
    answer: 1,
    explanation:
      'no-cache 允許快取但每次使用前必須向伺服器驗證（可能收到 304 Not Modified）。no-store 完全不儲存回應，每次都要重新請求，適合敏感資料。',
  },
  {
    id: 'browser-2-q5',
    quizId: 'browser-2',
    topic: 'browser',
    difficulty: 'medium',
    text: 'Web Worker 的主要用途是什麼？',
    options: [
      '建立多個瀏覽器視窗',
      '處理 HTTP 請求',
      '在背景執行緒執行 JavaScript，不阻塞主執行緒的 UI 渲染',
      '管理 LocalStorage',
    ],
    answer: 2,
    explanation:
      'JavaScript 是單執行緒的，耗時計算會阻塞 UI。Web Worker 在背景執行緒運行，透過訊息傳遞（postMessage）與主執行緒溝通，讓耗時任務不影響使用者體驗。',
  },
  {
    id: 'browser-2-q6',
    quizId: 'browser-2',
    topic: 'browser',
    difficulty: 'medium',
    text: '什麼是 CSRF（跨站請求偽造）攻擊？如何防範？',
    options: [
      '注入 JavaScript 的攻擊，用 CSP 防範',
      '暴力破解 API 的攻擊，用速率限制防範',
      '竊取 Cookie 的攻擊，用 HTTPS 防範',
      '誘使已登入的使用者在不知情下發送請求，用 CSRF Token 或 SameSite Cookie 防範',
    ],
    answer: 3,
    explanation:
      'CSRF 誘使已登入使用者點擊連結，向目標網站發出非預期的請求（如轉帳）。防範方式：CSRF Token（驗證請求來源）、SameSite Cookie 屬性、驗證 Origin/Referer 標頭。',
  },
  {
    id: 'browser-2-q7',
    quizId: 'browser-2',
    topic: 'browser',
    difficulty: 'medium',
    text: 'Service Worker 的主要功能是什麼？',
    options: [
      '在瀏覽器背景攔截網路請求，實現離線快取、推播通知等 PWA 功能',
      '處理使用者介面互動',
      '管理 Web Storage',
      '執行 CSS 動畫',
    ],
    answer: 0,
    explanation:
      'Service Worker 是在背景執行的腳本，可以攔截和快取網路請求，讓 Web App 支援離線功能，也支援推播通知（Push Notification）和背景同步，是 PWA 的核心技術。',
  },
  {
    id: 'browser-2-q8',
    quizId: 'browser-2',
    topic: 'browser',
    difficulty: 'medium',
    text: '瀏覽器的同源政策（Same-Origin Policy）定義的「同源」是什麼？',
    options: [
      '相同的域名',
      '協議（protocol）、域名（host）、端口（port）三者都相同',
      '相同的 IP 位址',
      '相同的頂級域名',
    ],
    answer: 1,
    explanation:
      '同源需要協議（http/https）、域名和端口三者完全相同。例如 http://example.com:80 和 https://example.com:443 因為協議和端口不同，屬於不同來源。',
  },

  // ─────────────────────────────────────────
  // 瀏覽器 高級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'browser-3-q1',
    quizId: 'browser-3',
    topic: 'browser',
    difficulty: 'hard',
    text: '以下關於瀏覽器渲染層（Compositing Layer）的描述，何者正確？',
    options: [
      '每個 DOM 元素都是獨立的渲染層',
      '渲染層越多效能越好',
      '特定條件（transform 3D、will-change、video 等）會將元素提升到獨立的 GPU 合成層，可以不觸發 reflow/repaint 直接合成',
      '渲染層只在動畫時有用',
    ],
    answer: 2,
    explanation:
      '瀏覽器將部分元素提升到獨立的合成層（Compositing Layer），由 GPU 處理。這些層的變化（transform、opacity）不需要觸發 reflow 或 repaint，直接在 GPU 合成，動畫更流暢。但層太多會消耗大量記憶體。',
  },
  {
    id: 'browser-3-q2',
    quizId: 'browser-3',
    topic: 'browser',
    difficulty: 'hard',
    text: 'HTTP/2 相比 HTTP/1.1 解決了什麼核心問題？',
    options: [
      '加密傳輸',
      '支援 WebSocket',
      '減少 Cookie 大小',
      '解決 Head-of-Line Blocking，支援多工（Multiplexing）讓多個請求在同一 TCP 連線並行傳輸',
    ],
    answer: 3,
    explanation:
      'HTTP/1.1 有 Head-of-Line Blocking：同一連線的請求必須依序等待回應。HTTP/2 引入二進制分幀，讓多個請求/回應可以在同一 TCP 連線交錯傳輸（Multiplexing），大幅提升效能。',
  },
  {
    id: 'browser-3-q3',
    quizId: 'browser-3',
    topic: 'browser',
    difficulty: 'hard',
    text: '以下關於 JavaScript 記憶體洩漏的常見原因，何者正確？',
    options: [
      '未清除的定時器/事件監聽、閉包持有大物件參考、DOM 元素已移除但仍有 JS 參考',
      '使用太多變數',
      '使用 const 宣告變數',
      '使用太多 Promise',
    ],
    answer: 0,
    explanation:
      '常見記憶體洩漏：1. setInterval/setTimeout 未清除；2. 事件監聽未移除（removeEventListener）；3. 閉包意外持有大物件的參考；4. 已從 DOM 移除的節點仍被 JS 變數參考。',
  },
  {
    id: 'browser-3-q4',
    quizId: 'browser-3',
    topic: 'browser',
    difficulty: 'hard',
    text: '什麼是 Long Task？如何偵測和優化？',
    options: [
      '執行超過 1 秒的任務',
      '執行超過 50ms 的 JavaScript 任務，會阻塞主執行緒造成頁面卡頓，可用 PerformanceObserver 偵測，用任務分割（task splitting）優化',
      'Long Task 只發生在動畫中',
      'Long Task 可以用 Web Worker 完全解決',
    ],
    answer: 1,
    explanation:
      'Long Task 定義為超過 50ms 的主執行緒任務，會阻塞使用者互動（點擊、輸入無回應）。可用 PerformanceObserver + longtasks 偵測。優化方式：將大任務拆成小任務（setTimeout 0 讓出控制權）或移到 Web Worker。',
  },
  {
    id: 'browser-3-q5',
    quizId: 'browser-3',
    topic: 'browser',
    difficulty: 'hard',
    text: '以下關於 Web Vitals 核心指標的描述，何者正確？',
    options: [
      '只有 LCP 重要',
      'Web Vitals 只影響行動裝置',
      'LCP（最大內容渲染）、FID/INP（互動延遲）、CLS（累計佈局偏移）是 Google 衡量使用者體驗的核心指標',
      'Web Vitals 和 SEO 無關',
    ],
    answer: 2,
    explanation:
      'Core Web Vitals：LCP（Largest Contentful Paint）衡量載入效能（目標 < 2.5s）；INP（Interaction to Next Paint）衡量互動響應（目標 < 200ms）；CLS（Cumulative Layout Shift）衡量視覺穩定性（目標 < 0.1）。這些指標影響 Google 搜尋排名。',
  },
  {
    id: 'browser-3-q6',
    quizId: 'browser-3',
    topic: 'browser',
    difficulty: 'hard',
    text: 'Intersection Observer API 相比監聽 scroll 事件有什麼優勢？',
    options: [
      '功能更多',
      '語法更簡單',
      '瀏覽器支援度更廣',
      '在主執行緒之外非同步觀察元素的可見性變化，不需要監聽 scroll 事件，效能更好且不觸發 reflow',
    ],
    answer: 3,
    explanation:
      'scroll 事件在主執行緒觸發，每次都需要呼叫 getBoundingClientRect() 讀取佈局資訊（觸發 reflow），容易造成效能問題。Intersection Observer 非同步觀察，瀏覽器在適當時機計算，不阻塞主執行緒。',
  },

  // ─────────────────────────────────────────
  // Vue 初級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'vue-1-q1',
    quizId: 'vue-1',
    topic: 'vue',
    difficulty: 'easy',
    text: '下列哪個是正確的 ref 值修改方式？',
    code: 'const count = ref(0)',
    options: ['count.value = 1', 'count = 1', 'ref.count = 1', 'count.set(1)'],
    answer: 0,
    explanation:
      'ref 包裹的值必須透過 .value 存取和修改。count 是 const 宣告的 Ref 物件，直接對 count 賦值會報錯，正確寫法是 count.value = 1。',
  },
  {
    id: 'vue-1-q2',
    quizId: 'vue-1',
    topic: 'vue',
    difficulty: 'easy',
    text: 'v-if 和 v-show 的主要差異是什麼？',
    options: [
      'v-if 只能用在 HTML 元素，v-show 也能用在 component',
      'v-if 條件式新增/移除 DOM，v-show 只切換 display CSS 樣式',
      'v-show 的渲染效能比 v-if 差',
      'v-if 不支援 else，v-show 支援',
    ],
    answer: 1,
    explanation:
      'v-if 為 false 時會把 DOM 元素完全移除，切換成本高，但初始為 false 時不渲染。v-show 永遠渲染 DOM，只切換 display:none，頻繁切換時效能較好。',
  },
  {
    id: 'vue-1-q3',
    quizId: 'vue-1',
    topic: 'vue',
    difficulty: 'easy',
    text: '關於 v-for 的 :key，下列說明何者正確？',
    code: '<li v-for="item in items" :key="item.id">{{ item.name }}</li>',
    options: [
      ':key 是可選的，不加也不影響功能',
      ':key 必須使用陣列 index，不能用其他值',
      ':key 幫助 Vue 識別每個節點的身份，建議使用唯一且穩定的 id',
      ':key 只有在清單會排序時才需要',
    ],
    answer: 2,
    explanation:
      ':key 讓 Vue 能追蹤每個節點的身份，在清單更新時最小化 DOM 操作。不加 key Vue 會警告，且可能產生渲染錯誤。使用 index 作為 key 在清單順序會改變時會有問題，建議使用唯一 id。',
  },
  {
    id: 'vue-1-q4',
    quizId: 'vue-1',
    topic: 'vue',
    difficulty: 'easy',
    text: ':href="url" 是哪個指令的縮寫？',
    options: [
      'v-on:href="url"',
      'v-slot:href="url"',
      'v-model:href="url"',
      'v-bind:href="url"',
    ],
    answer: 3,
    explanation:
      'v-bind 用來動態綁定 HTML 屬性，縮寫是冒號 :。v-on 是事件監聽（縮寫 @），v-model 是雙向綁定，v-slot 是插槽。',
  },
  {
    id: 'vue-1-q5',
    quizId: 'vue-1',
    topic: 'vue',
    difficulty: 'easy',
    text: '下列哪個寫法能正確監聽按鈕的點擊事件？',
    options: [
      '<button @click="handleClick">送出</button>',
      '<button v-click="handleClick">送出</button>',
      '<button v-on-click="handleClick">送出</button>',
      '<button :click="handleClick">送出</button>',
    ],
    answer: 0,
    explanation:
      '@click 是 v-on:click 的縮寫，是 Vue 監聽 DOM 事件的標準寫法。v-click 不存在，:click 是 v-bind:click（屬性綁定），都不正確。',
  },
  {
    id: 'vue-1-q6',
    quizId: 'vue-1',
    topic: 'vue',
    difficulty: 'easy',
    text: 'computed 和 method 最大的差異是什麼？',
    options: [
      'computed 只能回傳字串，method 可以回傳任何型別',
      'computed 有快取，依賴的響應式資料不變就不重新計算；method 每次呼叫都執行',
      'method 不能接受參數，computed 可以',
      'computed 不能在 template 中使用',
    ],
    answer: 1,
    explanation:
      'computed 基於響應式依賴快取，依賴不變直接回傳快取值，效能更好。method 每次在 template 被呼叫都會執行。需要帶參數的計算用 method，純粹衍生狀態用 computed。',
  },

  // ─────────────────────────────────────────
  // Vue 初級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'vue-2-q1',
    quizId: 'vue-2',
    topic: 'vue',
    difficulty: 'easy',
    text: '在 <script setup> 的子元件中，如何存取父元件傳入的 name prop？',
    code: "const props = defineProps<{ name: string; age: number }>()",
    options: ['defineProps.name', 'this.props.name', 'props.name', '$props.name'],
    answer: 2,
    explanation:
      'defineProps() 回傳一個 props 物件，直接用 props.name 存取。在 <script setup> 中沒有 this，$props 是 Options API 的寫法。',
  },
  {
    id: 'vue-2-q2',
    quizId: 'vue-2',
    topic: 'vue',
    difficulty: 'easy',
    text: '在 <script setup> 中，子元件要向父元件發出事件，正確寫法是？',
    options: [
      'this.$emit("change", value)',
      'props.emit("change", value)',
      'emitEvent("change", value)',
      'const emit = defineEmits(["change"]); emit("change", value)',
    ],
    answer: 3,
    explanation:
      '<script setup> 中沒有 this，需要用 defineEmits 宣告事件，它回傳 emit 函式再呼叫。this.$emit 是 Options API 的寫法。',
  },
  {
    id: 'vue-2-q3',
    quizId: 'vue-2',
    topic: 'vue',
    difficulty: 'easy',
    text: '關於 v-model，下列說明何者正確？',
    options: [
      'v-model 是 :modelValue 和 @update:modelValue 的語法糖',
      'v-model 只能用在原生 input 元素，不能用在自訂元件',
      'v-model 和 :value 的作用完全相同',
      'v-model 只支援字串型別的資料',
    ],
    answer: 0,
    explanation:
      'v-model 展開後等同於 :modelValue="val" @update:modelValue="val = $event"，可用於原生元素和自訂元件。:value 只做單向綁定，沒有更新回父元件的機制。',
  },
  {
    id: 'vue-2-q4',
    quizId: 'vue-2',
    topic: 'vue',
    difficulty: 'easy',
    text: 'slot 的主要用途是什麼？',
    options: [
      '用來定義元件的 CSS 樣式',
      '讓父元件可以向子元件傳入 template 內容',
      '用來管理元件的響應式狀態',
      '取代 props 傳遞資料',
    ],
    answer: 1,
    explanation:
      'slot 讓元件更有彈性，父元件可以插入自訂 template 到子元件的指定位置。props 傳遞資料，slot 傳遞 template 結構，兩者用途不同。',
  },
  {
    id: 'vue-2-q5',
    quizId: 'vue-2',
    topic: 'vue',
    difficulty: 'easy',
    text: 'Vue 父子元件的資料流向是？',
    options: [
      '父子元件都可以直接修改對方的資料',
      '子元件可以直接修改 props，但父元件不能直接修改子元件狀態',
      'props 向下（父→子），emit 向上（子→父），單向資料流',
      '只有父元件能傳資料，子元件無法回傳',
    ],
    answer: 2,
    explanation:
      'Vue 採用單向資料流：props 從父傳子，子元件不應直接修改 props，需要透過 emit 通知父元件更新。這讓資料流向可預測，方便 debug。',
  },
  {
    id: 'vue-2-q6',
    quizId: 'vue-2',
    topic: 'vue',
    difficulty: 'easy',
    text: '在 <script setup> 中，要取得 DOM 元素的參考，正確寫法是？',
    code: '<!-- template: <input ref="inputEl" /> -->',
    options: [
      'const inputEl = document.querySelector("input")',
      'const inputEl = $refs.inputEl',
      'const inputEl = useRef<HTMLInputElement>(null)',
      'const inputEl = ref<HTMLInputElement | null>(null)',
    ],
    answer: 3,
    explanation:
      'Vue 的 template ref 需要在 script 中宣告一個同名的 ref（名稱必須和 template 的 ref 屬性相同）。useRef 是 React 的 API，$refs 是 Options API 的寫法。',
  },

  // ─────────────────────────────────────────
  // Vue 中級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'vue-3-q1',
    quizId: 'vue-3',
    topic: 'vue',
    difficulty: 'medium',
    text: 'watch 和 watchEffect 最大的差異是什麼？',
    options: [
      'watch 需要明確指定監聽來源，watchEffect 自動追蹤函式內用到的響應式資料',
      'watchEffect 只能監聽 ref，watch 可以監聽任何響應式資料',
      'watchEffect 是 Vue 2 的 API，watch 是 Vue 3 的',
      'watch 不能監聽 computed，watchEffect 可以',
    ],
    answer: 0,
    explanation:
      'watch 需要明確傳入要監聽的來源（ref/reactive/getter），且預設懶執行（第一次不執行）。watchEffect 立即執行並自動收集依賴，適合副作用。',
  },
  {
    id: 'vue-3-q2',
    quizId: 'vue-3',
    topic: 'vue',
    difficulty: 'medium',
    text: 'onMounted 的 callback 在什麼時機執行？',
    options: [
      '元件的 <script setup> 開始執行時',
      '元件的 DOM 已掛載到頁面之後',
      'template 第一次被編譯時',
      'ref() 的值第一次被讀取時',
    ],
    answer: 1,
    explanation:
      'onMounted 在元件完成初次渲染且 DOM 已插入頁面後執行，此時可以安全操作 DOM 或 template ref。若需要在 DOM 掛載前執行則用 onBeforeMount。',
  },
  {
    id: 'vue-3-q3',
    quizId: 'vue-3',
    topic: 'vue',
    difficulty: 'medium',
    text: '以上程式碼執行後，console.log 輸出什麼？',
    code: 'const state = reactive({ count: 0 })\nconst { count } = state\ncount++\nconsole.log(state.count)',
    options: ['1', 'NaN', '0', 'Error'],
    answer: 2,
    explanation:
      '直接解構 reactive 物件會讓 count 變成普通的 number，失去與 state 的響應性連結。count++ 只修改局部變數，state.count 仍為 0。要保持響應性需用 toRefs(state)。',
  },
  {
    id: 'vue-3-q4',
    quizId: 'vue-3',
    topic: 'vue',
    difficulty: 'medium',
    text: '在元件中使用 Pinia store 時，為什麼 state 和 getters 要用 storeToRefs 解構？',
    options: [
      'storeToRefs 是 TypeScript 的要求，不加會有型別錯誤',
      '不用 storeToRefs 的話，store 的值只能在 setup() 裡讀取',
      'storeToRefs 可以讓 actions 也變成響應式',
      '直接解構會讓值失去響應性，storeToRefs 把它們轉為 ref 保持響應性',
    ],
    answer: 3,
    explanation:
      'Pinia store 的 state 底層是 reactive 物件，直接解構後值失去響應性，template 不會更新。storeToRefs 把 state/getters 包成 ref，解構後仍保持響應性。actions 是普通 function，直接解構沒問題。',
  },
  {
    id: 'vue-3-q5',
    quizId: 'vue-3',
    topic: 'vue',
    difficulty: 'medium',
    text: '下列哪個是 Pinia 相比 Vuex 最主要的改進？',
    options: [
      'Pinia 不需要 mutations，可以直接在 actions 修改 state',
      'Pinia 支援 TypeScript，Vuex 完全不支援',
      'Pinia 只支援 Composition API，不相容 Options API',
      'Pinia 只能建立一個 store，結構更簡潔',
    ],
    answer: 0,
    explanation:
      'Vuex 要求修改 state 必須透過 mutations（同步）和 actions（非同步），造成大量 boilerplate。Pinia 拿掉 mutations，在 actions 裡直接修改 state，更簡潔直覺。',
  },
  {
    id: 'vue-3-q6',
    quizId: 'vue-3',
    topic: 'vue',
    difficulty: 'medium',
    text: '修改 user.value.age 後，watch 的 callback 會執行嗎？',
    code: "const user = ref({ name: 'Vue', age: 3 })\nwatch(user, () => {\n  console.log('changed')\n})\nuser.value.age = 4",
    options: [
      '會，因為 user.value.age 改變了',
      '不會，watch ref 預設不深度追蹤物件內屬性，需要加 { deep: true }',
      '會，ref 自動深度追蹤所有屬性',
      '會報錯，watch 不能監聽包裹物件的 ref',
    ],
    answer: 1,
    explanation:
      'watch 監聽 ref 時，預設只在 .value 本身被替換時觸發（如 user.value = newObj）。修改物件內部屬性不觸發，需加 { deep: true } 才能深度追蹤。watchEffect 則會自動追蹤。',
  },
  {
    id: 'vue-3-q7',
    quizId: 'vue-3',
    topic: 'vue',
    difficulty: 'medium',
    text: 'Vue 3 Composition API 的 Lifecycle hooks 執行順序，哪個是正確的？',
    options: [
      'onMounted → onBeforeMount → onBeforeUnmount → onUnmounted',
      'onCreated → onBeforeMount → onMounted → onDestroyed',
      'onBeforeMount → onMounted → onBeforeUnmount → onUnmounted',
      'onMounted → onCreated → onUnmounted → onBeforeUnmount',
    ],
    answer: 2,
    explanation:
      'Vue 3 的順序：setup() 執行 → onBeforeMount → DOM 渲染 → onMounted → ... → onBeforeUnmount → onUnmounted。Vue 3 沒有 onCreated，setup() 本身等同 created 時機。',
  },
  {
    id: 'vue-3-q8',
    quizId: 'vue-3',
    topic: 'vue',
    difficulty: 'medium',
    text: 'computed 的執行時機是什麼？',
    options: [
      '在 <script setup> 執行時立即計算，之後不再重新計算',
      '每隔一秒自動重新計算一次',
      '每次元件重新渲染都會重新計算',
      '只有 template 用到它，且依賴的響應式資料改變時才重新計算（lazy + cached）',
    ],
    answer: 3,
    explanation:
      'computed 是 lazy 的：第一次被讀取時才計算，之後快取結果。依賴的響應式資料不變就直接回傳快取，變了才重算。這比 method 更適合用於昂貴的衍生計算。',
  },

  // ─────────────────────────────────────────
  // Vue 中級測驗 2
  // ─────────────────────────────────────────
  {
    id: 'vue-4-q1',
    quizId: 'vue-4',
    topic: 'vue',
    difficulty: 'medium',
    text: 'useRouter() 和 useRoute() 的差別是什麼？',
    options: [
      'useRouter() 執行導航（push/replace），useRoute() 讀取當前路由資訊（params/query）',
      'useRouter() 讀取路由資訊，useRoute() 執行導航',
      '兩者功能相同，只是命名慣例不同',
      'useRoute() 只能在 router/index.ts 裡使用',
    ],
    answer: 0,
    explanation:
      'useRouter() 取得 router 實例，用來操作導航（push、replace、go）。useRoute() 取得當前路由的唯讀快照，讀取 params、query、path、meta 等。簡單記：router 是動詞，route 是名詞。',
  },
  {
    id: 'vue-4-q2',
    quizId: 'vue-4',
    topic: 'vue',
    difficulty: 'medium',
    text: '在 router.beforeEach 中，回傳什麼值可以重新導向到另一個頁面？',
    options: [
      'return "redirect:/home"',
      'return { path: "/home" }',
      'return router.push("/home")',
      'return new Route("/home")',
    ],
    answer: 1,
    explanation:
      'beforeEach 回傳路由位置物件 { path: "/home" } 或 { name: "home" } 來重新導向。回傳 false 取消導航，回傳 undefined 或 true 放行。不需要也不應該在 guard 裡呼叫 router.push。',
  },
  {
    id: 'vue-4-q3',
    quizId: 'vue-4',
    topic: 'vue',
    difficulty: 'medium',
    text: '要讀取 /quiz?topic=vue&level=easy 中的 topic 值，正確寫法是？',
    options: [
      'route.params.topic',
      'route.path.topic',
      'route.query.topic',
      'router.query.topic',
    ],
    answer: 2,
    explanation:
      'route.query 對應 URL 的 ? 之後的鍵值對（query string）。route.params 是動態路由參數（如 /user/:id 的 :id）。route.path 是路徑字串，沒有 .topic 屬性。router 是導航實例，沒有 query。',
  },
  {
    id: 'vue-4-q4',
    quizId: 'vue-4',
    topic: 'vue',
    difficulty: 'medium',
    text: 'createWebHistory 和 createWebHashHistory 的差異是什麼？',
    options: [
      'createWebHashHistory URL 較乾淨，createWebHistory URL 含有 # 符號',
      '兩者沒有實質差異，只是命名不同',
      'createWebHistory 只支援 Vue 3，createWebHashHistory 支援 Vue 2 和 3',
      'createWebHistory URL 乾淨但需後端 fallback；createWebHashHistory 的 # 後不送至伺服器，不需後端設定',
    ],
    answer: 3,
    explanation:
      'createWebHistory 使用 HTML5 History API，URL 乾淨（/home），但直接存取時請求送到伺服器，需後端設定 fallback 回傳 index.html。createWebHashHistory 的 # 後的部分不送至伺服器，適合純靜態部署。',
  },
  {
    id: 'vue-4-q5',
    quizId: 'vue-4',
    topic: 'vue',
    difficulty: 'medium',
    text: '關於 Vue composable，下列說明何者正確？',
    options: [
      'composable 是以 use 開頭的函式，封裝並重用 Composition API 邏輯',
      'composable 只能在 <script setup> 中呼叫，不能在普通 .ts 檔案裡定義',
      'composable 等同於 Vue 2 的 mixin，行為完全相同',
      'composable 不能回傳響應式資料，只能回傳普通值',
    ],
    answer: 0,
    explanation:
      'composable 是 Vue 3 封裝可重用邏輯的方式，以 use 開頭（如 useMousePosition、useQuizTimer），可以回傳 ref/computed 等響應式資料。相比 mixin，composable 來源清晰、沒有命名衝突問題。',
  },
  {
    id: 'vue-4-q6',
    quizId: 'vue-4',
    topic: 'vue',
    difficulty: 'medium',
    text: '以下 Navigation Guard 有什麼問題？',
    code: "router.beforeEach((to) => {\n  if (!authStore.isLoggedIn) {\n    return { path: '/auth' }\n  }\n})",
    options: [
      '沒有問題，寫法完全正確',
      '未登入時所有路由都導向 /auth，包含 /auth 本身，造成無限重新導向',
      'beforeEach 不能使用 return，要改用 next()',
      'authStore 不能在 router 設定中使用',
    ],
    answer: 1,
    explanation:
      '當用戶進入 /auth 時，isLoggedIn 為 false，guard 又導回 /auth，形成無限迴圈。正確寫法需排除公開路由：if (!authStore.isLoggedIn && to.path !== "/auth") return { path: "/auth" }。',
  },
  {
    id: 'vue-4-q7',
    quizId: 'vue-4',
    topic: 'vue',
    difficulty: 'medium',
    text: '關於 <RouterLink> 的說明，何者正確？',
    options: [
      '<RouterLink> 只能放在 <nav> 元素內',
      '<RouterLink> 不支援動態路由，動態路由要用 router.push',
      '<RouterLink> 渲染為 <a> 標籤，當路由 active 時自動加上 active class',
      '<RouterLink> 和 <a href> 的行為完全相同',
    ],
    answer: 2,
    explanation:
      '<RouterLink> 渲染成 <a> 標籤，但點擊時不觸發整頁重載，而是透過 Vue Router 切換。當前路由與 to 相符時自動加 router-link-active class，可用 active-class 自訂。也支援物件形式的動態路由：:to="{ name: \'user\', params: { id } }"。',
  },
  {
    id: 'vue-4-q8',
    quizId: 'vue-4',
    topic: 'vue',
    difficulty: 'medium',
    text: '以下哪個寫法使用了路由 Lazy Loading？',
    options: [
      "{ path: '/quiz', component: QuizPage }",
      "{ path: '/quiz', async component: QuizPage }",
      "{ path: '/quiz', component: lazy(QuizPage) }",
      "{ path: '/quiz', component: () => import('@/views/Quiz/QuizPage.vue') }",
    ],
    answer: 3,
    explanation:
      '動態 import() 讓路由元件在第一次進入該頁面時才載入，減少初始 bundle 大小。靜態 import 會把所有元件打包在一起。lazy() 是 React 的 API，Vue 沒有這個函式。',
  },

  // ─────────────────────────────────────────
  // Vue 高級測驗 1
  // ─────────────────────────────────────────
  {
    id: 'vue-5-q1',
    quizId: 'vue-5',
    topic: 'vue',
    difficulty: 'hard',
    text: 'shallowRef 和 ref 有什麼差異？',
    options: [
      'ref 深度追蹤物件內所有屬性；shallowRef 只追蹤 .value 的替換，不追蹤物件內部屬性的變化',
      'shallowRef 只能包裹 primitive 值，ref 可以包裹物件',
      'shallowRef 是 Vue 2 的 API，Vue 3 改用 ref',
      'shallowRef 效能比 ref 差，通常不建議使用',
    ],
    answer: 0,
    explanation:
      'ref 包裹物件時，內部屬性的變化也會觸發響應式更新（深度追蹤）。shallowRef 只在 .value 本身被替換時更新，忽略內部屬性的變化，適合大型資料結構需要手動控制更新的場景，效能較好。',
  },
  {
    id: 'vue-5-q2',
    quizId: 'vue-5',
    topic: 'vue',
    difficulty: 'hard',
    text: '關於 Vue 自訂指令（custom directive），下列何者正確？',
    code: '// 使用：<input v-focus />',
    options: [
      '自訂指令只能透過 app.directive 全域註冊，不能局部使用',
      '可以全域（app.directive）或局部（在元件內宣告 const vFocus = { mounted... }）註冊',
      'v-focus 這樣的自訂指令在 Vue 3 中已被廢棄，應改用 composable',
      '自訂指令的 hook 名稱和 Lifecycle hooks 完全不同，沒有 mounted',
    ],
    answer: 1,
    explanation:
      'Vue 3 自訂指令支援兩種註冊方式：全域（app.directive("focus", {...})）和局部（在 <script setup> 中宣告以 v 開頭的變數，如 const vFocus = { mounted: (el) => el.focus() }）。Directive hooks 包含 mounted、updated、beforeUnmount 等。',
  },
  {
    id: 'vue-5-q3',
    quizId: 'vue-5',
    topic: 'vue',
    difficulty: 'hard',
    text: '以下程式碼中，為什麼 stats 在 saveRecord() 後不會自動更新？',
    code: "const stats = computed(() => {\n  return localStorage.getItem('records')\n})\nfunction saveRecord(data: string) {\n  localStorage.setItem('records', data)\n}",
    options: [
      'computed 不能用在有副作用的操作中',
      'localStorage.getItem 回傳 string，computed 不能處理 string 型別',
      'localStorage 不是響應式資料，Vue 無法偵測它的變化；computed 只追蹤 ref/reactive',
      'saveRecord 需要加 async/await 才能通知 Vue 更新',
    ],
    answer: 2,
    explanation:
      'Vue 的響應性系統只追蹤 ref 和 reactive 包裹的資料，localStorage 是瀏覽器原生 API，Vue 完全不知道它何時改變。解法是加一個版本計數器 ref，computed 讀取它作為依賴，saveRecord 後呼叫 statsVersion.value++ 強制重算。',
  },
  {
    id: 'vue-5-q4',
    quizId: 'vue-5',
    topic: 'vue',
    difficulty: 'hard',
    text: 'Vue 的 <Teleport> 元件的用途是什麼？',
    options: [
      '讓元件在不同頁面之間共享狀態',
      '取代 Vue Router 做頁面切換',
      '讓元件的渲染在 Web Worker 中執行以提升效能',
      '把 template 內容渲染到 DOM 中指定的目標位置，常用於 Modal 或 Toast',
    ],
    answer: 3,
    explanation:
      '<Teleport to="body"> 讓元件的 template 內容渲染到指定的 DOM 節點（如 body），而不是當前元件的 DOM 位置。常用來做 Modal、Toast，避免 CSS z-index 或 overflow 的層疊問題。元件的響應式狀態和 props 仍正常運作。',
  },
  {
    id: 'vue-5-q5',
    quizId: 'vue-5',
    topic: 'vue',
    difficulty: 'hard',
    text: 'provide/inject 的使用場景和限制，下列何者正確？',
    code: "// 祖先元件\nprovide('theme', ref('dark'))\n// 任意深度子元件\nconst theme = inject('theme')",
    options: [
      'provide/inject 可跨任意深度存取，但不建議作為全域狀態管理（全域狀態應用 Pinia）',
      'inject 只能在直接子元件使用，無法跨多層元件',
      'provide/inject 和 props 功能完全相同，只是語法不同',
      'inject 的值永遠是靜態的，不支援響應式',
    ],
    answer: 0,
    explanation:
      'provide/inject 可以跨任意層級傳遞資料，適合元件庫或局部子樹的共享狀態（如主題、語系）。如果 provide 的是 ref，inject 端的值是響應式的。全域狀態管理應用 Pinia，DevTools 支援、可測試性更好。',
  },
  {
    id: 'vue-5-q6',
    quizId: 'vue-5',
    topic: 'vue',
    difficulty: 'hard',
    text: '在 <script setup> 中，以下哪個寫法能讓 defineProps 的型別定義可複用？',
    options: [
      "只能在 defineProps<{ name: string }>() 裡內聯定義，無法抽出",
      "interface Props { name: string }\nconst props = defineProps<Props>()",
      "const props = defineProps(Props) // 直接傳 interface",
      "type Props = { name: string }\nconst props = defineProps(Props())",
    ],
    answer: 1,
    explanation:
      'defineProps 的泛型可以接受外部定義的 interface 或 type，寫法是 defineProps<Props>()。這讓型別定義可以在多個元件中共享或從外部 import。注意泛型內只能使用 TypeScript 型別語法，不能傳入執行期的值。',
  },

  // ─────────────────────────────────────────
  // Vue 初級測驗 3
  // ─────────────────────────────────────────
  {
    id: 'vue-6-q1',
    quizId: 'vue-6',
    topic: 'vue',
    difficulty: 'easy',
    text: '關於 SPA（Single Page Application），下列說明何者正確？',
    options: [
      'SPA 每次切換路由都向伺服器請求新的 HTML 頁面',
      'SPA 不能使用 JavaScript 框架，只能用純 HTML 和 CSS',
      'SPA 只載入一次 HTML，頁面切換透過 JavaScript 動態更新畫面，不觸發整頁重新整理',
      'SPA 的 SEO 效果一定比 MPA（多頁應用）更好',
    ],
    answer: 2,
    explanation:
      'SPA 是指整個應用只有一個 HTML 頁面，由 JavaScript（如 Vue、React）在客戶端動態切換畫面，路由變換不重新請求 HTML。優點是流暢的使用體驗與前後端分離；缺點是首屏載入較慢、SEO 較差，可用 SSR 或 Prerendering 補足。',
  },
  {
    id: 'vue-6-q2',
    quizId: 'vue-6',
    topic: 'vue',
    difficulty: 'easy',
    text: '為什麼 Vue 官方建議不要在同一個元素上同時使用 v-if 和 v-for？',
    options: [
      '語法上不允許，同時使用會造成編譯錯誤',
      'v-for 在 Vue 3 中優先於 v-if，導致每個列表項都進行 v-if 判斷',
      'v-if 和 v-for 作用於同一元素時，v-for 不會執行',
      'Vue 3 中 v-if 優先級高於 v-for，v-if 無法存取 v-for 的 item 變數，應改用 <template v-for> 包裹並在內層使用 v-if',
    ],
    answer: 3,
    explanation:
      'Vue 3 中 v-if 優先級高於 v-for，若寫在同一元素，v-if 先執行時 item 變數還不存在，會造成報錯或非預期行為。正確作法是用 <template v-for="item in items"> 包裹，在內層 <li v-if="item.active"> 判斷，或用 computed 先過濾陣列再 v-for 渲染。',
  },
  {
    id: 'vue-6-q3',
    quizId: 'vue-6',
    topic: 'vue',
    difficulty: 'easy',
    text: '關於 Vue 3 的生命週期，下列說明何者正確？',
    options: [
      'setup() 的執行時機等同 Vue 2 的 created，onMounted 在 DOM 掛載完成後執行，此時可安全操作 DOM',
      'Vue 3 保留了 beforeCreate 和 created 這兩個生命週期 hook',
      'onBeforeMount 在 DOM 掛載完成後執行，onMounted 在資料初始化後執行',
      'onUpdated 只有呼叫 forceUpdate() 後才會觸發',
    ],
    answer: 0,
    explanation:
      'Vue 3 生命週期：setup() 在元件建立時執行，等同 Vue 2 的 created（此時 DOM 尚未掛載）；onBeforeMount 在 DOM 掛載前；onMounted 在 DOM 插入頁面後，可以安全操作 DOM 或 template ref；onUnmounted 在元件銷毀後執行。Vue 3 中 beforeCreate 和 created 已被 setup() 取代。',
  },
  {
    id: 'vue-6-q4',
    quizId: 'vue-6',
    topic: 'vue',
    difficulty: 'easy',
    text: 'Vue 的 nextTick 是用來解決什麼問題？',
    options: [
      'nextTick 讓 Vue 延遲 1 秒後才批次更新 DOM，避免過於頻繁渲染',
      'Vue 更新 DOM 是非同步的，nextTick 讓你在 DOM 完成更新後才執行程式碼，例如讀取更新後的 DOM 尺寸',
      'nextTick 控制 watch 的觸發時機，讓 watcher 在資料更新前先執行',
      'nextTick 是 Pinia 提供的 API，用來等待 store action 執行完成',
    ],
    answer: 1,
    explanation:
      'Vue 的響應式更新是非同步的——資料改變後，Vue 會把 DOM 更新排進下一個「tick」，批次處理多次資料變更再一起更新 DOM。若需要在資料改變後立刻讀取最新的 DOM（如取得元素高度、聚焦 input），就要用 await nextTick() 等 DOM 更新完成。',
  },
  {
    id: 'vue-6-q5',
    quizId: 'vue-6',
    topic: 'vue',
    difficulty: 'easy',
    text: '元件層級很深、不適合用 props 逐層傳遞時，以下哪種方式可讓深層子元件取得祖先元件的資料？',
    options: [
      '在子元件直接讀取 this.$parent.$parent 取得祖先資料',
      '使用 v-model 把資料綁到 HTML 屬性，所有子元件都能讀取',
      '使用 provide/inject：祖先元件用 provide 提供資料，任意深度的子元件用 inject 取得',
      'Props 必須逐層傳遞，Vue 沒有提供其他跨層通信方式',
    ],
    answer: 2,
    explanation:
      'Vue 元件通信主要方式：props/emit 用於父子；provide/inject 用於祖孫或跨多層，祖先 provide("key", value)，子孫 inject("key")，若 provide 的是 ref 則仍具響應性；Pinia store 用於全域跨元件狀態。避免使用 $parent 鏈，因為重構元件結構時很容易壞掉。',
  },
  {
    id: 'vue-6-q6',
    quizId: 'vue-6',
    topic: 'vue',
    difficulty: 'easy',
    text: 'Vue 常用的事件修飾符中，哪個可以阻止 click 事件向上冒泡？',
    options: [
      '@click.prevent',
      '@click.once',
      '@click.self',
      '@click.stop',
    ],
    answer: 3,
    explanation:
      'Vue 事件修飾符封裝了常用的 DOM 事件處理：.stop 呼叫 stopPropagation 阻止冒泡；.prevent 呼叫 preventDefault 阻止預設行為；.once 只觸發一次後自動解綁；.self 只在事件 target 為自身時觸發；.capture 使用捕獲模式。修飾符可鏈式使用，如 @click.stop.prevent。',
  },

  // ─────────────────────────────────────────
  // Vue 中級測驗 3
  // ─────────────────────────────────────────
  {
    id: 'vue-7-q1',
    quizId: 'vue-7',
    topic: 'vue',
    difficulty: 'medium',
    text: '關於虛擬 DOM（Virtual DOM），下列說明何者正確？',
    options: [
      '虛擬 DOM 是 JS 物件形式的 DOM 描述，Vue 透過 diff 演算法比對新舊虛擬 DOM 的差異，再最小化地批次更新真實 DOM',
      '虛擬 DOM 讓所有 DOM 操作都比直接操作真實 DOM 快，沒有例外',
      '虛擬 DOM 是瀏覽器原生提供的 API，Vue 只是呼叫它',
      'Vue 3 已完全移除虛擬 DOM，改用 Signals 機制直接更新 DOM',
    ],
    answer: 0,
    explanation:
      '虛擬 DOM 是用 JS 物件（VNode）描述真實 DOM 的輕量結構。資料更新時，Vue 生成新的虛擬 DOM 樹，用 diff 演算法與舊樹比對找出差異，再批次套用到真實 DOM，避免不必要的 DOM 重繪。並非所有場景都比直接操作快，但它讓框架能安全地批次更新並跨平台渲染（如 SSR）。',
  },
  {
    id: 'vue-7-q2',
    quizId: 'vue-7',
    topic: 'vue',
    difficulty: 'medium',
    text: '下列哪個選項正確描述了 Vue 3 相比 Vue 2 的主要改進？',
    options: [
      'Vue 3 完全移除了 Options API，所有元件必須改用 Composition API',
      'Vue 3 引入 Composition API 與 setup()、改用 Proxy 實現響應式、支援 Tree-shaking，整體效能大幅提升',
      'Vue 3 移除了 TypeScript 支援，回歸純 JavaScript',
      'Vue 3 廢棄了 v-model 和 v-bind，改用 React 風格的 JSX',
    ],
    answer: 1,
    explanation:
      'Vue 3 主要改進：Composition API 讓邏輯複用更容易；改用 ES6 Proxy 解決 Vue 2 無法偵測屬性新增/刪除的問題；Named export 設計支援 Tree-shaking；初始渲染與更新效能提升 1.3–2 倍；同時保留 Options API，舊程式碼可平滑升級。TypeScript 支援也大幅改善。',
  },
  {
    id: 'vue-7-q3',
    quizId: 'vue-7',
    topic: 'vue',
    difficulty: 'medium',
    text: 'Composition API 相比 Options API 最主要的優勢是什麼？',
    options: [
      'Composition API 的執行效能比 Options API 快 10 倍以上',
      'Composition API 強制開發者遵守固定結構，減少寫出壞程式碼的機會',
      '相關邏輯可以集中放在一起並抽取為 composable 複用，避免 Options API 中同一功能邏輯分散在 data/methods/computed 各處的問題',
      'Composition API 是 Vue 3 限定，Vue 2 完全無法使用',
    ],
    answer: 2,
    explanation:
      'Options API 按 data、methods、computed 等選項組織，同一功能的邏輯分散各處，複雜元件難以維護。Composition API 讓相關邏輯集中撰寫，並可抽取為 composable（如 useMousePosition、useQuizTimer）跨元件複用，來源清晰無命名衝突，相比 Vue 2 的 mixin 更好維護。',
  },
  {
    id: 'vue-7-q4',
    quizId: 'vue-7',
    topic: 'vue',
    difficulty: 'medium',
    text: 'Vue 3 為什麼將響應式底層從 Object.defineProperty 換成 Proxy？',
    options: [
      'Proxy 是 Vue 官方開發的 API，執行效能比瀏覽器原生 defineProperty 更好',
      'Object.defineProperty 在 iOS Safari 上有相容性問題',
      'Proxy 不需要遍歷物件屬性，系統設計更簡單',
      'defineProperty 無法偵測屬性新增、刪除及陣列索引直接賦值；Proxy 可攔截所有物件操作，響應式更完整，省去 Vue.set 等補救 API',
    ],
    answer: 3,
    explanation:
      'Vue 2 用 Object.defineProperty 對每個屬性設 getter/setter，有兩個限制：無法偵測屬性的新增和刪除（需要 Vue.set）、陣列索引直接賦值不觸發更新。Vue 3 改用 ES6 Proxy 代理整個物件，可攔截 get、set、deleteProperty 等所有操作，響應式系統更完整，也不需要額外的補救 API。',
  },
  {
    id: 'vue-7-q5',
    quizId: 'vue-7',
    topic: 'vue',
    difficulty: 'medium',
    text: '<KeepAlive> 的作用是什麼？被快取的元件重新顯示時會觸發哪個 hook？',
    options: [
      '快取被包裹元件的實例，切換時不銷毀，保留其狀態；重新顯示時觸發 onActivated 而非 onMounted',
      '讓元件的資料持久存在 localStorage，即使頁面重新整理也不消失',
      '讓元件的 computed 屬性永久快取，不因依賴變化而重算',
      '是 v-show 的替代方案，以更有效率的方式隱藏元素',
    ],
    answer: 0,
    explanation:
      '<KeepAlive> 會保留被包裹元件的 Vue 實例，在元件切換（如 tab 切換、路由切換）時不執行 unmount，保留表單輸入、滾動位置等狀態。被快取的元件新增了 onActivated（重新顯示）和 onDeactivated（被隱藏）兩個 hook，可用來在重新顯示時重新拉取資料。',
  },
  {
    id: 'vue-7-q6',
    quizId: 'vue-7',
    topic: 'vue',
    difficulty: 'medium',
    text: 'Vue 3 支援 Tree-shaking 的主要好處是什麼？',
    options: [
      'Tree-shaking 讓 Vue 在執行時動態移除不需要的元件，降低記憶體使用',
      '打包時，未使用的 Vue 功能（如 Transition、KeepAlive）不會被打包進 bundle，產出體積更小；Vue 2 以全量打包，沒用到的 API 也都包含在內',
      'Tree-shaking 是 TypeScript 的特性，Vue 3 透過完整的 TypeScript 支援間接獲得這個能力',
      'Tree-shaking 讓元件在首次渲染後快取所有計算結果，提升後續渲染效能',
    ],
    answer: 1,
    explanation:
      'Vue 3 改用 Named export（import { ref, computed } from "vue"），打包工具（Vite/Webpack）可以靜態分析哪些 API 被使用，把沒用到的抖掉（Tree-shake）。Vue 2 是 default export 全量包，即使沒用 Transition，它也在 bundle 裡。這讓 Vue 3 的最小 runtime bundle 比 Vue 2 小很多。',
  },
  {
    id: 'vue-7-q7',
    quizId: 'vue-7',
    topic: 'vue',
    difficulty: 'medium',
    text: 'Vue 元件（Component）和插件（Plugin）的主要區別是什麼？',
    options: [
      '元件和插件是同一概念，只是安裝方式不同（import vs app.use）',
      '插件是由多個元件組成的套件，只能包含 UI 元件，不能包含 composable 或 directive',
      '元件封裝 UI 和行為的可重用單元；插件透過 app.use() 全域安裝，可新增全域元件、指令、provide 值等，如 Vue Router 和 Pinia',
      '插件系統是 Vue 2 的設計，Vue 3 已完全用 composable 取代插件',
    ],
    answer: 2,
    explanation:
      '元件是封裝 UI 和邏輯的可重用單位，透過 import 引入局部使用。插件是對整個 Vue 應用的全域擴充，透過 app.use() 安裝，插件的 install(app) 函式可以全域註冊元件（app.component）、指令（app.directive）、提供 inject 值（app.provide）等。Vue Router、Pinia、i18n 都是以插件形式安裝。',
  },
  {
    id: 'vue-7-q8',
    quizId: 'vue-7',
    topic: 'vue',
    difficulty: 'medium',
    text: '以下哪個作法對改善 SPA 首屏載入速度沒有幫助，甚至有負面影響？',
    options: [
      '使用路由 Lazy Loading，讓非首頁元件在需要時才動態載入',
      '啟用 Vite 的 code splitting，把第三方套件和業務程式碼分開打包',
      '使用 SSR 讓伺服器預先渲染首頁 HTML 再回傳給瀏覽器',
      '將所有 JavaScript 以 <script> 標籤放在 <head> 中同步載入，確保執行順序正確',
    ],
    answer: 3,
    explanation:
      '在 <head> 中同步載入 script 會阻塞 HTML 解析，讓瀏覽器必須等 JS 下載並執行完才繼續渲染，嚴重延遲首屏。正確作法是用 defer（下載不阻塞，DOMContentLoaded 前執行）或 async，或把 script 放在 </body> 前。SPA 首屏優化的正確方向：Lazy Loading、Code Splitting、SSR、CDN 加速、Preload 關鍵資源。',
  },
]
