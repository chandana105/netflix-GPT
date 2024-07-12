import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "language",
  initialState: {
    defaultLanguage: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.defaultLanguage = action.payload;
    },
    resetLanguage: (state) => {
      state.defaultLanguage = "en";
    },
  },
});

export const { changeLanguage, resetLanguage } = configSlice.actions;

export default configSlice.reducer;
