import React, { useEffect, useState, useRef } from "react";
import "../styles/Home.css";
import "../styles/HeroSection.css";
import "../styles/HomeResponsive.css";


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
    price: "$40 each",
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

// Mock gallery photos data
const galleryPhotos = [
  {
    id: 1,
    image_url: "/images/banners/banner1.jpg",
    uploaded_at: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    caption: "Beautiful wedding ceremony setup"
  },
  {
    id: 2,
    image_url: "/images/banners/banner2.jpg",
    uploaded_at: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    caption: "Corporate event decoration"
  },
  {
    id: 3,
    image_url: "/images/banners/banner3.jpg",
    uploaded_at: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    caption: "Birthday party celebration"
  },
  {
    id: 4,
    image_url: "/images/banners/banner4.jpg",
    uploaded_at: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
    caption: "Sweet 16 party setup"
  },
  {
    id: 5,
    image_url: "/images/banners/banner5.jpg",
    uploaded_at: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago
    caption: "Graduation party venue"
  },
  {
    id: 6,
    image_url: "/images/banners/banner6.jpg",
    uploaded_at: new Date(Date.now() - 30 * 60 * 60 * 1000), // 30 hours ago
    caption: "Anniversary celebration"
  },
  {
    id: 7,
    image_url: "/images/banners/banner7.jpg",
    uploaded_at: new Date(Date.now() - 36 * 60 * 60 * 1000), // 36 hours ago
    caption: "Holiday party decoration"
  },
  {
    id: 8,
    image_url: "/images/home/wedding.png",
    uploaded_at: new Date(Date.now() - 48 * 60 * 60 * 1000), // 48 hours ago
    caption: "Elegant wedding reception"
  },
  {
    id: 9,
    image_url: "/images/home/Corporate.png",
    uploaded_at: new Date(Date.now() - 60 * 60 * 60 * 1000), // 60 hours ago
    caption: "Professional corporate event"
  },
  {
    id: 10,
    image_url: "/images/home/Birthday.png",
    uploaded_at: new Date(Date.now() - 72 * 60 * 60 * 1000), // 72 hours ago
    caption: "Fun birthday celebration"
  },
  {
    id: 11,
    image_url: "/images/home/Venue.png",
    uploaded_at: new Date(Date.now() - 84 * 60 * 60 * 1000), // 84 hours ago
    caption: "Stunning venue transformation"
  },
  {
    id: 12,
    image_url: "/images/home/Sweet16.png",
    uploaded_at: new Date(Date.now() - 96 * 60 * 60 * 1000), // 96 hours ago
    caption: "Magical Sweet 16 party"
  }
].sort((a, b) => new Date(b.uploaded_at) - new Date(a.uploaded_at)); // Sort by newest first

// Slider photos data (subset of gallery photos for slider)
const sliderPhotos = [
  {
    id: 1,
    image_url: "/images/banners/banner1.jpg",
    uploaded_at: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    caption: "Beautiful wedding ceremony setup"
  },
  {
    id: 2,
    image_url: "/images/banners/banner2.jpg",
    uploaded_at: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    caption: "Corporate event decoration"
  },
  {
    id: 3,
    image_url: "/images/banners/banner3.jpg",
    uploaded_at: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    caption: "Birthday party celebration"
  },
  {
    id: 4,
    image_url: "/images/banners/banner4.jpg",
    uploaded_at: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
    caption: "Sweet 16 party setup"
  },
  {
    id: 5,
    image_url: "/images/banners/banner5.jpg",
    uploaded_at: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago
    caption: "Graduation party venue"
  },
  {
    id: 6,
    image_url: "/images/banners/banner6.jpg",
    uploaded_at: new Date(Date.now() - 30 * 60 * 60 * 1000), // 30 hours ago
    caption: "Anniversary celebration"
  },
  {
    id: 7,
    image_url: "/images/home/vibe.png",
    uploaded_at: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    caption: "Event vibe and atmosphere"
  }
].sort((a, b) => new Date(b.uploaded_at) - new Date(a.uploaded_at));


