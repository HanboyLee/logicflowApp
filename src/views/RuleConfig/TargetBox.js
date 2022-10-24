import React, { memo, useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { Colors } from "./Colors.js";
const style = {
  border: "1px solid gray",
  //   height: "100%",
  width: "100%",
  padding: "2rem",
  textAlign: "center",
};
const TargetBox = memo(function TargetBox({ onDrop, lastDroppedColor }) {
  const [{ isOver, draggingColor, canDrop }, drop] = useDrop(
    () => ({
      accept: [Colors.YELLOW, Colors.BLUE],
      drop(_item, monitor) {
        onDrop(monitor.getItemType());
        return undefined;
      },
      collect: (monitor) => {
        // console.log(monitor.getItemType());
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
          draggingColor: monitor.getItemType(),
        };
      },
    }),
    [onDrop]
  );

  const opacity = isOver ? 1 : 0.7;
  let backgroundColor = "#fff";
  switch (draggingColor) {
    case Colors.BLUE:
      backgroundColor = "lightblue";
      break;
    case Colors.YELLOW:
      backgroundColor = "lightgoldenrodyellow";
      break;
    default:
      break;
  }
  return (
    <TargetContainer>
      <div>模块</div>
      <div
        ref={drop}
        data-color={lastDroppedColor || "none"}
        style={{ ...style, backgroundColor, opacity }}
        role="TargetBox"
      >
        <p>Drop here.</p>

        {!canDrop && lastDroppedColor && (
          <p>Last dropped: {lastDroppedColor}</p>
        )}
      </div>
    </TargetContainer>
  );
});
export const StatefulTargetBox = (props) => {
  const [lastDroppedColor, setLastDroppedColor] = useState(null);
  console.log(lastDroppedColor);
  const handleDrop = useCallback((color) => setLastDroppedColor(color), []);
  return (
    <TargetBox
      {...props}
      lastDroppedColor={lastDroppedColor}
      onDrop={handleDrop}
    />
  );
};

// dropArea
const TargetContainer = styled.div`
  /* width: 100%; */
  height: 10rem;
`;
