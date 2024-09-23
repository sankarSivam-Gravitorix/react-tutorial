import React, { useCallback, useState } from "react";
import ChildComponent from "./props";
import Slideshow from "./useEffect";

import Biodata from "./useState";
import Usecallback from "./useCallback";
import Useref from "./useRef";
import Usecontext from "./Use Context/usecontext";
import Reducers from "./Reducers";
import UseMemo from "./Memo";

function ParentComponent() {
  const message = "Hello";
  const companyName = "gravitorix";
  const person = { name: "veera sankar", job: "developer" };
  const [count, setCount] = useState(0);
  const [product, setproduct] = useState(["prod 1"]);
  const [cart, setCart] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const incrementCart = useCallback(() => {
    console.log(cart);

    setCart(cart + 1);
  }, [cart]);

  return (
    // pass props to child component
    <>
      <Slideshow />
      <ChildComponent
        message={message}
        companyName={companyName}
        person={person}
      />
      <Biodata />
      <h3>count:{count}</h3>
      <button onClick={incrementCount}>+</button>
      <h3>cart:{cart}</h3>
      {product.map((p, i) => {
        return <Usecallback name={p} incrementCart={incrementCart} key={i} />;
      })}
      <Useref />
      <br /> <br />
      <Usecontext />
      <Reducers/>
     <br/> <br/>
      <UseMemo/>
    </>
  );
}
export default ParentComponent;
