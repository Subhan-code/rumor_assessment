import { Host, RoomItem, CabinetDiscoveryItem, TimelinePhase } from './types';

export const EVENT_DATA = {
  title: 'Aftertaste × USM',
  subtitle: 'The Collector is Away',
  headline: 'THE COLLECTOR IS AWAY. / THE APARTMENT IS OPEN.',
  dateFull: 'Thursday, September 24',
  dateShort: 'Thu, Sep 24',
  armoryNote: 'Opening Night of Armory Week',
  venueName: 'USM Studio Apartment',
  address: '53 Scott Ave, Brooklyn, NY 11237',
  city: 'New York',
  phonePolicy: 'Strict Phone-Free Sensory Environment',
  dinnerGuestCount: '30 VIP Guests',
  aftersGuestCount: '70+ Additional Guests',
  signOff: 'Leave an Aftertaste.',
};

export const INVITATION_COPY = {
  salutation: 'Dear guest,',
  lines: [
    'You are cordially invited to dinner at 53 Scott Ave.',
    'The collector is away. The apartment is open.',
    'Stay long enough, it may start to look like your own.',
  ],
};

export const ROOMS: RoomItem[] = [
  {
    id: 'dining-room',
    name: 'Dining Room',
    tagline: 'The 30-Seat Table',
    objects: ['Hand-thrown ceramic plates', 'Wax taper candles', 'Belgian linen runners', 'Curated flatware'],
    description:
      'The ceremonial heart of the apartment. Thirty seats surrounding an extended monolithic surface, lit solely by candle flames and daylight fading over Scott Avenue.',
    sensoryDetail: 'Scent of beeswax, aged timber, and roasted botanical infusions.',
    imageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'office',
    name: 'Office',
    tagline: 'The Archive & Desk',
    objects: ['Architectural monographs', 'Heavy brass desk lamp', 'Mechanical typewriter', 'Collector correspondence'],
    description:
      'Shelves of archival design literature encased in USM Haller modular steel. A heavy drafting desk displaying unopened letters and original exhibition sketches.',
    sensoryDetail: 'Faint ink, parchment dust, and the rhythmic click of analog key switches.',
    imageUrl:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'listening-room',
    name: 'Listening Room',
    tagline: 'Analog Acoustics',
    objects: ['Archival vinyl library', 'Custom tube amplifiers', 'Audiophile turntable', 'Felt acoustic baffles'],
    description:
      'A phone-free sanctuary wired for deep listening. Rare pressings from ambient, avant-jazz, and Japanese minimalism running through glowing vacuum tubes.',
    sensoryDetail: 'Warm vinyl crackle, walnut wood oil, and low-frequency resonance.',
    imageUrl:
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'conversation-room',
    name: 'Conversation Room',
    tagline: 'Intimate Parlor',
    objects: ['Low sculptural lounge chairs', 'Carved stone vessels', 'Archival art folios', 'Handwoven wool rugs'],
    description:
      'Sunken seating designed to collapse social distance. No screens, no wrist notifications—only face-to-face exchange among 30 curated creative minds.',
    sensoryDetail: 'Soft wool upholstery, muted amber reflections, and unbroken dialogues.',
    imageUrl:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'bar-kitchen',
    name: 'Bar & Kitchen',
    tagline: 'The Sensory Dispensary',
    objects: ['Smoked glassware', 'Botanical tinctures', 'Raw marble counter', 'Happenings NY prep station'],
    description:
      'Where flavor begins. Chefs from Happenings NY assemble edible vignettes and low-intervention wine pairings in continuous conversation with guests.',
    sensoryDetail: 'Citrus peel oils, macerated stone fruits, and sea salt.',
    imageUrl:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
  },
];

