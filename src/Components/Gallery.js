import React from "react";
import event1 from "../Assets/event1.png";
import event2 from "../Assets/event2.png";
import event3 from "../Assets/event3.png";
import "../Styles/gallery.css";
import { useNavigate } from "react-router-dom";

const GallerySection = () => {
    const navigate = useNavigate();
    const handleViewBtnClick = () => {
        navigate("/gallery-section");
    };

    return (
        <div className="gallery-section-wrapper"> {/* Added wrapper */}
            <h1 className="gallery-title">Gallery</h1> {/* Corrected class name for consistency */}
            <div className="gallery-container">
                <img className="gallery-image" src={event1} alt="Marriage celebration" />
                <img className="gallery-image" src={event2} alt="Birthday party" />
                <img className="gallery-image" src={event3} alt="Group celebration" />
            </div>
            <button onClick={handleViewBtnClick} className="view-btn">
                View More
            </button>
        </div>
    );
};

export default GallerySection;