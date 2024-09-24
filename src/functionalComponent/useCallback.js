// The useCallback hook in React is used to memoize functions, preventing them from being recreated on every render.

import React from "react";

const Usecallback = React.memo(({ name,incrementCart }) => {
  // react.memo-> prevent the re-render process when the props are not changed
  console.log(name);

  return (
    <div>
      <h3
        style={{
          border: "2px solid black",
          width: "200px",
        }}
      >
        {name}
      </h3>
      <button onClick={incrementCart}>Add to Cart</button>
    </div>
  );
});

export default Usecallback;
