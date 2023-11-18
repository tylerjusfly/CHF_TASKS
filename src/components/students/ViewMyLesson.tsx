"use client";
import { IStudentLesson } from "@/store/apps/students/types";
import { Divider, Modal } from "antd";
import React, { Fragment } from "react";
import { CheckCircle, Clock } from "react-feather";
import CommentView from "../shared/CommentView";

type Props = {
  open: boolean;
  retakeLesson: () => void;
  selectedLesson: IStudentLesson | null;
  handleCancel: () => void;
};

function ViewMyLesson({ open, selectedLesson, retakeLesson, handleCancel }: Props) {
  return (
    <Modal
      open={open}
      title={selectedLesson?.lesson.lesson_topic}
      onCancel={handleCancel}
      footer={
        <button className="btn btn-blue" onClick={retakeLesson} disabled>
          Retake Lesson
        </button>
      }
    >
      <h3>{selectedLesson?.lesson.lessonQuestion}</h3>

      <div className="mt-3">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{selectedLesson?.lesson.tags}
        </span>
      </div>

      <Divider>Other Details</Divider>

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

      <Divider>Comment Section</Divider>

      <Fragment>
        <CommentView comments={selectedLesson?.comments} />
      </Fragment>
    </Modal>
  );
}

export default ViewMyLesson;
