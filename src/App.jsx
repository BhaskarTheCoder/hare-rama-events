import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ServiceModal from './components/ServiceModal/ServiceModal';

function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services onServiceClick={setSelectedService} />
      <Gallery />
      <Contact />
      <Footer />
      
      <ServiceModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}

export default App;
