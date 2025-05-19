import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import lairaLogo2 from '../Assets/lairalogo2.png'; 
import '../Styles/navbar.css'; 
import { FaBars, FaTimes } from 'react-icons/fa';

const mainDesktopNavItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Gallery", path: "/gallery-section" },
    { id: 3, label: "Concerts", path: "/concerts" },
    { id: 4, label: "Events", path: "/explore-more" },
      { id: 4, label: "ContactUs", path: "/Getintouch" }
];

const allMobileNavItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Gallery", path: "/gallery-section" },
    { id: 3, label: "Concerts", path: "/concerts" },
    { id: 4, label: "Events", path: "/explore-more" },
    { id: 4, label: "ContactUs", path: "/Getintouch" },
    { id: 5, label: "Book an Event", path: "/event-schedule" } 
];

const NavbarSection = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
                closeMobileMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const handleBookEventClick = () => {
        closeMobileMenu(); 
        navigate("/event-schedule");
    };

    const handleMobileLinkClick = (path) => {
        navigate(path);
        closeMobileMenu();
    };

    return (
        <div className="navbar-wrapper">
            <nav className="navbar-container" ref={navRef}>
              
                <Link to="/" className="navbar-logo-link" onClick={closeMobileMenu}>
                    <img src={lairaLogo2} alt="Laira Events Logo" className="logo-image" />
                </Link>

                <div className="nav-links-desktop-center">
                    {mainDesktopNavItems.map(item => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({ isActive }) => isActive ? "nav-link-item active" : "nav-link-item"}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
                <button
                    className="book-event-button-desktop"
                    onClick={handleBookEventClick}
                >
                    Book an Event
                </button>

                <button className="hamburger-icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                {isMobileMenuOpen && (
                    <div className="mobile-nav-menu">
                        {allMobileNavItems.map(item => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) => isActive ? "mobile-nav-link-item active" : "mobile-nav-link-item"}
                                onClick={() => handleMobileLinkClick(item.path)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default NavbarSection;