import React from "react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const ViewmoreButton = ({style,onClick}) => {
  

  return (
    <div
    onClick={onClick} 
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
        marginTop: '10px',
        ...style
      }}
      title='View MOre'
    >
     
        <ExpandMoreOutlinedIcon style={{ width: "20px", height: "20px", color: "white" }} />
    
       
     
    </div>
  );
};

export default ViewmoreButton;
