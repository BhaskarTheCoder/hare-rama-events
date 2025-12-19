import { useState, useEffect, useRef } from 'react';
import ServiceModal from '../ServiceModal/ServiceModal';
import { servicesData } from '../../data/services';
import './Services.css';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRefs = useRef([]);
  
  const { categories } = servicesData;

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'visible' class when card enters viewport
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of card is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before card is fully in view
      }
    );

    // Observe all service cards
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup
    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <>
      <section id="inventory" className="section services-section">
        <div className="container">
          <p className="section-label">OUR SERVICES</p>
          <h2 className="section-title services-title">
            Everything You Need for <span className="gradient-text">The Perfect Event</span>
          </h2>
          <p className="section-subtitle">
            Professional-grade equipment and expert services to make your celebration unforgettable
          </p>
          
          {/* Services Cards Grid */}
          <div className="services-grid">
            {categories.map((category, index) => (
              <div 
                key={category.id} 
                ref={(el) => (cardRefs.current[index] = el)}
                className="service-card"
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(category)}
              >
                <div className="service-card-image">
                  {category.image && (
                    <img src={category.image} alt={category.name} />
                  )}
                  <div className="service-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                <div className="service-card-content">
                  <h3 className="card-title">{category.name}</h3>
                  <p className="card-description">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default Services;
