import { productInitialState, productReducer } from "frontend/reducers";
import React from "react";
import { createContext, useContext, useReducer } from "react";

const Product = createContext();

export const ProductContext = ({ children }) => {
  const [products, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );

  return (
    <Product.Provider value={{ products, productDispatch }}>
      {children}
    </Product.Provider>
  );
};

export function useProduct() {
  return useContext(Product);
}
