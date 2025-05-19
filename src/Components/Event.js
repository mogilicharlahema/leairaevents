import React from "react";
import "../Styles/events.css";
import musical from "../Assets/musicalevent.png";
import school from "../Assets/schlevent.png";
import corporateImage from "../Assets/corporateevent.png";
import { useNavigate } from "react-router-dom";

const eventsData = [

    {
        id: 1,
        image: musical,
        alt: "Audience at a music concert with bright stage lights",
        label: "Musical Events",
        description: "Immerse yourself in the magic of music with our expertly organized musical events. From vibrant concerts to intimate acoustic sessions, we create unforgettable experiences.",
    },
    {
        id: 2,
        image: school,
        alt: "Audience watching a performance at an outdoor venue, possibly a school event",
        label: "School & College Events",
        description: "Our area of expertise is organizing and overseeing exciting, captivating, and significant events for universities and institutions. From academic achievements to cultural celebrations, we design events that uplift, amuse, and unite communities.",
    },
    {
        id: 3,
        image: corporateImage,
        alt: "Panel discussion at a corporate event or conference",
        label: "Corporate Events",
        description: "Transform your corporate functions into impactful experiences. We specialize in conferences, seminars, product launches, and team-building events that align with your business objectives.",
    },
];

const EventSection = () => {
    const navigate=useNavigate()
    const handleExploreBtn=()=>{
        navigate("/explore-more")
    }
    return (
        <section className="event-section-container">
            <h1 className="event-section-title">Explore the Events We Host</h1>
            <div className="event-cards-wrapper">
                {eventsData.map((event) => (
                    <article key={event.id} className="event-card">
                        <div className="event-card-inner">
                            <div className="event-card-front">
                                <img
                                    src={event.image}
                                    alt={event.alt}
                                    className="card-face-image card-image-front"
                                />
                                <div className="event-card-label-wrapper">
                                    <p className="event-card-label">{event.label}</p>
                                </div>
                            </div>
                            <div className="event-card-back">
                                <p className="event-card-description">{event.description}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <button onClick={handleExploreBtn} className="explore-more-button">Explore More</button>
        </section>
    );
};

export default EventSection;