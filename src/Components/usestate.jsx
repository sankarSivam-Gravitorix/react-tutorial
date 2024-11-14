import React, { useState } from "react";

function UsestateHook() {
  const [state, setState] = useState(false);

  const handleText = () => {
    setState(!state);
  };
  return (
    <div>
      {state ? <h3>Hello World</h3> : <h2>Hello India</h2>}
      <button onClick={handleText}>Handletext</button>
    </div>
  );
}
export default UsestateHook;
