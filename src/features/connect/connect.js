import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indexIn: { init: 0, finish: 5 },
  indexOut: { init: 0, finish: 5 },
  filterIn: null,
  filterOut: null,
  connectors_in: {
    "Connect by FTP": {
      count: 1,
      connect: { "Connect by Google Sheets": 1 },
    },
    "Connect by Microsoft Storage": {
      count: 5,
      connect: {
        "Connect by Google Sheets": 1,
        "Connect by Drive": 3,
        "Connect by Microsoft Storage": 2,
      },
    },
    "Connect by Mongo": {
      count: 3,
      connect: { "Connect by API": 1 },
    },
    "Connect by MS SQL Server JDBC": {
      count: 3,
      connect: { "Connect by API": 1, "Connect by Microsoft Storage": 5 },
    },
    "Connect by MS SQL Server ODBC": {
      count: 3,
      connect: { "Connect by Google Sheets": 1 },
    },
    "Connect by FTP2": {
      count: 1,
      connect: { "Connect by Google Sheets": 1 },
    },
    "Connect by Microsoft Storage2": {
      count: 5,
      connect: {
        "Connect by Google Sheets": 1,
        "Connect by Drive": 3,
        "Connect by Microsoft Storage": 2,
      },
    },
    "Connect by Mongo2": {
      count: 3,
      connect: { "Connect by API": 1 },
    },
    "Connect by MS SQL Server JDBC2": {
      count: 3,
      connect: { "Connect by API": 1, "Connect by Microsoft Storage": 5 },
    },
  },

  connectors_out: {
    "Connect by API": {
      count: 15,
      connect: { "Connect by FTP": 1 },
    },
    "Connect by Drive": {
      count: 5,
      connect: { "Connect by FTP": 1 },
    },
    "Connect by Direct Download": {
      count: 3,
      connect: { "Connect by FTP": 1 },
    },
    "Connect by Google Sheets": {
      count: 3,
      connect: { "Connect by FTP": 1 },
    },
    "Connect by Microsoft Storage": {
      count: 3,
      connect: { "Connect by FTP": 1 },
    },
  },
};

export const connectSlice = createSlice({
  name: "connect",
  initialState,
  reducers: {
    selectIn: (state, action) => {
      if (action.payload) {
        for (const property in state.connectors_in[action.payload].connect) {
          if (state.connectors_out[property]) {
            state.connectors_out[property] = {
              ...state.connectors_out[property],
              active: true,
            };
          }
        }
      } else {
        for (const property in state.connectors_out) {
          state.connectors_out[property] = {
            ...state.connectors_out[property],
            active: false,
          };
        }
      }
    },
    selectOut: (state, action) => {
      if (action.payload) {
        for (const property in state.connectors_out[action.payload].connect) {
          if (state.connectors_in[property]) {
            state.connectors_in[property] = {
              ...state.connectors_in[property],
              active: true,
            };
          }
        }
      } else {
        for (const property in state.connectors_in) {
          state.connectors_in[property] = {
            ...state.connectors_in[property],
            active: false,
          };
        }
      }
    },
    setIndexIn: (state, action) => {
      if (action.payload) {
        state.indexIn = {
          init: state.indexIn.init + 5,
          finish: state.indexIn.finish + 5,
        };
      }
    },
    setIndexOut: (state, action) => {},
    setFilterIn: (state, action) => {
      state.filterIn = action.payload;
    },
    setFilterOut: (state, action) => {
      state.filterOut = action.payload;
    },
  },
});

export const {
  selectIn,
  selectOut,
  setIndexIn,
  setIndexOut,
  setFilterIn,
  setFilterOut,
} = connectSlice.actions;
export default connectSlice.reducer;
