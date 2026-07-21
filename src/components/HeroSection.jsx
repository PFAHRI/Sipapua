import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cultureData, natureData } from '../data/mockData';
import './HeroSection.css';

// Select some visually stunning images for the home hero
const sliderImages = [
  ...natureData.filter(d => !d.image.includes('placeholder')).slice(0, 3).map(d => d.image),
  ...cultureData.filter(d => !d.image.includes('placeholder')).slice(0, 3).map(d => d.image)
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-background">
        {sliderImages.map((img, index) => (
          <div 
            key={index}
            className={`hero-slider-bg ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url("${img}")` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Jelajahi Pesona <br/><span className="text-highlight">Papua</span>
        </h1>
        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Sistem Informasi Terpadu Kebudayaan dan Kekayaan Alam Papua. Temukan keindahan alam yang tak tersentuh dan warisan budaya yang tak ternilai.
        </p>
        <div className="hero-btns animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link to="/kebudayaan" className="btn btn-primary" style={{ marginRight: '1rem' }}>
            Eksplorasi Budaya
          </Link>
          <Link to="/kekayaan-alam" className="btn btn-secondary">
            Kekayaan Alam
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
