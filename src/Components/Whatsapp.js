import React, { useEffect, useState } from 'react';
import "../Styles/whatsapp.css";

const Whatsapp = ({
  phoneNumber = '9177057705',
  message = 'Hello, I am interested in your services',
  size = 70
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      onClick={handleClick}
      className={`whatsapp-icon ${isMobile ? 'mobile' : ''}`}
      style={isMobile ? {} : { width: `${size}px`, height: `${size}px` }}
    />
  );
};

export default Whatsapp;
