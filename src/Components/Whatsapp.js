import React, { useEffect, useState } from 'react';

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

 
  const dynamicSize = isMobile ? 40 : size;
  const style = {
    position: 'fixed',
    bottom: isMobile ? '430px' : '20px',
    right: isMobile ? '10px' : '20px',
    width: `${dynamicSize}px`,
    height: `${dynamicSize}px`,
    cursor: 'pointer',
    zIndex: 999
  };

  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      onClick={handleClick}
      style={style}
    />
  );
};

export default Whatsapp;
