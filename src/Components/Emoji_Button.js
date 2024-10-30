// EmojiButton.js
import React, { useState } from "react";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp"; // Filled thumbs up icon
import ThumbDownIcon from "@mui/icons-material/ThumbDown"; // Filled thumbs down icon

const EmojiButton = ({ onEmojiHover }) => {
  const [emojiHover, setEmojiHover] = useState(false);
  const [selected, setSelected] = useState(null); // null, "like", or "dislike"

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
            display: "flex",
            gap: "10px",
          }}
        >
          {/* Like Container */}
          <div
            style={{
              backgroundColor: "#444",
              padding: "5px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleLikeClick}
          >
            {selected === "like" ? (
              <ThumbUpIcon
                style={{
                  width: "20px",
                  height: "20px",
                  color: "white",
                }}
              />
            ) : (
              <ThumbUpOutlinedIcon
                style={{
                  width: "20px",
                  height: "20px",
                  color: "white",
                }}
              />
            )}
          </div>

          {/* Dislike Container */}
          <div
            style={{
              backgroundColor: "#444",
              padding: "5px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleDislikeClick}
          >
            {selected === "dislike" ? (
              <ThumbDownIcon
                style={{
                  width: "20px",
                  height: "20px",
                  color: "white",
                }}
              />
            ) : (
              <ThumbDownOffAltOutlinedIcon
                style={{
                  width: "20px",
                  height: "20px",
                  color: "white",
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiButton;
