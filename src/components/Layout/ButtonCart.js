import React, { useContext, useEffect, useState } from "react";
import classes from "./ButtonCart.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const ButtonCart = (props) => {
  const [IsHightLine, setIsHightLine] = useState(false);
  const cartCxt = useContext(CartContext);
  const { items } = cartCxt;
  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  //de khong phanr dependency tat ca context ma chi dependency cac mat hang
  const btnClasses = `${classes.button} ${IsHightLine ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsHightLine(true);
    const timer = setTimeout(() =>{
      setIsHightLine(false)
    },300)
    return () =>{
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default ButtonCart;
