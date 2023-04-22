import React from "react";
import "../Componentcss/Imagecard.css";
const ImageCard = () => {
  return (
    <div className="image-wrapper">
      <div className="image-wrap">
        <div className="profile-head"></div>

        <div className="profile-name">
          <h1>Profile</h1>
          <div className="profile-center">
            <div className="p-left">Home</div>
            <div className="p-right">•Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
