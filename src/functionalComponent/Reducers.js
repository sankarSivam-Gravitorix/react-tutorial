// usereducer is similar to usestate,but instead of providing state and setter function, it provides state and dispatch function.

// usereducer hooks accepts two arguments
// -reducer function
// -initial state
// and returns;current state and dispatch method.

// the reducer function specifies how the state gets updated.


import React from "react";
import { useReducer } from "react";

const transactionReducer = (state, action) => {
  switch (action.type) {
    case "WITHDRAW":
      return state - action.payload;

    case "DEPOSIT":
      return state + action.payload;
    default:
      return state;
  }
};

export default function Reducers() {
  const withdraw = (amount) => {
    dispatch({ type: "WITHDRAW", payload: amount });
  };

  const deposit = (amount) => {
    dispatch({ type: "DEPOSIT", payload: amount });
  };

  const [state, dispatch] = useReducer(transactionReducer, 1000);

  return (
    <div>
      <h3>{`balance:${state}`}</h3>
      <button onClick={() => withdraw(500)}>Withdraw</button>
      <button onClick={() => deposit(500)}>Deposit</button>
    </div>
  );
}
