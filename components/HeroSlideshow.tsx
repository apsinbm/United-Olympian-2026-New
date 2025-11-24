import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';

const HeroSlideshow: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Preload all images
  useEffect(() => {
    HERO_IMAGES.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Image Layer */}
      {HERO_IMAGES.map((imageSrc, index) => (
        <img
          key={imageSrc}
          src={imageSrc}
          alt={`Hero background ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-navy-deep/85"></div>
    </div>
  );
};

export default HeroSlideshow;
