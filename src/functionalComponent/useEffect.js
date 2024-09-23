import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Slideshow() {
  const images = [
    "http://www.pixelstalk.net/wp-content/uploads/2016/05/Download-hd-wallpapers-1080p-screen.jpg", //index=0
    "http://www.pixelstalk.net/wp-content/uploads/2016/03/desktop-nature-wallpaper-high-quality-wallpaper.jpg", //index=1
    "http://getwallpapers.com/wallpaper/full/0/b/b/489788.jpg", //index=2
  ];

  const [currentIndex, setCurrentIndex] = useState(0); //intialize the state to '0' index;

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval of 2seconds
      setCurrentIndex((prev) => (prev + 1) % images.length); // %images.length->when last index reached, it again starts from '0' index
    }, 2000);

    return () => clearInterval(intervalId); //unmounts the interval when shift to other component (similar to component unmount)
    
  }, [images.length]); // the useeffect again runs when each length of image is changed(similar to component didupdate)

  useEffect(() => {
    console.log("effect runs for initial render only ");
  }, []);

  // useEffect(() => {
  //   console.log("Effect runs after every render");
  // });

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt="slideshow"
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
}

export default Slideshow;
