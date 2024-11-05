import React from "react";

const BackgroundOrigin = () => {
  const baseStyle = {
    width: "200px",
    height: "200px",
    border: "6px dashed black",
    padding: "20px",
    backgroundImage:
      'url("https://img.freepik.com/free-photo/top-view-clear-ocean-water-texture-background_23-2149132407.jpg?w=2000")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    marginTop: "20px",
    marginLeft: "20px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    // backgroundAttachment:'fixed'
  };

  const borderBoxStyle = {
    ...baseStyle,
    backgroundOrigin: "border-box",
  };

  const paddingBoxStyle = {
    ...baseStyle,
    backgroundOrigin: "padding-box",
  };

  const contentBoxStyle = {
    ...baseStyle,
    backgroundOrigin: "content-box",
  };

  return (
    <div>
      <h2>background-origin</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={borderBoxStyle}>border-box</div>
        <div style={paddingBoxStyle}>padding-box</div>
        <div style={contentBoxStyle}>content-box</div>
      </div>
    </div>
  );
};

export default BackgroundOrigin;

// background-origin: 
// border-box | padding-box | content-box 


