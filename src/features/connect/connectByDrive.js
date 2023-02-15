import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreate: true,
  showBtnRegister: true,
};

export const connectByDriveSlice = createSlice({
  name: "connectByDrice",
  initialState,
  reducers: {
    setIsCreate: (state, action) => {
      state.isCreate = action.payload;
    },
  },
});

export const { setIsCreate } = connectByDriveSlice.actions;
export default connectByDriveSlice.reducer;
