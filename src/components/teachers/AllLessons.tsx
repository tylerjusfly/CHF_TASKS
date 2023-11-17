"use client";
import React, { Fragment, useState } from "react";
import { LessonDB, LessonType } from "@/fake-db/lessons";
import ViewAvailableLesson from "../shared/ViewAvailableLesson";

const AllLessons = () => {
  const [open, setOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<LessonType | null>(null);

  const showModal = (value: LessonType) => {
    setOpen(true);
    setSelectedLesson(value);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <h3 className="font-semibold">All Lessons</h3>

      <div className="flex flex-wrap justify-center gap-6 mt-5 ">
        {LessonDB.map((lesson) => (
          <div
            className="rounded w-full overflow-hidden shadow-md sm:w-[18rem] cursor-pointer hover:bg-[#f5f5f5]"
            key={lesson.lessonId}
            onClick={() => showModal(lesson)}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{lesson.lesson_topic}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {lesson.tags}
              </span>
            </div>
          </div>
        ))}
      </div>

      <ViewAvailableLesson open={open} handleCancel={handleCancel} selectedLesson={selectedLesson} />
    </Fragment>
  );
};

export default AllLessons;
