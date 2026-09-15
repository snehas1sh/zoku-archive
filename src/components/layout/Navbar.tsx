import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Cultures', path: '/cultures' },
    { label: 'Motorcycles', path: '/motorcycles' },
    { label: 'Modifications', path: '/modifications' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080a]/95 backdrop-blur-sm border-b border-zoku-border/50 py-3.5'
          : 'bg-transparent border-b border-white/[0.06] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand / Logo */}
        <Link to="/" className="group flex flex-col items-start focus:outline-none">
          <div className="flex items-baseline space-x-1.5 font-display tracking-tight text-lg sm:text-xl font-bold">
            <span className="text-zoku-red transition-colors duration-200 group-hover:text-zoku-redHover">
              ZOKU
            </span>
            <span className="text-zoku-white font-medium tracking-[0.2em]">
              ARCHIVE
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.25em] text-zoku-muted mt-0.5 group-hover:text-zoku-gray transition-colors">
            JAPANESE MOTORCYCLE CULTURES
          </span>
        </Link>

        {/* Center / Right: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 text-[13px] tracking-[0.15em] uppercase font-sans transition-colors duration-200 ${
                  active
                    ? 'text-zoku-white font-medium'
                    : 'text-zoku-gray hover:text-zoku-white'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-zoku-red rounded-none" />
                )}
              </Link>
            );
          })}

          {/* Search Trigger Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center text-zoku-gray hover:text-zoku-white transition-colors duration-200 p-1.5 focus:outline-none"
            aria-label="Search archive"
            title="Search (Ctrl + K)"
          >
            <Search className="w-4 h-4 stroke-[1.75]" />
          </button>
        </nav>

        {/* Far Right: Editorial Calligraphy / Vertical Text (Mockup match) */}
        <div className="hidden lg:flex items-center space-x-3 border-l border-white/[0.08] pl-6 text-[10px] text-zoku-muted font-jp tracking-widest leading-tight select-none">
          <div className="flex flex-col text-right font-sans tracking-[0.2em] text-[8px] text-zoku-muted uppercase">
            <span>THE CULTURE</span>
            <span>LIVES ON</span>
          </div>
          <div className="text-[11px] text-[#555] font-light">
            <span>文化は終わらない</span>
          </div>
        </div>

        {/* Mobile: Search & Hamburger Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={onOpenSearch}
            className="text-zoku-gray hover:text-zoku-white p-1"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zoku-gray hover:text-zoku-white p-1 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0d] border-b border-zoku-border px-6 py-6 transition-all">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between text-sm uppercase tracking-[0.2em] py-2 ${
                    active ? 'text-zoku-red font-medium' : 'text-zoku-gray'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 bg-zoku-red rounded-full" />}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zoku-muted">
              <span>文化は終わらない</span>
              <span className="tracking-widest uppercase text-[9px]">THE CULTURE LIVES ON</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