export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Typewriter effect states
  const [displayedText, setDisplayedText] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const welcomeText = "Welcome to Hare Rama Events";
  const subtitleText = "Creating unforgettable moments for your special occasions";

  // Gallery states
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedInventoryItem, setSelectedInventoryItem] = useState(null);

  // Slider states
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const [visiblePhotosCount, setVisiblePhotosCount] = useState(2); // Default mobile


  // Typewriter effect for main title
  useEffect(() => {
    if (!showWelcome) return;

    const typewriterInterval = setInterval(() => {
      if (currentIndex < welcomeText.length) {
        setDisplayedText(welcomeText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // After all letters are displayed, wait 3 seconds then disappear all at once
        setTimeout(() => {
          setShowWelcome(false);
        },2000); // Wait 3 seconds before disappearing all at once
        clearInterval(typewriterInterval);
      }
    }, 50); // Type each letter every 150ms (slower)

    return () => clearInterval(typewriterInterval);
  }, [currentIndex, showWelcome, welcomeText]);

  // Typewriter effect for subtitle
  useEffect(() => {
    if (!showSubtitle) return;

    const subtitleInterval = setInterval(() => {
      if (currentSubtitleIndex < subtitleText.length) {
        setDisplayedSubtitle(subtitleText.slice(0, currentSubtitleIndex + 1));
        setCurrentSubtitleIndex(currentSubtitleIndex + 1);
      } else {
        // After all letters are displayed, wait 3 seconds then disappear all at once
        setTimeout(() => {
          setShowSubtitle(false);
        },1000); // Wait 3 seconds before disappearing all at once
        clearInterval(subtitleInterval);
      }
    }, 30); // Type each letter every 120ms (slightly faster than title)

    return () => clearInterval(subtitleInterval);
  }, [currentSubtitleIndex, showSubtitle, subtitleText]);

  // Ensure video plays
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();

      const playVideo = async () => {
        try {
          await video.play();
          console.log("Video playing successfully");
        } catch (error) {
          console.log("Video autoplay prevented:", error);
          video.muted = true;
          setIsMuted(true);
          try {
            await video.play();
            console.log("Video playing muted");
          } catch (err) {
            console.error("Video failed to play:", err);
          }
        }
      };

      setTimeout(playVideo, 100);
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Gallery functions
  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const closeInventoryLightbox = () => {
    setSelectedInventoryItem(null);
  };

  const formatDate = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return "Just now";
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const isNewPhoto = (date) => {
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);
    return diffInHours < 24; // New if uploaded within last 24 hours
  };

  // Slider auto-advance effect
  useEffect(() => {
    if (!isSliderPaused) {
      const interval = setInterval(() => {
        setCurrentSliderIndex((prevIndex) => (prevIndex + 1) % sliderPhotos.length);
      }, 2000); // Change every 2 seconds
      return () => clearInterval(interval);
    }
  }, [isSliderPaused, sliderPhotos.length]);

  // Responsive handling for visible photos count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisiblePhotosCount(3); // Desktop: 3 photos
      } else if (window.innerWidth >= 768) {
        setVisiblePhotosCount(3); // Tablet: 3 photos
      } else {
        setVisiblePhotosCount(2); // Mobile: 2 photos
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="home-container home-page">
      {/* 1. Horizontal Video Section */}
      <section className="horizontal-video-section">
        <div className="video-container">
          <video
            ref={videoRef}
            className="horizontal-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/home/dj.png"
            onError={(e) => {
              console.error("Video error:", e);
            }}
          >
            <source src="/images/home/DJRAM.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay */}
          <div className="video-overlay">
            <div className="video-content">
              {showWelcome && (
                <h2 className="typewriter-text">
                  {displayedText}
                  <span className="cursor">|</span>
                </h2>
              )}
              {showSubtitle && (
                <p className="typewriter-subtitle">
                  {displayedSubtitle}
                  <span className="cursor">|</span>
                </p>
              )}
            </div>
          </div>

          {/* Sound Toggle Button */}
          <button
            className={`video-sound-toggle ${!isMuted ? 'unmuted' : ''}`}
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* 2. Animated History Banner */}
      <section className="history-banner-section">
        <div className="section-container">
          <div className="history-banner">
            <div className="banner-content">
              <div className="banner-item">🎯 10,000+ Celebrations</div>
              <div className="banner-item">🏆 8-Years of Premium Event Services</div>
              <div className="banner-item">🌟 5-Star Customer Reviews</div>
              <div className="banner-item">🎪 Wedding & Birthday Experts</div>
              <div className="banner-item">💡 Creative Theme Decorations</div>
              <div className="banner-item">🎧 Sound & Lighting Setup</div>
              <div className="banner-item">🍽️ Catering & Buffet Solutions</div>
              <div className="banner-item">📸 Photo Booth & Stage Design</div>
              <div className="banner-item">💐 Flower & Balloon Artistry</div>
              <div className="banner-item">💼 Professional Event Planning</div>
              <div className="banner-item">🚚 On-Time Delivery & Setup</div>
              <div className="banner-item">❤️ Trusted by Families & Corporates</div>
              <div className="banner-item">🎊 Making Every Occasion Special</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Latest Photos Slider */}
      <section className="latest-photos-slider-section">
        <div className="section-container">
          <div className="slider-header">
            <h2>Latest Photos</h2>
            <p>Capturing memories from our recent celebrations</p>
          </div>

          <div 
            className="photos-slider-container"
            onMouseEnter={() => setIsSliderPaused(true)}
            onMouseLeave={() => setIsSliderPaused(false)}
            onTouchStart={() => setIsSliderPaused(true)}
            onTouchEnd={() => setIsSliderPaused(false)}
          >
            <div className="photos-slider-track" style={{ transform: `translateX(-${currentSliderIndex * (100 / visiblePhotosCount)}%)` }}>
              {sliderPhotos.map((photo, index) => (
                <div key={photo.id} className="slider-photo-card" onClick={() => openLightbox(photo)}>
                  <div className="slider-photo-container">
                    <img 
                      src={photo.image_url} 
                      alt={photo.caption || `Event photo ${index + 1}`}
                      loading="lazy"
                      className="slider-photo-image"
                    />
                    <div className="slider-photo-overlay">
                      <div className="slider-photo-info">
                        <span className="slider-photo-date">{formatDate(photo.uploaded_at)}</span>
                        {photo.caption && <span className="slider-photo-caption">{photo.caption}</span>}
                      </div>
                      {isNewPhoto(photo.uploaded_at) && (
                        <div className="slider-new-badge">New</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Dots */}
            <div className="slider-progress-dots">
              {sliderPhotos.map((_, index) => (
                <button
                  key={index}
                  className={`progress-dot ${index === currentSliderIndex ? 'active' : ''}`}
                  onClick={() => setCurrentSliderIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="slider-action-buttons">
            <button 
              className="btn-primary-slider"
              onClick={() => (window.location.href = "/contact")}
            >
              Start Planning
            </button>
            <button 
              className="btn-secondary-slider"
              onClick={() => (window.location.href = "/services")}
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <img src={selectedPhoto.image_url} alt={selectedPhoto.caption} className="lightbox-image" />
            <div className="lightbox-info">
              <span className="lightbox-date">{formatDate(selectedPhoto.uploaded_at)}</span>
              {selectedPhoto.caption && <span className="lightbox-caption">{selectedPhoto.caption}</span>}
            </div>
          </div>
        </div>
      )}

      {/* Inventory Lightbox Modal */}
      {selectedInventoryItem && (
        <div className="lightbox-overlay" onClick={closeInventoryLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeInventoryLightbox}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <img src={selectedInventoryItem.image} alt={selectedInventoryItem.name} className="lightbox-image" />
            <div className="lightbox-info">
              <span className="lightbox-caption">{selectedInventoryItem.name}</span>
              <span className="lightbox-date">{selectedInventoryItem.price}</span>
              <span className="lightbox-delivery">{selectedInventoryItem.delivery}</span>
            </div>
          </div>
        </div>
      )}



      {/* 4. Services*/}
      <section className="services-section">
        <div className="section-container">
          <div className="services-header">
            <h2>Our Services</h2>
            <p>Professional event planning and rental services for all occasions</p>
          </div>
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
        </div>
      </section>

      <section className="inventory-section">
        <div className="section-container">
          <h2>Party Rental Inventory</h2>
          <div className="inventory-services">
            <div className="service-box">Delivery & Pickup</div>
            <div className="service-box">Setup & Installation</div>
            <div className="service-box">Daily Rental Rates</div>
          </div>
          <div className="inventory-grid">
            {inventory.map((item, index) => (
              <div key={index} className="inventory-card">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  onClick={() => setSelectedInventoryItem(item)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="inventory-info">
                  <h3>{item.name}</h3>
                  <div className="inventory-price">{item.price}</div>
                  <div className="inventory-delivery">{item.delivery}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. Contact Us Button */}
      <section className="contact-section">
        <div className="section-container">
          <h2>Ready to Plan Your Next Event?</h2>
          <button
            className="cta-button"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="footer">
        <p>&copy; 2024 Hare Rama Events. All Rights Reserved.</p>
      </footer>
    </div>
  );
}













