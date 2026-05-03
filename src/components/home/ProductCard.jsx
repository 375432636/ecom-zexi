import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { name, category, price, originalPrice, discount, badge, colors } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <div className="product-image-placeholder">
          {/* SVG placeholder will be replaced with actual image */}
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="20" y="30" width="60" height="50" rx="2"/>
          </svg>
        </div>
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
  );
};
