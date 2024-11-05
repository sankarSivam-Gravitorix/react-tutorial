import React from "react";

const AnimatedPosition = () => {
  const animatedStyles = {
    width: "300px",
    height: "175px",
    background: `url("https://freepngimg.com/thumb/rabbit/3-rabbit-png-image.png") no-repeat left center #e4eacf`,
    backgroundSize: "15%",
    animation: "test 4s infinite",
  };
  // Create a style tag for keyframes
  const keyframes = `
       @keyframes test {
           0% { background-position: left center; }
           50% { background-position: right center; }
           100% { background-position: left center; }
       }
   `;
  return (
    <div>
      <h2>backgroundposition-animation</h2>
      <style>{keyframes}</style>
      <div style={animatedStyles}></div>
    </div>
  );
};

export default AnimatedPosition;
