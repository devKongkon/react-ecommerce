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
    singleProduct: [],
    isSingleLoading : false,

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

  //2nd api call for single product
  const getSingleProduct = async (url) => {
    dispatch({type: "SINGLE_LOADING"})
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <>
      <MainContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
      </MainContext.Provider>
    </>
  );
};

export default MainProvider;
