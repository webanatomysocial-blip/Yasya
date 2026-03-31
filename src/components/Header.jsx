import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/logo.avif";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) onSearch(value);
  };

  const handleLogoClick = () => {
    setSearchValue("");
    if (onSearch) onSearch("");
  };

  return (
    <>
      <header className="header-container-new">
        <div className="header-left">
          <Link to="/" className="header-logo" onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Yasya"
              className="logo-img"
              width="168"
              height="100"
            />
          </Link>
        </div>

        <nav className="header-nav only-windows">
        
        </nav>

        <div className="header-right only-windows">
          
        </div>

        {/* Mobile Actions */}
        <div className="header-mobile-actions only-mobile">
          <button
            className="surprise-me-mobile"
            onClick={() => window.dispatchEvent(new Event("openSurpriseMe"))}
          >
            Surprise Me
          </button>
          <button className="hamburger-btn" aria-label="Toggle Menu">
            <FiMenu size={28} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
