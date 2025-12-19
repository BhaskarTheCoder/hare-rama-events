import { useState, lazy, Suspense } from 'react';
import './index.css';

// Critical above-fold components - load immediately
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

// Below-fold components - lazy load to reduce initial bundle
const Services = lazy(() => import('./components/Services/Services'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const Contact = lazy(() => import('./components/Contact/Contact'));

// Loading fallback component
function SectionLoader() {
  return (
    <div style={{
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-dark-bg)'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '3px solid rgba(167, 99, 255, 0.2)',
        borderTop: '3px solid var(--color-primary)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
    </div>
  );
}

function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />

      <Suspense fallback={<SectionLoader />}>
        <Services onServiceClick={setSelectedService} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
