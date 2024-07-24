import React from "react";

export default function Header() {
  return (
    <div className="h-[80px] w-full bg-gradient-to-r from-gray-900 to-primary-900 shadow-lg fixed flex items-center justify-end px-4 z-20 gap-10">
      <div className="w-[25%]"></div>

      <div className="w-[75%] fixed flex items-center justify-end gap-2">
        <p className="text-green-400 font-black">USD. 245.99</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd5avdba8EiOZH8lmV3XshrXx7dKRZvhx-A&s"
          alt="hiits and curves admin profile"
          className="w-[40px] h-[40px] rounded-[40px] border-2 border-myBlack cursor-pointer"
        />
      </div>
    </div>
  );
}
