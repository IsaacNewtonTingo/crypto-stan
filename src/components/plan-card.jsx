import React from "react";
import PrimaryButton from "./primary-button";

export default function PlanCard({ item }) {
  return (
    <div className="rounded-lg shadow-lg">
      <div className="bg-gradient-to-r from-primary-900 to-primary-600 rounded-lg flex flex-col items-center py-10 text-white">
        <h4 className="font-bold text-gray-300 text-[20px]">{item.type}</h4>

        <h2 className="font-black text-[40px]">${item.amount} </h2>
        <span className="text-gray-400 text-[16px] font-bold">{item.time}</span>
      </div>

      <div className="p-6">
        {item.benefits.map((ben) => (
          <div key={ben} className="flex items-center gap-2">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              className="text-primary-900"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
            </svg>
            <p className="text-gray-500">{ben}</p>
          </div>
        ))}
        <PrimaryButton className="mt-10">Buy Plan</PrimaryButton>
      </div>
    </div>
  );
}
