import type { Culture, Source } from '../../types';

const bosozokuSources: Source[] = [
  {
    id: 'npa-whitepaper-1981',
    title: 'Police White Paper (1981): Trends and Countermeasures Regarding Bōsōzoku',
    author: 'National Police Agency of Japan',
    year: '1981',
    publication: 'Government of Japan Printing Bureau',
    type: 'archive',
    notes: 'Documented the peak of 754 groups and approximately 39,000 members recorded in November 1980, alongside early Kaminari-zoku history from 1955–1959.',
    url: 'https://www.npa.go.jp/hakusyo/s56/s560200.html'
  },
  {
    id: 'gerteis-2026',
    title: 'Engines of Deviance: Newspapers, Traffic Cops, and Youth Rebellion in 1970s Japan',
    author: 'Christopher Gerteis',
    year: '2026',
    publication: 'International Journal of Asian Studies',
    type: 'academic',
    notes: 'Historical analysis of the consolidation of the term Bōsōzoku by Kanagawa police and national media in 1972, formation riding dynamics, hand signals, and exhaust modifications.',
    url: 'https://www.cambridge.org/core/journals/international-journal-of-asian-studies/article/engines-of-deviance-newspapers-traffic-cops-and-youth-rebellion-in-1970s-japan/20E45152B23EDFCBA147700CBCCF259A'
  },
  {
    id: 'npa-whitepaper-1979',
    title: 'Police White Paper (1979): Introduction of Joint Dangerous Act Provisions',
    author: 'National Police Agency of Japan',
    year: '1979',
    publication: 'Government of Japan Printing Bureau',
    type: 'archive',
    notes: 'Documented the November 1978 revision to the Road Traffic Act prohibiting joint dangerous acts and the subsequent disbandment of formal groups.',
    url: 'https://www.npa.go.jp/hakusyo/s54/s540600.html'
  },
  {
    id: 'npa-whitepaper-1976',
    title: 'Police White Paper (1976): Youth Subcultures and Traffic Enforcement',
    author: 'National Police Agency of Japan',
    year: '1976',
    publication: 'Government of Japan Printing Bureau',
    type: 'archive',
    notes: 'Early administrative analysis of mid-1970s group riding patterns and regional network formation following licensing reforms.',
    url: 'https://www.npa.go.jp/hakusyo/s51/s510600.html'
  },
  {
    id: 'sato-1991',
    title: 'Kamikaze Biker: Parody and Anomy in Affluent Japan',
    author: 'Ikuya Sato',
    year: '1991',
    publication: 'University of Chicago Press',
    type: 'academic',
    notes: 'Pioneering ethnographic and sociological field study documenting subcultural aesthetics, throttle work (onkyō), and group identity.',
  }
];

