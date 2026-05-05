<script setup lang="ts">
import { useController } from './useController'
import BookmarkCard from './components/BookmarkCard.vue'
import { TOPIC_LABEL } from '@/views/Home/constant'
import { Loading, ConfirmModal } from '@/components/ui'

const {
  isLoading,
  bookmarks,
  selectedTopic,
  selectedDifficulty,
  filteredBookmarks,
  groupedBookmarks,
  groupedTopics,
  availableTopics,
  availableDifficulties,
  handleRemove,
  handleGoHome,
  modalInfo,
} = useController()

const SELECT_STYLE = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888780' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 6px center',
}
</script>

<template>
  <div class="mx-auto max-w-2xl p-5 md:p-6.5 lg:p-8">
    <Loading v-if="isLoading" />

    <div v-else-if="bookmarks.length === 0" class="py-16 text-center">
      <div class="mb-4 text-6xl">📚</div>
      <h1 class="text-logo-title text-text-base mb-1 font-medium">
        還沒有收藏的題目
      </h1>
      <p class="text-subtitle text-text-muted">
        完成測驗後，在結果頁點擊收藏 <br />
        將題目加入複習清單！
      </p>
      <button
        @click="handleGoHome"
        class="bg-primary text-button hover:bg-primary-hover mt-4 h-9 rounded-lg px-4 font-medium text-white"
      >
        來去測驗
      </button>
    </div>

    <template v-else>
      <div
        class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
      >
        <div>
          <h1 class="text-logo-title text-text-base mb-1 font-medium">
            收藏題目
          </h1>
          <p class="text-subtitle text-text-muted">
            共 {{ filteredBookmarks.length }} 題，在面試前快速複習吧！
          </p>
        </div>

        <!-- 篩選器：v-model 直接綁定 ref，不需要 @change 手動更新 -->
        <div class="flex shrink-0 gap-2">
          <select
            v-model="selectedTopic"
            :style="SELECT_STYLE"
            class="border-border bg-card-bg text-button text-text-base flex-1 appearance-none rounded-lg border py-1 pr-6.5 pl-3 outline-none sm:flex-none"
          >
            <option value="all">所有主題</option>
            <option
              v-for="topic in availableTopics"
              :key="topic"
              :value="topic"
            >
              {{ TOPIC_LABEL[topic] }}
            </option>
          </select>

          <select
            v-model="selectedDifficulty"
            :style="SELECT_STYLE"
            class="border-border bg-card-bg text-button text-text-base flex-1 appearance-none rounded-lg border py-1 pr-6.5 pl-3 outline-none sm:flex-none"
          >
            <option
              v-for="opt in availableDifficulties"
              :key="opt.value"
              :value="opt.value"
            >
              {{ opt.label }}
            </option>
          </select>
        </div>
      </div>

      <div v-if="filteredBookmarks.length === 0" class="py-16 text-center">
        <p class="text-label text-text-base mb-1 font-medium">
          沒有符合條件的題目
        </p>
        <p class="text-hint text-text-muted">試著調整篩選條件</p>
      </div>

      <template v-else>
        <div v-for="topic in groupedTopics" :key="topic">
          <div class="mt-4 mb-2 flex items-center first:mt-0">
            <span class="text-hint text-text-muted font-medium">
              {{ TOPIC_LABEL[topic] }}
            </span>
            <span
              class="text-hint text-text-muted ml-2 flex h-5 w-5 items-center justify-center rounded bg-white"
            >
              {{ groupedBookmarks[topic].length }}
            </span>
          </div>
          <BookmarkCard
            v-for="item in groupedBookmarks[topic]"
            :key="item.questionId"
            :item="item"
            @remove="handleRemove"
          />
        </div>
      </template>
    </template>
  </div>

  <ConfirmModal
    v-if="modalInfo"
    :title="modalInfo.title"
    :description="modalInfo.description"
    :confirm-label="modalInfo.confirmLabel"
    @confirm="modalInfo.onConfirm()"
    @cancel="modalInfo = null"
  />
</template>
