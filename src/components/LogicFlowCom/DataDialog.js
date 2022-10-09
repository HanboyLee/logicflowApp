import React from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import PropTypes from "prop-types";
const DataDialog = ({ data }) => {
  const mainStyle = `height: 550px;weith:'100%';overflow-y: auto;`;
  return <JSONPretty mainStyle={mainStyle} data={data}></JSONPretty>;
};

export default DataDialog;

DataDialog.propTypes = {
  data: PropTypes.object,
};
