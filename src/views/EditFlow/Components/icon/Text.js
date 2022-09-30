import React from "react";

const Text = () => {
  return (
    <svg>
      <g>
        <g transform="translate(0.5,0.5)" style={{ visibility: "visible" }}>
          <rect
            x="0.98"
            y="7.84"
            width="29.4"
            height="12.74"
            fill="none"
            stroke="white"
            pointerEvents="stroke"
            visibility="hidden"
            strokeWidth="9"
          ></rect>
          <rect
            x="0.98"
            y="7.84"
            width="29.4"
            height="12.74"
            fill="none"
            stroke="none"
            pointerEvents="all"
          ></rect>
        </g>
        <g>
          <clipPath id="mx-clip-2-9-28-15-0">
            <rect x="2" y="9" width="28" height="15"></rect>
          </clipPath>
          <g
            fill="#000000"
            fontFamily="Helvetica"
            clipPath="url(https://app.diagrams.net/#mx-clip-2-9-28-15-0)"
            fontSize="5.88px"
          >
            <text x="3.92" y="16.66">
              Text Node
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Text;
