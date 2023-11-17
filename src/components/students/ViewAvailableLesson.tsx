"use client";

import React, { useState } from "react";
import { Modal } from "antd";
import { LessonType } from "@/fake-db/lessons";
import { useAppDispatch } from "@/store/hook";
import { setCurrentLesson, setOnGoingLesson } from "@/store/apps/students";
import { useAuth } from "@/hooks/useAuth";
import IdeCode from "./IdeCode";

type Props = {
  open: boolean;
  handleCancel: () => void;
  selectedLesson: LessonType | null;
};

const ViewAvailableLesson: React.FC<Props> = ({ open, handleCancel, selectedLesson }) => {
  const [OpenIDE, setOpenIDE] = useState(false);
  const dispatch = useAppDispatch();

  const auth = useAuth();

  const toggleIDE = () => {
    if (OpenIDE) {
      setOpenIDE(false);
      dispatch(setCurrentLesson(null));
    } else {
      setOpenIDE(true);
    }
  };

  const startALesson = () => {
    // create a new array and add users lessons
    if (auth.user) {
      if (selectedLesson) {
        dispatch(setCurrentLesson(selectedLesson));

        dispatch(setOnGoingLesson({ lesson: selectedLesson, userId: auth.user?.id, completed: false }));
        // Close Modal, and redirect to lesson
        // handleCancel()
        toggleIDE();
      }
    } else {
      alert("error Starting Lesson");
    }
  };

  return (
    <>
      <Modal
        open={open}
        title={selectedLesson?.lesson_topic}
        onCancel={handleCancel}
        footer={[
          <button className="btn btn-blue" onClick={startALesson}>
            Start Lesson
          </button>,
        ]}
      >
        <h3>{selectedLesson?.lessonQuestion}</h3>

        <div className="mt-3">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{selectedLesson?.tags}
          </span>
        </div>
      </Modal>

      {OpenIDE && <IdeCode open={OpenIDE} handleIDE={toggleIDE} />}
    </>
  );
};

export default ViewAvailableLesson;
