import { AppContext } from "../context/app-context";
import React, { useContext } from "react";

export default function TextInput(props) {
  const { type, placeholder, onChange, value, required, className } = props;
  const { theme } = useContext(AppContext);
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
      className={`appearance-none rounded-lg h-[30px] px-4 border-0 focus:border-[1px] ring-0 focus:outline-none text-gray-700 bg-gray-200 focus:border-gray-300 ${className} `}
    />
  );
}
