import React from "react";

const Hexagon = () => {
  // 六边形
  return (
    <svg className="svg-node">
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <polygon
          points="6.16,0 21.84,0 28,14 21.84,28 6.16,28 0,14"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></polygon>
      </g>
    </svg>
  );
};

export default Hexagon;
