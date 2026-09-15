import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SearchModal } from '../ui/SearchModal';

export const Layout: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Global keyboard shortcut: Ctrl+K or Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-zoku-black text-zoku-white selection:bg-zoku-red selection:text-white">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
};
