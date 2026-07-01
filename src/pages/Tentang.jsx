import React from 'react';
import './Tentang.css';

const Tentang = () => {
  return (
    <div className="page-container tentang-page">
      <div className="tentang-hero">
        <div className="tentang-overlay"></div>
        <div className="container">
          <h1 className="tentang-title">Tentang Proyek</h1>
          <p className="tentang-subtitle">Sistem Informasi Terpadu Kebudayaan dan Kekayaan Alam Papua Berbasis Web</p>
        </div>
      </div>

      <div className="container tentang-content">
        <div className="tentang-section">
          <h2>Latar Belakang</h2>
          <p>
            Proyek ini dikembangkan sebagai bagian dari tugas akhir (UAS) mata kuliah Etnografi. Tujuan utama dari platform web ini adalah untuk mendokumentasikan, melestarikan, dan mempromosikan kekayaan budaya serta keanekaragaman hayati yang dimiliki oleh tanah Papua melalui media digital yang modern dan interaktif.
          </p>
          <p>
            Dengan menggunakan pendekatan etnografi, data yang disajikan dirancang untuk memberikan pemahaman yang mendalam tentang hubungan antara masyarakat adat Papua dengan lingkungan alam sekitarnya.
          </p>
        </div>

        <div className="tentang-grid">
          <div className="tentang-card">
            <div className="tentang-icon">🎯</div>
            <h3>Visi</h3>
            <p>Menjadi pusat informasi digital terdepan yang mengedukasi generasi muda tentang pentingnya menjaga warisan leluhur dan kelestarian alam Papua.</p>
          </div>
          <div className="tentang-card">
            <div className="tentang-icon">📚</div>
            <h3>Metodologi</h3>
            <p>Pengumpulan data melalui studi literatur dan observasi tidak langsung, mengadaptasi catatan etnografi ke dalam struktur data web interaktif.</p>
          </div>
          <div className="tentang-card">
            <div className="tentang-icon">💻</div>
            <h3>Teknologi</h3>
            <p>Dibangun menggunakan React.js, Vite, dan CSS3 Modern (Glassmorphism, Dark Mode) untuk pengalaman pengguna yang cepat, responsif, dan elegan.</p>
          </div>
        </div>

        <div className="tentang-section">
          <h2>Fokus Utama Capstone Project</h2>
          <p>
            Proyek ini merangkum empat pilar utama integrasi antara Etnografi Papua dan Teknologi Modern, sesuai dengan pedoman kurikulum:
          </p>
          <div className="tentang-grid">
            <div className="tentang-card">
              <div className="tentang-icon">🏛️</div>
              <h3>Preservasi Digital</h3>
              <p>Mendokumentasikan kearifan lokal, bahasa daerah, dan seni tradisional ke dalam arsip digital interaktif agar dapat diakses oleh generasi mendatang.</p>
            </div>
            <div className="tentang-card">
              <div className="tentang-icon">🌱</div>
              <h3>Smart Ethno-Agriculture</h3>
              <p>Mengintegrasikan kearifan botani masyarakat lokal dengan teknologi informasi untuk pengelolaan komoditas khas seperti Sagu dan Kopi Papua.</p>
            </div>
            <div className="tentang-card">
              <div className="tentang-icon">🏕️</div>
              <h3>Ethno-Ecotourism</h3>
              <p>Membuka akses promosi bagi ekowisata dan kerajinan tangan (seperti Noken) yang dikelola langsung secara mandiri oleh masyarakat adat.</p>
            </div>
            <div className="tentang-card">
              <div className="tentang-icon">📱</div>
              <h3>Media Interaktif</h3>
              <p>Mengemas cerita rakyat dan nilai moral Etnografi Papua ke dalam media digital modern yang menarik bagi masyarakat luas.</p>
            </div>
          </div>
        </div>

        <div className="tentang-developer">
          <h2>Informasi Pengembang</h2>
          <div className="dev-profile">
            <div className="dev-avatar">
              <span className="dev-initial">A</span>
            </div>
            <div className="dev-info">
              <h3>Dikembangkan untuk:</h3>
              <p className="dev-course">Ujian Akhir Semester (UAS) Etnografi / Capstone Project</p>
              <p className="dev-desc">Dibuat dengan dedikasi tinggi untuk mempresentasikan harmoni antara budaya dan alam Papua dalam balutan teknologi web terkini.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
