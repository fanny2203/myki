import { createSlice } from "@reduxjs/toolkit";

const initialState = { key: "-" };

export const sesionSlice = createSlice({
  name: "key",
  initialState,
  reducers: {
    editKey: (state, action) => {
      state.key = action.payload;
    },
  },
});

export const { editKey } = sesionSlice.actions;
export default sesionSlice.reducer;
