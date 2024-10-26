import React from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  // Map specific IDs to their YouTube links
  const videoLinks = {
    1: "https://www.youtube.com/embed/jxCRlebiebw",
    2: "https://www.youtube.com/embed/oP88LHBukW8",
    3: "https://www.youtube.com/embed/1GqzyjUbT4c",
    4: "https://www.youtube.com/embed/1GqzyjUbT4c",
    4: "https://www.youtube.com/embed/-NEVvOEPubA",
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Video Section */}
      <iframe
        width="100%"
        height="450"
        src={videoLinks[id]}
        title={`YouTube video player - ${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
          marginBottom: "20px", // Add space below the video
        }}
      ></iframe>

      {/* Title Section */}
      {/* <h2 style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center" }}>
        Playing Video {id}
      </h2> */}
    </div>
  );
}

export default MovieDetails;
