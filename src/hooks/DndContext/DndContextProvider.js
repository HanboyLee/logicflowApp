import React from "react";
import { DEFAULT } from "./dndDefaultData";
const Context = React.createContext();

const DndContextProvider = ({ children }) => {
  const [dndData, setDndData] = React.useState(DEFAULT);
  console.log(dndData);
  return (
    <Context.Provider value={{ dndData, setDndData }}>
      {children}
    </Context.Provider>
  );
};

export default DndContextProvider;

export const useDndData = () => [
  React.useContext(Context).dndData,
  React.useContext(Context).setDndData,
];
