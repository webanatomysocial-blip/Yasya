import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import logo from "../assets/footer.avif";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

// Use an alternative SVG for X if FaXTwitter isn't available in older react-icons
const XIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    fill="currentColor" 
    viewBox="0 0 16 16"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Left Column: Logo & Desc */}
        <div className="footer-col-left">
          <img
            src={logo}
            alt="YASYA Technologies"
            className="footer-logo"
            width="168"
            height="55"
          />
          <p className="footer-desc">
            The Foundation Behind Enterprise<br />
            Stability & Intelligent Transformation.<br />
            Leadership-driven SAP digital<br />
            transformation for global enterprises.
          </p>
          
          <h4 className="footer-locations-title">Locations :</h4>
          <p className="footer-location">YASYA Technologies Pte Ltd \u2013 Singapore</p>
          <p className="footer-location">YASYA Infotech LLP \u2013 Hyderabad, India</p>

          <div className="footer-socials">
            <a href="https://facebook.com" aria-label="Facebook" className="social-icon">
              <FaFacebookF size={18} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-icon">
              <FaInstagram size={18} />
            </a>
            <a href="https://twitter.com" aria-label="X (Twitter)" className="social-icon">
              <XIcon />
            </a>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="footer-col-links">
          <h4 className="footer-heading">Quick Links</h4>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/careers" className="footer-link">Careers</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </div>

        {/* Right Column: Contacts */}
        <div className="footer-col-contact">
          <h4 className="footer-heading">Contacts</h4>
          <a href="mailto:operations@yasyatech.com" className="footer-link">
            operations@yasyatech.com
          </a>
          <a href="tel:+918297190696" className="footer-link">
            +91 8297190696
          </a>
          <a href="tel:+919959682696" className="footer-link">
            +91 9959682696
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom-bar">
        <p>
          &copy;2026 YASYA Technologies, All Rights Reserved. Designed by{" "}
          <a href="https://webanatomy.in" target="_blank" className="highlight-red">Web Anatomy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
