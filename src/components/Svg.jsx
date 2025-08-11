// SketchBox.jsx
import React from "react";

const SketchBox = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C10 17.79 11.79 16 14 16H26L30 20H50C52.21 20 54 21.79 54 24V44C54 46.21 52.21 48 50 48H14C11.79 48 10 46.21 10 44V20Z"
        stroke="#333"
        stroke-width="2"
        fill="#F7F7F7"
      />

      <path
        d="M22 34L28 40L42 26"
        stroke="#000"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <rect x="16" y="26" width="6" height="6" rx="1" fill="#C0C0C0" />
      <rect x="24" y="26" width="6" height="6" rx="1" fill="#C0C0C0" />

      <rect
        x="34"
        y="26"
        width="6"
        height="6"
        rx="1"
        fill="gray"
        stroke="#000"
        stroke-width="1"
      />
    </svg>
  );
};

export default SketchBox;
