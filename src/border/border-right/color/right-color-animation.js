import React from "react";

function BorderRightColorAnimation() {
  const animatedStyle = {
    width: "30%",
    padding: "40px 0",

    textAlign: "center",
    background: "orange",
    border: "20px solid orchid",
    animation: "rightcolor 4s infinite",
  };

  const keyframes = `
    @keyframes rightcolor {
      
      50% { border-right-color: indigo; }
    }
  `;

  return (
    <div>
      <h2>BorderRight-Color-Animation</h2>
      <div style={{ marginLeft: "20px", color: "white", fontSize: "50px" }}>
        <div style={animatedStyle}>Gravitorix</div>
        <style>{keyframes}</style>
      </div>
    </div>
  );
}

export default BorderRightColorAnimation;
