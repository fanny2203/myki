import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upload: false,
  move: null,
  duplicate: null,
  downloading: null,
};

export const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    setUpload: (state, action) => {
      state.upload = action.payload;
    },
    setMoveFile: (state, action) => {
      state.move = action.payload;
    },
    setDuplicateFile: (state, action) => {
      state.duplicate = action.payload;
    },
    setDownloadingFile: (state, action) => {
      state.downloading = action.payload;
    },
  },
});

export const { setUpload, setMoveFile, setDuplicateFile, setDownloadingFile } =
  uploadSlice.actions;
export default uploadSlice.reducer;
