import React from "react";

const Ellipse = () => {
  return (
    <svg className="svg-node">
      <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
        <ellipse
          cx="15.84"
          cy="14.88"
          rx="14.399999999999999"
          ry="9.6"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="1.3"
          pointerEvents="all"
        ></ellipse>
      </g>
    </svg>
  );
};

export default Ellipse;
