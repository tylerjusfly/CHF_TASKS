import { UsersDb } from "@/fake-db/users";
import { setCurrentLesson } from "@/store/apps/students";
import { IStudentLesson } from "@/store/apps/students/types";
import { useAppDispatch } from "@/store/hook";
import { Divider, Modal } from "antd";
import React, { useState } from "react";
import { CheckCircle, Clock } from "react-feather";
import SolutionViewer from "./SolutionViewer";
import { setCurrentLessonId } from "@/store/apps/teachers";

type Props = {
  open: boolean;
  //   retakeLesson: () => void;
  selectedLesson: IStudentLesson | null;
  handleCancel: () => void;
};

function ViewMoreLesson({ open, selectedLesson, handleCancel }: Props) {
  const dispatch = useAppDispatch();
  const [OpenIDE, setOpenIDE] = useState(false);
  const studentDetails = UsersDb.find((user) => user.id === selectedLesson?.userId);

  const toggleIDE = (vals: IStudentLesson | null) => {
    if (OpenIDE) {
      setOpenIDE(false);
      dispatch(setCurrentLessonId(null));
    } else {
      dispatch(setCurrentLessonId(vals?.lesson.lessonId as number));
      setOpenIDE(true);
    }
  };

  return (
    <Modal
      open={open}
      title={selectedLesson?.lesson.lesson_topic}
      onCancel={handleCancel}
      footer={[
        <button className="btn btn-blue mr-2 cursor-pointer" onClick={() => toggleIDE(selectedLesson)}>
          View Solution
        </button>,
        <button className="btn btn-blue" disabled>
          Discard solution
        </button>,
      ]}
    >
      <h3>{selectedLesson?.lesson.lessonQuestion}</h3>

      <div className="mt-3">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{selectedLesson?.lesson.tags}
        </span>
      </div>

      <Divider>Lesson Details</Divider>

      <div className="flex gap-3 mb-3">
        <span className="font-semibold self-center">Solution Status: </span>
        <div
          draggable="true"
          role="button"
          title="Hover chip"
          className="h-8 px-3 w-max flex gap-2 items-center rounded-full border border-gray-100 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-green-500 active:bg-yellow-50 active:border-green-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:active:text-yellow-400"
        >
          <CheckCircle size={20} />
          <span className="block text-sm font-medium">{selectedLesson?.codestatus || "Unavailable"}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <span className="font-semibold self-center">Runtime: </span>
        <div
          draggable="true"
          role="button"
          title="Hover chip"
          className="h-8 px-3 w-max flex gap-2 items-center rounded-full border border-gray-100 text-gray-700 focus:bg-gray-300 focus:text-blue-900 active:text-green-500 active:bg-yellow-50 active:border-green-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:active:text-yellow-400"
        >
          <Clock size={20} />
          <span className="block text-sm font-medium">{selectedLesson?.runtime || "Unavailable"}</span>
        </div>
      </div>

      <Divider>Student Details</Divider>
      {studentDetails !== undefined ? (
        <div className="mb-4">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <span className="font-semibold">Full name </span>
              <span>{studentDetails.fullname}</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="font-semibold">username</span>
              <span>{studentDetails.username}</span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="font-semibold">Matric ID</span>
              <span>{studentDetails.id}</span>
            </div>
          </div>
        </div>
      ) : (
        <h2>Not found</h2>
      )}

      {OpenIDE && <SolutionViewer open={OpenIDE} handleIDE={toggleIDE} />}
    </Modal>
  );
}

export default ViewMoreLesson;
