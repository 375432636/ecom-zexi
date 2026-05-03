import { Hero } from '../components/home/Hero';
import { CategoryCard } from '../components/home/CategoryCard';
import { ProductCard } from '../components/home/ProductCard';
import { Button } from '../components/common/Button';
import { useI18n } from '../hooks/useI18n';
import { products } from '../data/products';
import './Home.css';

export const Home = () => {
  const { t } = useI18n();

  const categories = [
    { icon: '🗄️', key: 'storage' },
    { icon: '🛏️', key: 'sleep' },
    { icon: '🍽️', key: 'dining' },
    { icon: '💼', key: 'work' },
    { icon: '🛋️', key: 'living' },
  ];

  return (
    <div className="home-page">
      <Hero />

      <section id="categories" className="section">
        <div className="section-header">
          <h2 className="section-title">{t('category.title')}</h2>
        </div>
        <div className="category-grid">
          {categories.map(cat => (
            <CategoryCard
              key={cat.key}
              id={cat.key}
              icon={cat.icon}
              name={t(`category.${cat.key}`)}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">{t('product.title')}</h2>
          <Button variant="secondary">{t('product.viewAll')}</Button>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
