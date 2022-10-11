import React from "react";
import * as A from "antd";
import { shortStyles, borderStyles } from "../constant";
import clsx from "clsx";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SketchPicker } from "react-color";
import { useProperties } from "@/hooks/EditFlowProvider";

const PropertyPanelStyles = ({ setLFElementStyle }) => {
  const persetColor = React.useMemo(
    () => shortStyles.map((d) => d.backgroundColor),
    []
  );
  const borderStylesOptions = React.useMemo(
    () => borderStyles.map((d) => ({ label: d.value, value: d.value })),
    []
  );
  const borderWidthOptions = React.useMemo(
    () =>
      Array(11)
        .fill()
        .map((_, i) => ({ label: i + 1, value: i + 1 })),
    []
  );
  const lineHeightOptions = React.useMemo(
    () =>
      Array(5)
        .fill(1)
        .map((_, i) => ({ label: _ + i * 0.5, value: _ + i * 0.5 })),
    []
  );
  const [isOpenColor, setIsOpenColor] = React.useState(false);
  const [isOpenBorderColor, setIsOpenBorderColor] = React.useState(false);
  const [isOpenTextColor, setIsOpenTextColor] = React.useState(false);

  const [properties] = useProperties();
  const [style, setStyle] = React.useState({
    backgroundColor: "#fff", // 填充色
    gradientColor: "", // 渐变色
    borderType: 0, // 线条类型
    borderColor: "#fff", // 填充颜色
    borderWidth: 1, // 线条宽度
    borderStyle: "solid", // 线条类型
    fontSize: 12, // 文本大小
    fontColor: "", // 文本颜色
    fontWeight: "normal", // 文本加粗
    textDecoration: "none", //文本底线
    fontStyle: "normal", //文本斜体
    fontFamily: "", // 文本样式
    lineHeight: 1, // 行高
    textAlign: "center", // 对齐
  });

  //  监听变化
  React.useEffect(() => {
    setStyle((prev) => ({ ...prev, ...properties }));
  }, [properties]);

  const openColor = (setState) => {
    setState((prev) => !prev);
  };

  const onChangeColor = ({ hex }) => {
    setStyle((prev) => ({ ...prev, backgroundColor: hex }));
    setLFElementStyle({ backgroundColor: hex });
  };

  const onChangeBorderStyle = (val) => {
    setStyle((prev) => ({ ...prev, borderStyle: val }));
    setLFElementStyle({ borderStyle: val });
  };

  const onChangeBorderColor = ({ hex }) => {
    setStyle((prev) => ({ ...prev, borderColor: hex }));
    setLFElementStyle({ borderColor: hex });
  };

  const onChangeBorderWidth = (val) => {
    setStyle((prev) => ({ ...prev, borderWidth: val }));
    setLFElementStyle({ borderWidth: val });
  };

  const onChangeTextLineHeight = (val) => {
    setStyle((prev) => ({ ...prev, lineHeight: val }));
    setLFElementStyle({ lineHeight: val });
  };

  const onChangeTextColor = ({ hex }) => {
    setStyle((prev) => ({ ...prev, fontColor: hex }));
    setLFElementStyle({ fontColor: hex });
  };

  const onChangeTextSize = ({ target }) => {
    let max = 30,
      min = 12;
    let val = target.value;
    if (val.length > 2) {
      val = val.slice(0, 2);
    }
    if (val > max) {
      val = 30;
    }
    if (val < min) {
      val = 12;
    }
    if (val) {
      setStyle((prev) => ({ ...prev, fontSize: parseInt(val) }));
      setLFElementStyle({ fontSize: parseInt(val) });
    }
  };
  //   文字样式
  const isFontWeightState = React.useMemo(
    () => style.fontWeight === "bold",
    [style]
  );
  const isTextDecorationState = React.useMemo(
    () => style.textDecoration === "underline",
    [style]
  );
  const isFontStyleState = React.useMemo(
    () => style.fontStyle === "italic",
    [style]
  );
  const onChangeFontWeight = () => {
    if (style.fontWeight === "bold") {
      setStyle((prev) => ({ ...prev, fontWeight: "normal" }));
      setLFElementStyle({ fontWeight: "normal" });
      return;
    }
    setStyle((prev) => ({ ...prev, fontWeight: "bold" }));
    setLFElementStyle({ fontWeight: "bold" });
  };
  const onChangeTextDecoration = () => {
    if (style.textDecoration === "underline") {
      setStyle((prev) => ({ ...prev, textDecoration: "none" }));
      setLFElementStyle({ textDecoration: "none" });
      return;
    }
    setStyle((prev) => ({ ...prev, textDecoration: "underline" }));
    setLFElementStyle({ textDecoration: "underline" });
  };
  const onChangeFontStyle = () => {
    if (style.fontStyle === "italic") {
      setStyle((prev) => ({ ...prev, fontStyle: "normal" }));
      setLFElementStyle({ fontStyle: "normal" });
      return;
    }
    setStyle((prev) => ({ ...prev, fontStyle: "italic" }));
    setLFElementStyle({ fontStyle: "italic" });
  };

  //   文字对齐
  const onChangeTextAlign = ({ target }) => {
    const val = target.value;
    setStyle((prev) => ({ ...prev, textAlign: val }));
    setLFElementStyle({ textAlign: val });
  };

  return (
    <>
      {/* 背景颜色 */}
      <PanelItem>
        <LabelContent>背景颜色：</LabelContent>
        <Swatch>
          <ColorShow
            color={style.backgroundColor}
            onClick={() => openColor(setIsOpenColor)}
          />
        </Swatch>
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
      </PanelItem>

      {/* 线条样式 */}
      <PanelItem>
        <LabelContent>线条样式：</LabelContent>
        <SelectBar
          size="large"
          value={style.borderStyle}
          onChange={onChangeBorderStyle}
          style={{ width: `auto` }}
        >
          <A.Select.Option value={"hidden"}>不显示线条</A.Select.Option>
          {borderStylesOptions.map((d) => {
            return (
              <A.Select.Option value={d.value} key={d.value}>
                <div
                  style={{
                    width: `150px`,
                    height: 0,
                    borderBottomStyle: d.value,
                    marginTop: `8px`,
                  }}
                ></div>
              </A.Select.Option>
            );
          })}
        </SelectBar>
      </PanelItem>

      {/* 背景颜色 */}
      <PanelItem>
        <LabelContent>线条颜色：</LabelContent>
        <Swatch>
          <ColorShow
            color={style.borderColor}
            onClick={() => openColor(setIsOpenBorderColor)}
          />
        </Swatch>
        {isOpenBorderColor && (
          <Popover>
            <Cover onClick={() => setIsOpenBorderColor(false)} />
            <SketchPicker
              presetColors={persetColor}
              color={style.borderColor}
              onChange={onChangeBorderColor}
            />
          </Popover>
        )}
      </PanelItem>

      {/* 线条宽度 */}
      <PanelItem>
        <LabelContent>线条宽度：</LabelContent>
        <SelectBar
          size="large"
          value={style.borderWidth}
          onChange={onChangeBorderWidth}
          style={{ width: `auto` }}
        >
          {borderWidthOptions.map((d) => {
            return (
              <A.Select.Option value={d.value} key={d.value}>
                {d.value} px
              </A.Select.Option>
            );
          })}
        </SelectBar>
      </PanelItem>

      {/* 文字行高 */}
      <PanelItem>
        <LabelContent>文字行高：</LabelContent>
        <SelectBar
          size="large"
          value={style.lineHeight}
          onChange={onChangeTextLineHeight}
          style={{ width: `auto` }}
        >
          {lineHeightOptions.map((d) => {
            return (
              <A.Select.Option value={d.value} key={d.value}>
                {d.value}
              </A.Select.Option>
            );
          })}
        </SelectBar>
      </PanelItem>

      {/* 文字对齐 */}
      <PanelItem>
        <LabelContent>文字对齐：</LabelContent>
        <A.Radio.Group
          size="small"
          buttonStyle="solid"
          value={style.textAlign}
          onChange={onChangeTextAlign}
        >
          <A.Radio.Button value="left">左对齐</A.Radio.Button>
          <A.Radio.Button value="center">居中</A.Radio.Button>
          <A.Radio.Button value="right">右对齐</A.Radio.Button>
        </A.Radio.Group>
      </PanelItem>

      {/* 文字颜色 */}
      <PanelItem>
        <LabelContent>文字颜色：</LabelContent>
        <Swatch>
          <ColorShow
            color={style.fontColor}
            onClick={() => openColor(setIsOpenTextColor)}
          />
        </Swatch>
        {isOpenTextColor && (
          <Popover>
            <Cover onClick={() => setIsOpenTextColor(false)} />
            <SketchPicker
              presetColors={persetColor}
              color={style.fontColor}
              onChange={onChangeTextColor}
            />
          </Popover>
        )}
      </PanelItem>

      {/* 文字大小 */}
      <PanelItem>
        <LabelContent>文字大小：</LabelContent>
        <NumberInput
          type="number"
          value={style.fontSize}
          onChange={onChangeTextSize}
          max={30}
          min={12}
          maxLength={2}
        />
      </PanelItem>

      {/* 文字样式 */}
      <PanelItem>
        <LabelContent>文字样式：</LabelContent>
        {isFontWeightState}
        <A.Button
          type={isFontWeightState && "primary"}
          onClick={onChangeFontWeight}
        >
          B
        </A.Button>
        <A.Button
          type={isTextDecorationState && "primary"}
          onClick={onChangeTextDecoration}
        >
          U
        </A.Button>
        <A.Button
          type={isFontStyleState && "primary"}
          onClick={onChangeFontStyle}
        >
          I
        </A.Button>
      </PanelItem>
    </>
  );
};

PropertyPanelStyles.propTypes = {
  setLFElementStyle: PropTypes.func,
};

const LabelContent = styled.div`
  display: inline-block;
`;
const Swatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
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
const PanelItem = styled.div`
  width: 100%;
  margin-top: 1rem;
  text-align: left;
`;
const SelectBar = styled(A.Select)`
  width: auto;
  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
`;
const NumberInput = styled(A.Input)`
  min-width: 150px;
  width: auto;
`;
export default PropertyPanelStyles;
