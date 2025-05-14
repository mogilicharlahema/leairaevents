import React from "react";
import aboutpic2 from "../Assets/aboutpic2.png";
import "../Styles/aboutus.css";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
    const navigate=useNavigate()
    const handleBtnClick=()=>{
        navigate('./about-section')
    }
    return (
        <>
            <div className="about-container">
                <img className="about-image" src={aboutpic2} alt="Team at Le Aira Events discussing project" />
                <div className="about-text-content">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-us-description">
                        At <strong>Le Aira Events</strong>, we view every occasion
                        as an opportunity to create enduring
                        memories. We assist in bringing your ideas to
                        life with attention and passion, whether you're
                        organizing a <strong>festival, wedding, concert,
                            business meeting, or private event</strong>.

                        We take care of everything with a personal
                        touch and a focus on doing our best, allowing
                        you to unwind and cherish your special
                        occasions.
                    </p>
                    <button className="learn-more-btn" onClick={handleBtnClick}>Learn More</button>
                </div>
            </div>
        </>
    );
}

export default AboutSection;