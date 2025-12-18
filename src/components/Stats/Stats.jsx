import { useState, useEffect, useRef } from 'react';
import './Stats.css';

function Stats() {
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { number: 10000, suffix: '+', label: 'Events Delivered', color: 'var(--color-primary)' },
    { number: 6000, suffix: '+', label: 'Happy Clients', color: 'var(--color-accent-cyan)' },
    { number: 8, suffix: '+', label: 'Years Experience', color: 'var(--color-accent)' },
    { number: 100, suffix: '+', label: 'Equipment Inventory', color: 'var(--color-accent-orange)' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [countersStarted]);

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersStarted) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, [countersStarted, end, duration]);

    return (
      <span className="stat-number">
        {count.toLocaleString()}
        <span className="stat-suffix">{suffix}</span>
      </span>
    );
  };

  return (
    <section className="section stats-section" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ '--accent-color': stat.color }}>
              <Counter end={stat.number} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
