import React from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import PropTypes from "prop-types";
import styled from "styled-components";
const DataDialog = ({ data }) => {
  console.log(data, "data");
  const mainStyle = `height: 550px;weith:'100%';overflow-y: auto;`;
  return <JSONPretty mainStyle={mainStyle} data={data}></JSONPretty>;
};

export default DataDialog;

DataDialog.propTypes = {
  data: PropTypes.object,
};
