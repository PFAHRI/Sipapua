import { useState } from 'react';
import { natureData } from '../data/mockData';
import NatureCard from '../components/NatureCard';
import DetailModal from '../components/DetailModal';
import './Filters.css';

const KekayaanAlam = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['Semua', ...new Set(natureData.map(item => item.category))];

  const filteredData = natureData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="page-container" style={{ padding: '4rem 0', minHeight: 'calc(100vh - 80px)' }}>
      <div className="container">
        <h1 className="section-title">Kekayaan Alam Papua</h1>
        <p className="section-subtitle">
          Temukan surga tersembunyi, bentang alam spektakuler, serta flora dan fauna endemik.
        </p>
        
        <div className="filter-container">
          <input 
            type="text" 
            placeholder="Cari kekayaan alam..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="category-filters">
            {categories.map(category => (
              <button 
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredData.length > 0 ? (
          <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {filteredData.map(item => (
              <NatureCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>Data tidak ditemukan. Silakan coba kata kunci lain.</p>
          </div>
        )}
      </div>

      {selectedItem && (
        <DetailModal 
          item={selectedItem} 
          dataSource={natureData} 
          onClose={() => setSelectedItem(null)} 
          onItemSelect={setSelectedItem}
          type="nature" 
        />
      )}
    </div>
  );
};

export default KekayaanAlam;
