import React from "react";

export default function OverviewCard({
  title,
  content,
  sub,
  subColor,
  icon,
  onClick,
  className,
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-gradient-to-r from-gray-900 to-primary-900 rounded-lg p-10 flex items-center justify-between cursor-pointer ${className}`}
    >
      <div>
        <p className="text-gray-400">{title}</p>
        <h2 className="font-black text-white text-[30px]">{content}</h2>
        <p className={`font-bold ${subColor}`}>{sub}</p>
      </div>

      {icon}
    </div>
  );
}
