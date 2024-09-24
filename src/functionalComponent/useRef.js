// useState() = Re-renders the component when the state value changes

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//                     1. Accessing/Interacting with DOM elements
//                     2. Handling Focus, Animations

import React from "react";
import { useRef, useEffect, useState } from "react";

function Useref() {
  // const [number, setNumber] = useState(0);
  // function handleClick() {
  //   setNumber((prev) => prev + 1);
  //   console.log(number);
  // }
  const ref = useRef(0);
  console.log(ref);

  const inputRef = useRef("");
  
  

  function handleClick() {
    ref.current++;
    console.log(ref.current);
    inputRef.current.style.backgroundColor = "yellow";
    inputRef.current.focus();
  }
  useEffect(() => {
    console.log("component rendered");
  });
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <input ref={inputRef} />
    </div>
  );
}
export default Useref;
