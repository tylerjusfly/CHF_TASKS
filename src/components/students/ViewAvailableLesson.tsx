"use client";

import React, { useState } from "react";
import { Modal } from "antd";
import { LessonType } from "@/fake-db/lessons";

type Props = {
  open: boolean;
  handleCancel: () => void;
  selectedLesson: LessonType | null;
};

const ViewAvailableLesson: React.FC<Props> = ({ open, handleCancel, selectedLesson }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Modal open={open} title="Title" onCancel={handleCancel} footer={[<button className="btn btn-blue">Start Lesson</button>]}>
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
