import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartNhandler = (item) => {};

  const removeItemToCartNhandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartNhandler,
    removeItem: removeItemToCartNhandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
