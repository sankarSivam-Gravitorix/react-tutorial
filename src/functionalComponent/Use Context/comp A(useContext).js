import React, { useState } from "react";
import ComponentB from "./comp B(useContext) ";
import { createContext } from "react";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("veera sankar");
  return (
    <div
      style={{
        border: "3px solid",
        padding: "25px",
        width: "350px",
      }}
    >
      <h1>component A</h1>
      <h2>{`hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB  />
      </UserContext.Provider>
    </div>
  );
}
export default ComponentA;
