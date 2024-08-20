import { useContext } from "react";
import { MainContext } from "../context/MainProvider";

const useProductContext = () => {
  return useContext(MainContext);
};
export default useProductContext;
