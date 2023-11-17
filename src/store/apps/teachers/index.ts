// ** Redux Imports
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITeacherState } from "./types";

const initialState: ITeacherState = {
  StudentLessonId: null,
};

export const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setCurrentLessonId: (state, action: PayloadAction<number | null>) => {
      state.StudentLessonId = action.payload;
    },
  },
});

export const { setCurrentLessonId } = teacherSlice.actions;

export default teacherSlice.reducer;
