"use client";
import { useAppSelector } from "@/store/hook";
import React from "react";

const OngoingLessons = () => {
  const StudentLesson = useAppSelector((store) => store.students.StudentLesson);

  return (
    <div>
      <h3>Ongoing Lessons</h3>

      <div className="flex flex-wrap justify-center gap-6 mt-5 ">
        {StudentLesson.map((item) => (
          <div
            className="rounded w-full overflow-hidden shadow-md sm:w-[18rem] cursor-pointer hover:bg-[#f5f5f5]"
            key={item.lesson.lessonId}
            // onClick={() => showModal(lesson)}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.lesson.lesson_topic}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                20 Questions
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingLessons;
