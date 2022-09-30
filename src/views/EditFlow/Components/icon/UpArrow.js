import React from "react";

const UpArrow = () => {
  return (
    <svg>
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <polygon
          points="0,10 15,0 30,10 20,10 20,28 10,28 10,10"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          strokeMiterlimit="10"
          pointerEvents="all"
        ></polygon>
      </g>
    </svg>
  );
};

export default UpArrow;
