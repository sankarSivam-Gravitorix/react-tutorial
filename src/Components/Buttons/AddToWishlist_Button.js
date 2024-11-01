import React from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const AddToWishlistButton = ({ Movie, handleToggleWishlist, wishlist }) => {
  const isInWishlist = wishlist.some(item => item.id === Movie.id);

  return (
    <div
      onClick={() => handleToggleWishlist(Movie)}
      style={{
        cursor: "pointer",
        backgroundColor: "black",
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        border: '2px solid white',
        marginTop: '10px'
      }}
      title={isInWishlist ? "Remove from My List" : "Add to My List"}
    >
      {isInWishlist ? (
        <RemoveOutlinedIcon style={{ width: "20px", height: "20px", color: "white" }} />
      ) : (
        <AddOutlinedIcon style={{ width: "20px", height: "20px", color: "white" }} />
      )}
    </div>
  );
};

export default AddToWishlistButton;
