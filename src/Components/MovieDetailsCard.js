import React from "react";

function MovieDetailsCard({ certificate, timing, quality }) {
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        display: "inline-flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          margin: "5px 0",
          border: "2px solid gray",
          backgroundColor: "black",
          fontSize: "12px",
          padding: "2px",
        }}
      >
        {certificate}
      </p>
      <p style={{ margin: "5px 0", fontSize: "14px" }}>{timing}</p>
      <p
        style={{
          margin: "5px 0",
          border: "2px solid gray",
          backgroundColor: "black",
          fontSize: "12px",
        }}
      >
        {quality}
      </p>
    </div>
  );
}

export default MovieDetailsCard;
