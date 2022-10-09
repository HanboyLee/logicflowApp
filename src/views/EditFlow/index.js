import EditFlow from "./EditFlow";
import React from "react";
import EditFlowProvider from "@/hooks/EditFlowProvider";
const Index = () => {
  return (
    <EditFlowProvider>
      <EditFlow />
    </EditFlowProvider>
  );
};

export default Index;
