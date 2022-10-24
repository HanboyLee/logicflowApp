import React from "react";
import { CommonBlock } from "../../styleComponents";

const TriggerEquipmentTemplate = React.forwardRef((props, ref) => {
  return (
    <CommonBlock {...props} ref={ref}>
      {props.children}
    </CommonBlock>
  );
});

export default TriggerEquipmentTemplate;
