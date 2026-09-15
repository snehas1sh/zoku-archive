import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { motorcyclesData } from '../../data/motorcycles';
import { modificationsData } from '../../data/modifications';
import { culturesData } from '../../data/cultures';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.trim().toLowerCase();

  const matchedBikes = normalized
    ? motorcyclesData.filter(
        (b) =>
          b.name.toLowerCase().includes(normalized) ||
          b.manufacturer.toLowerCase().includes(normalized) ||
          b.about.toLowerCase().includes(normalized) ||
          b.specs.displacement.toLowerCase().includes(normalized)
      )
    : [];

  const matchedMods = normalized
    ? modificationsData.filter(
        (m) =>
          m.name.toLowerCase().includes(normalized) ||
          m.japanese.toLowerCase().includes(normalized) ||
          m.romaji?.toLowerCase().includes(normalized) ||
          m.description.toLowerCase().includes(normalized)
      )
    : [];

  const matchedCultures = normalized
    ? culturesData.filter(
        (c) =>
          c.name.toLowerCase().includes(normalized) ||
          c.japanese.toLowerCase().includes(normalized) ||
          c.shortDescription.toLowerCase().includes(normalized)
      )
    : [];

  const totalResults = matchedBikes.length + matchedMods.length + matchedCultures.length;

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/85 backdrop-blur-md transition-opacity">
      <div
        className="w-full max-w-2xl bg-zoku-surface border border-zoku-border shadow-2xl rounded-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-6 py-4 border-b border-zoku-border">
          <Search className="w-5 h-5 text-zoku-muted mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search motorcycles, modifications, cultures, or specifications..."
            className="w-full bg-transparent text-zoku-white placeholder:text-zoku-muted focus:outline-none text-base font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-zoku-muted hover:text-zoku-white p-1 mr-2"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-widest text-zoku-muted hover:text-zoku-white px-2 py-1 border border-zoku-border"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
          {!normalized ? (
            <div className="py-8 text-center text-zoku-muted space-y-3">
              <p className="text-xs uppercase tracking-[0.2em]">Quick Jump</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Kawasaki 750RS Z2', 'Honda CB750 Four', 'Rocket Fairings', 'Oni-han', 'Bōsōzoku', 'Takeyari'].map((quick) => (
                  <button
                    key={quick}
                    onClick={() => setQuery(quick)}
                    className="text-xs px-3 py-1.5 bg-zoku-card border border-zoku-border/60 text-zoku-gray hover:text-zoku-white hover:border-zoku-red transition-colors"
                  >
                    {quick}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-zoku-muted space-y-2">
              <p className="text-sm font-light">No records found for &ldquo;{query}&rdquo;.</p>
              <p className="text-xs tracking-wider uppercase">Try searching by model, manufacturer, or modification style.</p>
            </div>
          ) : (
            <>
              {/* Cultures */}
              {matchedCultures.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-zoku-muted font-medium">
                    CULTURES ({matchedCultures.length})
                  </div>
                  <div className="divide-y divide-zoku-border/40">
                    {matchedCultures.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => handleSelect(c.status === 'available' ? `/cultures/${c.id}` : `/cultures/${c.id}`)}
                        className="py-3 px-3 hover:bg-zoku-card cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-zoku-white group-hover:text-zoku-red transition-colors">
                              {c.name}
                            </span>
                            <span className="text-xs text-zoku-muted font-jp">
                              {c.japanese}
                            </span>
                            {c.status === 'coming_soon' && (
                              <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 border border-zoku-border text-zoku-muted">
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zoku-gray line-clamp-1 mt-0.5 font-light">
                            {c.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zoku-muted group-hover:text-zoku-white group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Motorcycles */}
              {matchedBikes.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-zoku-muted font-medium">
                    MOTORCYCLES ({matchedBikes.length})
                  </div>
                  <div className="divide-y divide-zoku-border/40">
                    {matchedBikes.map((bike) => (
                      <div
                        key={bike.id}
                        onClick={() => handleSelect(`/motorcycles/${bike.id}`)}
                        className="py-3 px-3 hover:bg-zoku-card cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={bike.image}
                            alt={bike.name}
                            className="w-12 h-10 object-cover bg-black"
                          />
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-zoku-white group-hover:text-zoku-red transition-colors">
                                {bike.name}
                              </span>
                              <span className="text-xs text-zoku-muted">
                                {bike.productionYears}
                              </span>
                            </div>
                            <p className="text-xs text-zoku-gray line-clamp-1 mt-0.5 font-light">
                              {bike.specs.engine} • {bike.specs.displacement}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zoku-muted group-hover:text-zoku-white group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modifications */}
              {matchedMods.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-zoku-muted font-medium">
                    MODIFICATIONS ({matchedMods.length})
                  </div>
                  <div className="divide-y divide-zoku-border/40">
                    {matchedMods.map((mod) => (
                      <div
                        key={mod.id}
                        onClick={() => handleSelect(`/modifications`)}
                        className="py-3 px-3 hover:bg-zoku-card cursor-pointer flex items-center justify-between group transition-colors"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-zoku-white group-hover:text-zoku-red transition-colors">
                              {mod.name}
                            </span>
                            <span className="text-xs text-zoku-muted font-jp">
                              {mod.japanese}
                            </span>
                          </div>
                          <p className="text-xs text-zoku-gray line-clamp-1 mt-0.5 font-light">
                            {mod.tagline}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zoku-muted group-hover:text-zoku-white group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-3 border-t border-zoku-border/40 bg-zoku-dark text-[11px] text-zoku-muted flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <CornerDownLeft className="w-3.5 h-3.5" /> Press Enter or click to navigate
          </span>
          <span>ZOKU ARCHIVE INDEX</span>
        </div>
      </div>
    </div>
  );
};
