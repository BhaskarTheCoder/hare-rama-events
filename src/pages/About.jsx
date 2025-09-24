import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";

export default function About() {
  const galleryImages = [
    "/images/services/service1.png",
    "/images/services/service2.png",
    "/images/services/service3.png",
    "/images/services/service4.png",
    "/images/services/service5.png",
    "/images/services/service6.png",
    "/images/services/service7.png",
    "/images/services/service8.png",
    "/images/services/service9.png",
    "/images/services/service10.png",
    "/images/services/service11.png",
    "/images/services/service12.png",
    "/images/services/service13.png",
    "/images/services/service14.png",
  ];

  return (
    <main className="about">
      <section className="about__hero">
        <div className="about__hero-overlay" />
        <div className="about__hero-content">
          <h1 className="about__title">About Hare Rama Events</h1>
          <p className="about__subtitle">
            Creating spectacular celebrations across the Dallas–Fort Worth Metroplex
          </p>
          <div className="about__cta-group" role="group" aria-label="primary actions">
            <Link className="btn btn--primary" to="/contact">Get a Quote</Link>
            <Link className="btn btn--ghost" to="/services">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="about__intro container">
        <p>
          Welcome to <strong>Hare Rama Events</strong>, your premier partner for creating truly spectacular
          celebrations in the Dallas–Fort Worth Metroplex. With <strong>8 years of experience</strong>, we have proudly
          orchestrated <strong>over 10,000 successful events</strong>, transforming visions into unforgettable realities.
          Our dedication to excellence and passion for perfection have made us a trusted name within the vibrant Indian
          community of Dallas, a community of over <strong>7,000 families</strong> who count on us for their most important occasions.
        </p>
        <p>
          We are more than just event organizers; we are creators of atmosphere and architects of joy. Our comprehensive
          services are designed to make your event planning seamless and stress-free.
        </p>
      </section>

      <section className="about__stats container" aria-label="impact statistics">
        <div className="stat">
          <div className="stat__value">10,000+</div>
          <div className="stat__label">Events Orchestrated</div>
        </div>
        <div className="stat">
          <div className="stat__value">8</div>
          <div className="stat__label">Years of Experience</div>
        </div>
        <div className="stat">
          <div className="stat__value">7,000+</div>
          <div className="stat__label">Families Served</div>
        </div>
      </section>

      <section className="about__grid container">
        <div className="about__card">
          <h3>Expert Event Organization</h3>
          <p>
            From concept to execution, we meticulously handle every detail—whether it's a grand wedding, a milestone
            birthday, a corporate gathering, or a cultural festival.
          </p>
        </div>
        <div className="about__card">
          <h3>Specialized DJ Services</h3>
          <p>
            Our talented DJs are masters at setting the perfect mood and keeping the energy high, ensuring your guests
            are on the dance floor all night long.
          </p>
        </div>
        <div className="about__card">
          <h3>Premium Party Rental Supplies</h3>
          <p>
            Choose from a wide range of high‑quality rentals—from elegant furniture and lighting to essential event
            infrastructure.
          </p>
        </div>
        <div className="about__card">
          <h3>Exquisite Decoration Services</h3>
          <p>
            Our true passion lies in turning spaces into breathtaking settings. We craft custom themes and designs that
            reflect your unique style and vision.
          </p>
        </div>
      </section>

      <section className="about__gallery container" aria-label="event highlights gallery">
        <h2 className="about__section-title">Event Highlights</h2>
        <div className="gallery">
          {galleryImages.map((src, idx) => (
            <figure className="gallery__item" key={src}>
              <img loading="lazy" src={src} alt={`Event highlight ${idx + 1}`} />
            </figure>
          ))}
        </div>
      </section>

      <section className="about__closing container">
        <p>
          At Hare Rama Events, we believe every celebration should be a masterpiece. We are honored to be the choice for
          so many families, and we look forward to bringing our passion, expertise, and a personal touch to your next event.
        </p>
        <div className="about__cta-group about__cta-group--end" role="group" aria-label="secondary actions">
          <Link className="btn btn--primary" to="/contact">Plan Your Event</Link>
          <Link className="btn btn--ghost" to="/packages">View Packages</Link>
        </div>
      </section>
    </main>
  );
}
