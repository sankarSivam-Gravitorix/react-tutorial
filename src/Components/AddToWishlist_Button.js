import React from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const AddToWishlistButton = ({ Movie, handleAddToWishlist }) => {
  return (
    <div
    onClick={() => handleAddToWishlist(Movie)}
      style={{
        cursor: "pointer", 
        backgroundColor: "black", 
        borderRadius: "50%", 
        display: "inline-flex", 
        alignItems: "center", 
        justifyContent: "center", 
        width: "40px", 
        height: "40px", 
        border:'2px solid white',
        marginTop:'10px'
      }}
      title="Add to My List"
    >
      <AddOutlinedIcon style={{ width: "20px", height: "20px", color: "white" }} />
    </div>
  );
};

export default AddToWishlistButton;
