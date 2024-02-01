import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import seriesReducer from "./seriesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    series: seriesReducer,
  },
});

export default appStore;
