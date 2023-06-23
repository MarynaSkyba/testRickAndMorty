import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice";

const store = configureStore({
  reducer: appSlice,
});

export default store;
