import React from "react";

function BorderImage() {
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        border: "100px solid transparent",
        borderImageSource:
          "url(https://i.pinimg.com/736x/55/1b/64/551b6484dfec430331405710fd43d022--page-borders-hd-photos.jpg)",
         borderImageSlice: "30 fill",
        borderImageWidth: "30px",
        marginLeft: "20px",
      }}
    ></div>
  );
}
export default BorderImage;
