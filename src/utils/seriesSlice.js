import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    series: null,
    trailerVideo: null,
  },
  reducers: {
    addSeries: (state, action) => {
      state.series = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addSeries, addTrailerVideo } = seriesSlice.actions;

export default seriesSlice.reducer;
