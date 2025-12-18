import { useEffect, useState } from 'react';
import './ServiceModal.css';

function ServiceModal({ service, isOpen, onClose }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset video index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentVideoIndex(0);
    }
  }, [isOpen]);

  if (!isOpen || !service) return null;

  // Check service type
  const isDecorations = service.id === 'custom-decorations';
  const isEventPlanning = service.id === 'event-planning';
  const hasSingleVideo = service.videoUrl;
  const hasMultipleVideos = service.videos && service.videos.length > 0;
  const hasFeatures = service.features && service.features.length > 0;
  const hasServices = service.services && service.services.length > 0;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Content */}
        <div className="modal-content">
          <h2 className="modal-title">{service.name}</h2>
          <p className="modal-description">{service.shortDescription}</p>

          {/* Single Video Player (Dance Floor, Stage) */}
          {hasSingleVideo && (
            <div className="video-player-section">
              <div className="video-player">
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="service-video"
                >
                  <source src={service.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Features List */}
              {hasFeatures && (
                <div className="features-list">
                  <h3>Features:</h3>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Multiple Videos (Tents, Special Effects) */}
          {hasMultipleVideos && (
            <div className="multi-video-section">
              {/* Video Tabs */}
              <div className="video-tabs">
                {service.videos.map((video, index) => (
                  <button
                    key={index}
                    className={`video-tab ${currentVideoIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentVideoIndex(index)}
                  >
                    {video.title}
                  </button>
                ))}
              </div>

              {/* Current Video Player */}
              <div className="video-player">
                <video
                  key={currentVideoIndex}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="service-video"
                >
                  <source src={service.videos[currentVideoIndex].url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Description */}
              <p className="video-description">
                {service.videos[currentVideoIndex].description}
              </p>
            </div>
          )}

          {/* Event Planning Services List */}
          {isEventPlanning && hasServices && (
            <div className="services-list-section">
              <h3 className="services-list-title">Our Complete Services Include:</h3>
              <div className="services-grid-list">
                {service.services.map((item, index) => (
                  <div key={index} className="service-list-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Equipment Grid (DJ, Party Rentals, Decorations) */}
          {service.equipment && service.equipment.length > 0 && (
            <div className="equipment-section">
              <h3 className="equipment-title">
                {isDecorations ? 'Event Types' : 'Equipment'}
              </h3>
              <div className={`equipment-grid ${isDecorations ? 'decorations-grid' : ''}`}>
                {service.equipment.map((item, index) => (
                  <div key={index} className="equipment-item">
                    <div className="equipment-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="equipment-info">
                      <h4 className="equipment-name">{item.name}</h4>
                      {item.description && <p className="equipment-description">{item.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* General description for decorations */}
              {isDecorations && service.generalDescription && (
                <p className="general-description">{service.generalDescription}</p>
              )}
            </div>
          )}

          {/* CTA Button */}
          <div className="modal-cta">
            <a href="#contact" className="cta-button" onClick={onClose}>
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
