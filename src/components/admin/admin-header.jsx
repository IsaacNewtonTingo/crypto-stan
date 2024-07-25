import React from "react";

export default function AdminHeader() {
  return (
    <div className="h-[80px] w-[75%] bg-gradient-to-r from-gray-900 to-primary-900 shadow-lg fixed right-0 flex items-center justify-between px-10 z-50 gap-10">
      <div className="w-[25%] flex gap-2 items-center"></div>

      <div className="w-[75%] flex items-center justify-end gap-2">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-[40px] text-gray-100 cursor-pointer"
        >
          <path d="M6 8v7h8V8a4 4 0 10-8 0zm2.03-5.67a2 2 0 113.95 0A6 6 0 0116 8v6l3 2v1H1v-1l3-2V8a6 6 0 014.03-5.67zM12 18a2 2 0 11-4 0h4z" />
        </svg>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s"
          alt="hiits and curves admin profile"
          className="w-[40px] h-[40px] rounded-[40px] border-2 border-myBlack cursor-pointer"
        />
      </div>
    </div>
  );
}
