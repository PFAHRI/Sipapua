import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import CultureCard from '../components/CultureCard';
import NatureCard from '../components/NatureCard';
import DetailModal from '../components/DetailModal';
import { cultureData, natureData } from '../data/mockData';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  // Take only first 3 items for preview
  const featuredCulture = cultureData.slice(0, 3);
  const featuredNature = natureData.slice(0, 3);

  const handleOpenModal = (item, type, source) => {
    setSelectedModal({ item, type, source });
  };

  const handleCloseModal = () => {
    setSelectedModal(null);
  };

  return (
    <div className="home-page">
      <HeroSection />
      
      {/* Featured Culture Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Warisan Budaya</h2>
          <p className="section-subtitle">
            Jelajahi keragaman suku, bahasa, dan tradisi yang menjadikan Papua begitu istimewa.
          </p>
          
          <div className="card-grid">
            {featuredCulture.map(item => (
              <CultureCard 
                key={item.id} 
                item={item} 
                onClick={() => handleOpenModal(item, 'culture', cultureData)} 
              />
            ))}
          </div>
          
          <div className="view-more-container">
            <Link to="/kebudayaan" className="btn btn-outline">
              Lihat Semua Budaya
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-overlay"></div>
        <div className="container stats-container">
          <div className="stat-item">
            <h3 className="stat-number">250+</h3>
            <p className="stat-label">Suku Bangsa</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">270+</h3>
            <p className="stat-label">Bahasa Daerah</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">70%</h3>
            <p className="stat-label">Hutan Tropis Utuh</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">13.600+</h3>
            <p className="stat-label">Spesies Tumbuhan</p>
          </div>
        </div>
      </section>

      {/* Featured Nature Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Kekayaan Alam</h2>
          <p className="section-subtitle">
            Temukan flora dan fauna endemik serta lanskap memukau yang hanya bisa ditemukan di Tanah Papua.
          </p>
          
          <div className="card-grid">
            {featuredNature.map(item => (
              <NatureCard 
                key={item.id} 
                item={item} 
                onClick={() => handleOpenModal(item, 'nature', natureData)} 
              />
            ))}
          </div>
          
          <div className="view-more-container">
            <Link to="/kekayaan-alam" className="btn btn-primary">
              Eksplorasi Alam
            </Link>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedModal && (
        <DetailModal 
          item={selectedModal.item} 
          dataSource={selectedModal.source} 
          onClose={handleCloseModal} 
          onItemSelect={(newItem) => setSelectedModal({...selectedModal, item: newItem})}
          type={selectedModal.type} 
        />
      )}
    </div>
  );
};

export default Home;
