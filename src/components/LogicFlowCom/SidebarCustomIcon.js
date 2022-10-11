import React from "react";
import * as A from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

const SidebarCustomIcon = ({ onMouseDown, title, children }) => {
  return (
    <NodeItem onMouseDown={onMouseDown}>
      <A.Tooltip color="green" title={title}>
        <div className="svg-node">{children}</div>
      </A.Tooltip>
    </NodeItem>
  );
};

const NodeItem = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 5px;
  display: inline-block;
  .svg-node {
    left: 1px;
    top: 1px;
    width: 32px;
    height: 30px;
    display: block;
    position: relative;
    overflow: hidden;
  }
`;
export default SidebarCustomIcon;

SidebarCustomIcon.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  onMouseDown: PropTypes.func.isRequired,
};
