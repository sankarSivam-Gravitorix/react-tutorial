

import React from "react";
import { useContext } from "react";
import { UserContext } from "./comp A(useContext)";


function ComponentD(){

    const user =useContext(UserContext);
    return (
        <div
          style={{
            border: "3px solid",
            padding: "20px",
            width: "210px",
          }}
        >
          <h1>component D</h1>
          <h2>{`hi ${user}`}</h2>
         
        </div>
      );
}
export default ComponentD;