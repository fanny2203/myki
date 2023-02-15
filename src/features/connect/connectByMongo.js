import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputsNewConnect: [
    {
      name: "conector_name",
      value: "",
      textError: "",
      error: false,
      label: "Name",
      required: true,
      helperText: "Field required",
    },
    {
      name: "host",
      value: "",
      textError: "",
      error: false,
      label: "Host",
      required: true,
      helperText: "Field required",
    },
    {
      name: "port",
      value: "",
      textError: "",
      error: false,
      label: "Port - example: 27017",
      required: true,
      helperText: "Field required",
    },
    {
      name: "username",
      value: "",
      textError: "",
      error: false,
      label: "Username",
      required: false,
    },
    {
      name: "password",
      value: "",
      textError: "",
      error: false,
      label: "Password",
      required: false,
    },
  ],
  isCreate: true,
  showBtnRegister: false,
};

export const connectByMongoSlice = createSlice({
  name: "connectByMongo",
  initialState,
  reducers: {
    setInputsNewConnect: (state, action) => {
      state.inputsNewConnect = action.payload;
    },
    setIsCreate: (state, action) => {
      if (action.payload) {
        state.isCreate = action.payload;
        state.registerSteps = initialState.registerSteps;
      } else {
        state.isCreate = action.payload;
      }
    },
    setBtnRegister: (state, action) => {
      state.showBtnRegister = action.payload;
    },
  },
});

export const { setInputsNewConnect, setIsCreate, setBtnRegister } =
  connectByMongoSlice.actions;
export default connectByMongoSlice.reducer;
