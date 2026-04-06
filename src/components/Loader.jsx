import React from "react";
import logo from "../assets/logo.avif";
import "../css/loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay" role="status" aria-label="Loading content">
      <div className="loader-container">
        {/* Brand logo */}
        <img 
          src={logo} 
          alt="Yasya Logo" 
          className="loader-logo"
        />
        {/* Progress indicator */}
        <div className="loader-progress-container">
          <div className="loader-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
