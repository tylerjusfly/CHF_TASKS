import { LessonType } from "@/fake-db/lessons"

export interface IStudentState {
    StudentLesson : IStudentLesson[]
}


export interface IStudentLesson {
    lesson : LessonType
    userId: number
    completed: boolean
}