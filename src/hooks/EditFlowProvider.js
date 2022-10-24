import React from "react";
import PropTypes from "prop-types";

const EditFlowContext = React.createContext();

const EditFlowProvider = ({ children }) => {
  const [properties, setProperties] = React.useState([]);
  const [selectedCurrentNode, setSelectedCurrentNode] = React.useState(null);
  const [isVisibleRuleModel, setIsVisibleRuleModel] = React.useState(false);

  // TODO:暂时储存规则引擎容器
  const [ruleStore, setRuleStore] = React.useState([]);
  return (
    <EditFlowContext.Provider
      value={{
        properties,
        setProperties,
        selectedCurrentNode,
        setSelectedCurrentNode,
        isVisibleRuleModel,
        setIsVisibleRuleModel,
        ruleStore,
        setRuleStore,
      }}
    >
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

export const useSelectedCurrentNode = () => [
  React.useContext(EditFlowContext).selectedCurrentNode,
  React.useContext(EditFlowContext).setSelectedCurrentNode,
];

export const useIsVisibleRuleModel = () => [
  React.useContext(EditFlowContext).isVisibleRuleModel,
  React.useContext(EditFlowContext).setIsVisibleRuleModel,
];

export const useRuleStore = () => [
  React.useContext(EditFlowContext).ruleStore,
  React.useContext(EditFlowContext).setRuleStore,
];
