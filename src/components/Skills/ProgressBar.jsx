/* eslint-disable react/prop-types */
// ProgressBar.js
import React from "react";

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="flex justify-between max-sm:flex-col sm:space-x-10 items-center text-white">
      <div className="flex justify-between sm:hidden w-full">
        <div className="max-w-[150px] w-full">{label}</div>
        <span>{`${percentage}%`}</span>
      </div>
      <div className="max-w-[150px] w-full max-sm:hidden">{label}</div>
      <div className="flex-grow relative w-[480px] max-sm:w-full h-4 bg-[#43366a] rounded-2xl p-1">
        <div
          className="h-full bg-accent rounded-2xl"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="max-sm:hidden">{`${percentage}%`}</span>
    </div>
  );
};

export default ProgressBar;
