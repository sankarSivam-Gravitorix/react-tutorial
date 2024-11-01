import React from "react";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const WatchNowButton = ({ movieId }) => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    // Navigate to the movie details page (for example)
    navigate(`/watch/${movieId}`);
  };

  return (
    <div
      onClick={handleWatchNow}
      style={{
        cursor: "pointer", 
        backgroundColor: "white", 
        borderRadius: "50%", 
        display: "inline-flex", 
        alignItems: "center", 
        justifyContent: "center", 
        width: "42px", 
        height: "42px", 
        border:'2px solid black',
        marginTop:'10px'
      }}
      title="play"
    >
      <PlayArrowIcon 
        style={{ width: "20px", height: "20px", color: "black" ,backgroundColor:'white'}} 
      />
    </div>
  );
};

export default WatchNowButton;
