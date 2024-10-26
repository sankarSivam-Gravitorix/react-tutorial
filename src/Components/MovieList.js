import React, { useState } from "react";

import AddToWishlistButton from "./AddToWishlist_Button";
import EmojiButton from "./Emoji_Button";
import WatchNowButton from "./WatchNow_Button";

function MovieList() {
  const Movies = [
    {
      src: "https://onlookersmedia.in/wp-content/uploads/2024/01/The-Greatest-of-All-Time-poster.jpg",
      id: 1,
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/db124b182854515.65356352509ab.jpg",
      id: 2,
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/7236cf129143211.61652315b44ca.jpg",
      id: 3,
    },
    {
      src: "https://www.oneindia.com/img/2024/08/vaazhai-1724390034.jpg",
      id: 4,
    },
    {
      src: "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/237900/Meiyazhagan.JPG",
      id: 5,
    },
  ];

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

  const handleEmojiAction = (action) => {
    const message = action === "like" ? "Liked the film" : "Disliked the film";
    setEmojiMessage(message);
  };

  return (
    <div style={{ backgroundColor: "black", width: "100%", height: "100vh" }}>
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
                
                transition: "transform 0.3s ease,z-index 0.3s ease",
                transform: hoveredIndex === index ? "scale(1.1)" : "scale(1.0)",
                zIndex: hoveredIndex === index ? 2 : 1,
                // opacity: currentIndex === index ? 1 : 0.5,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={Movie.src}
                alt={`slideshow-${index}`}
                style={{
                  width: "320px",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "8px",
                   opacity: currentIndex === index ? 1 : 0.7,
                  paddingLeft: "30px",
                 
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
                    // backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: 'center',
                    flexDirection: "column",
                    gap: "10px",
                    color: "white",
                    borderRadius: "8px",
                    paddingLeft: "30px",
                    
                  }}
                >
                  <div
                    style={{
                      marginTop: "200px",
                      display: "flex",
                      gap: "10px",
                      backgroundColor: "black",
                      width: "320px",
                      height: "350px",
                    }}
                  >
                    <WatchNowButton movieId={Movie.id} />
                    <AddToWishlistButton
                      Movie={Movie}
                      handleAddToWishlist={handleAddToWishlist}
                    />
                    <EmojiButton onEmojiHover={handleEmojiAction} />
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
