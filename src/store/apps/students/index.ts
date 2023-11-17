// ** Redux Imports
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStudentLesson, IStudentState } from "./types";
import { LessonType } from "@/fake-db/lessons";
import { notifySuccess } from "@/utils/toasts/notifySuccess";

const initialState: IStudentState = {
  StudentLesson: [],
  currentLesson: null,
};

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    doSetToStudentLesson: (state, action: PayloadAction<IStudentLesson[]>) => {
      if (action.payload.length) {
        state.StudentLesson = action.payload;
      }
    },

    setOnGoingLesson: (state, action: PayloadAction<IStudentLesson>) => {
      // find if lesson is available before
      let isLesson = state.StudentLesson.find((item) => item.lesson.lessonId === action.payload.lesson.lessonId);
      if (!isLesson) {
        const newValues = [...state.StudentLesson, action.payload];

        state.StudentLesson = newValues;

        localStorage.setItem("studentLesson", JSON.stringify(newValues));
      }
    },

    setCurrentLesson: (state, action: PayloadAction<LessonType | null>) => {
      state.currentLesson = action.payload;
    },

    updateLessonStatus: (state, action: PayloadAction<IStudentLesson>) => {
      if (state.StudentLesson.some((item) => item.lesson.lessonId === action.payload.lesson.lessonId)) {
        // filter it out and add it again
        const otherLessons = state.StudentLesson.filter((item) => item.lesson.lessonId !== action.payload.lesson.lessonId);

        const newVals = [...otherLessons, action.payload];
        state.StudentLesson = newVals;

        localStorage.setItem("studentLesson", JSON.stringify(newVals));
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { setOnGoingLesson, doSetToStudentLesson, setCurrentLesson, updateLessonStatus } = studentSlice.actions;

export default studentSlice.reducer;
