import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: [],
};

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    setCollections: (state, action) => {
      state.collections = action.payload;
    },
    deleteCollections: (state, action) => {
      const newData = state.collections.filter(
        (collection) => collection.name !== action.payload
      );
      state.collections = newData;
    },
    changeNameCollection: (state, action) => {
      const newData = state.collections.map((collection) => {
        if (collection.name === action.payload.name) {
          return { ...collection, name: action.payload.newName };
        }
        return collection;
      });
      state.collections = newData;
    },
    addCollection: (state, action) => {
      state.collections = [...state.collections, action.payload];
    },
  },
});

export const {
  setCollections,
  deleteCollections,
  changeNameCollection,
  addCollection,
} = collectionsSlice.actions;
export default collectionsSlice.reducer;
