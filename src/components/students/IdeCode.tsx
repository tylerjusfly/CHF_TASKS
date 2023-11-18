"use client";

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import Editor from "@monaco-editor/react";
import axios from "axios";
import OutputWindow from "./OutputWindow";
import { notifySuccess } from "@/utils/toasts/notifySuccess";
import { notifyError } from "@/utils/toasts/notifyError";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { updateLessonStatus } from "@/store/apps/students";
import { useAuth } from "@/hooks/useAuth";

const RAPID_API_HOST = "judge0-ce.p.rapidapi.com";
const RAPID_API_KEY = "1e21171e7cmsh84a2ae759069572p150da6jsn797f6688d8dc";
const RAPID_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";

// id: 63,
// name: "JavaScript (Node.js 12.14.0)",
// label: "JavaScript (Node.js 12.14.0)",
// value: "javascript",

type Props = {
  open: boolean;
  handleIDE: () => void;
};
const IdeCode = ({ open, handleIDE }: Props) => {
  const dispatch = useAppDispatch();
  const currentLesson = useAppSelector((store) => store.students.currentLesson);
  const [value, setValue] = useState(currentLesson?.code as string);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState<boolean>(false);

  const auth = useAuth();

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setValue(value);
    }
  };

  const handleCompile = () => {
    // Mimick save to db before compiling code
    localStorage.setItem(`LESSON-${currentLesson?.lessonId}`, value);

    setProcessing(true);
    const formData = {
      language_id: 63,
      // encode source code in base64
      source_code: btoa(value),
      stdin: btoa(customInput),
    };
    const options = {
      method: "POST",
      url: RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": RAPID_API_HOST,
        "X-RapidAPI-Key": RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };

  const checkStatus = async (token: string) => {
    const options = {
      method: "GET",
      url: RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": RAPID_API_HOST,
        "X-RapidAPI-Key": RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        notifySuccess("Compiled Successfully!");

        // getting rid of typescript fear if currentLesson is null
        if (currentLesson) {
          dispatch(
            updateLessonStatus({
              lesson: currentLesson,
              userId: auth.user?.id as number /**type assert */,
              completed: true,
              codestatus: response.data?.status?.description,
              runtime: response.data?.time,
              comments: [],
            })
          );
        }

        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      notifyError("Compiled failed!");
    }
  };

  useEffect(() => {
    // fetch code if available
    const code = localStorage.getItem(`LESSON-${currentLesson?.lessonId}`);

    if (code) {
      setValue(code);
    }
  }, []);

  return (
    <Drawer title="Code Editor" placement="right" onClose={handleIDE} size="large" open={open}>
      <Editor
        height="80vh"
        width="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        language="javascript"
        value={value}
        onChange={handleEditorChange}
      />

      <div className="flex flex-shrink-0 w-[80%] flex-col my-5">
        <OutputWindow outputDetails={outputDetails} />
        <div className="flex flex-col items-center">
          <button
            onClick={handleCompile}
            disabled={!value}
            className={`mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0 ${
              !value && "opacity-50"
            }`}
          >
            {processing ? "Processing..." : "Compile and Execute"}
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default IdeCode;
