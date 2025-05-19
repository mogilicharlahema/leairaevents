import React from "react";
import event1 from "../Assets/event1.png";
import event2 from "../Assets/event2.png";
import event3 from "../Assets/event3.png";
import "../Styles/gallery.css";
import { useNavigate } from "react-router-dom";

const GallerySection=()=>{
    const navigate=useNavigate()
    const handleViewBtnClick=()=>{
        navigate("/gallery-section")
    }
    return(
        <>
        <h1 className="gallery-titles">Gallery</h1>
        <div className="gallery-container">
            <img className="marriagepic" src={event1}></img>
            <img   className="bdaypic" src={event2}></img>
            <img className="partypic" src={event3}></img>
        </div>
        <button onClick={handleViewBtnClick} className="view-btn">View More</button>
        </>
    )
}

export default GallerySection