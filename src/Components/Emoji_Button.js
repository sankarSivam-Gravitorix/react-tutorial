import React, { useState } from "react";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const EmojiButton = ({ onEmojiHover }) => {
  const [emojiHover, setEmojiHover] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleLikeClick = () => {
    const newSelection = selected === "like" ? null : "like";
    setSelected(newSelection);
    onEmojiHover(newSelection);
  };

  const handleDislikeClick = () => {
    const newSelection = selected === "dislike" ? null : "dislike";
    setSelected(newSelection);
    onEmojiHover(newSelection);
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseEnter={() => setEmojiHover(true)}
      onMouseLeave={() => setEmojiHover(false)}
      title="feedback"
    >
      {/* Like Icon */}
      <div
        style={{
          position: "absolute",
           left: "-52px",
          //  top:'-50px',
          opacity: emojiHover ? 1 : 0,
          transform: emojiHover ? "translateX(0)" : "translateX(2px)",
          
          transition: "opacity 0.3s ease, transform 0.3s ease",
          backgroundColor: "black",
          //  padding: "5px",
          cursor: "pointer",

          borderRadius: "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
           border: "2px solid white",
          marginTop: "10px",
        }}
        onClick={handleLikeClick}
      >
        {selected === "like" ? (
          <ThumbUpIcon
            style={{ width: "20px", height: "20px", color: "white" }}
          />
        ) : (
          <ThumbUpOutlinedIcon
            style={{ width: "20px", height: "20px", color: "white" }}
          />
        )}
      </div>

      {/* Main Feedback Icon */}
      <div
        style={{
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "42px",
          height: "42px",
          border: "2px solid black",
          marginTop: "10px",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          // opacity: emojiHover ? 0 : 1,
          transform: emojiHover ? "scale(0.8)" : "scale(1)",
        }}
        title="feedback"
      >
        <ThumbsUpDownOutlinedIcon
          style={{ width: "20px", height: "20px", color: "black" }}
        />
      </div>

      {/* Dislike Icon */}
      <div
        style={{
          position: "absolute",
          right: "-54px",
          opacity: emojiHover ? 1 : 0,
          transform: emojiHover ? "translateX(0)" : "translateX(-10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          backgroundColor: "black",
          // padding: "5px",
          borderRadius: "50%",
          cursor: "pointer",
          display: "inline-flex", 
          alignItems: "center", 
          justifyContent: "center", 
          width: "40px", 
          height: "40px", 
          marginTop:'10px',
          border:'2px solid white'
        }}
        onClick={handleDislikeClick}
      >
        {selected === "dislike" ? (
          <ThumbDownIcon
            style={{ width: "20px", height: "20px", color: "white" }}
          />
        ) : (
          <ThumbDownOffAltOutlinedIcon
            style={{ width: "20px", height: "20px", color: "white" }}
          />
        )}
      </div>
    </div>
  );
};

export default EmojiButton;
