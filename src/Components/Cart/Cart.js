import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/store";
import CartItem from "./CartItem";

const Cart = () => {
  const ctx = useContext(CartContext);

  const totalAmount = `£${ctx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = () => {};

  const cartItemAddHandler = () => {};

  const cartItems = (
    <ul>
      {ctx.items.map((d) => {
        return (
          <CartItem
            key={d.key}
            name={d.name}
            amount={d.amount}
            price={d.price}
            onAdd={cartItemAddHandler.bind(null, d.id)}
            onRemove={cartItemRemoveHandler.bind(null, d)}
          ></CartItem>
        );
      })}
    </ul>
  );
  return (
    <Modal onBackdropClick={ctx.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.onCloseCart}>
          Close
        </button>
        {ctx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
