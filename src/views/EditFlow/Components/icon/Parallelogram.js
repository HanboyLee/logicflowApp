import React from "react";

const Parallelogram = () => {
  return (
    <svg className="svg-node">
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <path
          d="M 1.44 22.08 L 6.24 7.68 L 30.24 7.68 L 25.44 22.08 Z"
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

export default Parallelogram;
