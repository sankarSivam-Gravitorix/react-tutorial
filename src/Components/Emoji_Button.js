// EmojiButton.js
import React, { useState } from "react";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

const EmojiButton = ({ onEmojiHover }) => {
  const [emojiHover, setEmojiHover] = useState(false);

  return (
    <div
   
      style={{
        position: "relative",
        cursor: "pointer",
        backgroundColor: "black",
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        border: "2px solid white",
        marginTop: "10px",
      }}
      onMouseEnter={() => setEmojiHover(true)}
      onMouseLeave={() => setEmojiHover(false)}
      title="feedback"
    >
      <ThumbsUpDownOutlinedIcon
        style={{
          width: "20px",
          height: "20px",
          color: "white",
        }}
      
      />

      {emojiHover && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            gap: "10px",
          }}
         
        >
          <ThumbUpOutlinedIcon
            style={{
              width: "20px",
              height: "20px",
              color: "white",
            }}
            onClick={() => onEmojiHover("like")}
            
          />

          <ThumbDownOffAltOutlinedIcon
            style={{
              width: "20px",
              height: "20px",
              color: "white",
            }}
            onClick={() => onEmojiHover("dislike")}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiButton;
