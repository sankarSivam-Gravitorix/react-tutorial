import React, { useState } from "react";
import Welcome from "./Welcome";
import Form from "./setState";
import Lifecycle from "./Lifecycle";

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Form />
      
      <label>
        choose the chat room:
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">General</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "close chat" : "open chat"}
      </button>
      {show && <hr />}
      {show && <Lifecycle roomId={roomId}/>}
    </>
  );
}

// export -> can be used in different components

// function App -> defines App is a function

// return -> used to display the content on the screen

// <Welcome name="Sara" /> -> to give different names using "name" props.
