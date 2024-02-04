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
  },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;
