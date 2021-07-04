import React, { createContext, useState } from "react";

const CartContext = createContext({
  isOpen: false,
  onOpenCart: () => {},
  onCloseCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartOpenHandler = () => {
    setCartIsOpen(true);
  };
  const cartCloseHandler = () => {
    setCartIsOpen(false);
  };
  return (
    <CartContext.Provider
      value={{
        isOpen: cartIsOpen,
        onOpenCart: cartOpenHandler,
        onCloseCart: cartCloseHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
