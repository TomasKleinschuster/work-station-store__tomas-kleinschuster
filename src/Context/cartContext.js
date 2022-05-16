import React, { useState } from "react";
import { createContext } from "react";

const CartContext = createContext({
  products: [],
});

export const CartContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const addProduct = (product) => {
    setProductList([product, ...productList]);
  };

  return (
    <CartContext.Provider
      value={{
        products: productList,
        addProduct: addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
