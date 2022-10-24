import React from "react";

const ComplexContainer = React.forwardRef(({ children }, ref) => (
  <div ref={ref}>
    <p>Start</p>
    <div className="flex-row">
      <span>&gt;</span>
      {children}
      <span>&lt;</span>
    </div>
    <p>End</p>
  </div>
));

export default ComplexContainer;
