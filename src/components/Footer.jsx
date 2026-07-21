import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-section">
          <h2 className="footer-logo">SIPAPUA<span className="logo-dot">.</span></h2>
          <p className="footer-desc">
            Sistem Informasi Terpadu Kebudayaan dan Kekayaan Alam Papua Berbasis Web. 
            Melestarikan warisan budaya untuk generasi masa depan.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Tautan Cepat</h3>
          <ul className="footer-links">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/kebudayaan">Kebudayaan</Link></li>
            <li><Link to="/kekayaan-alam">Kekayaan Alam</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Kontak</h3>
          <ul className="footer-links">
            <li>Universitas Muhammadiyah Sorong</li>
            <li>Fakultas Teknik Informatika</li>
            <li>UAS Etnografi - Kelompok 13</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Kelompok 13 - SIPAPUA. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
