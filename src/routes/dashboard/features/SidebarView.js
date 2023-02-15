import { createSlice } from '@reduxjs/toolkit'

// true = open, false = closed, null = hidden
export const counterSlice = createSlice({
  name: 'SidebarSlice',
  initialState: {
    value: true 
  },
  reducers: {
    sliceSidebar: state => {
      state.value = false 
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer