"use client";

import React, { useEffect, useState } from "react";
import { Drawer, Modal } from "antd";
import Editor from "@monaco-editor/react";
import axios from "axios";
import OutputWindow from "./OutputWindow";

const RAPID_API_HOST = "judge0-ce.p.rapidapi.com";
const RAPID_API_KEY = "1e21171e7cmsh84a2ae759069572p150da6jsn797f6688d8dc";
const RAPID_API_URL = "https://judge0-ce.p.rapidapi.com/submissions";

// id: 63,
// name: "JavaScript (Node.js 12.14.0)",
// label: "JavaScript (Node.js 12.14.0)",
// value: "javascript",

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://judge0-ce.p.rapidapi.com/about',
//   headers: {
//     'X-RapidAPI-Key': '1e21171e7cmsh84a2ae759069572p150da6jsn797f6688d8dc',
//     'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

type Props = {
  open: boolean;
  handleIDE: () => void;
};
const IdeCode = ({ open, handleIDE }: Props) => {
  const [value, setValue] = useState("// start your code after this comment");
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState<boolean>(false);

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setValue(value);
    }
    // onChange("code", value);
  };

  const handleCompile = () => {
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
        alert("Compiled Successfully!");
        //   showSuccessToast(`Compiled Successfully!`)
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      alert("Compiled failed!");
      // showErrorToast();
    }
  };

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
