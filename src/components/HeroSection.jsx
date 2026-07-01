import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        {/* Placeholder image for hero */}
        <img 
          src="https://images.unsplash.com/photo-1548680190-335165c363dc?q=80&w=2000&auto=format&fit=crop" 
          alt="Papua Landscape" 
          className="hero-image"
        />
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
