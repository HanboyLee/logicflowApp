import React from "react";
import * as A from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { PanelItem } from "./CommonStyled";
import { BaseSelectCom } from "@/components/SelectCom";
//hooks
import { useIsVisibleRuleModel, useRuleStore } from "@/hooks/EditFlowProvider";

const unitOptions = [
  { id: "1", label: "进料" },
  { id: "2", label: "储料" },
  { id: "3", label: "单元1" },
  { id: "4", label: "单元2" },
  { id: "5", label: "成品产出" },
];

const ruleOptions = [
  { id: "1", label: "规则一" },
  { id: "2", label: "规则二" },
];

const GlobalStyle = createGlobalStyle`
.wrapRuleModal{
	.ant-modal-content{
		margin: 0 auto;
		width: ${(props) => `${props.modalSize}px`};

	}
}
`;
React.createElement;
const PopupRuleModel = () => {
  const modalSize = 300;

  // hooks
  const [isVisibleRuleModel, setIsVisibleRuleModel] = useIsVisibleRuleModel();
  const [, setRuleStore] = useRuleStore();

  const [unitSelected, setUnitSelected] = React.useState("1");
  const [ruleSelected, setRuleSelected] = React.useState("1");

  //   视窗关闭后initialize values
  React.useEffect(() => {
    if (!isVisibleRuleModel) {
      initializeValue();
    }
  }, [isVisibleRuleModel, initializeValue]);

  const initializeValue = React.useCallback(() => {
    setUnitSelected("2");
    setRuleSelected("1");
  }, []);

  const onSubmit = () => {
    setRuleStore((prev) => {
      return [
        ...prev,
        {
          key: prev.length + 1,
          unitType: unitSelected,
          unitLabel: unitOptions.find((d) => d.id === unitSelected).label,
          ruleType: ruleSelected,
          ruleLabel: ruleOptions.find((d) => d.id === ruleSelected).label,
        },
      ];
    });
    setIsVisibleRuleModel(false);
  };
  const onCancel = () => {
    setIsVisibleRuleModel(false);
  };

  const footerBar = () => {
    return (
      <FooterBar>
        <A.Button type="primary" onClick={onSubmit}>
          确定
        </A.Button>
        <A.Button onClick={onCancel}>取消</A.Button>
      </FooterBar>
    );
  };

  return (
    <>
      <GlobalStyle modalSize={modalSize} />
      <A.Modal
        open={isVisibleRuleModel}
        centered
        maskClosable={false}
        closable={false}
        footer={footerBar()}
        wrapClassName="wrapRuleModal"
      >
        <PanelItem>
          <BaseSelectCom
            label="单元"
            specifyLabel="label"
            specifyValue="id"
            setValue={setUnitSelected}
            value={unitSelected}
            options={unitOptions}
            styles={{ width: `${modalSize * 0.7}px` }}
          />
        </PanelItem>
        <PanelItem>
          <BaseSelectCom
            label="规则"
            specifyLabel="label"
            specifyValue="id"
            setValue={setRuleSelected}
            value={ruleSelected}
            options={ruleOptions}
            styles={{ width: `${modalSize * 0.7}px` }}
          />
        </PanelItem>
      </A.Modal>
    </>
  );
};

const FooterBar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
`;

export default PopupRuleModel;
