import { useState } from 'react';
import './About.css';

function About() {
  const [isMuted, setIsMuted] = useState(true);

  const stats = [
    {
      value: '6,000+',
      label: 'Happy Clients',
      accentColor: 'var(--color-primary)',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      value: '4.9/5',
      label: 'Client Rating',
      accentColor: 'var(--color-accent-cyan)',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
    {
      value: '8+',
      label: 'Years Experience',
      accentColor: 'var(--color-accent)',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    },
    {
      value: '2000+',
      label: 'Events/Year',
      accentColor: 'var(--color-accent-orange)',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
  ];

  const features = [
    {
      title: 'Innovative Solutions',
      desc: 'State-of-the-art technology and creative excellence',
      accentColor: 'var(--color-primary)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Dedicated Team',
      desc: 'Passionate professionals committed to perfection',
      accentColor: 'var(--color-accent-cyan)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Premium Quality',
      desc: 'Exceptional service on every single event',
      accentColor: 'var(--color-accent)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    },
  ];

  return (
    <section id="company" className="section about-section">
      {/* Background Glow */}
      <div className="about-glow-container">
        <div className="about-glow about-glow-pink" />
        <div className="about-glow about-glow-cyan" />
      </div>

      <div className="container about-container">
        {/* Top Section */}
        <div className="about-top-grid">
          {/* Left Content */}
          <div className="about-content-left">
            <p className="section-label">Who We Are</p>

            <h2 className="section-title about-title">
              Creating{' '}
              <span className="gradient-text">
                Unforgettable
              </span>{' '}
              Event Experiences
            </h2>

            <p className="section-subtitle">
              Hare Rama Events is a full-scale event production company delivering
              extraordinary weddings, concerts, corporate events, and celebrations.
              With cutting-edge technology, premium sound & lighting, and a passionate
              creative team, we turn ideas into breathtaking experiences.
            </p>

            <p className="card-description" style={{marginBottom: 'var(--space-lg)'}}>
              From intimate gatherings to large-scale productions, our mission is to
              create moments that leave lasting impressions — visually, emotionally,
              and musically.
            </p>

            <a
              href="#contact"
              className="btn btn-primary about-cta-btn"
            >
              Start Planning Your Event
            </a>
          </div>

          {/* Right Section */}
          <div className="right_section">
            <div className="about-video-wrapper">
              <div className="video-container">
                <video
                  className="about-video"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                >
                  <source src="/assets/videos/about-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <button
                  className="mute-toggle"
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>

                {/* Play Badge */}
                <div className="video-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch Our Event Highlights</span>
                </div>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="about-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card" style={{ '--accent-color': stat.accentColor }}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
        {/* Feature Cards - Row 2, below video */}
            <div className="about-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card" style={{ '--accent-color': feature.accentColor }}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>




      </div>
    </section>
  );
}

export default About;
