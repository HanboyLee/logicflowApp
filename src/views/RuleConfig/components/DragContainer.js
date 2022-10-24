import { useDndData } from "@/hooks/DndContext/DndContextProvider";
import React from "react";
import { moveChild } from "../utils";
import { useDrop } from "react-dnd";
const DragContainer = ({ children, info }) => {
  //   const context = useContext(DataContext);
  const [dndData, setDndData] = useDndData();
  const [{ hovering, shallowHovering }, drop] = useDrop({
    accept: info.accepts || "item",
    drop: (item, monitor) => {
      if (monitor.isOver({ shallow: true })) {
        console.log(monitor.getItem(), 1);
        const itemInfo = monitor.getItem();

        console.log({ to: info, which: itemInfo });
        if (
          info.children === itemInfo ||
          info.children.filter((c) => c === itemInfo).length > 0
        )
          return;
        if (itemInfo.source) {
          setDndData(moveChild(dndData, { ...itemInfo, source: false }, info));
        } else {
          setDndData(moveChild(dndData, itemInfo, info));
        }
      }
    },
    collect: (monitor) => ({
      hovering: !!monitor.isOver({ shallow: false }),
      shallowHovering: !!monitor.isOver({ shallow: true }),
    }),
  });
  console.log(`hovering:${hovering}`, shallowHovering, "shallowHovering");
  return (
    <div
      ref={drop}
      className={
        hovering
          ? shallowHovering
            ? "drag-container-shallow-hover"
            : "drag-container-hover"
          : "drag-container"
      }
      style={info.props.isLayout ? info.props.style : null}
    >
      {children}
    </div>
  );
};
export default DragContainer;
