import React from "react";
import aboutpic from "../Assets/aboutpic.png"; 
import "../Styles/aboutus.css"; 
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
    const navigate = useNavigate();
    const handleBtnClick = () => {
        navigate('/about-section'); 
    }

    return (
        <div className="about-section-container">
            <div className="about-text-content">
                <div className="about-title-wrapper">
                    <span className="title-line left"></span>
                    <h2 className="about-title-text">About Us</h2>
                    <span className="title-line right"></span>
                </div>
                <p className="about-description">
                    At <strong>Le Aira Events</strong>, we view every occasion
                    as an opportunity to create enduring
                    memories. We assist in bringing your ideas to
                    life with attention and passion, whether you're
                    organizing a festival, wedding, concert,
                    business meeting, or private event.
                    <br /><br />
                    We take care of everything with a personal
                    touch and a focus on doing our best, allowing
                    you to unwind and cherish your special
                    occasions.
                </p>
                <button className="learn-more-btn" onClick={handleBtnClick}>
                    Learn More
                </button>
            </div>
            <div className="about-image-column">
                <img className="about-image-element" src={aboutpic} alt="Team at Le Aira Events discussing project" />
            </div>
        </div>
    );
}

export default AboutSection;