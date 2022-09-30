import React from "react";
// 八边形
const Heptagon = () => {
  return (
    <svg className="svg-node">
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <polygon
          points="19.74,0 28,8.26 28,19.74 19.74,28 8.26,28 0,19.74 0,8.26 8.26,0"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></polygon>
      </g>
    </svg>
  );
};

export default Heptagon;
