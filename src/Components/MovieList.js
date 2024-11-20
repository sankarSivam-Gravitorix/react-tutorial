import React, { useState } from "react";
import AddToWishlistButton from "./Buttons/AddToWishlist_Button";
import EmojiButton from "./Buttons/Emoji_Button";
import WatchNowButton from "./Buttons/WatchNow_Button";
import Movies from "./Moviedata";
import WishlistData from "./Wishlistdata";
import MovieDetailsCard from "./MovieDetailsCard";
import SlideButtons from "./Buttons/SlideButtons";
import ViewmoreButton from "./Buttons/Viewmore";
import { WrapText } from "@mui/icons-material";

function MovieList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Movies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Movies.length - 1 : prevIndex - 1
    );
  };

  const handleEmojiAction = (id, action) => {
    // setEmojiMessage((prevFeedback) => ({
    //   [id]: action === "like" ? "Love the film" : "Disliked the film",
    // }));
  };

  const handleToggleWishlist = (Movie) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === Movie.id)) {
        return prevWishlist.filter((item) => item.id !== Movie.id);
      } else {
        return [...prevWishlist, Movie];
      }
    });
  };

  const handleFlipCard = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
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
          marginLeft: "20px",
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
                width: "280px",
                height: "300px",
                marginLeft: "8px",
                perspective: "1000px",
                transition: "transform 0.3s ease, z-index 0.3s ease",
                transform:
                  hoveredIndex === index ? "scale(1.05)" : "scale(1.0)",
                  
                zIndex: hoveredIndex === index ? 2 : 1,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s",
                  transform:
                    flippedIndex === index ? "rotateY(180deg)" : "rotateY(0)",
                }}
              >
                {/* Front side */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={Movie.src}
                    alt={`movie-${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                      // opacity: hoveredIndex === index ? 0 : 1,
                      // transition: "opacity 0.3s ease",
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
                        justifyContent: "flex-start",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      {/* Video Iframe */}
                      <iframe
                        src={`${Movie.trailerSrc}?autoplay=1&mute=1`} // Autoplay video on hover
                        title={`trailer-${index}`}
                        style={{
                          width: "100%",
                          height: "50%",
                          border: "none",
                          borderRadius: "8px 8px 0 0",
                        }}
                        allow="autoplay; encrypted-media"
                      />

                      {/* Buttons */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "22%",
                          left: "0",
                          width: "93%",
                          height: "50%",
                          transform: "translateY(50%)", // Adjust the vertical alignment
                          display: "flex",
                          flexDirection: "column", // Change to column layout to stack elements vertically
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          color: "white",
                          backgroundColor: "black", // Semi-transparent background
                          padding: "10px",
                          gap: "15px",
                          borderRadius: "8px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "15px",
                          }}
                        >
                          <WatchNowButton movieId={Movie.id} />
                          <AddToWishlistButton
                            Movie={Movie}
                            handleToggleWishlist={handleToggleWishlist}
                            wishlist={wishlist}
                          />
                          <EmojiButton
                            onEmojiHover={(action) =>
                              handleEmojiAction(Movie.id, action)
                            }
                          />
                          <ViewmoreButton
                            onClick={() => handleFlipCard(index)}
                          />
                        </div>
                        {/* Movie details card */}
                        <MovieDetailsCard
                          certificate={Movie.certificate}
                          timing={Movie.timing}
                          quality={Movie.quality}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Back side */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "8px",
                  
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{marginLeft:'8px',lineHeight:'1',color:'#A0A0A0',}}> {/* <h3>MovieName:{Movie.title}</h3> */}
                  {/* <p style={{ wordBreak: "break-all" }}>{Movie.nature}</p> */}
                  <p style={{fontSize:'20px',color:'white'}}>About {Movie.movie}</p> 
                  <p style={{fontSize:'12px',}}>Director:{Movie.director}</p>
                  <p style={{fontSize:'12px',}}>cast:{Movie.cast}</p>
                  <p style={{fontSize:'12px',}}>writer:{Movie.writer}</p>
                  <p style={{fontSize:'12px',}} > Genres:{Movie.genres}</p>

                  </div>
                 
                  <button
                    style={{
                      padding: "10px 20px",
                      border: "none",
                      backgroundColor: "blue",
                      color: "white",
                      cursor: "pointer",
                      borderRadius: "4px",
                    }}
                    onClick={() => handleFlipCard(index)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SlideButtons onPrev={handlePrev} onNext={handleNext} />
      </div>

      <WishlistData wishlist={wishlist} />
    </div>
  );
}

export default MovieList;
