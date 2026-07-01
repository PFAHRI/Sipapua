import { useParams, useNavigate } from 'react-router-dom';
import { cultureData, natureData } from '../data/mockData';
import { FiArrowLeft } from 'react-icons/fi';
import './ItemDetail.css';

const ItemDetail = ({ type }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const dataSource = type === 'culture' ? cultureData : natureData;
  const item = dataSource.find(d => d.id === parseInt(id));

  if (!item) {
    return (
      <div className="page-container" style={{ padding: '4rem 0', minHeight: 'calc(100vh - 80px)', textAlign: 'center' }}>
        <h2>Data tidak ditemukan.</h2>
        <button className="back-btn" onClick={() => navigate(-1)}>Kembali</button>
      </div>
    );
  }

  return (
    <div className="detail-page-container">
      <div className="detail-hero" style={{ backgroundImage: `url(${item.image})` }}>
        <div className="detail-overlay"></div>
        <div className="container detail-hero-content">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <FiArrowLeft /> Kembali
          </button>
          <div className="detail-badge">{item.category}</div>
          <h1 className="detail-title">{item.title}</h1>
        </div>
      </div>
      
      <div className="container detail-content-wrapper">
        <div className="detail-main-content">
          <h2>Tentang {item.title}</h2>
          <p className="detail-description">{item.description}</p>
          
          <div className="info-box">
            <h3>Informasi Tambahan</h3>
            <p>Bagian ini dapat diisi dengan informasi lebih mendalam dari hasil penelitian etnografi, data sejarah, lokasi geografis spesifik, dan panduan wisata. Karena ini adalah Sistem Informasi Terpadu, halaman ini akan dikembangkan lebih lanjut untuk mencakup galeri video dan ulasan.</p>
          </div>
        </div>
        
        <div className="detail-sidebar">
          <div className="sidebar-card">
            <h3>Jelajahi Terkait</h3>
            <div className="related-items">
              {dataSource.filter(d => d.id !== item.id).slice(0, 3).map(related => (
                <div key={related.id} className="related-item" onClick={() => navigate(`/${type === 'culture' ? 'kebudayaan' : 'kekayaan-alam'}/${related.id}`)}>
                  <img src={related.image} alt={related.title} />
                  <span>{related.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
