import React, { useContext } from "react";
import CartIcon from "../UI/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/store";
// import CartProvider from "../../store/CartProvider";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <>
      <button onClick={ctx.onOpenCart} className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
