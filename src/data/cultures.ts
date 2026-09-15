import type { Culture } from '../types';
import { sourcesData } from './sources';

export const culturesData: Culture[] = [
  {
    id: 'bosozoku',
    name: 'BŌSŌZOKU',
    japanese: '暴走族',
    romaji: 'Bōsōzoku',
    status: 'available',
    shortDescription: 'The defining counterculture of postwar Japanese roads, known for exaggerated fairings, synchronized exhaust rhythms, and collective nocturnal runs.',
    heroImage: '/images/hero_bike.jpg',
    thumbnailImage: '/images/culture_bosozoku.jpg',
    origins: {
      era: '1950s — 1970s',
      summary: 'The subculture evolved in post-WWII Japan, initially rooted in returning veterans and disaffected youth seeking mechanical expression on emerging highway systems.',
      points: [
        {
          year: '1950s',
          event: 'Precursors emerged as Kaminari-zoku ("Thunder Tribe"), racing modified imports and early domestic singles along Tokyo\'s Ginza and coastal highways.'
        },
        {
          year: '1972',
          event: 'The term "Bōsōzoku" was first coined by local media and police in Toyama Prefecture to categorize collective motorcycle riding groups.'
        },
        {
          year: '1975',
          event: 'Revision of the Japanese Driver\'s License system created the 400cc ceiling for mid-tier licenses, solidifying the 400cc inline-four as the staple platform for youth.'
        },
        {
          year: '1980 — 1982',
          event: 'Peak membership nationwide reached over 42,000 registered participants across hundreds of independent regional alliances.'
        }
      ]
    },
    visualCulture: {
      summary: 'A distinct visual language that combined elements of traditional Japanese craftsmanship, military uniform cuts, and radical mechanical restructuring.',
      elements: [
        {
          name: 'Tokkō-fuku (特攻服)',
          description: 'Special attack coats derived from pre-war uniforms, densely embroidered with kanji slogans, regional affiliation, personal rank, and ancestral motifs.'
        },
        {
          name: 'Slogan Typography',
          description: 'Ateji wordplay and heavy calligraphy expressing non-conformist creeds (such as "Kenka Jōtō" — Bring On The Fight) stitched into garments and painted onto fairings.'
        },
        {
          name: 'Silhouette Exaggeration',
          description: 'Elevated rocket cowls, vertical backrests, and upturned exhaust pipes designed to break the conventional silhouette of production machinery.'
        }
      ]
    },
    ridingCulture: {
      summary: 'Riding was conducted in highly disciplined formations rather than chaotic street racing, governed by tactical command roles and sound orchestration.',
      elements: [
        {
          name: 'Shisō (集団走行 / Collective Runs)',
          description: 'Synchronized formations led by the Sentōsha (lead rider) and flanked by guard bikes blocking intersections to keep the convoy uninterrupted.'
        },
        {
          name: 'Onkyō / Rhythmic Throttle (音響・アクセルワーク)',
          description: 'The practice of rhythmic, rapid clutch-and-throttle blipping to produce musical patterns with straight-pipe exhausts, replacing horn signaling.'
        },
        {
          name: 'Flag Protocol',
          description: 'Large silk flags bearing group crests and prefecture names were held upright by the pillion rider as the visual focal point of the group.'
        }
      ]
    },
    declineLegacy: {
      summary: 'Legislative pressure and demographic shifts transformed the culture from street defiance to preservationist motorcycle appreciation.',
      points: [
        '2004 Road Traffic Act Amendments granted police the power to arrest riders for dangerous group riding without requiring proof of individual traffic violations.',
        'Economic stagnation in the late 1990s made motorcycle ownership and custom metal fabrication less accessible to adolescent demographics.',
        'Modern evolution into "Kyūshakai" (旧車會) — registered vintage motorcycle clubs that restore and appreciate 1970s–80s Japanese classics within legal frameworks.'
      ]
    },
    sources: [
      sourcesData[0], // Ikuya Sato
      sourcesData[1], // Young Machine
      sourcesData[3], // NPA Whitepaper
      sourcesData[4]  // Vintage Moto Encyclopedia
    ]
  },
  {
    id: 'hashiriya',
    name: 'HASHIRIYA',
    japanese: '走り屋',
    romaji: 'Hashiriya',
    status: 'coming_soon',
    shortDescription: 'Technical mountain pass and expressway racers focused purely on speed, mechanical tuning, and apex lines.',
    heroImage: '/images/culture_hashiriya_hero.jpg',
    thumbnailImage: '/images/culture_hashiriya.jpg',
    origins: {
      era: '1980s — 2000s',
      summary: 'Research for this culture is currently being developed.',
      points: []
    },
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
    origins: {
      era: 'Late 1950s — 1960s',
      summary: 'Research for this culture is currently being developed.',
      points: []
    },
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
    origins: {
      era: '1960s — 1990s',
      summary: 'Research for this culture is currently being developed.',
      points: []
    },
    sources: []
  }
];
