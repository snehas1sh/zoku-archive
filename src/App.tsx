import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { BosozokuPage } from './pages/BosozokuPage';
import { CulturesIndexPage } from './pages/CulturesIndexPage';
import { CultureComingSoonPage } from './pages/CultureComingSoonPage';
import { MotorcyclesPage } from './pages/MotorcyclesPage';
import { MotorcycleDetailPage } from './pages/MotorcycleDetailPage';
import { ModificationsPage } from './pages/ModificationsPage';
import { AboutPage } from './pages/AboutPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cultures" element={<CulturesIndexPage />} />
          <Route path="/cultures/bosozoku" element={<BosozokuPage />} />
          <Route path="/cultures/:id" element={<CultureComingSoonPage />} />
          <Route path="/motorcycles" element={<MotorcyclesPage />} />
          <Route path="/motorcycles/:id" element={<MotorcycleDetailPage />} />
          <Route path="/modifications" element={<ModificationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
