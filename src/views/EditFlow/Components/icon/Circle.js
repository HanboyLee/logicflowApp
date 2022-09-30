import React from "react";

const Circle = () => {
  return (
    <svg>
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <ellipse
          cx="15.98"
          cy="14.96"
          rx="13.600000000000001"
          ry="13.600000000000001"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></ellipse>
      </g>
    </svg>
  );
};

export default Circle;
