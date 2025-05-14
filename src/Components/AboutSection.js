import React from "react";
import "../Styles/aboutsection.css";
import aboutpic2 from "../Assets/aboutpic2.png";
import venue from "../Assets/venue.png";
import bridal from "../Assets/bridal.png";
import catering from "../Assets/catering.png";
import why2 from "../Assets/why2.png";
import rameshImg from "../Assets/ramesh.png"; // Placeholder - use your image
import bharathImg from "../Assets/bharath.png"; // Placeholder - use your image
import ganeshImg from "../Assets/ganesh.png";   // Placeholder - use your image
import sindhuImg from "../Assets/sindhu.png";   // Placeholder - use your image
import saiImg from "../Assets/sai.png";       // Placeholder - use your image
import rakeshImg from "../Assets/rakesh.png";   // Placeholder - use your image



const AboutUsSection = () => {

    // --- NEW: Team Member Data ---
    const teamMembers = [
        { id: 1, name: "Ramesh", role: "Event Planning Team", imgSrc: rameshImg },
        { id: 2, name: "Bharath", role: "Logistics & Coordination Team", imgSrc: bharathImg },
        { id: 3, name: "Ganesh", role: "Marketing & Promotion Team", imgSrc: ganeshImg },
        { id: 4, name: "Sindhu", role: "Designing Team", imgSrc: sindhuImg },
        { id: 5, name: "Sai", role: "Production & Tech Team", imgSrc: saiImg },
        { id: 6, name: "Rakesh", role: "Guest & Client Experience Team", imgSrc: rakeshImg },
    ];
    // --- END NEW ---

    return (
        <>
            {/* Existing About Container */}
            <div className="about-container">
                {/* ... (keep existing content) ... */}
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

                        We believe the true beauty of an event lies in the details—and that’s where we excel
                    </p>
                </div>
            </div>

            {/* Existing Image Showcase */}
            <div className="image-showcase-container">
                 {/* ... (keep existing content) ... */}
                <div className="image-card">
                    <img src={venue} alt="Venue Decor That Reflects Your Vision" className="card-image" />
                    <p className="card-caption">Venue Decor That Reflects Your Vision</p>
                </div>
                <div className="image-card">
                    <img src={bridal} alt="Graceful Saree Draping, Makeup and Hair Styling" className="card-image" />
                    <p className="card-caption">Graceful Saree Draping, Makeup and Hair Styling</p>
                </div>
                <div className="image-card">
                    <img src={catering} alt="Customized Catering for Every Taste" className="card-image" />
                    <p className="card-caption">Customized Catering for Every Taste</p>
                </div>
            </div>

            {/* Existing Why Us Section */}
            <div className="why-us-section">
                 {/* ... (keep existing content) ... */}
                <img src={why2} alt="Background for Why Us section showing a seminar" className="why-us-bg-img" />
                <h1 className="why-us-main-heading">Why Us</h1>
                <div className="why-us-text-box">
                    <p> <strong>Le Aira Events</strong> focuses on event planning as an experience design, guiding
                        it beyond logistics. They approach each event as a unique story,
                        orchestrating elements like decor and guest interaction to create an
                        emotional journey, evoking desired emotions.</p>
                    <p>Our approach is centered on human-centered design, focusing on
                        understanding space psychology and human behavior.</p>
                    <p>Le Aira emphasizes cultural intelligence in event design, integrating design
                        anthropology principles to tailor celebrations to clients' diverse traditions,
                        ensuring authenticity and emotional connection, while respecting local
                        cultural contexts while blending global influences.</p>
                </div>
            </div>

            {/* Existing Show Container */}
            <div className="show-container">
                {/* ... (keep existing content) ... */}
                <div>
                    <h2>81</h2>
                    <h3>Events Organised</h3>

                </div>
                <div>
                    <h2>70+</h2>
                    <h3>Happy Clients</h3>
                </div>
                <div>
                    <h2>1+ Years</h2>
                    <h3>Experience</h3>
                </div>
            </div>

            {/* --- NEW: Meet Our Team Section --- */}
            <div className="team-section">
                <h2 className="team-title">Meet Our Team</h2>
                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-member-card">
                            <img src={member.imgSrc} alt={member.name} className="team-member-photo" />
                            <h4 className="team-member-name">{member.name}</h4>
                            <p className="team-member-role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* --- END NEW --- */}

        </>
    )
}

export default AboutUsSection;