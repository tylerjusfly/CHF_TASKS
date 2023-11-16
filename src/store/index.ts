// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";

// ** Reducers
import students from "./apps/students";

export const store = configureStore({
  reducer: {
    students
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// devTools: process.env.NODE_ENV !== "production",
