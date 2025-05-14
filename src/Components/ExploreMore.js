import React from "react";
import "../Styles/exploremore.css";
import wedding from "../Assets/wedding.png";
import bday from "../Assets/bdayparty.png";
import corporateImage from "../Assets/celebrityevent.png"; 
import audio from "../Assets/audioevent.png";
import musical from "../Assets/musicalevent.png";
import school from "../Assets/schlevent.png";
import privateevent from "../Assets/privateevent.png";
import celebrityImage from "../Assets/celebrityevent.png";
import anniversary from "../Assets/anniversaryevent.png"; 
import { useNavigate } from "react-router-dom";

const eventsData = [
  { id: 1, image: wedding, label: "Marriages & Engagements" },
  { id: 2, image: bday, label: "Birthday Parties" },
  { id: 3, image: corporateImage, label: "Corporate Events" }, 
  { id: 4, image: audio, label: "Audio Launches & Movie Promotions" },
  { id: 5, image: musical, label: "Musical Events" },
  { id: 6, image: school, label: "School & College Events" },
  { id: 7, image: privateevent, label: "Private Parties" },
  { id: 8,  image:anniversary,label:"Anniversary Events"},
  { id: 9, image: celebrityImage, label: "celebrity Events" }, 
];

const ExploreMoreSection = () => {
  const navigate=useNavigate()
  const handleExploreMoreBookbtn=()=>{
    navigate("/event-schedule")
  }
  return (
    <div className="explore-events-section">
      <h1 className="explore-events-title">Explore the Events We Host</h1>
      <div className="events-grid">
        {eventsData.map((event) => (
          <div key={event.id} className="event-item">
            <img src={event.image} alt={event.label} className="event-image" />
            <div className="event-label-container">
              <p className="event-label">{event.label}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleExploreMoreBookbtn} className="explore-book-event-button">Book an Event</button>
    </div>
  );
};

export default ExploreMoreSection;