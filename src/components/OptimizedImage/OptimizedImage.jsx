import { useState, useEffect, useRef } from 'react';
import './OptimizedImage.css';

function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  aspectRatio = 'auto',
  priority = false 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    // If priority, load immediately
    if (priority) {
      setIsInView(true);
      return;
    }

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  return (
    <div 
      ref={imgRef}
      className={`optimized-image-container ${className}`}
      style={{ 
        aspectRatio: aspectRatio,
        width: width,
        height: height
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width={width}
          height={height}
          className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {!isLoaded && (
        <div className="image-placeholder" aria-hidden="true" />
      )}
    </div>
  );
}

export default OptimizedImage;
