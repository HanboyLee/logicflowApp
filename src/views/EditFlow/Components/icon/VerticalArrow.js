import React from "react";

const VerticalArrow = () => {
  return (
    <svg className="svg-node">
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <polygon
          points="0,9 13.6,0 27.2,9 18.2,9 18.2,18 27.2,18 13.6,27 0,18 9,18 9,9"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></polygon>
      </g>
    </svg>
  );
};

export default VerticalArrow;
