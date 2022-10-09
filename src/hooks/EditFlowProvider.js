import React from "react";
import PropTypes from "prop-types";

const EditFlowContext = React.createContext();

const EditFlowProvider = ({ children }) => {
  const [properties, setProperties] = React.useState([]);
  return (
    <EditFlowContext.Provider value={{ properties, setProperties }}>
      {children}
    </EditFlowContext.Provider>
  );
};

export default EditFlowProvider;

EditFlowProvider.propTypes = {
  children: PropTypes.element,
};

export const useProperties = () => [
  React.useContext(EditFlowContext).properties,
  React.useContext(EditFlowContext).setProperties,
];
