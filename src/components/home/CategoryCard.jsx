import { Link } from 'react-router-dom';
import './CategoryCard.css';

export const CategoryCard = ({ icon, name, id }) => {
  return (
    <Link to={`/products/${id}`} className="category-card">
      <div className="category-icon">{icon}</div>
      <div className="category-name">{name}</div>
    </Link>
  );
};
