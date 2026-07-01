import { Link } from 'react-router-dom';
import './Card.css';

const CultureCard = ({ item }) => {
  return (
    <Link to={`/kebudayaan/${item.id}`} style={{ textDecoration: 'none' }}>
      <div className="card-container animate-fade-in">
        <div className="card-image-wrapper">
          <img src={item.image} alt={item.title} className="card-image" />
          <div className="card-category">{item.category}</div>
        </div>
        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-description">{item.description}</p>
          <button className="btn btn-outline" style={{ marginTop: '1rem', width: '100%' }}>
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CultureCard;
