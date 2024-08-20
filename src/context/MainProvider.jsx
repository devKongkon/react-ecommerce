import React from "react";
import { createContext } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  return (
    <>
      <MainContext.Provider value={"Kongkon"}>{children}</MainContext.Provider>
    </>
  );
};

export default MainProvider;
