import { configureStore } from '@reduxjs/toolkit';
import RepoReducer from './slices/repoSlice'
import AuthReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
      userRepositories: RepoReducer,
      auth: AuthReducer,
  },
})