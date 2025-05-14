import React from "react";
import "../Styles/herosection.css"; 
import heroimage from "../Assets/heroimage.png";

const HeroSection = () => {
    return (
        <div className="about-section-wrapper"> 
            <div className="hero-container">
                <div className="hero-text-content">
                    <h1 className="leaira-title">Le Aira Events</h1>
                    <p className="hero-description">
                        Events are about creating magic and creating memories, not just
                        about showing up. We compile a collection of remarkable
                        occurrences that elevate everyday situations to something
                        truly remarkable.
                    </p>
                </div>
                <div className="hero-image-content">
                    <img src={heroimage} alt="Vibrant concert with stage lights" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;