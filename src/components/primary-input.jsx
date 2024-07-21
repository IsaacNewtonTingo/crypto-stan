import React from "react";

export default function PrimaryInput(props) {
  const {
    required,
    value,
    onChange,
    multiple,
    placeholder,
    type,
    className = "bg-myWhite",
    px = "px-8",
    disabled,
  } = props;
  return (
    <input
      required={required}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      multiple={multiple}
      disabled={disabled}
      className={`h-[50px] bg-gray-200 rounded-lg w-full ${className} ${px} ${
        disabled && "text-gray-400"
      }`}
    />
  );
}
