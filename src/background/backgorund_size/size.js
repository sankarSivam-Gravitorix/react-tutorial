import React from "react";

function BackgroundSize() {
  const style = {
    backgroundImage:
      "url('https://dogsbestlife.com/wp-content/uploads/2019/01/dog-and-cat.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    width: "300px",
    height: "300px",
    border: "2px solid orange",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "20px",
  };

  return (
    <div>
      <h3
        style={{
          marginLeft: "20px",
        }}
      >
        background-size
      </h3>
      <div style={style}></div>
    </div>
  );
}

export default BackgroundSize;

// background-size: 
// length | percentage | auto | cover | contain
