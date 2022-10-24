import React from "react";
import styled from "styled-components";
import { Colors } from "./Colors.js";
import { SourceBox } from "./SourceBox.js";
import { StatefulTargetBox as TargetBox } from "./TargetBox.js";
import * as A from "antd";
import { useDndData } from "@/hooks/DndContext/DndContextProvider.js";
import Item from "./Item.js";
// import { TOOLS } from "@/hooks/DndContext/dndDefaultData.js";
import TriggerCondition from "@/views/RuleConfig/components/RuleModule/TriggerCondition";

const RuleMirror = React.memo(function Container() {
  const [dndData] = useDndData();
  console.log(dndData, "dndData");
  return (
    <RuleMirrorContainer>
      <div className="ruleMirrorWarpper">
        <div className="ruleSideBox">
          {/* <Item info={TOOLS} toolbar={true} /> */}
          <A.Collapse
            defaultActiveKey={["1", "2", "3", "4"]}
            // onChange={onChange}
          >
            <A.Collapse.Panel header="触发条件" key="1">
              {/* <TriggerCom /> */}
              <TriggerCondition />
            </A.Collapse.Panel>
            <A.Collapse.Panel header="功能运算(符合条件后运算的逻辑)" key="2">
              0
            </A.Collapse.Panel>
            <A.Collapse.Panel header="过滤（功能运算后，执行的过滤）" key="3">
              1
            </A.Collapse.Panel>
            <A.Collapse.Panel header="执行（那么）" key="4">
              2
            </A.Collapse.Panel>
          </A.Collapse>
        </div>

        <div className="templateMirrorBox">
          <div className="editType">
            <div>新建规则</div>
          </div>
          <div className="ruleMirrorHeader">
            <div className="ruleMirrorHeaderDescript">
              <DescItem>
                <span className="label">名称：</span>
                <A.Input placeholder="请输入名称" />
              </DescItem>
              <DescItem>
                <span className="label">描述：</span>
                <A.Input.TextArea
                  placeholder="请输入描述"
                  autoSize={{ minRows: 4 }}
                />
              </DescItem>
            </div>
            <div className="ruleMirrorHeaderFun">
              <Button type="default">导入</Button>
              <Button type="primary">保存</Button>
              <Button>取消</Button>
            </div>
          </div>
          <Item info={dndData} toolbar={false} />
          {/* <TargetBox /> */}
        </div>
      </div>
    </RuleMirrorContainer>
  );
});

export default RuleMirror;

const RuleMirrorContainer = styled.div`
  width: 100%;
  height: 100%;
  .ruleMirrorWarpper {
    display: flex;
    height: 100%;
    .ruleSideBox {
      width: 20rem;
      height: calc(100vh - 64px);
      overflow-y: auto;
    }
    .templateMirrorBox {
      flex: 1;
      .editType {
        height: 3rem;
        & > div {
          font-size: 1.2rem;
          line-height: 2.5;
        }
      }
      .ruleMirrorHeader {
        padding: 0 0.5rem;
        width: 100%;
        height: 10rem;
        border: 1px solid #333;
        display: flex;
        align-items: center;
        .ruleMirrorHeaderDescript {
          width: 100%;
          height: 100%;
          /* background: #f0f; */
        }
        .ruleMirrorHeaderFun {
          align-self: flex-start;
          margin-left: auto;
          padding: 1rem;
        }
      }
    }
  }
`;

const Button = styled(A.Button)`
  width: 10rem;
  height: 2rem;
  margin: 0.5rem;
`;

const DescItem = styled.div`
  margin-top: 10px;
  display: flex;
  .label {
    width: 50px;
  }
`;
