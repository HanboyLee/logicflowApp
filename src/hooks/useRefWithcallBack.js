import React from "react";
const useCustomRef = () => {
  const ref = React.useRef(null);
  const [isDoneRef, setIsDoneRef] = React.useState(false);
  const setRef = React.useCallback(
    (node) => {
      if (node) {
        ref.current = node;
        setIsDoneRef(true);
      }
    },
    [setIsDoneRef]
  );

  return [ref, setRef, isDoneRef];
};

export default useCustomRef;
