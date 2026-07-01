import { Link } from 'react-router-dom';
import './Card.css';

const NatureCard = ({ item }) => {
  return (
    <Link to={`/kekayaan-alam/${item.id}`} style={{ textDecoration: 'none' }}>
      <div className="card-container animate-fade-in">
        <div className="card-image-wrapper">
          <img src={item.image} alt={item.title} className="card-image" />
          <div className="card-category nature-category">{item.category}</div>
        </div>
        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-description">{item.description}</p>
          <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
            Jelajahi Sekarang
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NatureCard;
