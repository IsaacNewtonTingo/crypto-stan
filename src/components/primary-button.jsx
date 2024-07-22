import React from "react";

export default function PrimaryButton(props) {
  const { processing, disabled, onClick, textColor = "white" } = props;
  return (
    <button
      disabled={processing || disabled}
      onClick={onClick}
      className={` ${
        props.className
      } h-[50px] w-full rounded-lg bg-primary-900 text-white transition-font ${textColor} ${
        processing || disabled
          ? `opacity-40`
          : `hover:font-bold hover:bg-primary-800`
      }`}
    >
      {processing ? "Processing..." : props.children}
    </button>
  );
}
