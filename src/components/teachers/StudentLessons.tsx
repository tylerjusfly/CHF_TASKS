"use client";

import { useAppSelector } from "@/store/hook";
import React, { Fragment, useState } from "react";
// import ViewMyLesson from "./ViewMyLesson";
import { notifySuccess } from "@/utils/toasts/notifySuccess";
import { IStudentLesson } from "@/store/apps/students/types";
import ViewMyLesson from "../students/ViewMyLesson";
import ViewMoreLesson from "./ViewMore";

const StudentsLessons = () => {
  const StudentLesson = useAppSelector((store) => store.students.StudentLesson);
  const [open, setOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<IStudentLesson | null>(null);

  const showModal = (value: IStudentLesson) => {
    setOpen(true);
    setSelectedLesson(value);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <h3>All Students Lesson</h3>

      <div className="flex flex-wrap justify-center gap-6 mt-5 ">
        {StudentLesson.map((item) => (
          <div
            className="rounded w-full overflow-hidden shadow-md sm:w-[18rem] cursor-pointer hover:bg-[#f5f5f5]"
            key={item.lesson.lessonId}
            onClick={() => showModal(item)}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.lesson.lesson_topic}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.lesson.tags}
              </span>

              {item.completed ? (
                <span className="inline-block bg-green-600 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Completed</span>
              ) : (
                <span className="inline-block bg-red-600 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Not completed</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <ViewMoreLesson open={open} handleCancel={handleCancel} selectedLesson={selectedLesson} />
    </Fragment>
  );
};

export default StudentsLessons;
