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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/20170903_Papouasie_Baliem_valley_15.jpg/300px-20170903_Papouasie_Baliem_valley_15.jpg'
  },
  {
    id: 2,
    title: 'Kabupaten Asmat',
    category: 'Seni Rupa (Ukiran)',
    description: 'Terkenal ke mancanegara karena seni ukir patung kayu magis Suku Asmat.',
    position: [-5.6267, 138.3842],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/COLLECTIE_TROPENMUSEUM_Houten_voorouderbeeld_van_de_Asmat_TMnr_5974-5.jpg/300px-COLLECTIE_TROPENMUSEUM_Houten_voorouderbeeld_van_de_Asmat_TMnr_5974-5.jpg'
  },
  {
    id: 3,
    title: 'Raja Ampat',
    category: 'Ekowisata',
    description: 'Surga terumbu karang dan destinasi ekowisata perairan terbaik di dunia.',
    position: [-0.2323, 130.5165],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Piaynemo_Raja_Ampat.jpg/300px-Piaynemo_Raja_Ampat.jpg'
  },
  {
    id: 4,
    title: 'Puncak Jaya (Carstensz)',
    category: 'Geografis',
    description: 'Puncak tertinggi di Indonesia dengan ketinggian 4.884 mdpl dengan salju abadi.',
    position: [-4.0833, 137.1833],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Puncak_Jaya.jpg/300px-Puncak_Jaya.jpg'
  },
  {
    id: 5,
    title: 'Danau Sentani',
    category: 'Danau & Budaya Tabi',
    description: 'Pusat budaya suku di sekitar danau dan lokasi peninggalan megalitik.',
    position: [-2.6074, 140.5283],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Sentani_Lake.jpg/300px-Sentani_Lake.jpg'
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
