import React from "react";
import TriggerCom from "./TriggerCom";
import { info as infos } from "./triggerConditionConfig";

const TriggerRender = () => {
  return (
    <>
      {infos.map((info) => (
        <TriggerCom key={info.name} info={info} />
      ))}
    </>
  );
};

export default TriggerRender;
