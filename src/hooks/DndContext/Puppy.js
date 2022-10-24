import React from "react";

const Puppy = React.forwardRef((props, ref) => (
  <p ref={ref}>
    <span role="img" aria-label="puppy">
      🐶
    </span>
  </p>
));

export default Puppy;
