import React, { createContext } from "react";

const CartContext = createContext({
  isOpen: false,
  onOpenCart: () => {},
  onCloseCart: () => {},
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
