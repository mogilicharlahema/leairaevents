import React from "react";
import "../Styles/aboutsection.css";
import aboutpic from "../Assets/aboutpic.png"; 

import why from "../Assets/why.png";
import rameshImg from "../Assets/ramesh.png";
import bharathImg from "../Assets/bharath.png";
import ganeshImg from "../Assets/ganesh.png";
import sindhuImg from "../Assets/sindhu.png";
import saiImg from "../Assets/sai.png";
import rakeshImg from "../Assets/rakesh.png";

const AboutUsSection = () => {
    const teamMembers = [
        { id: 1, name: "Ramesh", role: "Event Planning Team", imgSrc: rameshImg },
        { id: 2, name: "Bharath", role: "Logistics & Coordination Team", imgSrc: bharathImg },
        { id: 3, name: "Ganesh", role: "Marketing & Promotion Team", imgSrc: ganeshImg },
        { id: 4, name: "Sindhu", role: "Designing Team", imgSrc: sindhuImg },
        { id: 5, name: "Sai", role: "Production & Tech Team", imgSrc: saiImg },
        { id: 6, name: "Rakesh", role: "Guest & Client Experience Team", imgSrc: rakeshImg },
    ];

    return (
        <>
           
            <div className="about-sections-container">
                <div className="about-section-text-content">
                    <h2 className="about-section-title">— About Us —</h2>
                    <p className="about-section-us-description">
                        Every event at Le Aira Events is an opportunity
                        to make enduring memories, not just a get-
                        together. We turn your ideas into amazing
                        events, whether you're organizing a lively
                        festival, a sophisticated wedding, an exuberant
                        concert, a formal business gathering, or a
                        private celebration.
                    </p>
                    <p className="about-section-us-description">
                        We approach each event with originality,
                        accuracy, and a unique touch that captures your
                        vision and goals. Our staff is committed to
                        impeccable execution and creative design from
                        the initial consultation to the last cheer. We
                        thrive in making dreams come true, therefore no
                        detail is too small or concept too audacious.
                    </p>
                    <p className="about-section-us-description">
                        We stand out for our dedication to quality, creativity, and sincere service. We create
                        memorable, well-tailored, and intensely intimate moments rather than merely
                        organizing events.
                    </p>
                    <p className="about-section-us-description">
                        So that you may be totally present and savor every moment of your special
                        occasion, let us take care of the planning, logistics, and behind-the-scenes aspects.
                        We at Le Aira Events create smooth, significant, and genuinely remarkable
                        occasions.
                    </p>
                </div>
                <img className="about-section-image" src={aboutpic} alt="Team at Le Aira Events collaborating and planning an event" />
            </div>
          

            {/* Existing Why Us Section */}
            <div className="why-us-section">
                <img src={why} alt="Background for Why Us section showing a seminar" className="why-us-bg-img" />
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

          

            {/* Existing Meet Our Team Section */}
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
        </>
    );
};

export default AboutUsSection;