import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bins: [],
};

const binsSlice = createSlice({
  name: "bins",
  initialState,
  reducers: {
    setBins: (state, action) => {
      state.bins = action.payload;
    },
    deleteBin: (state, action) => {
      const newData = state.bins.filter((bin) => bin.name !== action.payload);
      state.bins = newData;
    },
  },
});

export const { setBins, deleteBin } = binsSlice.actions;
export default binsSlice.reducer;
