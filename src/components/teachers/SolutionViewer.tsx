import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import Editor from "@monaco-editor/react";
import { useAppSelector } from "@/store/hook";

type Props = {
  open: boolean;
  handleIDE: (val: null) => void;
};

const SolutionViewer = ({ open, handleIDE }: Props) => {
  const [value, setValue] = useState("");
  const currentLessonId = useAppSelector((store) => store.teachers.StudentLessonId);

  useEffect(() => {
    // fetch code if available
    const code = localStorage.getItem(`LESSON-${currentLessonId}`);

    console.log(currentLessonId);

    if (code) {
      setValue(code);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Drawer title="Code Editor" placement="right" onClose={() => handleIDE(null)} size="large" open={open}>
      <Editor height="80vh" width="100%" theme="vs-dark" defaultLanguage="javascript" language="javascript" value={value} />
    </Drawer>
  );
};

export default SolutionViewer;
