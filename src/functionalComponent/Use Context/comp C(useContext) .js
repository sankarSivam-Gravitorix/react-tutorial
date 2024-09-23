import React from "react";
import ComponentD from "./comp D(useContext)";
import { useContext } from "react";
import { UserContext } from "./comp A(useContext)";

function ComponentC() {

    const user=useContext(UserContext);
    return(
        <div
    style={{
      border: "3px solid",
      padding: "20px",
      width: "250px",
    }}
  >
    <h1>component C</h1>
    <h3>bye {user}</h3>
    <ComponentD/>
  </div>
    )
  
}
export default ComponentC;
