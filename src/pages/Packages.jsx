import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Packages.css";

const allInclusiveItems = [
  { icon: "🏛️", name: "Event Venue" },
  { icon: "🎨", name: "Decorations" },
  { icon: "🎭", name: "Staging" },
  { icon: "🎉", name: "Party Rentals" },
  { icon: "🔊", name: "Audio Visual" },
  { icon: "🍽️", name: "Food Catering" },
  { icon: "👨‍🍳", name: "Live Food Catering" },
  { icon: "📸", name: "Photography" },
  { icon: "🎥", name: "Videography" },
  { icon: "🚁", name: "Drone" },
  { icon: "💄", name: "Makeup Artist" },
  { icon: "🍷", name: "Bar Service" },
  { icon: "🍸", name: "Bartenders" },
  { icon: "👔", name: "Wait Staff" },
  { icon: "🧹", name: "Clean Staff" },
  { icon: "🐄", name: "Gomatha Pooja" },
  { icon: "🎤", name: "Live Performances" },
  { icon: "🎧", name: "DJ" },
  { icon: "🎁", name: "Return Gifts" },
  { icon: "🐴", name: "Baraat Horse" },
  { icon: "🚗", name: "Valet Car Parking" },
  { icon: "🛡️", name: "Security Services" }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemFade = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  },
};

export default function Packages() {
  const navigate = useNavigate();
  const phoneNumber = "+1 (949) 607-6318";
  const email = "hareramaevents@gmail.com";

  return (
    <div className="packages-page-full">
      {/* Hero Section */}
      <motion.section 
        className="packages-hero-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="packages-hero-overlay" />
        <motion.div 
          className="packages-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>EVENT PACKAGES</h1>
          <p>Tailored solutions for every celebration</p>
          <div className="hero-badge">
            <span>✨ Flexible & Comprehensive</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Packages Content */}
      <section className="packages-content-full">
        <div className="packages-grid">
          
          {/* All-Inclusive Package */}
          <motion.div 
            className="package-card-full featured"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="package-badge">MOST POPULAR</div>
            <img 
              src="/images/services/service2.png" 
              alt="All-Inclusive Event Package" 
              className="package-image"
              loading="lazy"
            />
            <div className="package-header">
              <h2>All-Inclusive Event Package</h2>
              <p className="package-description">
                With our all-inclusive event package, you're not just planning an event; 
                you're embarking on an unforgettable experience. From concept to execution, 
                we take care of it all, so you can savor every moment. Let Hare Rama Events 
                transform your vision into reality and create an event that exceeds your expectations.
              </p>
            </div>

            <motion.div 
              className="package-items"
              variants={staggerContainer}
            >
              {allInclusiveItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="package-item"
                  variants={itemFade}
                  whileHover={{ x: 10 }}
                >
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-name">{item.name}</span>
                  <span className="item-check">✓</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="package-footer">
              <button 
                className="package-cta-btn primary"
                onClick={() => navigate("/contact")}
              >
                <span>Get This Package</span>
              </button>
            </div>
          </motion.div>

          {/* Custom Package */}
          <motion.div 
            className="package-card-full custom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <img 
              src="/images/services/service13.png" 
              alt="Custom Event Package" 
              className="package-image"
              loading="lazy"
            />
            <div className="package-header">
              <h2>Custom Event Package</h2>
              <p className="package-description">
                Because every event is different, we customize the package as per the 
                client's needs. The customized package gives you more flexibility in 
                terms of what's included in the package and it allows you to create a 
                unique event that reflects your personal style and interest.
              </p>
            </div>

            <div className="custom-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <h3>Fully Customizable</h3>
                <p>Choose exactly what you need for your event</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <h3>Budget Friendly</h3>
                <p>Pay only for the services you select</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <h3>Flexible Options</h3>
                <p>Mix and match services to fit your vision</p>
              </div>
            </div>

            <div className="contact-info-box">
              <h3>Get Your Custom Quote</h3>
              <div className="contact-methods">
                <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="contact-method">
                  <span className="contact-icon">📞</span>
                  <div className="contact-details">
                    <span className="contact-label">Call Us</span>
                    <span className="contact-value">{phoneNumber}</span>
                  </div>
                </a>
                <a href={`mailto:${email}`} className="contact-method">
                  <span className="contact-icon">✉️</span>
                  <div className="contact-details">
                    <span className="contact-label">Email Us</span>
                    <span className="contact-value">{email}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="package-footer">
              <button 
                className="package-cta-btn secondary"
                onClick={() => navigate("/contact")}
              >
                <span>Request Custom Quote</span>
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Comparison Section */}
      <motion.section 
        className="comparison-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Why Choose Our Packages?</h2>
        <div className="comparison-grid">
          <div className="comparison-card">
            <div className="comparison-icon">🎯</div>
            <h3>Expert Planning</h3>
            <p>Years of experience crafting perfect events</p>
          </div>
          <div className="comparison-card">
            <div className="comparison-icon">💎</div>
            <h3>Quality Assured</h3>
            <p>Premium services and attention to detail</p>
          </div>
          <div className="comparison-card">
            <div className="comparison-icon">🤝</div>
            <h3>Dedicated Support</h3>
            <p>Personal coordinator throughout your event</p>
          </div>
          <div className="comparison-card">
            <div className="comparison-icon">✨</div>
            <h3>Stress-Free</h3>
            <p>We handle everything from start to finish</p>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="packages-final-cta"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Ready to Start Planning?</h2>
        <p>Let's create something extraordinary together</p>
        <div className="cta-buttons">
          <button 
            className="cta-primary"
            onClick={() => navigate("/contact")}
          >
            Book Now
          </button>
          <button 
            className="cta-secondary"
            onClick={() => navigate("/services")}
          >
            View Services
          </button>
        </div>
      </motion.section>
    </div>
  );
}
