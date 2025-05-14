import React from "react";
import "../Styles/offer.css";

import marriageImage from "../Assets/marriage.png";
import partyImage from "../Assets/party.png";
import audioImage from "../Assets/audio.png";
import { useNavigate } from "react-router-dom";

const offeringsData = [
  {
    title: "Wedding & Engagement",
    imgSrc: marriageImage,
    imgAlt: "Wedding & Engagement",
    description:
      "Le Aira Events specializes in crafting distinctive weddings that are customized to your love story, ensuring every aspect is meticulously planned and executed for a lasting memory.",
  },
  {
    title: "Private Parties",
    imgSrc: partyImage,
    imgAlt: "Private Parties",
    description:
      "Private parties offer personalized experiences, showcasing unforgettable tales with carefully selected guest lists, music, beverages, and themed décor, ensuring the confidentiality of your moments.",
  },
  {
    title: "Audio Launches",
    imgSrc: audioImage,
    imgAlt: "Audio Launches",
    description:
      "Experience immersive audio with stories, resonated voices, and moving songs, allowing creativity, clarity, and connection to guide you to new artistic horizons.",
  },
];

const OfferingSection = () => {
  const navigate=useNavigate()
  const hanldeExploreBtn=()=>{
    navigate("/explore-more")
  }
  return (
    <div className="offering-section-container">
      <h1 className="offer-title">What We Offering</h1>
      {offeringsData.map((offer, index) => {
        let animationClass = "";
      
        if (index === 0 || index === offeringsData.length - 1) {
          animationClass = "animate-peek-ltr";
        }
       
        else if (index === 1) {
          animationClass = "animate-peek-rtl";
        }

        const animationDelay = '0s';

        return (
          <React.Fragment key={offer.title}>
            <div
              className={`offering-item ${animationClass}`}
              style={{ animationDelay }}
            >
              <img
                src={offer.imgSrc}
                alt={offer.imgAlt}
                className="offering-image"
              />
              <div className="offering-text-content">
                <h2 className="offering-item-title">{offer.title}</h2>
                <p className="offering-description">{offer.description}</p>
              </div>
            </div>
            {index < offeringsData.length - 1 && (
              <hr className="offering-divider" />
            )}
           
          </React.Fragment>
        );
      })}
       <button onClick={hanldeExploreBtn} className="explore-btn">Explore More</button>
    </div>
  );
};

export default OfferingSection;