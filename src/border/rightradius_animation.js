import React from "react";

function BorderBottomRightRadiusAnimation() {
  const animatedStyle = {
    width: "30%",
    padding: "40px 0",
    
    textAlign: "center",
    background: "orange",
    border: "2px solid #7aa327",
    animation: "rightradius 4s infinite",
    
    
  };

  const keyframes = `
    @keyframes rightradius {
      
      50% { border-bottom-right-radius: 70px; }
    }
  `;

  return (
    <div>
     <h2>BorderBottom-RightRadius-Animation</h2>
     <div style={{marginLeft:'20px',color:'white',fontSize:'50px'}}>
     <style>{keyframes}</style>
     <div style={animatedStyle}>Gravitorix</div>
     </div>
      
    </div>
  );
}

export default BorderBottomRightRadiusAnimation;
