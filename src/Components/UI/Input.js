import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input key={props.input.id} {...props.input}></input>
    </div>
  );
};

export default Input;
