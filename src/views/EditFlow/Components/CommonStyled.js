import styled from "styled-components";
import * as A from "antd";
export const LabelContent = styled.div`
  display: inline-block;
`;

export const PanelItem = styled.div`
  width: 100%;
  margin-top: 1rem;
  text-align: left;
`;

export const SelectBar = styled(A.Select)`
  width: auto;
  min-width: 150px;
  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
`;
