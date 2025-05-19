import React from "react";
import venueImage from "../Assets/venue.png"; 
import bridalImage from "../Assets/bridal.png"; 
import cateringImage from "../Assets/catering.png"; 

import "../Styles/special.css"; 

const SpecializedSection = () => {
  const specializations = [
    {
      imgSrc: venueImage,
      altText: "Elegant venue decor with chandeliers and table settings",
      caption: "Venue Decor That Reflects Your Vision",
    },
    {
      imgSrc: bridalImage,
      altText: "Bride in traditional attire with intricate jewelry and makeup",
      caption: "Graceful Saree Draping, Makeup and Hair Styling",
    },
    {
      imgSrc: cateringImage,
      altText: "Buffet line with various dishes in chafing dishes",
      caption: "Customized Catering for Every Taste",
    },
  ];

  return (
    <div className="specialized-section">
      <h1 className="specialized-title">We Are Specialized</h1>
      <div className="image-showcase-container">
        {specializations.map((spec, index) => (
          <div className="image-card" key={index}>
            <img src={spec.imgSrc} alt={spec.altText} className="card-image" />
            <p className="card-caption">{spec.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializedSection;