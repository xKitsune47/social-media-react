import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import siteReducer from "./siteSlice";

const rootReducer = {
  account: accountReducer,
  site: siteReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
