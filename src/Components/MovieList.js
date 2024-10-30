import React, { useState } from "react";
import AddToWishlistButton from "./AddToWishlist_Button";
import EmojiButton from "./Emoji_Button";
import WatchNowButton from "./WatchNow_Button";
import Movies from "./Moviedata";

function MovieList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [emojiMessage, setEmojiMessage] = useState("");

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Movies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Movies.length - 1 : prevIndex - 1
    );
  };

  const handleAddToWishlist = (Movie) => {
    if (!wishlist.includes(Movie)) {
      setWishlist([...wishlist, Movie]);
    }
  };

  const handleRemoveFromWishlist = (Movie) => {
    setWishlist(wishlist.filter((item) => item !== Movie));
  };

  const handleEmojiAction = (id, action) => {
    // setEmojiMessage((prevFeedback) => ({
    //   [id]: action === "like" ? "Love the film" : "Disliked the film",
    // }));
  };

  return (
    <div style={{ backgroundColor: "blue", width: "100%", height: "100vh" }}>
      <h2
        style={{
          color: "white",
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "left",
        }}
      >
        Latest Releases
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * 10}%)`,
          }}
        >
          {Movies.map((Movie, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "320px",
                height: "350px",
                borderRadius: "8px",
                overflow: "hidden",
                marginLeft: "30px", // Spacing between images
                transition: "transform 0.3s ease, z-index 0.3s ease",
                transform:
                  hoveredIndex === index ? "scale(1.05)" : "scale(1.0)",
                zIndex: hoveredIndex === index ? 2 : 1,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={Movie.src}
                alt={`slideshow-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  opacity: currentIndex === index ? 1 : 0.7,
                }}
              />
              {hoveredIndex === index && (
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src={Movie.trailerSrc}
                    title={`trailer-${index}`}
                    style={{
                      width: "100%",
                      height: "50%",
                      border: "none",
                      borderRadius: "8px 8px 0 0",
                    }}
                    allow="autoplay; encrypted-media"
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: "10px",
                      // width: "320px",
                      height: "50%",
                      backgroundColor: "black",
                      padding: "10px",
                      borderRadius: "0 0 8px 8px",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ display: "flex", gap: "10px" }}>
                      <WatchNowButton movieId={Movie.id} />
                      <AddToWishlistButton
                        Movie={Movie}
                        handleAddToWishlist={handleAddToWishlist}
                      />
                      <EmojiButton
                        onEmojiHover={(action) =>
                          handleEmojiAction(Movie.id, action)
                        }
                      />
                       {emojiMessage[Movie.id] && (
                      <div
                        style={{
                          color: "white",
                          marginTop: "10px",
                          textAlign: "center",
                        }}
                      >
                        {emojiMessage[Movie.id]}
                      </div>
                    )}
                    </div>
                    {/* Movie Details */}
                    <div
                      style={{
                        color: "white",
                        marginTop: "10px",
                        textAlign: "center",
                        display:'inline-flex',
                        gap:'10px',
                        alignItems:'center',
                        justifyContent:'center'
                      }}
                    >
                      
                      <p style={{ margin: "5px 0" ,border:'2px solid gray',backgroundColor:'black',fontSize:'15px',padding:'2px'}}>
                        {Movie.certificate}
                      </p>
                      <p style={{ margin: "5px 0",fontSize:'14px', }}>
                        {Movie.timing}
                      </p>
                    
                      <p style={{ margin: "5px 0",border:'2px solid gray',backgroundColor:'black',fontSize:'12px', }}>
                       {Movie.quality}
                      </p>
                      
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
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
          onClick={handleNext}
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
      </div>

      {wishlist.length > 0 && (
        <div style={{ color: "white", marginTop: "20px" }}>
          <h3>Added to Wishlist</h3>
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyleType: "none",
              padding: 0,
            }}
          >
            {wishlist.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <img
                  src={item.src}
                  alt={`wishlist-${index}`}
                  style={{
                    width: "100px",
                    height: "150px",
                    objectFit: "cover",
                    marginRight: "10px",
                  }}
                />
                <button
                  onClick={() => handleRemoveFromWishlist(item)}
                  style={{
                    backgroundColor: "#f44336",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    color: "white",
                    marginTop: "10px",
                    alignItems: "center",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieList;
