import './Card.css';

const CultureCard = ({ item, onClick }) => {
  return (
    <div className="card-container animate-fade-in" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="card-image-wrapper">
        <img src={item.image} alt={item.title} className="card-image" />
        <div className="card-category">{item.category}</div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-description">{item.description}</p>
        <button className="btn btn-outline" style={{ marginTop: '1rem', width: '100%' }} onClick={(e) => { e.stopPropagation(); onClick(); }}>
          Pelajari Lebih Lanjut
        </button>
      </div>
    </div>
  );
};

export default CultureCard;
