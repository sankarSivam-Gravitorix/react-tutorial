import React from "react";

function BorderBottomLeftRadius() {
  return (
    <div>
      <h2>BorderBottom-LeftRadius</h2>
      <button
        style={{
          width: "300px",
          height: "50px",
          border: "2px solid brown",
          backgroundColor: "purple",
          borderBottomLeftRadius: "60px 100px",
          marginLeft: "20px",
          padding: "20px",
          color: "white",
          fontSize: "20px",
        }}
      >
        Left-Radius
      </button>
    </div>
  );
}
export default BorderBottomLeftRadius;
