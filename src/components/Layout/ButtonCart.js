import React, { useContext } from "react";
import classes from "./ButtonCart.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const ButtonCart = (props) => {
  const cartCxt = useContext(CartContext);
  const numberOfCartItem = cartCxt.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default ButtonCart;
