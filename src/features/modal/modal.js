import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leftSidebar: {position: "-100%", section: ""},
  positionModalNewConnection: "+100%",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showLeftSidebar: (state, action) => {
      state.leftSidebar = {position: "0%", section: action.payload}
    },
    hideLeftSidebar: (state, action) => {
      state.leftSidebar = {...state.leftSidebar, position: "-100%"};
    },
    showModalNewConnection: (state, action) => {
      state.positionModalNewConnection = "0%";
    },
    hiddeModalNewConnection: (state, action) => {
      state.positionModalNewConnection = "+100%";
    },
  },
});

export const {
  showLeftSidebar,
  hideLeftSidebar,
  showModalNewConnection,
  hiddeModalNewConnection,
} = modalSlice.actions;
export default modalSlice.reducer;
