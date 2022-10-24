import React from "react";
import * as A from "antd";
import { useRuleStore } from "@/hooks/EditFlowProvider";
import styled from "styled-components";
const PropertyRulePanel = () => {
  const [ruleList] = useRuleStore();

  console.log(ruleList, "ruleList");
  return (
    <div>
      {ruleList.map((d) => {
        if (!d) return <div>暂无数据</div>;
        return (
          <RuleItem>
            <div className="index">{d.key}</div>
            <div>{d.unitLabel}</div>
            <div></div>
          </RuleItem>
        );
      })}
    </div>
  );
};

const RuleItem = styled.div`
  border: 1px solid #f0f;
  /* padding: 0.5rem 0; */
  /* display: flex; */
  /* justify-content: space-around; */

  .index {
    /* margin-right: auto; */
    color: #f00;
  }
`;

export default PropertyRulePanel;
