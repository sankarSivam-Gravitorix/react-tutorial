import React from "react";
import UseState from "./useState";
import UseEffect from "./useEffect";
import Useref from "./useRef";
import Usecallback from "./useCallback";
import Reducers from "./Reducers";
import Props from "./props";
import UseMemo from "./Memo";
import Jsx from "./Jsx";
import Usecontext from "./Use Context/usecontext";
import { HOC } from "./HOC/ParentComp";
import { useState } from "react";
import { useCallback } from "react";

export default function App2() {
  const message = "Hello";
  const companyName = "gravitorix";
  const person = { name: "veera sankar", job: "developer" };
  const [count, setCount] = useState(0);
  const [product, setproduct] = useState(["prod 1", "prod 2"]);
  const [cart, setCart] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const incrementCart = useCallback(() => {
    //usecallback->prevent recreation of function unnecessarily
    console.log(cart);

    setCart(cart + 1);
  }, [cart]);

  return (
    <div>
      <UseEffect />
      <br /> <br />
      <UseState />
      <br /> <br />
      <Props message={message} companyName={companyName} person={person} />
      <br /> <br />
      {/* usecallback */}
      <h3>count:{count}</h3>
      <button onClick={incrementCount}>+</button>
      <h3>cart:{cart}</h3>
      {product.map((p, i) => {
        return <Usecallback name={p} incrementCart={incrementCart}  key={i} />;
      })}
      <br /> <br />
      <Useref />
      <br /> <br />
      <Usecontext />
      <br /> <br />
      <Reducers />
      <br /> <br />
      <UseMemo />
      <br /> <br />
      <Jsx />
      <br /> <br />
      <HOC />
    </div>
  );
}
