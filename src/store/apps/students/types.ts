export interface IStudentState {
    StudentLesson : IStudentLesson[]
}


export interface IStudentLesson {
    lessonId : number
    userId: number
    completed: boolean
}