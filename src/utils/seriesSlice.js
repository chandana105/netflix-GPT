import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    series: null,
  },
  reducers: {
    addSeries: (state, action) => {
      state.series = action.payload;
    },
  },
});

export const { addSeries } = seriesSlice.actions;

export default seriesSlice.reducer;
