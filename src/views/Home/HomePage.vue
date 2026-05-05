<script setup lang="ts">
import { QUIZZES, TAB_OPTIONS, DIFFICULTY_OPTIONS, TOPIC_LABEL } from './constant'
import { useController } from './useController'
import QuizCard from './components/QuizCard.vue'
import StatsSidebar from './components/StatsSidebar.vue'

const {
  isLoggedIn,
  username,
  stats,
  selectedTab,
  selectedDifficulty,
  completedQuizIds,
  groupedQuizzes,
  topics,
  setSelectedTab,
  setSelectedDifficulty,
  toggleTopic,
  isTopicCollapsed,
  isCompleted,
  handleLogin,
  handleStartQuiz,
} = useController()
</script>

<template>
  <div class="mx-auto max-w-6xl">
    <div :class="[isLoggedIn ? 'lg:grid lg:grid-cols-[1fr_300px]' : '']">
      <div class="p-5 md:p-6.5 lg:p-8">
        <div class="mb-6">
          <h1 class="text-logo-title text-text-base mb-1 font-medium">
            {{ isLoggedIn ? `歡迎回來，${username}！` : '測驗你的程式能力' }}
          </h1>
          <p class="text-subtitle text-text-muted">
            {{
              isLoggedIn
                ? '選擇主題，開始今天的練習。'
                : '登入後即可開始練習，提升你的程式能力！'
            }}
          </p>
        </div>

        <div
          v-show="!isLoggedIn"
          class="bg-primary-tint border-border mb-6 flex w-full items-center justify-between rounded-xl border p-3.5"
        >
          <p class="text-label text-text-muted">
            登入後可儲存測驗成績、查看完成進度與個人統計。
          </p>
          <button
            @click="handleLogin"
            class="text-hint bg-primary hover:bg-primary-hover ml-3 h-7 shrink-0 rounded-lg px-2.5 font-medium text-white"
          >
            立即登入
          </button>
        </div>

        <div v-show="isLoggedIn" class="border-border mb-4 flex border-b">
          <button
            v-for="tab in TAB_OPTIONS"
            :key="tab.value"
            @click="setSelectedTab(tab.value)"
            :class="[
              'text-tab mr-4 border-b-2 pb-2.5 transition-colors',
              selectedTab === tab.value
                ? 'border-primary text-primary font-medium'
                : 'text-text-muted border-transparent',
            ]"
          >
            {{ tab.label }}
            <span
              :class="[
                'text-tab ml-1 inline-flex h-6 w-6 items-center justify-center rounded-sm font-medium',
                selectedTab === tab.value
                  ? 'bg-primary text-white'
                  : 'bg-page-bg text-text-muted',
              ]"
            >
              {{ tab.value === 'all' ? QUIZZES.length : completedQuizIds.length }}
            </span>
          </button>
        </div>

        <div class="scrollbar-none mb-4 flex gap-2 overflow-x-auto pb-1">
          <button
            v-for="option in DIFFICULTY_OPTIONS"
            :key="option.value"
            @click="setSelectedDifficulty(option.value)"
            :class="[
              'text-button shrink-0 rounded-full border px-3 py-1 transition-colors',
              selectedDifficulty === option.value
                ? 'border-primary bg-primary text-white'
                : 'border-border bg-card-bg text-text-muted hover:border-text-muted',
            ]"
          >
            {{ option.label }}
          </button>
        </div>

        <div v-if="topics.length > 0">
          <div
            v-for="topic in topics"
            :key="topic"
            :class="isTopicCollapsed(topic) ? 'mb-0' : 'mb-6'"
          >
            <button @click="toggleTopic(topic)" class="mb-3 flex items-center">
              <svg
                width="26"
                height="26"
                viewBox="0 0 18 14"
                fill="currentColor"
                stroke="none"
                :class="[
                  'text-text-muted hover:text-primary mr-0.5 transition-transform duration-300',
                  isTopicCollapsed(topic) ? '-rotate-90' : '',
                ]"
              >
                <path d="M3 6l5 5 5-5" />
              </svg>
              <span class="text-label text-text-muted flex items-center font-medium">
                {{ TOPIC_LABEL[topic] }}
              </span>
              <span
                class="text-hint text-text-muted ml-2 flex h-5 w-5 items-center justify-center rounded bg-white"
              >
                {{ groupedQuizzes[topic].length }}
              </span>
            </button>

            <div
              :class="[
                'grid transition-[grid-template-rows,opacity] duration-300 ease-in-out',
                isTopicCollapsed(topic)
                  ? 'grid-rows-[0fr] opacity-0'
                  : 'grid-rows-[1fr] opacity-100',
              ]"
            >
              <div class="min-h-0 overflow-hidden">
                <div
                  :class="[
                    'grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3',
                    isLoggedIn ? 'xl:grid-cols-4' : 'lg:grid-cols-4 xl:grid-cols-5',
                  ]"
                >
                  <QuizCard
                    v-for="quiz in groupedQuizzes[topic]"
                    :key="quiz.id"
                    :quiz="quiz"
                    :is-completed="isCompleted(quiz.id)"
                    @start="handleStartQuiz"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="text-label text-text-muted">沒有符合條件的測驗</p>
      </div>

      <div v-if="isLoggedIn" class="lg:border-border lg:border-l">
        <StatsSidebar v-bind="stats" />
      </div>
    </div>
  </div>
</template>
