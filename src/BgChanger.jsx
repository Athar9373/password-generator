import React from "react";

export default function BgChanger({ BgChange, bgColor }) {
  return (
    <div className="flex justify-center items-center h-screen duration-300">
      <button
        onClick={() => BgChange()}
        className={
          bgColor
            ? "border-4 border-black rounded-[15px] h-15 w-55"
            : "border-4 border-white rounded-[15px] h-15 w-55"
        }
      >
        Change Background color
      </button>
    </div>
  );
}
