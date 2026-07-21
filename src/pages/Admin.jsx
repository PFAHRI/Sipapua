import { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    province: '',
    description: '',
    image: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to backend
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ title: '', category: '', province: '', description: '', image: '' });
      
      // Hide success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 500);
  };

  return (
    <div className="admin-page">
      <div className="admin-sidebar">
        <h2 className="sidebar-brand">SIPAPUA CMS</h2>
        <ul className="sidebar-nav">
          <li className="active">📊 Dasbor Integrasi</li>
          <li>📝 Kelola Kebudayaan</li>
          <li>🌿 Kelola Alam</li>
          <li>⚙️ Pengaturan Sistem</li>
          <li className="logout">🚪 Keluar</li>
        </ul>
      </div>

      <div className="admin-main">
        <div className="admin-header">
          <h1>Sistem Manajemen Konten Terpadu</h1>
          <p>Pusat Integrasi Data Kebudayaan dan Kekayaan Alam se-Tanah Papua</p>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Entri Budaya</h3>
            <div className="stat-number">1,254</div>
            <div className="stat-trend positive">↑ 12% dari bulan lalu</div>
          </div>
          <div className="stat-card">
            <h3>Total Entri Alam</h3>
            <div className="stat-number">842</div>
            <div className="stat-trend positive">↑ 5% dari bulan lalu</div>
          </div>
          <div className="stat-card">
            <h3>Suku Terdaftar</h3>
            <div className="stat-number">254 / 255</div>
            <div className="stat-trend neutral">Hampir Lengkap</div>
          </div>
          <div className="stat-card alert">
            <h3>Menunggu Verifikasi</h3>
            <div className="stat-number">18</div>
            <div className="stat-trend negative">Perlu tindakan admin</div>
          </div>
        </div>

        <div className="admin-content-grid">
          <div className="admin-form-container">
            <h2>➕ Tambah Data Baru ke Sistem Terpadu</h2>
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-group">
                <label>Judul / Nama Entitas</label>
                <input 
                  type="text" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleChange} 
                  placeholder="Contoh: Noken, Tari Yospan..." 
                  required 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Kategori</label>
                  <select name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">-- Pilih Kategori --</option>
                    <option value="Suku Bangsa">Suku Bangsa</option>
                    <option value="Seni Tari">Seni Tari</option>
                    <option value="Arsitektur Tradisional">Arsitektur Tradisional</option>
                    <option value="Kuliner Tradisional">Kuliner Tradisional</option>
                    <option value="Fauna Endemik">Fauna Endemik</option>
                    <option value="Flora Tropis">Flora Tropis</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Asal Provinsi</label>
                  <select name="province" value={formData.province} onChange={handleChange} required>
                    <option value="">-- Pilih Provinsi --</option>
                    <option value="Papua">Papua (Jayapura, Keerom, dll)</option>
                    <option value="Papua Barat">Papua Barat (Manokwari, Fakfak)</option>
                    <option value="Papua Tengah">Papua Tengah (Mimika, Nabire)</option>
                    <option value="Papua Pegunungan">Papua Pegunungan (Jayawijaya)</option>
                    <option value="Papua Selatan">Papua Selatan (Merauke, Asmat)</option>
                    <option value="Papua Barat Daya">Papua Barat Daya (Sorong, Raja Ampat)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>URL Gambar (HD)</label>
                <input 
                  type="url" 
                  name="image" 
                  value={formData.image} 
                  onChange={handleChange} 
                  placeholder="https://..." 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Deskripsi Akademis</label>
                <textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  rows="4" 
                  placeholder="Tuliskan deksripsi detail mengenai entitas ini..." 
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Simpan & Integrasikan Data
              </button>
              
              {isSubmitted && (
                <div className="success-message">
                  ✅ Data berhasil ditambahkan ke dalam Sistem Informasi Terpadu SIPAPUA!
                </div>
              )}
            </form>
          </div>

          <div className="admin-log-container">
            <h2>📜 Log Aktivitas Terbaru</h2>
            <ul className="activity-log">
              <li>
                <span className="log-time">Baru saja</span>
                <span className="log-action">Admin_Sorong memperbarui data "Kepulauan Wayag"</span>
              </li>
              <li>
                <span className="log-time">1 jam lalu</span>
                <span className="log-action">Sistem otomatis mencadangkan (backup) 2.096 entri ke Cloud Database.</span>
              </li>
              <li>
                <span className="log-time">3 jam lalu</span>
                <span className="log-action">Admin_Merauke menambahkan data baru "Tari Gatsi".</span>
              </li>
              <li>
                <span className="log-time">Kemarin</span>
                <span className="log-action">Persetujuan publikasi untuk 5 entri kuliner tradisional.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
