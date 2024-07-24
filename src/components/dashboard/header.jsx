import React from "react";

export default function Header() {
  return (
    <div className="h-[80px] w-[75%] bg-gradient-to-r from-gray-900 to-primary-900 shadow-lg fixed right-0 flex items-center justify-between px-10 z-50 gap-10">
      <div className="w-[25%] flex gap-2 items-center">
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-[40px] text-primary-100"
        >
          <path d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2V128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-18.7L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1l-91.2 78.2c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c8.8 0 16.8 3.6 22.6 9.3l.1.1zM0 304c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zm48 112v48h48c0-26.5-21.5-48-48-48zm48-112H48v48c26.5 0 48-21.5 48-48zm368 112c-26.5 0-48 21.5-48 48h48v-48zm-48-112c0 26.5 21.5 48 48 48v-48h-48zm-96 80c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64z" />
        </svg>

        <div className="">
          <p className="text-gray-400">Balance</p>
          <p className="text-green-400 font-black">USD. 245.99</p>
        </div>
      </div>

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
