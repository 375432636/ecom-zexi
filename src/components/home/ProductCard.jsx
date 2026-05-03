import { Link } from 'react-router-dom';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { id, image, name, category, price, originalPrice, discount, badge, colors } = product;

  return (
    <Link to={`/product/${id}`} className="product-card-link">
      <div className="product-card">
      <div className="product-image">
        <img
          src={import.meta.env.BASE_URL + image}
          alt={name}
          className="product-image-img"
          loading="lazy"
        />
        {badge && <span className="product-badge new">{badge}</span>}
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-category">{category}</div>
        <div className="product-price">
          <span className="price-current">{price}</span>
          {originalPrice && <span className="price-original">{originalPrice}</span>}
          {discount && <span className="price-sale">{discount}</span>}
        </div>
        {colors && (
          <div className="color-dots">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color-dot ${index === 0 ? 'active' : ''}`}
                style={{ background: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
    </Link>
  );
};
