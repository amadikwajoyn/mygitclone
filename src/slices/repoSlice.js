import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const repoSlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    fetchUserRepositories (state, action) {
        return { ...state, list: [ ...action.payload ] }
    }
  },
})

export const { fetchUserRepositories } = repoSlice.actions

export default repoSlice.reducer