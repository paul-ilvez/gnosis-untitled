import { createSlice } from "@reduxjs/toolkit";

export const screenHandlerSlice = createSlice({
  name: "screenHandler",
  initialState: {
    value: 1,
  },
  reducers: {
    nextScreen: (state) => {
      state.value += 1;
    },
    prevScreen: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextScreen, prevScreen } = screenHandlerSlice.actions;

export const selectCount = (state) => state.screenHandler.value;

export default screenHandlerSlice;
