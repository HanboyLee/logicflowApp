import React from "react";

const Actor = () => {
  return (
    <svg>
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <ellipse
          cx="15.75"
          cy="4.73"
          rx="3.375"
          ry="3.375"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></ellipse>
        <path
          d="M 15.75 8.1 L 15.75 19.35 M 15.75 10.35 L 9 10.35 M 15.75 10.35 L 22.5 10.35 M 15.75 19.35 L 9 28.35 M 15.75 19.35 L 22.5 28.35"
          fill="none"
          stroke="white"
          strokeWidth="9.3"
          strokeMiterlimit="10"
          pointerEvents="stroke"
          visibility="hidden"
        ></path>
        <path
          d="M 15.75 8.1 L 15.75 19.35 M 15.75 10.35 L 9 10.35 M 15.75 10.35 L 22.5 10.35 M 15.75 19.35 L 9 28.35 M 15.75 19.35 L 22.5 28.35"
          fill="none"
          stroke="#000000"
          strokeWidth="1.3"
          strokeMiterlimit="10"
          pointerEvents="all"
        ></path>
      </g>
    </svg>
  );
};

export default Actor;
