import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/ProductReducer";

export const MainContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const MainProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({type: "SET_LOADING"})
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "MY_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <>
      <MainContext.Provider value={{ ...state }}>
        {children}
      </MainContext.Provider>
    </>
  );
};

export default MainProvider;
