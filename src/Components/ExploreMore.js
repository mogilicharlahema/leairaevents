import React from "react";
import "../Styles/exploremore.css";
import wedding from "../Assets/wedding.png";
import bday from "../Assets/bdayparty.png";
import corporateImage from "../Assets/corporateevent.png";
import audio from "../Assets/audioevent.png";
import musical from "../Assets/musicalevent.png";
import school from "../Assets/schlevent.png";
import privateevent from "../Assets/privateevent.png";
import celebrityImage from "../Assets/celebrityevent.png";
import anniversary from "../Assets/anniversaryevent.png";
import { useNavigate } from "react-router-dom";

const eventsData = [
  { id: 1, image: wedding, label: "Marriages & Engagements",description:"Celebrate life’s most cherished moments with elegance, warmth, and personalized care. Our weddings and engagement services are designed to bring your vision to life, whether you're planning an intimate gathering or a grand celebration. From the moment of Yes to the moment of I do we are with you every step of the way." },
  { id: 2, image: bday, label: "Birthday Parties",description:'Make each year even more memorable by hosting one of our amazing birthday parties!  We make your idea a reality with unique touches, imaginative themes, and an exuberant, joyful atmosphere, whether you are organizing a milestone event or a small get-together.' },
  { id: 3, image: corporateImage, label: "Corporate Events",description:"With our well-planned Corporate Events, where networking meets opportunity and business meets innovation, you may enhance your professional experiences.  Our corporate events are made to be impressive and productive, whether you're having an executive retreat, annual meeting, product launch, or high-level conference." },
  { id: 4, image: audio, label: "Audio Launches & Movie Promotions",description:"With our amazing audio launches and movie promotions, you can take center stage and give audiences a first-look at the magic that happens behind the scenes.  These exuberant celebrations, which range from thrilling audio release parties to extensive promotional tours, deliver the most anticipated moments in the film industry directly to the public" },
  { id: 5, image: musical, label: "Musical Events",description:"From soulful symphonies to electrifying concerts, we bring music to life with unforgettable experiences. Our musical event services cater to a wide range of occasions from live band performances and classical recitals to DJ nights, cultural showcases, and large-scale music festivals." },
  { id: 6, image: school, label: "School & College Events",description:"Our area of expertise is organizing and overseeing exciting, captivating, and significant events for universities and institutions.  From academic achievements to cultural celebrations, we design events that uplift, amuse, and unite communities."},
  { id: 7, image: privateevent, label: "Private Parties",description:"From small dinner parties to exciting celebrations, we specialize in designing distinctive, unforgettable private events.  In order to improve the visitor experience, our staff works with customers to design mood lighting, décor, entertainment, food, and unique elements." },
  { id: 8,  image:anniversary,label:"Anniversary Events",description:"Celebrate your dedication and love with an exquisitely designed anniversary party that tells your special tale.  We provide specialized décor, cuisine, and entertainment for both small and large events, so you can concentrate on honoring the milestones, love, and memories."},
  { id: 9, image: celebrityImage, label: "celebrity Events",description:"Prepare to be a part of our exclusive Celebrity Events and enjoy the glitz, glamor, and star-studded excitement!  These remarkable events, which range from fashion galas and live Q&A sessions with your favorite stars to red carpet premieres and VIP after-parties, bring fans closer to the celebrities they adore. " },
];

const ExploreMoreSection = () => {
  const navigate = useNavigate();
  const handleExploreMoreBookbtn = () => {
    navigate("/event-schedule");
  };
  return (
    <div className="explore-events-section">
      <h1 className="explore-events-title">Explore the Events We Host</h1>
      <div className="events-grid">
        {eventsData.map((event) => (
          <div key={event.id} className="event-item">
            <div className="event-item-inner">
              <div className="event-card-front">
                <img
                  src={event.image}
                  alt={event.label}
                  className="event-image"
                />
                <div className="event-label-container">
                  <p className="event-label">{event.label}</p>
                </div>
              </div>
              <div className="event-card-back">
                <p className="event-card-description">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleExploreMoreBookbtn}
        className="explore-book-event-button"
      >
        Book an Event
      </button>
    </div>
  );
};

export default ExploreMoreSection;