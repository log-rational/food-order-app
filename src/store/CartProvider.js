import React, { useState } from "react";
import CartContext from "./store";

const CartProvider = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartOpenHandler = () => {
    setCartIsOpen(true);
  };
  const cartCloseHandler = () => {
    setCartIsOpen(false);
  };

  const addItemToCart = (item) => {};
  const removeItemFromCart = (item) => {};
  const cartContext = {
    isOpen: cartIsOpen,
    onOpenCart: cartOpenHandler,
    onCloseCart: cartCloseHandler,
    items: [],
    totalAmount: [],
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
