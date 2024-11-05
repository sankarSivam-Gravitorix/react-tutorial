import React from "react";

function BorderBottomLeftRadiusAnimation() {
  const animatedStyle = {
    width: "30%",
    padding: "40px 0",
    
    textAlign: "center",
    background: "orange",
    border: "2px solid #7aa327",
    animation: "leftradius 4s infinite",
    
    
  };

  const keyframes = `
    @keyframes leftradius {
      
      50% { border-bottom-left-radius: 70px; }
    }
  `;

  return (
    <div>
     <h2>BorderBottom-LeftRadius-Animation</h2>
     <div style={{marginLeft:'20px',color:'white',fontSize:'50px'}}>
     <style>{keyframes}</style>
     <div style={animatedStyle}>Gravitorix</div>
     </div>
      
    </div>
  );
}

export default BorderBottomLeftRadiusAnimation;
