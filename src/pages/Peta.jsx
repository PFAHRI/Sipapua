import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Peta.css';

// Fix for default marker icon in react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const mapData = [
  {
    id: 1,
    title: 'Lembah Baliem (Wamena)',
    category: 'Arsitektur & Suku Dani',
    description: 'Pusat kebudayaan Suku Dani dan letak dari rumah adat Honai.',
    position: [-4.0911, 138.9485],
    image: '/images/LEMBAH BALIEM.jpg'
  },
  {
    id: 2,
    title: 'Kabupaten Asmat',
    category: 'Seni Rupa (Ukiran)',
    description: 'Terkenal ke mancanegara karena seni ukir patung kayu magis Suku Asmat.',
    position: [-5.6267, 138.3842],
    image: '/images/UKIRAN ASMAT.jpg'
  },
  {
    id: 3,
    title: 'Raja Ampat',
    category: 'Ekowisata',
    description: 'Surga terumbu karang dan destinasi ekowisata perairan terbaik di dunia.',
    position: [-0.2323, 130.5165],
    image: '/images/KEPULAUAN RAJA AMPAT.png'
  },
  {
    id: 4,
    title: 'Puncak Jaya (Carstensz)',
    category: 'Geografis',
    description: 'Puncak tertinggi di Indonesia dengan ketinggian 4.884 mdpl dengan salju abadi.',
    position: [-4.0833, 137.1833],
    image: '/images/PUNCAK JAYA (Carstensz Pyramid).jpg'
  },
  {
    id: 5,
    title: 'Danau Sentani',
    category: 'Danau & Budaya Tabi',
    description: 'Pusat budaya suku di sekitar danau dan lokasi peninggalan megalitik.',
    position: [-2.6074, 140.5283],
    image: '/images/DANAU SENTANI.png'
  },
  {
    id: 6,
    title: 'Grasberg (Mimika)',
    category: 'Geologi & Tambang',
    description: 'Lokasi tambang emas dan tembaga terbesar di dunia yang terletak di pegunungan tengah.',
    position: [-4.0533, 137.1122],
    image: '/images/PEGUNUNGAN TEMBAGA GRASBERG.png'
  },
  {
    id: 7,
    title: 'Taman Nasional Lorentz',
    category: 'Kawasan Konservasi',
    description: 'Situs warisan dunia UNESCO dengan ekosistem dari gletser hingga pesisir pantai.',
    position: [-4.7500, 137.8333],
    image: '/images/TAMAN NASIONAL LORENTZ.png'
  },
  {
    id: 8,
    title: 'Teluk Cenderawasih',
    category: 'Konservasi Biota Laut',
    description: 'Kawasan taman nasional laut raksasa, rumah bagi sekumpulan Hiu Paus jinak.',
    position: [-2.4500, 134.6167],
    image: '/images/TAMAN NASIONAL TELUK CENDRAWASIH.png'
  }
];

const Peta = () => {
  // Koordinat tengah Pulau Papua
  const papuaCenter = [-4.0, 137.0];
  const zoomLevel = 6;

  return (
    <div className="peta-page">
      <div className="peta-header section-padding">
        <div className="container">
          <h1 className="page-title">Peta Persebaran Etnografi</h1>
          <p className="page-subtitle">Jelajahi peta interaktif untuk menemukan letak wilayah adat, budaya, dan pesona alam Papua.</p>
        </div>
      </div>

      <div className="map-container">
        <MapContainer center={papuaCenter} zoom={zoomLevel} scrollWheelZoom={true} className="leaflet-map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {mapData.map((marker) => (
            <Marker key={marker.id} position={marker.position}>
              <Popup>
                <div className="custom-popup">
                  <img src={marker.image} alt={marker.title} className="popup-image" />
                  <h3 className="popup-title">{marker.title}</h3>
                  <span className="popup-category">{marker.category}</span>
                  <p className="popup-desc">{marker.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Peta;
