import React from "react";

export default function Title({ children, className }) {
  return (
    <h1 className={`text-[30px] lg:text-[40px] font-black ${className}`}>
      {children}
    </h1>
  );
}
