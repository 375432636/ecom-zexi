import './CategoryCard.css';

export const CategoryCard = ({ icon, name }) => {
  return (
    <div className="category-card">
      <div className="category-icon">{icon}</div>
      <div className="category-name">{name}</div>
    </div>
  );
};
