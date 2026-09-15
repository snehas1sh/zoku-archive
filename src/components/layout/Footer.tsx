import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070709] py-16 text-zoku-gray font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          
          {/* Brand block */}
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-baseline space-x-1.5 font-display text-base font-bold">
              <span className="text-zoku-red">ZOKU</span>
              <span className="text-zoku-white tracking-[0.2em]">ARCHIVE</span>
            </div>
            <p className="text-[10px] tracking-[0.2em] text-zoku-muted uppercase">
              JAPANESE MOTORCYCLE CULTURES
            </p>
            <p className="text-xs text-zoku-muted/80 max-w-sm pt-2 leading-relaxed font-light">
              An independent visual archive preserving the mechanical design, cultural anthropology, and photographic record of Japan&apos;s motorcycle heritage.
            </p>
          </div>

          {/* Center: Clean navigation links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.15em] uppercase">
            <Link to="/" className="hover:text-zoku-white transition-colors">
              Home
            </Link>
            <Link to="/cultures" className="hover:text-zoku-white transition-colors">
              Cultures
            </Link>
            <Link to="/motorcycles" className="hover:text-zoku-white transition-colors">
              Motorcycles
            </Link>
            <Link to="/modifications" className="hover:text-zoku-white transition-colors">
              Modifications
            </Link>
            <Link to="/about" className="hover:text-zoku-white transition-colors">
              About
            </Link>
          </nav>

          {/* Right: Japanese Poetic Phrase from Mockup */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-1">
            <p className="font-jp text-sm text-zoku-gray/90 tracking-wider">
              あの時代のバイクは、ただの乗り物じゃない。
            </p>
            <p className="text-[10px] tracking-[0.25em] text-zoku-muted uppercase">
              NON-COMMERCIAL ARCHIVAL RESEARCH &mdash; {new Date().getFullYear()}
            </p>
          </div>

        </div>

        {/* Bottom subtle rule */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-zoku-muted gap-4">
          <p>© {new Date().getFullYear()} ZOKU ARCHIVE. All photographic rights belong to their respective archival owners.</p>
          <div className="flex items-center space-x-6 text-[10px] tracking-wider uppercase">
            <span>RESPECT THE MACHINES</span>
            <span className="text-zoku-red">•</span>
            <span>PRESERVE THE CRAFT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
