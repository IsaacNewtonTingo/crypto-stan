import React, { useContext } from "react";
import Title from "./title";
import { AppContext } from "../context/app-context";

export default function NotifModal({}) {
  const { setNotifOpen } = useContext(AppContext);
  return (
    <div className="fixed left-0 right-0 z-50 flex items-center justify-center w-full bg-[rgba(0,0,0,0.9)] md:inset-0 h-screen">
      <div className="w-[90%] md:w-[30%] bg-gray-50 rounded-lg p-6 gap-4 absolute top-[100px] right-10">
        <div className="flex items-center justify-between">
          <Title className="text-[30px] text-gray-700">Notifications</Title>

          <svg
            onClick={() => setNotifOpen(false)}
            fill="none"
            viewBox="0 0 24 24"
            className="w-[30px] text-red-200 hover:text-red-500 cursor-pointer"
          >
            <path
              fill="currentColor"
              d="M16.34 9.322a1 1 0 10-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 007.86 9.024l2.728 2.926-2.927 2.728a1 1 0 101.364 1.462l2.926-2.727 2.728 2.926a1 1 0 101.462-1.363l-2.727-2.926 2.926-2.728z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11 9a9 9 0 110-18 9 9 0 010 18z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <p className="text-gray-500 mt-4">You have no notifications</p>
      </div>
    </div>
  );
}
