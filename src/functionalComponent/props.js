import React from "react";

// Every parent component can pass some information to its child components through props.

function ChildComponent({ message, companyName, person }) {
 

  return (
    //read props from parent component
    <>
      <h2>
        {message} {companyName}
      </h2>
      {person && (
        <>
          <p>
            <b>name:</b>
            {person.name}
          </p>
          <p>
            <b>job:</b>
            {person.job}
          </p>
        </>
      )}
    </>
  );
}
export default ChildComponent;
