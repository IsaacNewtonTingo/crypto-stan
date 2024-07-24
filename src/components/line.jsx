import React from "react";

export default function Line({ className }) {
  return (
    <hr
      className={`w-[80px] border-b border-b-[6px] border-orange-600 mt-2 mb-6 ${className}`}
    />
  );
}
