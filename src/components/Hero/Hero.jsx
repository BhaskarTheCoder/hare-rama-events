import { servicesData } from '../../data/services';
import './Hero.css';

function Hero() {
  const { heroServices } = servicesData;

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="section-title hero-title animate-fade-in">
            Welcome to Professional DJ & Event Production House
          </h1>

          <p className="section-subtitle hero-subtitle animate-fade-in">
            Your Ultimate Destination for DJ, Lighting, Decor & Event Management Solutions
          </p>

          {/* Services List */}
          <div className="hero-services animate-fade-in">
            {heroServices.map((service, index) => (
              <a
                href={service.link}
                key={index}
                className="service-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-logo">
                  <img src={service.logo} alt={service.name} />
                </div>
                <span className="service-name">{service.name}</span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta animate-fade-in">
            <a href="#contact" className="btn btn-primary">
              Book Your Event
            </a>
            <a href="#gallery" className="btn btn-secondary">
              View Gallery
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