export const CABINET_ITEMS: CabinetDiscoveryItem[] = [
  {
    id: 'menu',
    title: 'The Menu',
    category: 'Food Design · Happenings NY',
    preview: 'A multi-act sensory sequence choreographed to unfold with the room lighting.',
    fullDescription:
      'Designed exclusively for the evening by Happenings NY. A five-movement culinary progression exploring botanical bitterness, fermented depth, and tactile textures without cutlery.',
    details: [
      'Act I — Raw Wild Botanicals & Bitter Melon Infusions',
      'Act II — Embers, Burnt Leek, & Cultured Whey Broth',
      'Act III — Slow Braised Heritage Protein & Foraged Lichen',
      'Act IV — Compressed Stone Fruit & Smoked Sea Salt',
      'Wine Pairings — Curated low-intervention biodynamic selections',
    ],
    accentText: 'CHOREOGRAPHED DINING',
  },
  {
    id: 'artist',
    title: 'Artist Catalog',
    category: 'Dylan Rose Rheingold',
    preview: 'Exhibition monograph featuring surrealism and abstract figuration on identity.',
    fullDescription:
      'A dedicated folio documenting Dylan Rose Rheingold’s commissioned series installed throughout the USM apartment. Layered media explorations of cultural hybridity and intimate internal architectures.',
    details: [
      'Featured Series: "Luminous Dreamscapes in Domestic Limbo"',
      'Medium: Oil, pastel, torn canvas, and collected ephemera',
      'Solo NYC Studio Residency 2026',
      'Permanent installations in the Dining and Listening Rooms',
    ],
    accentText: 'ORIGINAL COMMISSION',
  },
  {
    id: 'seat',
    title: 'Seating Assignment',
    category: 'Table Placement · VIP',
    preview: 'Your dedicated seat at the 30-guest collector banquet table.',
    fullDescription:
      'Intentionally arranged to orchestrate unexpected dialogues between artists, architects, collectors, and culinary visionaries. Place card crafted from custom embossed duplex cardstock.',
    details: [
      'Table: Monolithic 30-Seat Birch & Steel Table',
      'Seat: North Wing, Facing Central Dylan Rose Rheingold Triptych',
      'Companion: Curated proximity to fellow design and art contributors',
    ],
    accentText: 'CONFIDENTIAL PLACEMENT',
  },
  {
    id: 'raffle',
    title: 'USM Raffle Ticket',
    category: 'Archival Furniture Piece',
    preview: 'A personalized numbered brass token granting entry into the USM Haller lottery.',
    fullDescription:
      'One guest will depart with a custom modular USM Haller architectural side unit, finished in the bespoke Aftertaste signature palette and serial-numbered for the event.',
    details: [
      'Piece: USM Haller Modular Storage Unit (Pure Color Spec)',
      'Draw Time: 10:30 PM in the Listening Room',
      'Authentication: Signed by USM Architectural Director',
    ],
    accentText: 'ONE OF ONE',
  },
  {
    id: 'collectible',
    title: 'Collectible Item',
    category: 'Tactile Keepsake',
    preview: 'A solid brass weighted apartment key stamped with your individual number.',
    fullDescription:
      'Machined from unlacquered solid brass, each key is weighted to anchor the physical memory of the evening. It bears the Aftertaste imprint and your permanent guest registry number.',
    details: [
      'Material: Solid milled naval brass (unlacquered, will patina)',
      'Dimensions: 85mm × 24mm × 4mm (142g weight)',
      'Registry Number: Matched to your personal USM locker compartment',
    ],
    accentText: 'LIFETIME ARTIFACT',
  },
];

export const TIMELINE: TimelinePhase[] = [
  {
    time: '7:00 PM',
    title: 'Discovery Begins',
    subtitle: 'The Search & Reception',
    description:
      'Guests arrive at 53 Scott Ave. Phones are safely checked at the concierge. Each guest receives their numbered key and begins exploring the five open rooms.',
    capacity: '30 VIP Guests',
  },
  {
    time: '8:30 PM',
    title: 'Seated VIP Dinner',
    subtitle: 'Curated for Connection',
    description:
      'Thirty guests take their places around the candlelit table. Food design by Happenings NY unfolds across five continuous sensory acts with paired wines.',
    capacity: '30 VIP Guests',
  },
  {
    time: '10:00 PM',
    title: 'The Afters',
    subtitle: 'The Collector’s Apartment Opens',
    description:
      'The apartment doors unlock for 70+ additional guests. Curated sound sets in the Listening Room, digestifs at the bar, and open exploration until late.',
    capacity: '70+ Additional Guests',
  },
];

export const HOSTS: Host[] = [
  {
    id: 'aftertaste',
    name: 'Aftertaste',
    role: 'Host & Cultural Curator',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
    profileUrl: 'https://therumor.com/h/aftertaste',
    instagramUrl: 'https://instagram.com/aftertaste.nyc',
  },
  {
    id: 'usm-haller',
    name: 'USM Modular Furniture',
    role: 'Host & Venue Partner',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
    profileUrl: 'https://therumor.com/h/usm',
    instagramUrl: 'https://instagram.com/usmmodularfurniture',
  },
  {
    id: 'happenings-ny',
    name: 'Happenings NY',
    role: 'Culinary Direction & Food Design',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80',
    profileUrl: 'https://therumor.com/h/happeningsny',
    instagramUrl: 'https://instagram.com/happeningsny',
  },
  {
    id: 'dylan-rose-rheingold',
    name: 'Dylan Rose Rheingold',
    role: 'Spotlight Artist',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80',
    profileUrl: 'https://therumor.com/h/dylanroserheingold',
    instagramUrl: 'https://instagram.com/dylanroserheingold',
  },
];

export const ARTIST_DATA = {
  name: 'Dylan Rose Rheingold',
  headline: 'SPOTLIGHT ARTIST — DYLAN ROSE RHEINGOLD',
  location: 'New York City',
  bio: 'Dylan Rose Rheingold is a New York-based visual artist exploring the fault lines between domestic realism and psychological surrealism. Through layered media, oil, raw pigment, and textured canvases, her work examines identity, cultural hybridity, and intimate memories preserved within personal spaces.',
  artworkTitle: 'The Collector’s Soliloquy, 2026',
  medium: 'Oil, raw pigment, dry pastel, and reclaimed linen',
  dimensions: '72 × 96 inches',
  imageUrl:
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=80',
};
