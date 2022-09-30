import React from "react";

const Diamond = () => {
  return (
    <svg>
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <path
          d="M 15.98 1.36 L 29.58 14.96 L 15.98 28.56 L 2.38 14.96 Z"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          strokeMiterlimit="10"
          pointerEvents="all"
        ></path>
      </g>
    </svg>
  );
};

export default Diamond;
