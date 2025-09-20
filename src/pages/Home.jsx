import React, { useEffect, useState } from "react";
import "../styles/Home.css";

const changingImages = [
  "/images/banners/banner1.jpg",
  "/images/banners/banner2.jpg",
  "/images/banners/banner3.jpg",
  "/images/banners/banner4.jpg",
  "/images/banners/banner5.jpg",
  "/images/banners/banner6.jpg",
  "/images/banners/banner7.jpg",
];

const services = [
  {
    image: "/images/home/wedding.png",
    name: "Wedding Planning",
    delivery: "Full-service package",
  },
  {
    image: "/images/home/Corporate.png",
    name: "Corporate Events",
    delivery: "Customizable packages",
  },
  {
    image: "/images/home/Birthday.png",
    name: "Birthday Parties",
    delivery: "Local delivery available",
  },
  {
    image: "/images/home/Venue.png",
    name: "Venue Decoration",
    delivery: "On-site setup",
  },
  {
    image: "/images/home/Sweet16.png",
    name: "Sweet 16 Planning",
    delivery: "On-site setup",
  },
  {
    image: "/images/home/graduation.png",
    name: "Graduation Parties",
    delivery: "On-site setup",
  },
];

const inventory = [
  {
    name: "Chair",
    price: "$1.5 each",
    delivery: "Delivery/pickup separate",
  },
  {
    name: "Garden Chair",
    price: "$3.50 each",
    delivery: "Delivery/pickup separate",
  },
  {
    name: "Rectangular Table",
    price: "$7.5 each",
    delivery: "Delivery/pickup separate",
  },
  {
    name: "Round Table 60 inch",
    price: "$15 each",
    delivery: "Delivery/pickup separate",
  },
  {
    name: "Round Table 48 inch",
    price: "$10 each",
    delivery: "Delivery/pickup separate",
  },
  {
    name: "LED Focus Light",
    price: "$35 each",
    delivery: "Delivery/pickup separate",
  },
  {
    name: "Cocktail Table",
    price: "$15 each",
    delivery: "Delivery/pickup separate",
  },
  {
    name: "Tent",
    price: "$200 each",
    delivery: "Setup included, customizable size",
  },
  {
    name: "Stage Block 4x4",
    price: "$70 each",
    delivery: "Design based on custom stage size",
  },
  {
    name: "Heater",
    price: "$80 each",
    delivery: "Delivery/pickup separate",
  },
  {
    name: "Cooler",
    price: "$85 each",
    delivery: "Delivery/pickup separate",
  },
  {
    name: "Fans",
    price: "$40 each",
    delivery: "Delivery/pickup separate",
  },
  {
    name: "DJ",
    price: "$200/hr",
    delivery: "Includes equipment",
  },
  {
    name: "Dance Floor 10x10",
    price: "$1200",
    delivery: "Setup included",
  },
  {
    name: "Dance Floor 16x16",
    price: "$1500",
    delivery: "Setup included",
  },
  {
    name: "Dance Floor 20x20",
    price: "$1800",
    delivery: "Setup included",
  },
].map(item => ({
  ...item,
  image: `/images/inventory/${item.name.replace(/\s+/g, "_")}.png` // Replace spaces with underscores
}));


export default function Home() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartIndex((prev) => (prev + 4) % changingImages.length);
    }, 1500); // all images change every 1.5s
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    changingImages[currentStartIndex],
    changingImages[(currentStartIndex + 1) % changingImages.length],
    changingImages[(currentStartIndex + 2) % changingImages.length],
    changingImages[(currentStartIndex + 3) % changingImages.length],
  ];

  return (
    <div className="home-container">
      {/* 1. Welcome Signal */}
      <section className="welcome-section">
        <h1>Your One-Stop Shop for Unforgettable Events</h1>
        <p>
          From dream weddings to corporate galas, we bring your vision to life.
        </p>
        <button
          className="cta-button"
          onClick={() => (window.location.href = "/contact")}
        >
          Request a Quote
        </button>

        {/* Overlayed History Section */}
        <div className="history-section">
          <div className="history-item">
            <span className="history-number">5000+</span>
            <span className="history-label">Events Completed</span>
          </div>
          <div className="history-item">
            <span className="history-number">2017</span>
            <span className="history-label">Since</span>
          </div>
          <div className="history-item">
            <span className="history-number">4.9/5</span>
            <span className="history-label">Google Reviews</span>
          </div>
        </div>
      </section>

      <section className="pic-history-container">
        {/* Fixed Image */}
        <div className="fixed-image-container">
          <img src="/images/home/vibe.png" alt="Static event vibe" />
        </div>
        <div className="changing-images-grid">
          {visibleImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Event highlight ${index + 1}`}
              className="active"
            />
          ))}
        </div>
      </section>

      {/* 4. Services*/}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.name} />
              <div className="service-info">
                <h3>{service.name}</h3>
                <p className="service-price">{service.price}</p>
                <p className="service-delivery">{service.delivery}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="inventory-section">
  <h2>Party Rental Inventory</h2>
  <div className="inventory-services">
    <div className="service-box">Delivery & Pickup</div>
    <div className="service-box">Setup & Installation</div>
    <div className="service-box">Daily Rental Rates</div>
  </div>
  <div className="inventory-grid">
    {inventory.map((item, index) => (
      <div key={index} className="inventory-card">
        <img src={item.image} alt={item.name} />
        <div className="inventory-info">
          <h3>{item.name}</h3>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* 5. Contact Us Button */}
      <section className="contact-section">
        <h2>Ready to Plan Your Next Event?</h2>
        <button
          className="cta-button"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
      </section>

      {/* 6. Footer */}
      <footer className="footer">
        <p>&copy; 2024 Hare Rama Events. All Rights Reserved.</p>
      </footer>
    </div>
  );
}













