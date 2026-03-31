import React from "react";
import { Link } from "react-router-dom";
import "../css/blog-post.css"; // Using the styles that match this footer structure
import whiteLogo from "../assets/logo.avif";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left: Logo + Social Icons */}
        <div className="footer-left">
          <div className="logo-section">
            <img
              src={whiteLogo}
              alt="Success Wikis Logo"
              className="footer-logo-img"
              width="168"
              height="55"
            />
          </div>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/successwikis/about/"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedinIn size={24} color="white" />
            </a>
            <a
              href="https://www.instagram.com/successwikis/"
              aria-label="Instagram"
              className="social-link"
            >
              <FaInstagram size={24} color="white" />
            </a>
          </div>
        </div>

        {/* Right: Carbon Badge */}
        <div className="footer-right">
          <img
            src={whiteLogo}
            alt="Carbon-Neutral Website"
            width="250"
            height="auto"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Bottom Links */}
      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/blogs" className="footer-link">
            Blogs
          </Link>
        </div>
        <p className="copyright">
          © {currentYear} Success Wikis All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
