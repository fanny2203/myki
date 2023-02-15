import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "test1" },
  { id: "2", name: "test2" },
];

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addItem } = testSlice.actions;
export default testSlice.reducer;
