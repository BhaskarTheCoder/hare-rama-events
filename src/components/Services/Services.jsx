import { useState } from 'react';
import ServiceModal from '../ServiceModal/ServiceModal';
import { servicesData } from '../../data/services';
import './Services.css';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { categories } = servicesData;

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
          <p className="services-label">OUR SERVICES</p>
          <h2 className="section-title services-title">
            Everything You Need for <span className="gradient-text">The Perfect Event</span>
          </h2>
          <p className="section-subtitle">
            Professional-grade equipment and expert services to make your celebration unforgettable
          </p>
          
          {/* Services Cards Grid */}
          <div className="services-grid">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="service-card"
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
                  <h3 className="service-card-title">{category.name}</h3>
                  <p className="service-card-description">{category.description}</p>
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
