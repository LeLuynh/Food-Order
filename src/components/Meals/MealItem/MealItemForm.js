import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    const enterAmount = amountInputRef.current.value;
    const enterNumberAmount = +enterAmount; //chuyen string -> number

    if (
      enterAmount.trim().length === 0 ||
      enterNumberAmount < 1 ||
      enterNumberAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterNumberAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};
export default MealItemForm;
