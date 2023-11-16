// ** Redux Imports
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStudentLesson, IStudentState } from "./types";

// import { getFromLocalStorage } from "@/components/core/utils/storage";

const initialState: IStudentState = {
  StudentLesson: [],
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
      const newValues = [...state.StudentLesson, action.payload];

      state.StudentLesson = newValues;

      localStorage.setItem("studentLesson", JSON.stringify(newValues));
    },
  },
  extraReducers: (builder) => {},
});

export const { setOnGoingLesson, doSetToStudentLesson } = studentSlice.actions;

export default studentSlice.reducer;
