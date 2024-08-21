import React from "react";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "MY_PRODUCTS":
      const featuredData = action.payload.filter((curElement) => {
        return curElement.featured === true;
      })
    //   console.log(featuredData)

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featuredData
      };

    case "API_ERROR":
        return {
            ...state,
            isLoading: false,
            isError: true,
        }

    default:
      state;
  }
};

export default ProductReducer;
