import { Storage } from '@/utils/storage.utils'
import type { User, QuizRecord, BookmarkedQuestion } from '@/types'

export type Users = Record<string, User>

export const authService = {
  getUsers: (): Users | null => Storage.getItem<Users>('users'),
  setUsers: (users: Users): void => Storage.setItem('users', users),
  clearUsers: (): void => Storage.removeItem('users'),

  getSession: (): string | null => Storage.getItem<string>('session'),
  setSession: (username: string): void => Storage.setItem('session', username),
  clearSession: (): void => Storage.removeItem('session'),

  initDefaultUsers: (): void => {
    const users = authService.getUsers() ?? {}
    if (!users['demo']) {
      users['demo'] = {
        username: 'demo',
        password: '1234',
        createdAt: new Date().toISOString(),
      }
      authService.setUsers(users)
    }
  },

  deleteUser: (username: string): void => {
    const users = authService.getUsers()
    if (!users) return
    delete users[username]
    authService.setUsers(users)
    authService.clearQuizRecords(username)
    authService.removeAllBookmarks(username)
    authService.clearSession()
  },

  getQuizRecords: (username: string): QuizRecord[] =>
    Storage.getItem<QuizRecord[]>(`quizRecords_${username}`) ?? [],

  clearQuizRecords: (username: string): void =>
    Storage.removeItem(`quizRecords_${username}`),

  saveQuizRecord: (username: string, record: QuizRecord): void => {
    const records = authService.getQuizRecords(username)
    const index = records.findIndex((r) => r.quizId === record.quizId)
    if (index !== -1) records[index] = record
    else records.push(record)
    Storage.setItem(`quizRecords_${username}`, records)
  },

  getBookmarkedQuestions: (username: string): BookmarkedQuestion[] =>
    Storage.getItem<BookmarkedQuestion[]>(`bookmarks_${username}`) ?? [],

  addBookmark: (username: string, questionId: string): void => {
    const bookmarks = authService.getBookmarkedQuestions(username)
    if (bookmarks.some((b) => b.questionId === questionId)) return
    bookmarks.push({ questionId })
    Storage.setItem(`bookmarks_${username}`, bookmarks)
  },

  removeBookmark: (username: string, questionId: string): void => {
    const bookmarks = authService.getBookmarkedQuestions(username)
    Storage.setItem(
      `bookmarks_${username}`,
      bookmarks.filter((b) => b.questionId !== questionId),
    )
  },

  removeAllBookmarks: (username: string): void =>
    Storage.removeItem(`bookmarks_${username}`),

  isBookmarked: (username: string, questionId: string): boolean =>
    authService
      .getBookmarkedQuestions(username)
      .some((b) => b.questionId === questionId),
}
