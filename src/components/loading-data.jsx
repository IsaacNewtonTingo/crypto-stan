import React from "react";

export default function LoadingData() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center bg-[rgba(0,0,0,1)] md:inset-0 h-[calc(100%)] max-h-full">
      <div className="zoom-effect">
        <img
          src="/android-chrome-384x384.png"
          alt="Custom jerseys kenya"
          className="w-[200px] h-[200px]"
        />
      </div>
    </div>
  );
}
