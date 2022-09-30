import React from "react";

const Divide = () => {
  return (
    <svg className="svg-node">
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <circle
          cx="13.5"
          cy="4.5"
          r="3.375"
          fill="#fff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        />
        <polygon
          points="0,10 27,10 27,17 0,17"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></polygon>
        <circle
          cx="13.5"
          cy="22.5"
          r="3.375"
          fill="#fff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        />
      </g>
    </svg>
  );
};

export default Divide;
