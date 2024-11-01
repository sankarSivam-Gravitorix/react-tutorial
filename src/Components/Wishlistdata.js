import React from 'react';

const WishlistData = ({ wishlist, currentIndex }) => {
  if (wishlist.length === 0) return null;

  return (
    <div style={{ color: "white", marginTop: "20px" }}>
      <h3 style={{ marginLeft: "20px" }}>Added to Wishlist</h3>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          padding: 0,
        }}
      >
        {wishlist.map((item, index) => (
          <li
            key={index}
            style={{
              width: "280px",
              height: "280px",
              borderRadius: "8px",
              overflow: "hidden",
              marginLeft: "6px",
            }}
          >
            <img
              src={item.src}
              alt={`wishlist-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                // opacity: currentIndex === index ? 1 : 0.7,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistData;
