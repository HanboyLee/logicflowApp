import React from "react";
import PropTypes from "prop-types";
import * as A from "antd";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import { shortStyles, borderStyles } from "../constant";
import clsx from "clsx";
//components
import BaseSelectCom from "@/components/SelectCom/BaseSelectCom";
const PropertyPanel = React.forwardRef((props, lf) => {
  const { isDoneLfRef, isOpenPanel, setLFElementStyle } = props;
  const [isOpenColor, setIsOpenColor] = React.useState(false);
  const persetColor = React.useMemo(
    () => shortStyles.map((d) => d.backgroundColor),
    []
  );
  const [style, setStyle] = React.useState({
    backgroundColor: "#fff", // 填充色
    gradientColor: "", // 渐变色
    borderType: 0, // 线条类型
    borderColor: "", // 填充颜色
    borderWidth: 1, // 线条宽度
    borderStyle: "", // 线条类型
    fontSize: 12, // 文本大小
    fontColor: "", // 文本颜色
    fontWeight: "", // 文本加粗
    fontFamily: "", // 文本样式
    lineHeight: "", // 行高
    textAlign: "", // 对齐
  });
  const openColor = () => {
    setIsOpenColor((prev) => !prev);
  };
  const onChangeColor = ({ hex }) => {
    setStyle((prev) => ({ ...prev, backgroundColor: hex }));
    setLFElementStyle({ backgroundColor: hex });
  };

  return (
    <PanelContent className={clsx({ openPanel: isOpenPanel })}>
      <div>属性面板</div>
      <A.Collapse defaultActiveKey={["1", "2", "3"]}>
        <A.Collapse.Panel header="样式属性" key="1">
          {/* 背景颜色 */}
          <div className="labelColor">背景颜色：</div>
          <div className="swatch">
            <ColorShow color={style.backgroundColor} onClick={openColor} />
          </div>
          {isOpenColor && (
            <Popover>
              <Cover onClick={() => setIsOpenColor(false)} />
              <SketchPicker
                presetColors={persetColor}
                color={style.backgroundColor}
                onChange={onChangeColor}
              />
            </Popover>
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
  .labelColor {
    display: inline-block;
  }
  .swatch {
    padding: 5px;
    background: #fff;
    border-radius: 1px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
  }
`;
const ColorShow = styled.div`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: ${({ color }) => {
    return `${color}`;
  }};
`;
const Popover = styled.div`
  position: absolute;
  z-index: 2;
`;
const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export default PropertyPanel;

PropertyPanel.propTypes = {
  isDoneLfRef: PropTypes.bool,
  isOpenPanel: PropTypes.bool,
  setLFElementStyle: PropTypes.func,
};
