// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";

// ** Reducers
import students from "./apps/students";
import teachers from "./apps/teachers";

export const store = configureStore({
  reducer: {
    students,
    teachers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// devTools: process.env.NODE_ENV !== "production",
