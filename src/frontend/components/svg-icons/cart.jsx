import React from "react";

export const Cart = ({ color, size }) => {
  return (
    <svg
      width={size || "1.75rem"}
      height={size || "1.75rem"}
      viewBox="0 0 256 256"
    >
      <path
        fill={color || "var(--primary-color)"}
        d="M200 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16ZM80 200a16 16 0 1 0 16 16a16 16 0 0 0-16-16ZM228.1 67.2a8.1 8.1 0 0 0-6.4-3.2H48.3l-8.1-28.4A16.1 16.1 0 0 0 24.8 24H8a8 8 0 0 0 0 16h16.8l9.8 34.1v.2L61 166.6A24.1 24.1 0 0 0 84.1 184h95.8a24.1 24.1 0 0 0 23.1-17.4l26.4-92.4a8 8 0 0 0-1.3-7Z"
      ></path>
    </svg>
  );
};
