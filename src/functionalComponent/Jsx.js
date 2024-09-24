// JSX(javascriptxml) -> it is a syntax extension for JavaScript ,used to write HTML-like markup inside a JavaScript file.

// rules of JSX:

// 1.Return a single root element
// To return multiple elements from a component, wrap them with a single parent tag by using <div> or empty tag <>.

// 2.close all tags

// JSX is a stricter rather than HTML. by using JSX, the tags should be closed.

// example:

// in HTML, <p> hello world<p> (the closing tag not close properly but it still runs)

// in jsx,<p> hello world</p>(if / is not included, it wont run the program)

// 3.camelCase:

// JSX prefer camelCase like className,classComponent,functionComponent

// JSX with curly braces:

// example:

import react from "react";

export default function Jsx() {
  const url = "https://tse3.mm.bing.net/th?id=OIP.AMWZcMQXzIRmLCXIDD-0yAHaIu&pid=Api&P=0&h=180";
  const authorName = "Shakespeare";
  const heading = "hi";
  const details = { name:'SP',nameId: 1, job: "writer", age: "40" };
  return (
    <>
      <img src={url} alt={authorName} />
      <h1>{heading} world</h1>
      <p>
        name:{details.name},nameId:{details.nameId}, Age:{details.age}, Job: {details.job}
      </p>
    </>
  );
}
