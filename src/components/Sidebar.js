import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaFileAlt, FaLightbulb, FaPalette } from 'react-icons/fa';
import { FaTwitter, FaTiktok, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* Profile Image */}
        <div className="profile-image-container">
          <img 
            src="/profile-image.jpg" 
            alt="Profile" 
            className="profile-image"
          />
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <FaHome /> <span>Home</span>
          </NavLink>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <FaFileAlt /> <span>Resume</span>
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <FaLightbulb /> <span>Projects</span>
          </NavLink>
          <NavLink 
            to="/art" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <FaPalette /> <span>Art</span>
          </NavLink>
        </nav>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 