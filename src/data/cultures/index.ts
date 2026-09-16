import type { Culture } from '../../types';
import { bosozokuCulture } from './bosozoku';

export { bosozokuCulture };

export const culturesData: Culture[] = [
  bosozokuCulture,
  {
    id: 'hashiriya',
    name: 'HASHIRIYA',
    japanese: '走り屋',
    romaji: 'Hashiriya',
    status: 'coming_soon',
    shortDescription: 'Technical mountain pass and expressway racers focused purely on speed, mechanical tuning, and apex lines.',
    heroImage: '/images/culture_hashiriya_hero.jpg',
    thumbnailImage: '/images/culture_hashiriya.jpg',
    sections: [],
    sources: []
  },
  {
    id: 'kaminari-zoku',
    name: 'KAMINARI-ZOKU',
    japanese: '雷族',
    romaji: 'Kaminari-zoku',
    status: 'coming_soon',
    shortDescription: 'The early postwar pioneers whose straight-pipe mufflers roared like thunder through Tokyo in the late 1950s.',
    heroImage: '/images/culture_kaminari_hero.jpg',
    thumbnailImage: '/images/culture_kaminari.jpg',
    sections: [],
    sources: []
  },
  {
    id: 'racing',
    name: 'RACING',
    japanese: 'レース',
    romaji: 'Rēsu',
    status: 'coming_soon',
    shortDescription: 'The legendary privateer and production circuit racing heritage that drove Japan to global motorcycle supremacy.',
    heroImage: '/images/culture_racing_hero.jpg',
    thumbnailImage: '/images/culture_racing.jpg',
    sections: [],
    sources: []
  }
];
