import React from "react";
// 加号
const Cross = () => {
  return (
    <svg className="svg-node">
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <polygon
          points="0,9 9,9 9,0 18,0 18,9 27,9 27,18 18,18 18,27 9,27 9,18 0,18"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></polygon>
      </g>
    </svg>
  );
};

export default Cross;
