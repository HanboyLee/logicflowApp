import React from "react";
import styled from "styled-components";
import * as A from "antd";
import PropTypes from "prop-types";

//hooks
import {
  useProperties,
  useSelectedCurrentNode,
} from "@/hooks/EditFlowProvider";

//components
import { LabelContent, PanelItem, SelectBar } from "./CommonStyled";

const moduleCategoryOption = [
  { value: "moduleA", label: "模组A" },
  { value: "moduleB", label: "模组B" },
  { value: "moduleC", label: "模组C" },
];
const moduleSouceIdOption = [
  { value: "sourceA", label: "source-A-1" },
  { value: "sourceB", label: "source-B-2" },
  { value: "sourceC", label: "source-C-3" },
];

const PropertyPanelBasic = React.forwardRef(({ setLFElementStyle }, lfRef) => {
  // hooks
  const [properties] = useProperties();
  const [selectedCurrentNode] = useSelectedCurrentNode();

  const [basicPropertity, setBasicPropertity] = React.useState({
    moduleName: "",
    moduleCategory: "moduleA",
    moduleSouceId: "sourceA",
  });

  //   监听properties及选中节点变换
  React.useEffect(() => {
    setBasicPropertity((prev) => {
      return { ...prev, ...properties };
    });
    return () => {
      setBasicPropertity({
        moduleName: "",
        moduleCategory: "moduleA",
        moduleSouceId: "sourceA",
      });
    };
  }, [properties, selectedCurrentNode]);

  const commonPropertiesSetting = (param) => {
    const {
      data: { id },
    } = selectedCurrentNode;
    setBasicPropertity((prev) => ({ ...prev, ...param }));
    lfRef.current.setProperties(id, {
      ...properties,
      ...param,
    });
  };

  const onChangeModuleName = (e) => {
    const {
      data: { id },
    } = selectedCurrentNode;
    const param = { moduleName: e.target.value };
    commonPropertiesSetting(param);
    lfRef.current.updateText(id, e.target.value);
  };

  const onChangeModuleCategory = (val) => {
    const param = { moduleCategory: val };
    commonPropertiesSetting(param);
  };

  const onChangeModuleSouceId = (val) => {
    const param = { moduleSouceId: val };
    commonPropertiesSetting(param);
  };

  return (
    <>
      <PanelItem>
        <LabelContent>模组名稱：</LabelContent>
        <Input
          value={basicPropertity.moduleName}
          onChange={onChangeModuleName}
        />
      </PanelItem>

      <PanelItem>
        <LabelContent>模组类别：</LabelContent>
        <SelectBar
          value={basicPropertity.moduleCategory}
          onChange={onChangeModuleCategory}
        >
          {moduleCategoryOption.map((d) => {
            return (
              <A.Select.Option value={d.value} key={d.value}>
                {d.label}
              </A.Select.Option>
            );
          })}
        </SelectBar>
      </PanelItem>

      <PanelItem>
        <LabelContent>数据源：</LabelContent>
        <SelectBar
          value={basicPropertity.moduleSouceId}
          onChange={onChangeModuleSouceId}
        >
          {moduleSouceIdOption.map((d) => {
            return (
              <A.Select.Option value={d.value} key={d.value}>
                {d.label}
              </A.Select.Option>
            );
          })}
        </SelectBar>
      </PanelItem>
    </>
  );
});

export default React.memo(PropertyPanelBasic);

PropertyPanelBasic.propTypes = {
  setLFElementStyle: PropTypes.func,
};

const Input = styled(A.Input)`
  vertical-align: bottom;
  width: 10rem;
  &.ant-input {
    border-top-width: 0 !important;
    border-left-width: 0 !important;
    border-right-width: 0 !important;
  }
  &.ant-input:focus {
    border-top-width: 0 !important;
    border-left-width: 0 !important;
    border-right-width: 0 !important;
    box-shadow: unset;
  }
`;
