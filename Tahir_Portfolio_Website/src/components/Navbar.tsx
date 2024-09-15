import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import { FaGithub, FaLinkedin, FaGoogle, FaBars } from 'react-icons/fa'; // Import icons

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        setIsMenuOpen(false); // Close the mobile menu when a link is clicked
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <span className="brand"><span>&#128522;</span> Mr Sundhu</span>
            <div className={`Pages ${isMenuOpen ? 'open' : ''}`}>
                <span className="Page" onClick={() => handleNavigation('/')}>Home</span>
                <span className="Page" onClick={() => handleNavigation('/portfolio')}>Portfolio</span>
                <span className="Page" onClick={() => handleNavigation('/testimonials')}>Testimonials</span>
                <span className="Page" onClick={() => handleNavigation('/about')}>About</span>
                <span className="Page" onClick={() => handleNavigation('/contact')}>Contact</span>
            </div>
            <div className="others">
                <a href="https://github.com/MuhammadTahirSundhu" target="_blank" rel="noopener noreferrer" className="Navbaricon">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-tahir-sundhu/" target="_blank" rel="noopener noreferrer" className="Navbaricon">
                    <FaLinkedin />
                </a>
                <a href="mailto:tahirsundhu8956@gmail.com" className="Navbaricon">
                    <FaGoogle />
                </a>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FaBars />
            </div>
        </nav>
    );
};

export default Navbar;
