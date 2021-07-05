import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../UI/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/store";
// import CartProvider from "../../store/CartProvider";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  const [btnClasses, setBtnClasses] = useState(classes.button);
  const clearBump = () => {
    setBtnClasses(`${classes.button}`);
  };
  useEffect(() => {
    setBtnClasses(`${classes.button} ${classes.bump}`);
    setTimeout(clearBump, 400);
    return () => {
      clearTimeout(clearBump);
      console.log("Bump Cleared");
    };
  }, [numberOfCartItems]);
  return (
    <>
      <button onClick={ctx.onOpenCart} className={btnClasses}>
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
