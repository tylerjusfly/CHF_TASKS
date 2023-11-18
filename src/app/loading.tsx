"use client";

import React from "react";
import { Loader } from "react-feather";

const loading = () => {
  return (
    <div className="flex flex-col justify-center items-center m-32">
      <Loader className="animate-spin" />
      <p className="text-center font-semibold">loading......</p>
    </div>
  );
};

export default loading;
