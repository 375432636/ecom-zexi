import { Navigation } from '../common/Navigation';
import { Footer } from '../home/Footer';
import { Outlet } from 'react-router-dom';
import './PageLayout.css';

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <Navigation />
      <main className="main-content">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};
