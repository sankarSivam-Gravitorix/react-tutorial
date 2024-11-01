
import React from "react";

function SlideButtons({ onPrev, onNext }) {
  return (
    <>
      <button
        onClick={onPrev}
        style={{
          position: "absolute",
          left: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        &#8249;
      </button>
      <button
        onClick={onNext}
        style={{
          position: "absolute",
          right: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        &#8250;
      </button>
    </>
  );
}

export default SlideButtons;
