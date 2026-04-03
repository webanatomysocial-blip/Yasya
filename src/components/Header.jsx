import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/logo.avif";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowMobileServices(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // initialize
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }
  }, [isHomePage]);

  return (
    <header className={`header-container-new ${scrolled ? "scrolled" : ""}`}>
      {/* Mobile Hamburger (Left) */}
      <div className="header-mobile-left only-mobile">
        <button className="hamburger-btn" aria-label="Toggle Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Logo */}
      <div className="header-left">
        <Link to="/" className="header-logo">
          <img
            src={logo}
            alt="Yasya"
            className="logo-img"
            width="168"
            height="100"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="header-nav only-windows">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        
        <div 
          className="nav-dropdown-container"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <div className="nav-link dropdown-trigger">
            Services <IoIosArrowDown className="dropdown-icon" />
          </div>
          
          {showServices && (
            <div className="services-dropdown">
              <div className="dropdown-column">
                <Link to="/services/product-engineering" className="dropdown-item">Product Engineering</Link>
                <Link to="/services/quality-engineering" className="dropdown-item">Quality Engineering</Link>
                <Link to="/services/erp-systems" className="dropdown-item">ERP Systems</Link>
                <Link to="/services/education-hub" className="dropdown-item">Education Hub</Link>
              </div>
              <div className="dropdown-column">
                <Link to="/services/s4-hana" className="dropdown-item">S/4 Hana Implementation</Link>
                <Link to="/services/application-management" className="dropdown-item">Application Management</Link>
                <Link to="/services/tech-factory" className="dropdown-item">Tech Factory</Link>
                <Link to="/services/solution-cio" className="dropdown-item">Solution CIO & Bluefield</Link>
                <Link to="/services/talent-on-demand" className="dropdown-item">Talent on Demand</Link>
                <Link to="/services/integration-btp" className="dropdown-item">Integration & BTP</Link>
                <Link to="/services/ams-ai" className="dropdown-item">AMS AI</Link>
              </div>
            </div>
          )}
        </div>

        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/careers" className="nav-link">Careers</Link>
      </nav>

      {/* Desktop Action Right */}
      <div className="header-right only-windows">
        <Link to="/contact" className="schedule-btn">
          Schedule Strategy Call <FaArrowRight size={14} />
        </Link>
      </div>

      {/* Mobile Action Right */}
      <div className="header-mobile-right only-mobile">
        <Link to="/contact" className="schedule-btn">
          Schedule Strategy Call <FaArrowRight size={12} />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay only-mobile ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-container">
          <Link to="/" className="mobile-nav-link">Home</Link>
          <Link to="/about" className="mobile-nav-link">About Us</Link>
          
          <div className="mobile-services-section">
            <div 
              className="mobile-services-header"
              onClick={() => setShowMobileServices(!showMobileServices)}
            >
              Services <IoIosArrowDown className={`dropdown-icon ${showMobileServices ? "open" : ""}`} />
            </div>
            
            {showMobileServices && (
              <div className="mobile-services-list">
                <Link to="/services/product-engineering" className="mobile-service-item">Product Engineering</Link>
                <Link to="/services/quality-engineering" className="mobile-service-item">Quality Engineering</Link>
                <Link to="/services/erp-systems" className="mobile-service-item">ERP Systems</Link>
                <Link to="/services/education-hub" className="mobile-service-item">Education Hub</Link>
                <Link to="/services/s4-hana" className="mobile-service-item">S/4 Hana Implementation</Link>
                <Link to="/services/application-management" className="mobile-service-item">Application Management</Link>
                <Link to="/services/tech-factory" className="mobile-service-item">Tech Factory</Link>
                <Link to="/services/solution-cio" className="mobile-service-item">Solution CIO & Bluefield</Link>
                <Link to="/services/talent-on-demand" className="mobile-service-item">Talent on Demand</Link>
                <Link to="/services/integration-btp" className="mobile-service-item">Integration & BTP</Link>
                <Link to="/services/ams-ai" className="mobile-service-item">AMS AI</Link>
              </div>
            )}
          </div>

          <Link to="/blog" className="mobile-nav-link">Blog</Link>
          <Link to="/careers" className="mobile-nav-link">Careers</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
