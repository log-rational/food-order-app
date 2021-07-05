import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/store";
import CartItem from "./CartItem";

const Cart = () => {
  const ctx = useContext(CartContext);

  const totalAmount = `£${ctx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    // console.log(item)
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {ctx.items.map((d) => {
        return (
          <CartItem
            key={d.key}
            name={d.name}
            amount={d.amount}
            price={d.price}
            onAdd={cartItemAddHandler.bind(null, d)}
            onRemove={cartItemRemoveHandler.bind(null, d.id)}
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
