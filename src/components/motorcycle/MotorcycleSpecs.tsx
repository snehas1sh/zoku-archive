import React from 'react';
import type { MotorcycleSpecs as SpecsModel } from '../../types';

interface MotorcycleSpecsProps {
  specs: SpecsModel;
}

export const MotorcycleSpecs: React.FC<MotorcycleSpecsProps> = ({ specs }) => {
  const specList = [
    { label: 'Manufacturer', value: specs.manufacturer },
    { label: 'Production Run', value: specs.production },
    { label: 'Engine Architecture', value: specs.engine },
    { label: 'Displacement', value: specs.displacement },
    { label: 'Cooling System', value: specs.cooling },
    { label: 'Cylinder Count', value: specs.cylinders },
    { label: 'Maximum Power', value: specs.power },
    { label: 'Dry / Curb Weight', value: specs.weight },
    ...(specs.transmission ? [{ label: 'Transmission', value: specs.transmission }] : []),
    ...(specs.topSpeed ? [{ label: 'Top Velocity', value: specs.topSpeed }] : []),
  ];

  return (
    <div className="border border-zoku-border/80 bg-zoku-surface/40">
      <div className="px-6 py-4 border-b border-zoku-border bg-zoku-card/60 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.25em] text-zoku-muted font-mono font-medium">
          FACTORY SPECIFICATIONS
        </span>
        <span className="text-[10px] uppercase tracking-widest text-zoku-red">
          TECHNICAL DATA
        </span>
      </div>

      <div className="divide-y divide-zoku-border/50">
        {specList.map((item, idx) => (
          <div
            key={idx}
            className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1 sm:gap-4 hover:bg-white/[0.02] transition-colors"
          >
            <span className="text-zoku-muted font-medium tracking-wide uppercase text-[11px] font-sans">
              {item.label}
            </span>
            <span className="text-zoku-white font-mono text-left sm:text-right font-light">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
