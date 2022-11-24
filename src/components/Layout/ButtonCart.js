import React from "react";
import classes from "./ButtonCart.module.css";
import CartIcon from "../Cart/CartIcon";

const ButtonCart = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>Your Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};
export default ButtonCart;
