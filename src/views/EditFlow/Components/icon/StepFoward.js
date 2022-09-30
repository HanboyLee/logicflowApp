/* eslint-disable react/no-unknown-property */
import React from "react";

const StepFoward = ({ size = 24 }) => {
  return (
    <svg className="icon" viewBox="0 0 1024 1024" width={size} height={size}>
      <path
        d="M170.666667 967.111111H56.888889v-113.777778c0-284.444444 227.555556-512 512-512h341.333333v113.777778h-341.333333c-221.866667 0-398.222222 176.355556-398.222222 398.222222v113.777778z"
        fill="#0D1733"
        p-id="1167"
      ></path>
      <path
        d="M614.4 762.311111L529.066667 682.666667l284.444444-284.444445-284.444444-278.755555L614.4 39.822222 972.8 398.222222z"
        fill="#0D1733"
        p-id="1168"
      ></path>
    </svg>
  );
};

export default StepFoward;
