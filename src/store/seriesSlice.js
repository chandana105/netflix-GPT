import { createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    latestSeries: null,
    onTheAirSeries: null,
    popularSeries: null,
    topRatedSeries: null,
    trailerVideo: null,
  },
  reducers: {
    addLatestSeries: (state, action) => {
      state.latestSeries = action.payload;
    },
    addOnTheAirSeries: (state, action) => {
      state.onTheAirSeries = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },
    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addLatestSeries,
  addOnTheAirSeries,
  addPopularSeries,
  addTopRatedSeries,
  addTrailerVideo,
} = seriesSlice.actions;

export default seriesSlice.reducer;
