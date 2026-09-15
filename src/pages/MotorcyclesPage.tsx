import React, { useState, useMemo } from 'react';
import { motorcyclesData } from '../data/motorcycles';
import { culturesData } from '../data/cultures';
import { MotorcycleGrid } from '../components/motorcycle/MotorcycleGrid';

export const MotorcyclesPage: React.FC = () => {
  const [selectedCulture, setSelectedCulture] = useState<string>('all');
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all');
  const [selectedEra, setSelectedEra] = useState<string>('all');

  const manufacturers = ['all', 'Kawasaki', 'Honda', 'Suzuki', 'Yamaha'];
  const eras = ['all', '1970s', '1980s'];

  const filteredBikes = useMemo(() => {
    return motorcyclesData.filter((bike) => {
      const matchCulture =
        selectedCulture === 'all' || bike.cultureIds.includes(selectedCulture);
      const matchMaker =
        selectedManufacturer === 'all' || bike.manufacturer === selectedManufacturer;
      const matchEra =
        selectedEra === 'all' || bike.era === selectedEra;
      return matchCulture && matchMaker && matchEra;
    });
  }, [selectedCulture, selectedManufacturer, selectedEra]);

  return (
    <div className="w-full bg-zoku-black text-zoku-white pt-32 pb-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="border-b border-white/[0.06] pb-8 space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono">
            ARCHIVAL CATALOGUE
          </p>
          <h1 className="text-4xl sm:text-6xl font-display font-light tracking-tight text-zoku-white">
            MOTORCYCLES
          </h1>
          <p className="text-sm sm:text-base text-zoku-gray font-light max-w-2xl leading-relaxed">
            Explore motorcycles connected to Japanese motorcycle cultures.
          </p>
        </div>

        {/* Minimal Unobtrusive Filters */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-zoku-gray py-2 border-b border-white/[0.04]">
          
          {/* Culture Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-widest text-zoku-muted font-mono">Culture:</span>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setSelectedCulture('all')}
                className={`px-2.5 py-1 text-xs uppercase tracking-wider transition-colors ${
                  selectedCulture === 'all'
                    ? 'text-white border-b-2 border-zoku-red'
                    : 'text-zoku-muted hover:text-white'
                }`}
              >
                All
              </button>
              {culturesData.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCulture(c.id)}
                  className={`px-2.5 py-1 text-xs uppercase tracking-wider transition-colors ${
                    selectedCulture === c.id
                      ? 'text-white border-b-2 border-zoku-red'
                      : 'text-zoku-muted hover:text-white'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Manufacturer Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-widest text-zoku-muted font-mono">Manufacturer:</span>
            <div className="flex items-center space-x-1">
              {manufacturers.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedManufacturer(m)}
                  className={`px-2.5 py-1 text-xs uppercase tracking-wider transition-colors ${
                    selectedManufacturer === m
                      ? 'text-white border-b-2 border-zoku-red'
                      : 'text-zoku-muted hover:text-white'
                  }`}
                >
                  {m === 'all' ? 'All' : m}
                </button>
              ))}
            </div>
          </div>

          {/* Era Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-widest text-zoku-muted font-mono">Era:</span>
            <div className="flex items-center space-x-1">
              {eras.map((era) => (
                <button
                  key={era}
                  onClick={() => setSelectedEra(era)}
                  className={`px-2.5 py-1 text-xs uppercase tracking-wider transition-colors ${
                    selectedEra === era
                      ? 'text-white border-b-2 border-zoku-red'
                      : 'text-zoku-muted hover:text-white'
                  }`}
                >
                  {era === 'all' ? 'All' : era}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Filters button if any active */}
          {(selectedCulture !== 'all' || selectedManufacturer !== 'all' || selectedEra !== 'all') && (
            <button
              onClick={() => {
                setSelectedCulture('all');
                setSelectedManufacturer('all');
                setSelectedEra('all');
              }}
              className="text-[10px] uppercase tracking-widest text-zoku-red hover:underline ml-auto"
            >
              Reset Filters
            </button>
          )}

        </div>

        {/* Motorcycle Grid */}
        {filteredBikes.length === 0 ? (
          <div className="py-24 text-center text-zoku-muted space-y-2">
            <p className="text-base font-light">No motorcycle records match the selected filters.</p>
            <button
              onClick={() => {
                setSelectedCulture('all');
                setSelectedManufacturer('all');
                setSelectedEra('all');
              }}
              className="text-xs uppercase tracking-widest text-zoku-red hover:underline"
            >
              Show all motorcycles
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-zoku-muted tracking-widest uppercase">
              SHOWING {filteredBikes.length} {filteredBikes.length === 1 ? 'RECORD' : 'RECORDS'}
            </div>
            <MotorcycleGrid motorcycles={filteredBikes} columns={3} />
          </div>
        )}

      </div>
    </div>
  );
};
