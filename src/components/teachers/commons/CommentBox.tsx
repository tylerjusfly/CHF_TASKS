import React from "react";

type Props = {
  name: string;
  save: () => void;
  value: string;
  onChange: any;
};

const Input = ({ name, save, ...rest }: Props) => {
  return (
    <div className="group w-72 md:w-80 lg:w-96">
      <label className="text-center inline-block w-full text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
        {name}
      </label>
      <div className="relative flex items-center">
        <input
          id="8"
          type="text"
          className="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
          {...rest}
        />
        <button
          className="absolute right-0 h-10 w-16 rounded-r-md bg-blue-200 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600"
          onClick={save}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
