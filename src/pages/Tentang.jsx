import React, { useState, useEffect } from 'react';
import { cultureData, natureData } from '../data/mockData';
import './Tentang.css';
import '../components/HeroSection.css'; // Import the exact hero styles
// Combine all valid images to create a highly varied slideshow, EXCLUDING traditional food
const allImages = [...cultureData, ...natureData]
  .filter(d => !d.image.includes('placeholder') && d.category !== 'Kuliner Tradisional')
  .map(d => d.image)
  .sort(() => 0.5 - Math.random()); // Shuffle for maximum variety

const sliderImages = allImages.slice(0, 15); // Show 15 varied images

const Tentang = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container tentang-page">
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
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
            Selamat Datang di <br /><span className="text-highlight">SIPAPUA</span>
          </h1>
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.4s', fontFamily: "'Playfair Display', serif" }}>
            Platform digital ini hadir untuk mengajak Anda menyelami pesona keindahan alam yang tak tersentuh, serta kekayaan warisan budaya leluhur Nusantara yang begitu memukau di ujung timur Indonesia.
          </p>
        </div>
      </div>

      <div className="container tentang-content">
        <div className="tentang-section latar-belakang-section">
          <div className="latar-belakang-text" style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'center' }}>Latar Belakang</h2>
            <p>
              Proyek ini dikembangkan sebagai bagian dari tugas akhir (UAS) mata kuliah Etnografi. Tujuan utama dari platform web ini adalah untuk mendokumentasikan, melestarikan, dan mempromosikan kekayaan budaya serta keanekaragaman hayati yang dimiliki oleh tanah Papua melalui media digital yang modern dan interaktif.
            </p>
            <p>
              Dengan menggunakan pendekatan etnografi, data yang disajikan dirancang untuk memberikan pemahaman yang mendalam tentang hubungan antara masyarakat adat Papua dengan lingkungan alam sekitarnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
