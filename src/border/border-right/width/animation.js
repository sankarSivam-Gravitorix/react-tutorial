import React from "react";

function BorderRightWidthAnimation() {
  const animatedStyle = {
    width: "30%",
    padding: "40px 0",

    textAlign: "center",
    background: "orange",
    border: "2px solid orchid",
    
    animation: "rightwidth 4s infinite",
  };

  const keyframes = `
    @keyframes rightwidth {
      
      50% { border-right-width: 30px; }
    }
  `;

  return (
    <div>
      <h2>BorderRight-Width-Animation</h2>
      <div style={{ marginLeft: "20px", color: "white", fontSize: "50px",}}>
        <div style={animatedStyle}>Gravitorix</div>
        <style>{keyframes}</style>
      </div>
    </div>
  );
}

export default BorderRightWidthAnimation;
