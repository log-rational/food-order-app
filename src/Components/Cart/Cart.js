import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/store";

const Cart = () => {
  const ctx = useContext(CartContext);
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Shushi", amount: 2, price: 12.99 }].map((d) => {
        <li>{d.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
