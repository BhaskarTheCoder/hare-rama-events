import { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [activeTab, setActiveTab] = useState('photos');

  // Placeholder media items
  const mediaItems = [
    { id: 1, type: 'image', src: '/assets/images/event1.jpg', isVideo: false },
    { id: 2, type: 'video', src: '/assets/images/banner4.jpg', isVideo: false },
    { id: 3, type: 'image', src: '/assets/images/event3.jpg', isVideo: false },
    { id: 4, type: 'video', src: '/assets/images/banner5.jpg', isVideo: false },
    { id: 5, type: 'video', src: '/assets/images/banner6.jpg', isVideo: false },
    { id: 6, type: 'video', src: '/assets/images/banner7.jpg', isVideo: false },
  ];

  return (
    <section className="section showcase-section">
      <div className="container">
        {/* Showcase Label */}
        <div className="showcase-label">SHOWCASE</div>
        
        {/* Large Heading */}
        <h2 className="showcase-title">
          See Our <span className="gradient-amazing">Amazing Work</span>
        </h2>

        {/* Tab Buttons */}
        <div className="showcase-tabs">
          <button 
            className={`tab-btn ${activeTab === 'photos' ? 'active' : ''}`}
            onClick={() => setActiveTab('photos')}
          >
            Photos & Videos
          </button>
          <button 
            className={`tab-btn instagram-btn ${activeTab === 'instagram' ? 'active' : ''}`}
            onClick={() => setActiveTab('instagram')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </button>
        </div>

        {/* Media Grid */}
        {activeTab === 'photos' && (
          <div className="media-grid">
            {mediaItems.map((item) => (
              <div key={item.id} className="media-item">
                <div className="media-wrapper">
                  <img src={item.src} alt={`Event ${item.id}`} className="media-image" />
                  {item.isVideo && (
                    <button className="play-btn" aria-label="Play video">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Instagram View */}
        {activeTab === 'instagram' && (
          <div className="instagram-view">
            <div className="instagram-card">
              <div className="instagram-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="instagram-title">Follow Us on Instagram</h3>
              <p className="instagram-description">
                Explore thousands of stunning events, celebrations, and unforgettable moments 
                we've created. Get inspired for your next celebration!
              </p>
              <div className="instagram-actions">
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="instagram-primary-btn">
                  Visit Our Instagram Profile
                </a>
                <button className="instagram-secondary-btn">See More Events</button>
              </div>
            </div>

            {/* Instagram Features */}
            <div className="instagram-features">
              <div className="feature-card">
                <div className="feature-icon instagram-color">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h4 className="feature-title">Daily Updates</h4>
                <p className="feature-description">New event photos and videos posted every day</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon cyan-color">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="9.5 7.5 5.5 7.5 5.5 17.5 9.5 17.5 14.5 22.5 14.5 2.5 9.5 7.5"></polygon>
                  </svg>
                </div>
                <h4 className="feature-title">Behind the Scenes</h4>
                <p className="feature-description">Get exclusive BTS content and setup tours</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon gold-color">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h4 className="feature-title">Client Spotlights</h4>
                <p className="feature-description">Featuring happy clients and their celebrations</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="showcase-cta">
          <a href="#contact" className="cta-button-showcase">
            Book Your Unforgettable Event Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
