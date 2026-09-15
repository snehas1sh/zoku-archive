import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { culturesData } from '../data/cultures';
import { ComingSoon } from '../components/culture/ComingSoon';

export const CultureComingSoonPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (id === 'bosozoku') {
    return <Navigate to="/cultures/bosozoku" replace />;
  }

  const culture = culturesData.find((c) => c.id === id);

  if (!culture) {
    return (
      <ComingSoon
        title="UNLISTED CULTURE"
        japanese="未登録"
      />
    );
  }

  return (
    <ComingSoon
      title={culture.name}
      japanese={culture.japanese}
      romaji={culture.romaji}
      heroImage={culture.heroImage}
    />
  );
};
