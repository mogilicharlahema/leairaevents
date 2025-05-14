import React from "react";
import "../Styles/galleryviewsection.css"; 

import event from "../Assets/event1.png";   
import bday from "../Assets/event2.png";    
import g3 from "../Assets/g3.png";       
import g4 from "../Assets/g4.png";       
import g5 from "../Assets/g5.png";       
import g6 from "../Assets/g6.png";        
import g7 from "../Assets/g7.png";        
import g8 from "../Assets/g8.png";       

const GalleryViewSection = () => {
    return (
        <section className="gallery-view-section">
            <h2 className="gallery-title">Gallery</h2>
            <div className="gallery-grid">
               
                <div className="gallery-item item-1">
                    <img className="first-image" src={event} alt="Grand wedding stage setup" />
                </div>
              
                <div className="gallery-item item-2">
                    <img className="second-image" src={bday} alt="Birthday party decorations with banner" />
                </div>
               
                <div className="gallery-item item-3">
                    <img className="third-image" src={g3} alt="Wedding celebration with fireworks display" />
                </div>
            
                <div className="gallery-item item-4">
                    <img className="fourth-image" src={g4} alt="Professional conference or seminar event" />
                </div>
             <div className="images-container">
                <div className="gallery-item item-5">
                    <img className="five-image" src={g5} alt="Live concert with cheering crowd and stage lights" />
                </div>
              
                <div className="gallery-item item-6">
                    <img className="six-image" src={g6} alt="Group of people toasting with wine glasses at a dinner" />
                </div>
               
                <div className="gallery-item item-7">
                    <img className="seven-image" src={g7} alt="Elegant restaurant interior with set tables" />
                </div>
              
                <div className="gallery-item item-8">
                    <img className="eight-image" src={g8} alt="Beautifully lit gazebo at night for an event" />
                </div>
            </div>
            </div>
        </section>
    );
};

export default GalleryViewSection;