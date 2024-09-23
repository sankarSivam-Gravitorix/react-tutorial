import React from "react";

const Usecallback = React.memo(({ name,incrementCart}) => {
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
