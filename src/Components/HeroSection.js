import React from "react";
import "../Styles/herosection.css"; // Ensure this path is correct
import heroimage from "../Assets/heroimage.png"; // Replace with the actual path to your image

const HeroSection = () => {
    return (
        <div className="hero-section-container">
            <div className="hero-image-wrapper">
                <img src={heroimage} alt="Lavish event setup with traditional Indian decor" />
            </div>
            <div className="hero-stats-card">
                <div className="stat-item">
                    <p className="stat-number">81</p>
                    <p className="stat-label">Events Organized</p>
                </div>
                <div className="stat-item">
                    <p className="stat-number">70+</p>
                    <p className="stat-label">Happy Clients</p>
                </div>
                <div className="stat-item">
                    <p className="stat-number">1+ Years</p>
                    <p className="stat-label">Experience</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;