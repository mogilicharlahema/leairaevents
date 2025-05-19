import React from "react";
import suits from "../Assets/suits.png";
import lebestow from "../Assets/lebestow.png";
import lkr from "../Assets/lkr.png";
import vedanthu from "../Assets/vedanthu.png";
import mindclues from "../Assets/mind.png"; 
import "../Styles/clients.css";

const ClientSection = () => {
    const clients = [
        { id: 1, src: suits, alt: "The Suits Salon & Spa logo", className: "suits-logo" },
        { id: 2, src: lebestow, alt: "Lebestow B logo", className: "lebestow-logo" },
        { id: 3, src: lkr, alt: "LKR Technologies logo", className: "lkr-logo" },
        { id: 4, src: vedanthu, alt: "Vedantu logo", className: "vedantu-logo" },
        { id: 5, src: mindclues, alt: "Mind Clues logo", className: "mindclues-logo" },
    ];

    return (
        <section className="client-section">
            <h1 className="client-title">Our Clients</h1>
            <div className="client-logos">
                {clients.map(client => (
                    <div key={client.id} className={`client-logo-item ${client.className}`}>
                        <img src={client.src} alt={client.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientSection;