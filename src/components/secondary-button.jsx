import React from "react";

export default function SecondaryButton(props) {
  const { processing, disabled, onClick, textColor = "white" } = props;
  return (
    <button
      disabled={processing || disabled}
      onClick={onClick}
      className={` ${
        props.className
      } h-[50px] w-full rounded-lg bg-primary-900 transition-font font-bold bg-transparent border-2 border-primary-900 text-primary-900  ${textColor} ${
        processing || disabled
          ? `opacity-40`
          : `hover:font-bold hover:bg-primary-50`
      }`}
    >
      {processing ? "Processing..." : props.children}
    </button>
  );
}
