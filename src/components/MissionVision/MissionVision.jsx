import './MissionVision.css';

function MissionVision() {
  const values = [
    {
      title: 'Our Mission',
      icon: '/assets/images/mission_icon_professional_1766015489774.png',
      description: 'To deliver exceptional event experiences through innovation, creativity, and unmatched service excellence.'
    },
    {
      title: 'Our Vision',
      icon: '/assets/images/vision_icon_professional_1766015503065.png',
      description: 'To be the most trusted and sought-after event production house, setting industry standards for quality and innovation.'
    },
    {
      title: 'Our Values',
      icon: '/assets/images/values_icon_professional_1766015514440.png',
      description: 'Excellence, integrity, creativity, and client satisfaction drive everything we do.'
    }
  ];

  return (
    <section className="section mission-section">
      <div className="container">
        <h2 className="section-title gradient-text">What Drives Us</h2>
        <div className="mission-grid">
          {values.map((value, index) => (
            <div key={index} className="mission-card">
              <div className="mission-icon-wrapper">
                <img src={value.icon} alt={value.title} className="mission-icon" />
              </div>
              <h3 className="mission-title">{value.title}</h3>
              <p className="mission-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
