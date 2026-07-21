import { useMemo } from 'react';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import './DetailModal.css';

const DetailModal = ({ item, dataSource, onClose, type, onItemSelect }) => {
  if (!item) return null;

  // Randomize related items so it's different every time
  const relatedItems = useMemo(() => {
    return [...dataSource.filter(d => d.id !== item.id)]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [item.id, dataSource]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <FiX />
        </button>
        
        <div className="modal-hero" style={{ backgroundImage: `url("${item.image}")` }}>
          <div className="modal-hero-blur"></div>
          <img src={item.image} alt={item.title} className="modal-hero-img-sharp" />
          <div className="modal-overlay-dark"></div>
          <div className="modal-hero-content">
            <div className="modal-badge">{item.category}</div>
            <h1 className="modal-title">{item.title}</h1>
          </div>
        </div>
        
        <div className="modal-body-wrapper">
          <div className="modal-main-content">
            <h2>Tentang {item.title}</h2>
            <p className="modal-description">{item.description}</p>
            
            <div className="modal-info-box">
              <h3>Catatan Etnografer</h3>
              <p>
                {(() => {
                  const cat = item.category.toLowerCase();
                  if (cat.includes('arsitektur')) {
                    return "Analisis Spasial: Struktur arsitektur ini dibangun dengan prinsip adaptasi ekologis tingkat tinggi. Penggunaan material endemik lokal dirancang khusus untuk mitigasi iklim ekstrem dan pertahanan komunal suku.";
                  } else if (cat.includes('seni rupa') || cat.includes('kerajinan')) {
                    return "Simbolisme Ritual: Mahakarya seni ini bukan sekadar objek estetika semata. Dalam pandangan antropologis, benda ini bertindak sebagai medium spiritual yang menghubungkan dunia manusia (alam nyata) dengan roh leluhur.";
                  } else if (cat.includes('musik') || cat.includes('tari')) {
                    return "Fungsi Sosial: Kesenian performatif ini memegang peranan krusial sebagai media transmisi sejarah lisan, ritual inisiasi kedewasaan, serta instrumen rekonsiliasi perdamaian antar klan.";
                  } else if (cat.includes('fauna') || cat.includes('burung')) {
                    return "Status Konservasi: Spesies endemik ini merupakan bio-indikator kesehatan hutan hujan tropis Papua. Eksistensinya dijaga ketat oleh hukum adat setempat dan aturan pelarangan berburu (sasi).";
                  } else if (cat.includes('geologi') || cat.includes('geografis') || cat.includes('danau') || cat.includes('taman')) {
                    return "Signifikansi Geologis: Bentang alam purba ini terbentuk dari pergerakan tektonik lempeng Indo-Australia. Kawasan ini menyimpan cadangan air bersih dan megabiodiversitas tertinggi di ekuator.";
                  } else if (cat.includes('kepercayaan') || cat.includes('sosial')) {
                    return "Sistem Kekerabatan: Institusi sosial dan kepercayaan ini bertindak sebagai pilar utama ketertiban hukum adat. Sistem ini memastikan distribusi kekayaan dan keadilan komunal berjalan tanpa harus menggunakan hukum positif modern.";
                  } else {
                    return "Dokumentasi Khusus: Artefak kebudayaan dan kekayaan alam ini merupakan bukti nyata dari konsep 'Papua sebagai Laboratorium Antropologi Dunia'. Pelestariannya sangat bergantung pada sinergi antara masyarakat adat dan generasi muda.";
                  }
                })()}
              </p>
            </div>
          </div>
          
          <div className="modal-sidebar">
            <div className="modal-sidebar-card">
              <h3>Jelajahi Terkait</h3>
              <div className="modal-related-items">
                {relatedItems.map(related => (
                  <div 
                    key={related.id} 
                    className="modal-related-item" 
                    onClick={() => {
                      if (onItemSelect) onItemSelect(related);
                    }}
                    style={{ cursor: onItemSelect ? 'pointer' : 'default' }}
                  >
                    <img src={related.image} alt={related.title} />
                    <span>{related.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
