import { LessonDB } from "@/fake-db/lessons";
import React, { Fragment } from "react";

const AvailableLessons = () => {
  return (
    <Fragment>
      <h3 className="font-semibold">Available Lessons</h3>
      
      <div className="flex flex-wrap justify-center gap-6 mt-5 ">
        {LessonDB.map((lesson) => (
          <div className="rounded w-full overflow-hidden shadow-md sm:w-[18rem]" key={lesson.lessonId} >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{lesson.lesson_topic}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                20 Questions
              </span>
              
              {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AvailableLessons;
