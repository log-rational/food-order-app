import React, { useState, useReducer } from "react";
import CartContext from "./store";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (d) => d.id === action.payload.id
    );

    let updatedItem;
    let updateditems;
    if (existingItemIndex >= 0) {
      const existingItem = state.items[existingItemIndex];
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.payload.amount,
      };
      updateditems = [...state.items];
      updateditems[existingItemIndex] = updatedItem;
    } else {
      updateditems = state.items.concat(action.payload);
    }

    const updatedTotalAmount =
      state.totalAmount + action.payload.amount * action.payload.price;
    return {
      items: updateditems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (d) => d.id === action.payload
    );

    let updatedItem;
    let updateditems;
    if (existingItemIndex >= 0) {
      const existingItem = state.items[existingItemIndex];
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updateditems = [...state.items];
      updateditems[existingItemIndex] = updatedItem;
      // if (updatedItem.amount < 1) {
      //   updateditems = state.items.filter((d) => d.amount > 0);
      //   console.log(updateditems)
      // }
      if (updatedItem.amount <= 0) {
        updateditems = state.items.filter((d) => d.id !== action.payload);
      }
    }

    const updatedTotalAmount = updateditems.reduce((acc, cur) => {
      return acc + cur.amount * cur.price;
    }, 0);
    // state.totalAmount + action.payload.amount * action.payload.price;
    return {
      items: updateditems,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartOpenHandler = () => {
    setCartIsOpen(true);
  };
  const cartCloseHandler = () => {
    setCartIsOpen(false);
  };

  const addItemToCart = (item) => {
    dispatchCartAction({
      type: "ADD",
      payload: item,
    });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      payload: id,
    });
  };
  const cartContext = {
    isOpen: cartIsOpen,
    items: cartState.items,
    totalAmount: cartState.totalAmount,

    onOpenCart: cartOpenHandler,
    onCloseCart: cartCloseHandler,
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
