import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import ButtonCart from "./ButtonCart";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <ButtonCart />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table fulll of delicious food!" />
      </div>
    </React.Fragment>
  );
};
export default Header;
