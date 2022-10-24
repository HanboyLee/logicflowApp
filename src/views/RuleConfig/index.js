import React from "react";
import RuleMirror from "./RuleMirror";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DndContextProvider from "@/hooks/DndContext/DndContextProvider";

import "./index.css";
const RuleConfig = () => {
  return (
    <DndContextProvider>
      <DndProvider backend={HTML5Backend}>
        <RuleMirror />
      </DndProvider>
    </DndContextProvider>
  );
};

export default RuleConfig;
