import { configureStore } from "@reduxjs/toolkit";
import generate from "./slices/generateSlice";

export const store = configureStore({
  reducer: { generate },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
