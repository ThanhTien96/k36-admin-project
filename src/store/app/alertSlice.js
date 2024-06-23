import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "N/A",
  status: "info",
  logs: [],
};

export const MESSAGE_STATUS = {
  info: "info",
  error: "error",
  warning: "warning",
  success: "success",
};

const alertSlice = createSlice({
  name: "alertSlice",
  initialState,

  reducers: {
    setAlert(state, action) {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.logs = [
        ...state.logs,
        { message: action.payload.message, status: action.payload.status },
      ];
    },
  },
});


export const {
  setAlert
} = alertSlice.actions;

export default alertSlice.reducer;
