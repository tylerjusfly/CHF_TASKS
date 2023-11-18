import { LessonType } from "@/fake-db/lessons";

export interface IStudentState {
  StudentLesson: IStudentLesson[];
  currentLesson: LessonType | null;
}

export interface IStudentLesson {
  lesson: LessonType;
  userId: number;
  completed: boolean;
  codestatus?: string;
  runtime?: string;
  comments: Icomment[];
}

export interface Icomment {
  name: string;
  comment_time: Date;
  text: string;
}
