import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalInfo: false,
  modalDownload: { data: null, active: false },
  modalDelete: { data: null, active: false },
  modalEdit: { data: null, active: false },
  modalMove: { data: null, active: false },
  modalRestore: { data: null, active: false },
  modalDuplicate: { data: null, active: false },
  modalUploadFile: false,
};

export const modalsStorageSlice = createSlice({
  name: "modalsStorage",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setModalInfo: (state, action) => {
      state.modalInfo = action.payload;
    },
    setModalDownload: (state, action) => {
      if (action.payload) {
        state.modalDownload = { ...action.payload };
      } else {
        state.modalDownload = initialState.modalDownload;
      }
    },
    setModalDelete: (state, action) => {
      if (action.payload) {
        state.modalDelete = { ...action.payload };
      } else {
        state.modalDelete = initialState.modalDelete;
      }
    },
    setModalMove: (state, action) => {
      if (action.payload) {
        state.modalMove = { ...action.payload };
      } else {
        state.modalMove = initialState.modalMove;
      }
    },
    setModaUploadFile: (state, action) => {
      state.modalUploadFile = action.payload;
    },
    setModalEdit: (state, action) => {
      if (action.payload) {
        state.modalEdit = { ...action.payload };
      } else {
        state.modalEdit = initialState.modalEdit;
      }
    },
    setModalDuplicate: (state, action) => {
      if (action.payload) {
        state.modalDuplicate = { ...action.payload };
      } else {
        state.modalDuplicate = initialState.modalDuplicate;
      }
    },
    setModalRestore: (state, action) => {
      if (action.payload) {
        state.modalRestore = { ...action.payload };
      } else {
        state.modalRestore = initialState.modalRestore;
      }
    },
  },
});

export const {
  setData,
  setModalInfo,
  setModalDownload,
  setModalDelete,
  setModaUploadFile,
  setModalEdit,
  setModalMove,
  setModalDuplicate,
  setModalRestore,
} = modalsStorageSlice.actions;
export default modalsStorageSlice.reducer;