export const bosozokuCulture: Culture = {
  id: 'bosozoku',
  name: 'BŌSŌZOKU',
  japanese: '暴走族',
  romaji: 'Bōsōzoku',
  status: 'available',
  shortDescription: 'The defining counterculture of postwar Japanese roads, known for exaggerated fairings, synchronized exhaust rhythms, and collective nocturnal runs.',
  heroImage: '/images/hero_bike.jpg',
  thumbnailImage: '/images/culture_bosozoku.jpg',
  motorcycleIds: [
    'kawasaki-750rs-z2',
    'honda-cb750-four',
    'kawasaki-z400fx',
    'honda-cbx400f',
  ],
  hasModifications: true,
  sections: [
    {
      id: 'origins',
      title: 'ORIGINS',
      eyebrow: 'HISTORICAL TIMELINE',
      summary: 'The phenomenon grew from Japan\'s postwar youth motorcycle scene, where speed, noise, machines, and group identity collided on the road. Police records trace early forms of this riding culture to the Kaminari-zoku of the late 1950s, while the broader Bōsōzoku category emerged and became nationally recognizable during the 1970s.',
      blocks: [
        {
          type: 'timeline',
          items: [
            {
              year: '1950s',
              event: 'Around 1955, young riders chasing speed, spectacle, and mechanical defiance began appearing under the moniker Kaminari-zoku — the "Thunder Tribe." By the close of the decade, the label was firmly established in public records and social reporting: loud modified exhausts, high-speed runs, weaving through traffic, nighttime velocity contests, and acrobatic stunt riding.'
            },
            {
              year: '1972',
              event: 'What had been scattered regional scenes across Tokyo, Kanagawa, and beyond began acquiring a unified national identity. During 1972, police authorities and major newspapers like the Yomiuri increasingly grouped diverse youth motorcycle clubs under the name Bōsōzoku — turning local subcultural pockets into an unmistakable nationwide phenomenon.'
            },
            {
              year: '1975',
              event: 'Japan\'s revised motorcycle licensing framework established the 400cc dividing line for ordinary motorcycle licenses. The regulatory distinction helped shape the domestic market for mid-sized machines, including the 400cc four-cylinder motorcycles that would become deeply associated with Japanese motorcycle culture.'
            },
            {
              year: '1980',
              event: 'By November 1980, the National Police Agency recorded 754 Bōsōzoku groups and approximately 39,000 members — the highest nationwide figure in the NPA\'s documented series at that point. Highways and city avenues became crowded with machines, screaming four-into-one exhausts, and rival group insignias that were impossible to ignore.'
            }
          ]
        }
      ]
    },
    {
      id: 'visual-culture',
      title: 'VISUAL CULTURE',
      eyebrow: 'ANTHROPOLOGY & SEMIOTICS',
      summary: 'A radical visual grammar of chrome, noise, and sculpted fiberglass. Machines and riders became rolling declarations of identity, built to be seen and recognized long before their engines could be silenced.',
      blocks: [
        {
          type: 'elements',
          items: [
            {
              name: 'Tokkō-fuku (特攻服) — Wearable Declarations',
              description: 'Long boiler suits and modified coats transformed into wearable declarations of allegiance. Densely hand-embroidered with kanji slogans, club heraldry, regional territory marks, and personal ranks, the garments turned riders into walking emblems of defiance.'
            },
            {
              name: 'Slogan Calligraphy & Ateji (夜露死苦)',
              description: 'Poetic phonetic wordplay (ateji) and bold brush calligraphy stenciled across fairings and embroidered onto garments. Slogans like "Kenka Jōtō" (Bring On The Fight) and "Yoroshiku" announced presence with unrepentant street bravado.'
            },
            {
              name: 'Sculptural Silhouettes & Architecture',
              description: 'Towering rocket cowls hoisted skyward on custom stages, tiered three-dan seats extending high into the night sky, and radical raked stances. These machines were built to break factory proportions, converting production roadsters into kinetic, architectural monuments.'
            }
          ]
        }
      ]
    },
    {
      id: 'riding-culture',
      title: 'RIDING CULTURE',
      eyebrow: 'TACTICS & ACOUSTICS',
      summary: 'Riding was more than getting from one place to another. Groups could move as a single spectacle — formations, hand signals, leaders setting the pace, and engines deliberately announcing their presence. The road became part transportation, part performance, part declaration of identity.',
      blocks: [
        {
          type: 'elements',
          items: [
            {
              name: 'Shisō (集団走行 / Coordinated Formations)',
              description: 'Groups moved in coordinated, synchronized packs. Lead riders set the pace and directional trajectory, while perimeter bikes controlled lane positioning and held intersections to ensure the convoy moved as a unified procession.'
            },
            {
              name: 'Onkyō & Acoustic Modulation (音響・コール)',
              description: 'The exhaust note was an acoustic signature. Riders used rhythmic, rapid clutch and throttle modulation to generate musical patterns with unbaffled straight-pipe exhausts, transforming raw mechanical combustion into synchronized street soundscapes.'
            },
            {
              name: 'Flag Protocols & Visual Signaling',
              description: 'Large silk flags bearing group crests and prefecture names were held upright by pillion riders against high-speed headwinds, while dynamic hand signals and auxiliary lamps transmitted commands down the length of the formation.'
            }
          ]
        }
      ]
    },
    {
      id: 'decline-legacy',
      title: 'DECLINE & LEGACY',
      eyebrow: 'HISTORICAL CLOSURE',
      summary: 'Legal pressure, changing youth culture, and changing riding patterns gradually reshaped the scene. The huge formations that once dominated the roads became less common, while smaller and more dispersed forms of activity appeared. Bōsōzoku did not simply vanish — its visual language, machines, and mythology continued into later motorcycle enthusiast and preservation scenes.',
      blocks: [
        {
          type: 'points',
          items: [
            '1978 LEGAL CHANGE: The 1978 revision of the Road Traffic Act introduced a prohibition on joint dangerous acts. The NPA reported that many groups disbanded around the introduction of the new provision, while enforcement became more systematic.',
            '1980 PEAK: In November 1980, the NPA recorded approximately 39,000 members across 754 groups — its highest figure in the series at that point. For a moment, the Bōsōzoku presence on Japan\'s roads had reached a scale that was impossible to ignore.',
            'LATER TRANSFORMATION: By the late 1980s and early 1990s, NPA reports described increasing numbers of riders outside formal groups and a shift from very large organized rides toward smaller, more dispersed activity. The culture changed shape rather than simply disappearing.'
          ]
        }
      ]
    }
  ],
  sources: bosozokuSources,

  /* Legacy field compatibility */
  origins: {
    era: '1950s — 1970s',
    summary: 'The phenomenon grew from Japan\'s postwar youth motorcycle scene, where speed, noise, machines, and group identity collided on the road. Police records trace early forms of this riding culture to the Kaminari-zoku of the late 1950s, while the broader Bōsōzoku category emerged and became nationally recognizable during the 1970s.',
    points: [
      {
        year: '1950s',
        event: 'Around 1955, young riders chasing speed, spectacle, and mechanical defiance began appearing under the moniker Kaminari-zoku — the "Thunder Tribe." By the close of the decade, the label was firmly established in public records and social reporting: loud modified exhausts, high-speed runs, weaving through traffic, nighttime velocity contests, and acrobatic stunt riding.'
      },
      {
        year: '1972',
        event: 'What had been scattered regional scenes across Tokyo, Kanagawa, and beyond began acquiring a unified national identity. During 1972, police authorities and major newspapers like the Yomiuri increasingly grouped diverse youth motorcycle clubs under the name Bōsōzoku — turning local subcultural pockets into an unmistakable nationwide phenomenon.'
      },
      {
        year: '1975',
        event: 'Japan\'s revised motorcycle licensing framework established the 400cc dividing line for ordinary motorcycle licenses. The regulatory distinction helped shape the domestic market for mid-sized machines, including the 400cc four-cylinder motorcycles that would become deeply associated with Japanese motorcycle culture.'
      },
      {
        year: '1980',
        event: 'By November 1980, the National Police Agency recorded 754 Bōsōzoku groups and approximately 39,000 members — the highest nationwide figure in the NPA\'s documented series at that point. Highways and city avenues became crowded with machines, screaming four-into-one exhausts, and rival group insignias that were impossible to ignore.'
      }
    ]
  },
  visualCulture: {
    summary: 'A radical visual grammar of chrome, noise, and sculpted fiberglass. Machines and riders became rolling declarations of identity, built to be seen and recognized long before their engines could be silenced.',
    elements: [
      {
        name: 'Tokkō-fuku (特攻服) — Wearable Declarations',
        description: 'Long boiler suits and modified coats transformed into wearable declarations of allegiance. Densely hand-embroidered with kanji slogans, club heraldry, regional territory marks, and personal ranks, the garments turned riders into walking emblems of defiance.'
      },
      {
        name: 'Slogan Calligraphy & Ateji (夜露死苦)',
        description: 'Poetic phonetic wordplay (ateji) and bold brush calligraphy stenciled across fairings and embroidered onto garments. Slogans like "Kenka Jōtō" (Bring On The Fight) and "Yoroshiku" announced presence with unrepentant street bravado.'
      },
      {
        name: 'Sculptural Silhouettes & Architecture',
        description: 'Towering rocket cowls hoisted skyward on custom stages, tiered three-dan seats extending high into the night sky, and radical raked stances. These machines were built to break factory proportions, converting production roadsters into kinetic, architectural monuments.'
      }
    ]
  },
  ridingCulture: {
    summary: 'Riding was more than getting from one place to another. Groups could move as a single spectacle — formations, hand signals, leaders setting the pace, and engines deliberately announcing their presence. The road became part transportation, part performance, part declaration of identity.',
    elements: [
      {
        name: 'Shisō (集団走行 / Coordinated Formations)',
        description: 'Groups moved in coordinated, synchronized packs. Lead riders set the pace and directional trajectory, while perimeter bikes controlled lane positioning and held intersections to ensure the convoy moved as a unified procession.'
      },
      {
        name: 'Onkyō & Acoustic Modulation (音響・コール)',
        description: 'The exhaust note was an acoustic signature. Riders used rhythmic, rapid clutch and throttle modulation to generate musical patterns with unbaffled straight-pipe exhausts, transforming raw mechanical combustion into synchronized street soundscapes.'
      },
      {
        name: 'Flag Protocols & Visual Signaling',
        description: 'Large silk flags bearing group crests and prefecture names were held upright by pillion riders against high-speed headwinds, while dynamic hand signals and auxiliary lamps transmitted commands down the length of the formation.'
      }
    ]
  },
  declineLegacy: {
    summary: 'Legal pressure, changing youth culture, and changing riding patterns gradually reshaped the scene. The huge formations that once dominated the roads became less common, while smaller and more dispersed forms of activity appeared. Bōsōzoku did not simply vanish — its visual language, machines, and mythology continued into later motorcycle enthusiast and preservation scenes.',
    points: [
      '1978 LEGAL CHANGE: The 1978 revision of the Road Traffic Act introduced a prohibition on joint dangerous acts. The NPA reported that many groups disbanded around the introduction of the new provision, while enforcement became more systematic.',
      '1980 PEAK: In November 1980, the NPA recorded approximately 39,000 members across 754 groups — its highest figure in the series at that point. For a moment, the Bōsōzoku presence on Japan\'s roads had reached a scale that was impossible to ignore.',
      'LATER TRANSFORMATION: By the late 1980s and early 1990s, NPA reports described increasing numbers of riders outside formal groups and a shift from very large organized rides toward smaller, more dispersed activity. The culture changed shape rather than simply disappearing.'
    ]
  }
};
