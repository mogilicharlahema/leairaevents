
import React from "react";
import { Link } from 'react-router-dom';
import lairalogo2 from "../Assets/lairalogo2.png";
import "../Styles/footer.css";
import { FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo-wrapper">
        <img src={lairalogo2} alt="Laira Events Logo" className="footer-logo" />
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>

            <li><Link to="/about-section">About Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link to="/Getintouch">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/concerts">Concerts</Link></li>
            <li><Link to="/whatweoffering">Events</Link></li>
            <li><Link to="/event-schedule">Book an Eventt</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Address</h3>
          <p>+91 9177-05-7705</p>
          <p><a href="mailto:Operations@leairaevents.com">Operations@leairaevents.com</a></p>
          <p>
            4th Floor, And 5, Plot No: 4,<br />
            Arunodaya Colony, Vittal Rao Nagar,<br />
            Madhapur, Hyderabad, Telangana - 500081
          </p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">

            <a href="https://www.instagram.com/leairaevents?igsh=MXVyYnltd2F1YjIyOA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61564177941090" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://g.co/kgs/Kh7mSfw" className="social-icon" aria-label="google">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
                style={{ width: '25px', height: '25px', marginTop: "-16px", marginBottom: "4px" }}
              />
            </a>



          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} events. All rights are reserved</p>
      </div>
    </footer>
  );
};

export default FooterSection;