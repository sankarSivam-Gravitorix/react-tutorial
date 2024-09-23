// usememo hook returns a memoized value.(its like caching a value so that it doesn't need to be recalculated)
// it only runs when one of its dependency gets updated.
// this can improve the performance of the application

import React from "react";
import { useState } from "react";
import { useMemo } from "react";

function UseMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // const isEven=()=>{
  //     let i = 0
  //     while (i < 2000000000) i++
  //     return counterOne % 2 === 0
  // }

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++; //while loop is to simulate a computationally expensive task.
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default UseMemo;
