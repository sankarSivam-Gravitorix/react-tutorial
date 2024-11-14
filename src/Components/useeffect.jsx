import { useState } from "react";
import React, { useEffect } from "react";

function UseeffectHook() {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(0);
  const [changeStyle, setchangeStyle] = useState(false);

  const handleText = () => {
    setState(!state);
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setState(!state);
    console.log("run only once when page loads");

    return () => {
      console.log("component is unmounted");
    };
  }, []);

  useEffect(() => {
    if (count === 10) setchangeStyle(true);
  }, [count]);
  return (
    <div>
      {state ? <h3>name:veera sankar</h3> : <h2>city:kvp</h2>}
      <button onClick={handleText}>Handletext</button>
      <p>count is {count}</p>
      <button
        onClick={handleCount}
        style={{
          backgroundColor: changeStyle ? "black" : "white",
          color: changeStyle ? "white" : "black",
        }}
      >
        Increase Count
      </button>
    </div>
  );
}
export default UseeffectHook;
