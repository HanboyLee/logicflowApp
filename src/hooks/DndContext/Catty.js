import React from "react";

const Catty = React.forwardRef((props, ref) => (
  <img
    src="https://static.greatbigcanvas.com/images/square/getty-images/cat-cleaning-paw-close-up,1084976.jpg?max=100"
    alt="catty"
    ref={ref}
  />
));

export default Catty;
