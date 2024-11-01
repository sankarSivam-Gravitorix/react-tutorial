// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "80%", // Adjust as needed
        maxHeight: "80%",
        overflowY: "auto",
      }}>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
