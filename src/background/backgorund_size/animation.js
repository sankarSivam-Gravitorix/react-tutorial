import React from "react";

const AnimatedSize = () => {
  const animatedStyles = {
    width: "300px",
    height: "300px",
    background: `url("https://tse4.mm.bing.net/th?id=OIP.F-l4YjwAkEx6Y8_bziaJGAHaEK&pid=Api&P=0&h=180") no-repeat left center white`,
    backgroundSize: "15%",
    animation: "moveBackground 4s infinite",
  };
  // Create a style tag for keyframes
  const keyframes = `
       @keyframes moveBackground {
          
           50% { background-size: 125%; }
         
       }
   `;
  return (
    <div>
      <h2>backgroundsize-animation</h2>
      <style>{keyframes}</style>
      <div style={animatedStyles}></div>
    </div>
  );
};

export default AnimatedSize;
