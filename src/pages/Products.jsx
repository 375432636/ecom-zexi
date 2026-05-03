import { useParams, useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/home/ProductCard';
import { Button } from '../components/common/Button';
import { useI18n } from '../hooks/useI18n';
import { products } from '../data/products';
import './Products.css';

const categoryMapping = {
  storage: ['储物'],
  sleep: ['睡眠'],
  dining: ['用餐'],
  work: ['工作'],
  living: ['客厅'],
};

export const Products = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { t } = useI18n();

  const filteredProducts = category
    ? products.filter(p =>
        categoryMapping[category]?.some(cat => p.category.includes(cat))
      )
    : products;

  const categoryTitle = category
    ? t(`category.${category}`)
    : t('product.title');

  return (
    <div className="products-page">
      <div className="products-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1 className="products-title">{categoryTitle}</h1>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="products-empty">
          <p>{t('products.empty')}</p>
          <Button onClick={() => navigate('/')}>{t('products.backToHome')}</Button>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
