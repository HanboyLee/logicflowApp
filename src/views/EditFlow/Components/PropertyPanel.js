import React from "react";
import * as A from "antd";
import * as AICON from "@ant-design/icons";
import PropTypes from "prop-types";
import styled from "styled-components";
import clsx from "clsx";
import "@/components";
//hooks
import { useIsVisibleRuleModel } from "@/hooks/EditFlowProvider";

//components
import PropertyPanelStyles from "./PropertyPanelStyles";
import PropertyPanelBasics from "./PropertyPanelBasics";
import PropertyRulePanel from "./PropertyRulePanel";

// 添加规则
const ExtraBehavior = () => {
  const [, setIsVisibleRuleModel] = useIsVisibleRuleModel();
  const onOpenRuleModel = (e) => {
    e.stopPropagation();
    setIsVisibleRuleModel(true);
  };
  return <PlusOutlined onClick={onOpenRuleModel} />;
};
const PropertyPanel = React.forwardRef((props, lf) => {
  const { isOpenPanel, setLFElementStyle } = props;

  return (
    <PanelContent className={clsx({ openPanel: isOpenPanel })}>
      {/* 动画及侧边栏属性开关 */}
      {isOpenPanel && (
        <A.Collapse defaultActiveKey={["1", "3"]}>
          <A.Collapse.Panel header="属性" key="1">
            <PropertyPanelBasics
              ref={lf}
              setLFElementStyle={setLFElementStyle}
            />
          </A.Collapse.Panel>
          <A.Collapse.Panel header="样式" key="2">
            <PropertyPanelStyles setLFElementStyle={setLFElementStyle} />
          </A.Collapse.Panel>
          <A.Collapse.Panel header="规则引擎" key="3" extra={<ExtraBehavior />}>
            {/* 规则引擎 */}
            <PropertyRulePanel />
            {/* <PropertyPanelStyles setLFElementStyle={setLFElementStyle} /> */}
          </A.Collapse.Panel>
        </A.Collapse>
      )}
    </PanelContent>
  );
});

const PanelContent = styled.div`
  background: #fff;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0px;
  border-left: 1px solid #dadce0;
  width: 0;
  overflow: hidden;
  transition: 0.5s ease-out;
  opacity: 0;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  &.openPanel {
    width: 300px;
    opacity: 1;
  }
`;

const PlusOutlined = styled(AICON.PlusOutlined)`
  font-size: larger;
  transition: color 0.3s ease-out;
  &:hover {
    color: skyblue;
  }
`;

export default PropertyPanel;

PropertyPanel.propTypes = {
  isDoneLfRef: PropTypes.bool,
  isOpenPanel: PropTypes.bool,
  setLFElementStyle: PropTypes.func,
};
