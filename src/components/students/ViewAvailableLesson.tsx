"use client";

import React, { useState } from "react";
import { Modal } from "antd";
import { LessonType } from "@/fake-db/lessons";
import { useAppDispatch } from "@/store/hook";
import { setOnGoingLesson } from "@/store/apps/students";
import { useAuth } from "@/hooks/useAuth";

type Props = {
  open: boolean;
  handleCancel: () => void;
  selectedLesson: LessonType | null;
};

const ViewAvailableLesson: React.FC<Props> = ({ open, handleCancel, selectedLesson }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const auth = useAuth()

  const startALesson = () => {
    // create a new array and add users lessons
    if(auth.user){

      if (selectedLesson) {
        dispatch(setOnGoingLesson({ lesson: selectedLesson, userId: auth.user?.id, completed: false }));
        // Close Modal, and redirect to lesson
        handleCancel()
      }
    }
    else{
      alert('error Starting Lesson')
    }

  };

  return (
    <>
      <Modal
        open={open}
        title="Title"
        onCancel={handleCancel}
        footer={[
          <button className="btn btn-blue" onClick={startALesson}>
            Start Lesson
          </button>,
        ]}
      >
        <p>{selectedLesson?.lesson_topic}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ViewAvailableLesson;
