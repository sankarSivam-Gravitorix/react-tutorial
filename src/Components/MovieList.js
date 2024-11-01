import React, { useState } from "react";
import AddToWishlistButton from "./Buttons/AddToWishlist_Button";
import EmojiButton from "./Buttons/Emoji_Button";
import WatchNowButton from "./Buttons/WatchNow_Button";
import Movies from "./Moviedata";
import WishlistData from "./Wishlistdata";
import MovieDetailsCard from "./MovieDetailsCard";
import SlideButtons from "./Buttons/SlideButtons";
import ViewmoreButton from "./Buttons/Viewmore";
import Modal from "./Modal";

function MovieList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [emojiMessage, setEmojiMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Movies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Movies.length - 1 : prevIndex - 1
    );
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

  const handleEmojiAction = (id, action) => {
    // setEmojiMessage((prevFeedback) => ({
    //   [id]: action === "like" ? "Love the film" : "Disliked the film",
    // }));
  };

  const handleViewMoreClick = (Movie) => {
    setSelectedMovie(Movie); // Set the selected movie
    setModalOpen(true); // Open the modal
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
                height: "280px",
                borderRadius: "8px",
                overflow: "hidden",
                marginLeft: "8px", // Spacing between images
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
                      position: "relative",
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
                        handleToggleWishlist={handleToggleWishlist}
                        wishlist={wishlist}
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
                    {/* Movie details card Component */}
                    <MovieDetailsCard
                      certificate={Movie.certificate}
                      timing={Movie.timing}
                      quality={Movie.quality}
                    />
                     {/* Position ViewmoreButton absolutely to the right */}
                     <ViewmoreButton
                      style={{
                        position: "absolute",
                        right: "10px",
                        // bottom: "10px",
                      }}
                      onClick={() => handleViewMoreClick(Movie)} // Handle click event
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Use CarouselNavigation component */}
        <SlideButtons onPrev={handlePrev} onNext={handleNext} />
      </div>

      {/* Display the Wishlist */}
      <WishlistData wishlist={wishlist} currentIndex={currentIndex} />

      {/* Modal to display movie details */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        movie={selectedMovie} // Pass selected movie to the modal
      />
    </div>
  );
}

export default MovieList;
