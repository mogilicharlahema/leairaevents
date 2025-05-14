import React from "react";
import "../Styles/concerts.css"; 
import bellicon from "../Assets/bellIcon.png"



const ConcertsSection = () => {
  return (
    <div className="concertsSection">
      <h2 className="title">Upcoming Concerts & Events</h2>
      <div className="contentWrapper">
        <div className="iconContainer">
         <img className="icon" src={bellicon}></img>
        </div>
        <div className="messageBox">
          <p className="messageText">
            We will provide you with an update shortly
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConcertsSection;