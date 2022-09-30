import React from "react";
import PropTypes from "prop-types";
import * as A from "antd";
import styled from "styled-components";
const PropertyPanel = React.forwardRef((props, lf) => {
  return <PanelContent>PropertyPanel</PanelContent>;
});

const PanelContent = styled.div`
  width: 300px;
  background: #fff;
  height: calc(100% - 40px);
  position: absolute;
  right: 0px;
  top: 40px;
  border-left: 1px solid #dadce0;
`;

export default PropertyPanel;

PropertyPanel.propTypes = {
  isDoneLfRef: PropTypes.bool,
  isOpenPanel: PropTypes.bool,
};
