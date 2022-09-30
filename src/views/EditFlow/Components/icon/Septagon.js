import React from "react";
// 七边形
const Septagon = () => {
  return (
    <svg className="svg-node">
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <polygon
          points="14,0 25.06,5.6 28,18.06 20.02,28 7.7,28 0,18.06 2.94,5.6"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></polygon>
      </g>
    </svg>
  );
};

export default Septagon;
