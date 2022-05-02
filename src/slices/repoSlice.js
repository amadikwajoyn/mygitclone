import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const repoSlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    fetchUserRepositories (state, payload) {
        return { ...state, list: [ ...payload ] }
    }
  },
})

export const { fetchUserRepositories } = repoSlice.actions

export default repoSlice.reducer