import React from "react";

const DownArrow = () => {
  return (
    <svg className="svg-node">
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <polygon
          points="10,0 20,0 20,18 30,18 15,28 0,18 10,18"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></polygon>
      </g>
    </svg>
  );
};

export default DownArrow;
