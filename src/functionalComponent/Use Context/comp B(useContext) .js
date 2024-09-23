import React from "react";
import ComponentC from "./comp C(useContext) ";

function ComponentB() {
  return (
    <div
      style={{
        border: "3px solid",
        padding: "20px",
        width: "280px",
      }}
    >
      <h1>component B</h1>
      <ComponentC/>
    </div>
  );
}
export default ComponentB;
