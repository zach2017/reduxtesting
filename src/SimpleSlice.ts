import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SimpleState {
  value: string
}

const initialState: SimpleState = {
  value: "Before",
}

export const simpleSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "add"
    },
    decrement: (state) => {
      state.value = "After"
    },
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = simpleSlice.actions

export default simpleSlice.reducer