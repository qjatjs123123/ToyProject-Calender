import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar";
import { modeSlice } from "./mode";

export const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    mode: modeSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;