import React from 'react';
import venu from "../Assets/venu.png";
import vardhan from "../Assets/vardhan.png";
import lasya from "../Assets/lasya.png";
import mounika from "../Assets/mounika.png";
import prasanna from "../Assets/prasanna.png";
import naveen from "../Assets/naveen.png";
import "../Styles/testimonals.css";



const testimonialsData = [
  {
    name: "Venu",
    image: venu,
    text: "The Le Aira crew successfully organized our office annual day, attracting 250 people in just 5 minutes, and their efforts are greatly appreciated."
  },
  {
    name: "Lasya",
    image: lasya,
    text: "The writer expresses gratitude to the Le-Aira crew for their exceptional service and reasonable fee in facilitating their first movie marketing event in Hyderabad."
  },
  {
    name: "Vardhan",
    image: vardhan,
    text: "The celebration was highly appreciated for its food, music, and beauty, with guests comparing it to being in a movie."
  },
  {
    name: "Naveen",
    image: naveen,
    text: "The family party was attended by a professional and cooperative crew from Le-Aira-Even, who provided delicious, well-prepared food and timely service, showcasing their excellent work."
  },
  {
    name: "Mounika",
    image: mounika,
    text: "Le-Aira-Events provided a skilled event coordinator for a family celebration, ensuring an unforgettable experience with exceptional meal, staff, and décor, resulting in a successful event."
  },
  {
    name: "Prasanna",
    image: prasanna,
    text: "The recipient expresses gratitude to the staff for a successful daughter's birthday party, praising the impressive props, delicious food, and spectacular venue."
  }
];

const TestimonalsSection = () => {
  return (
    <div className="testimonials-section-container">
      <h1 className="testimonials-main-title">Testimonials</h1>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <span className="testimonial-name">{testimonial.name}</span>
              {testimonial.image ? (
                <img src={testimonial.image} alt={`${testimonial.name}'s profile`} className="testimonial-image" />
              ) : (
                <div className="testimonial-image-placeholder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM12 14C8.68629 14 6 16.6863 6 20H18C18 16.6863 15.3137 14 12 14Z" />
                  </svg>
                </div>
              )}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonalsSection;