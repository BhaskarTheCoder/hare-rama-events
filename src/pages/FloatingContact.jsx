import React from "react";
import { FaPhone, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "../styles/FloatingContact.css"; // Ensure you have the CSS file for styling

export default function FloatingContact() {
  const phoneNumber = "+19496076318";
  const phoneLink = `tel:${phoneNumber}`;

  return (
    <div className="floating-contact">
      {/* Phone Button */}
      <a href={phoneLink} className="contact-btn phone" aria-label="Call us now">
        <FaPhone />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/19496076318?text=Hello%2C%20I%20am%20interested%20in%20your%20party%20rentals!"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/hareramapartyrentals_dj_decor/?igsh=cXRxbXd1a3d6em5n#"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn instagram"
        aria-label="Follow on Instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
