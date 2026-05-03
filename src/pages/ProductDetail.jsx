import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { Button } from '../components/common/Button';
import { useI18n } from '../hooks/useI18n';
import './ProductDetail.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useI18n();

  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="detail-not-found">
          <h1>{t('detail.notFound')}</h1>
          <Button onClick={() => navigate('/')}>{t('detail.backToHome')}</Button>
        </div>
      </div>
    );
  }

  const { image, name, category, price, originalPrice, discount, badge, colors } = product;

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Add to cart:', { ...product, quantity, selectedColor });
  };

  const handleBuyNow = () => {
    // TODO: Implement checkout flow
    console.log('Buy now:', { ...product, quantity, selectedColor });
  };

  return (
    <div className="product-detail-page">
      <div className="detail-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <Link to="/products" className="back-link">{t('detail.backToProducts')}</Link>
      </div>

      <div className="product-showcase">
        <div className="product-images">
          <div className="product-main-image">
            <img
              src={import.meta.env.BASE_URL + image}
              alt={name}
              className="detail-main-img"
            />
          </div>
          {colors && colors.length > 1 && (
            <div className="product-thumbnails">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === selectedColor ? 'active' : ''}`}
                  style={{ background: color }}
                  onClick={() => setSelectedColor(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="product-info">
          {badge && <span className="detail-badge">{badge}</span>}
          <h1 className="detail-name">{name}</h1>
          <p className="detail-category">{category}</p>

          <div className="detail-price">
            <span className="price-current">{price}</span>
            {originalPrice && <span className="price-original">{originalPrice}</span>}
            {discount && <span className="price-sale">{discount}</span>}
          </div>

          {colors && (
            <div className="detail-section">
              <h3>{t('detail.selectColor')}</h3>
              <div className="color-selector">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`color-option ${index === selectedColor ? 'selected' : ''}`}
                    style={{ background: color }}
                    onClick={() => setSelectedColor(index)}
                    role="button"
                    aria-label={`Color ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="detail-section">
            <h3>{t('detail.quantity')}</h3>
            <div className="quantity-selector">
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className="quantity-value">{quantity}</span>
              <button
                className="quantity-btn"
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= 99}
              >
                +
              </button>
            </div>
          </div>

          <div className="detail-actions">
            <Button variant="primary" className="buy-now-btn" onClick={handleBuyNow}>
              {t('detail.buyNow')}
            </Button>
            <Button variant="secondary" className="add-cart-btn" onClick={handleAddToCart}>
              {t('detail.addToCart')}
            </Button>
          </div>

          <div className="detail-description">
            <h3>{t('detail.description')}</h3>
            <p>
              {t('detail.descriptionText', {
                defaultValue: '精选实木材质，北欧简约设计，为您的家居空间增添自然温馨的氛围。'
              })}
            </p>
          </div>

          <div className="detail-specs">
            <h3>{t('detail.specifications')}</h3>
            <div className="spec-item">
              <span>{t('detail.material')}:</span>
              <span>实木 / 金属配件</span>
            </div>
            <div className="spec-item">
              <span>{t('detail.dimensions')}:</span>
              <span>根据产品型号</span>
            </div>
            <div className="spec-item">
              <span>{t('detail.warranty')}:</span>
              <span>2年质保</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
