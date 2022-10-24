import React from "react";
import { useDrag } from "react-dnd";
import DragContainer from "./components/DragContainer";
const Item = ({ info, toolbar }) => {
  const {
    item: ItemType = null,
    children = null,
    props = null,
    acceptsNewChildren = false,
  } = info || {};

  const itemChildren = Array.isArray(children)
    ? children.map((child, index) => {
        if (typeof child === "string") {
          return child;
        }
        console.log(child);
        return <Item key={index} info={child} toolbar={toolbar ? 1 : 0} />;
      })
    : children;

  const [res, drag] = useDrag({
    type: info?.type || "",
    item: info,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  if (ItemType == null) {
    return <DragContainer info={info}>{itemChildren}</DragContainer>;
  }
  //是否为可添加容器
  const Parent =
    acceptsNewChildren && !toolbar
      ? ({ children }) => <DragContainer info={info}>{children}</DragContainer>
      : React.Fragment;

  return (
    //渲染
    <Parent>
      <ItemType ref={drag} {...(props || {})} toolbar={toolbar}>
        {itemChildren}
      </ItemType>
    </Parent>
  );
};

export default Item;
