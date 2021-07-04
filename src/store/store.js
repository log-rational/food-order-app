import React, { createContext } from "react";

const CartContext = createContext({
  isOpen: false,
  onOpenCart: () => {},
  onCloseCart: () => {},
  items: [],
  totalAmount: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
