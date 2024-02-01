import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    defaultLanguage: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.defaultLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
