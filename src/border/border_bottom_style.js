import React from "react";

const BorderBottomStyle = () => {
  const baseStyle = {
    width: "210px",
    height: "60px",
    border: "2px solid black",
    padding: "20px",

    marginTop: "20px",
    marginLeft: "20px",
    // color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
  };

  const button1 = {
    ...baseStyle,
    borderBottomStyle: "none",
  };

  const button2 = {
    ...baseStyle,
    borderBottomStyle: "dotted",
  };

  const button3 = {
    ...baseStyle,
    borderBottomStyle: "dashed",
  };

  const button4 = {
    ...baseStyle,
    borderBottomStyle: "solid",
  };

  const button5 = {
    ...baseStyle,
    borderBottomStyle: "inset",
  };

  const button6 = {
    ...baseStyle,
    borderBottomStyle: "outset",
  };

  const button7 = {
    ...baseStyle,
    borderBottomStyle: "groove",
  };

  return (
    <div>
      <h2>Border-Bottom-Style</h2>
      <div style={{ display: "block", gap: "20px" }}>
        <button style={button1}>No bottom border.</button>
        <button style={button2}>A dotted bottom border.</button>
        <button style={button3}>A dashed bottom border.</button>
        <button style={button4}>A solid bottom border.</button>
        <button style={button5}>A inset bottom border.</button>
        <button style={button6}>A outset bottom border.</button>
        <button style={button7}>A groove bottom border.</button>
      </div>
    </div>
  );
};

export default BorderBottomStyle;

// border-bottom-style: 
// none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
