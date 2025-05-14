import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import lairaLogo from '../Assets/lairalogo.png';
import '../Styles/navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const leftNavItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Gallery", path: "/gallery" },
    { id: 3, label: "Concerts", path: "/concerts" },
];

const rightNavItems = [
    { id: 4, label: "Events", path: "/explore-more" },
    { id: 5, label: "Book An Event", path: "/event-schedule" }
];

const allNavItems = [
    // { id: 0, label: "Home", path: "/" },
    ...leftNavItems,
    ...rightNavItems,
];



const NavbarSection = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef();
    const navigate = useNavigate();

    const toggleMobileMenu = (event) => {
        event.stopPropagation();
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeMobileMenu();
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const handleBookConsultClick = () => {
        closeMobileMenu(); 
        navigate("/event-schedule");
    };

    return (
        <div className="navbar-wrapper">
            <nav className="navbar-container" ref={navRef}>
                <button className="hamburger-icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={lairaLogo} alt="Laira Events Logo" className="logo" />
                </Link>

                <div className="nav-links">
                    <div className="nav-links-left">
                        {leftNavItems.map(item => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className="nav-link-item"
                                style={({ isActive }) => isActive ? { fontWeight: 'bold', } : {}}
                                onClick={closeMobileMenu}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="nav-links-right">
                        {rightNavItems.map(item => {
                            if (item.label === "Book An Event") {
                                return (
                                    <button
                                        key={item.id}
                                        className="nav-link-item book-event-button"
                                        onClick={handleBookConsultClick}
                                    >
                                        {item.label}
                                    </button>
                                );
                            } else {
                                return (
                                    <NavLink
                                        key={item.id}
                                        to={item.path}
                                        className="nav-link-item"
                                        style={({ isActive }) => isActive ? { fontWeight: 'bold', } : {}}
                                        onClick={closeMobileMenu}
                                    >
                                        {item.label}
                                    </NavLink>
                                );
                            }
                        })}
                    </div>
                </div>

                <div className={`mobile-nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
                    {allNavItems.map(item => {
                        if (item.label === "Book An Event") {
                            return (
                                <NavLink
                                    key={item.id}
                                    to={item.path}
                                    className="mobile-nav-link-item"
                                    onClick={() => {
                                        closeMobileMenu();
                                        navigate(item.path);
                                    }}
                                >
                                    {item.label}
                                </NavLink>
                            );
                        }
                         else{
                            return (
                                <NavLink
                                    key={item.id}
                                    to={item.path}
                                    className="mobile-nav-link-item"
                                    style={({ isActive }) => isActive ? { backgroundColor: '#f0f0f0', fontWeight: 'bold' } : {}}
                                    onClick={closeMobileMenu}
                                >
                                    {item.label}
                                </NavLink>
                            );
                         }
                    })}
                </div>
            </nav>
        </div>
    );
};

export default NavbarSection;