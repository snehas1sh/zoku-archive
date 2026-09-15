import React from 'react';
import type { Motorcycle } from '../../types';
import { MotorcycleCard } from './MotorcycleCard';

interface MotorcycleGridProps {
  motorcycles: Motorcycle[];
  columns?: 2 | 3 | 4;
}

export const MotorcycleGrid: React.FC<MotorcycleGridProps> = ({
  motorcycles,
  columns = 2,
}) => {
  const colClasses = {
    2: 'grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10',
    3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8',
    4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6',
  };

  return (
    <div className={colClasses[columns]}>
      {motorcycles.map((motorcycle) => (
        <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
      ))}
    </div>
  );
};
