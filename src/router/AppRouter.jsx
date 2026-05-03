import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<div>Product List (Coming Soon)</div>} />
      </Routes>
    </BrowserRouter>
  );
};
