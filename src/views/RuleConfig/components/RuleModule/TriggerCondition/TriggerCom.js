import React from "react";
import { useDrag } from "react-dnd";
import { CommonBlock } from "@/views/RuleConfig/components/styleComponents";

const TriggerCom = ({ info }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "main",
    item: info,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <CommonBlock
      ref={drag}
      style={{ color: isDragging ? "red" : "blue", ...info.props.style }}
    >
      {info.name}
    </CommonBlock>
  );
};

export default TriggerCom;
