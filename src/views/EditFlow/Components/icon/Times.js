import React from "react";
//乘号
const Times = () => {
  return (
    <svg className="svg-node">
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <polygon
          points="0,4.5 4.5,0 13.5,9 22.5,0 27,4.5 18,13.5 27,22.5 22.5,27 13.5,18 4.5,27 0,22.5 9,13.5"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></polygon>
      </g>
    </svg>
  );
};

export default Times;
