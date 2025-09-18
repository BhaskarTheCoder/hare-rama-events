import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const phoneNumber = "+19496076318";
  const phoneLink = `tel:${phoneNumber}`;

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header>
      <nav className="navbar" ref={navRef}>
        <div className="nav-inner">
          <NavLink
            to="/"
            className="logo-link"
            onClick={handleLinkClick}
            aria-label="Hare Rama Party Rentals Home"
          >
            <div className="logo-container">
              <img
                src="/logo2.png"
                alt="Hare Rama Party Rentals Logo"
                className="logo-image"
              />
            </div>
          </NavLink>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

          <ul className={`nav-links ${open ? "open" : ""}`}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/packages"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
            <div className="callme">
              <a
                href={phoneLink}
                aria-label="Call us now"
                className="glowing-phone"
              >
               CALL US
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}
