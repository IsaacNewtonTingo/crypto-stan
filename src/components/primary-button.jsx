import React, { useContext } from "react";

export default function PrimaryButton(props) {
  const { processing, disabled, onClick, textColor = "white" } = props;
  return (
    <button
      disabled={processing || disabled}
      onClick={onClick}
      className={` ${
        props.className
      } h-[50px] w-full rounded-lg bg-[#3D5A98] text-white transition-font ${textColor} ${
        processing || disabled
          ? `opacity-40`
          : ` hover:font-bold hover:bg-blue-800`
      }`}
    >
      {processing ? "Processing..." : props.children}
    </button>
  );
}
