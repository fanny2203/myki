import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registerSteps: {
    connectors: {
      error: false,
      helperText: "Filed required",
      completed: false,
      value: "",
    },
    db: {
      error: false,
      helperText: "Filed required",
      completed: false,
      value: "",
    },
    collection: {
      error: false,
      helperText: "Filed required",
      completed: false,
      value: "",
    },
    project: {
      error: false,
      helperText: "Filed required",
      completed: false,
      value: "",
    },
    file: {
      error: false,
      helperText: "Filed required",
      completed: false,
      value: "",
    },
    storage: {
      error: false,
      helperText: "Filed required",
      completed: false,
      value: "",
    },
  },
};

export const myConnectors = createSlice({
  name: "myConnectors",
  initialState,
  reducers: {
    setRegisterSteps: (state, action) => {
      state.registerSteps[action.payload.name] = {
        ...state.registerSteps[action.payload.name],
        completed: true,
        value: action.payload.value,
      };
    },
    setStorage: (state, action) => {
      state.registerSteps.storage = {
        ...state.registerSteps.storage,
        value: action.payload.value,
        completed: action.payload.completed,
      };
    },
    setCollection: (state, action) => {
      state.registerSteps.collection = {
        ...state.registerSteps.collection,
        error: action.payload.error,
        helperText: action.payload.msg,
        completed: action.payload.completed,
      };
    },
    resetDataForm: (state, action) => {
      state.registerSteps = initialState.registerSteps;
    },
  },
});

export const { setRegisterSteps, setStorage, setCollection, resetDataForm } =
  myConnectors.actions;

export default myConnectors.reducer;
