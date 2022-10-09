import React from "react";
import * as A from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import { shortStyles, borderStyles } from "../constant";
import clsx from "clsx";
//components
import BaseSelectCom from "@/components/SelectCom/BaseSelectCom";
import PropertyPanelStyles from "./PropertyPanelStyles";
const PropertyPanel = React.forwardRef((props, lf) => {
  const { isOpenPanel, setLFElementStyle } = props;

  return (
    <PanelContent className={clsx({ openPanel: isOpenPanel })}>
      <A.Collapse defaultActiveKey={["1", "2", "3"]}>
        <A.Collapse.Panel header="样式属性" key="1">
          {isOpenPanel && (
            <PropertyPanelStyles setLFElementStyle={setLFElementStyle} />
          )}
        </A.Collapse.Panel>
      </A.Collapse>
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
  &.openPanel {
    width: 300px;
    opacity: 1;
  }
`;

export default PropertyPanel;

PropertyPanel.propTypes = {
  isDoneLfRef: PropTypes.bool,
  isOpenPanel: PropTypes.bool,
  setLFElementStyle: PropTypes.func,
};
