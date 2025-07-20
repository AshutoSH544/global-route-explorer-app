export const mockTrips = [
  {
    id: "1",
    title: "Pacific Coast Highway Adventure",
    description: "Experience the breathtaking beauty of California's coastline on this epic road trip from San Francisco to Los Angeles.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    duration: "7 days",
    distance: "500 miles",
    difficulty: "Easy" as const,
    rating: 4.8,
    reviewCount: 247,
    price: "Free",
    tags: ["Coastal", "Scenic", "Photography", "Beach"],
    author: "Sarah Chen",
    highlights: [
      "Drive across the Golden Gate Bridge",
      "Stop at Big Sur's McWay Falls",
      "Explore Monterey Bay Aquarium",
      "Visit Hearst Castle",
      "End in sunny Los Angeles"
    ],
    fullDescription: "This iconic road trip takes you along one of the world's most beautiful coastlines. Starting in San Francisco, you'll wind your way south through towering redwoods, dramatic cliffs, pristine beaches, and charming coastal towns. The Pacific Coast Highway offers endless opportunities for photography, wildlife viewing, and unforgettable memories."
  },
  {
    id: "2",
    title: "Route 66 Classic Journey",
    description: "Take the legendary Route 66 from Chicago to Santa Monica for the ultimate American road trip experience.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800",
    duration: "14 days",
    distance: "2,400 miles",
    difficulty: "Moderate" as const,
    rating: 4.9,
    reviewCount: 183,
    price: "Free",
    tags: ["Historic", "Americana", "Desert", "Culture"],
    author: "Mike Rodriguez",
    highlights: [
      "Start at Chicago's Grant Park",
      "Visit Cadillac Ranch in Texas",
      "Explore Grand Canyon National Park",
      "Drive through the Mojave Desert",
      "End at Santa Monica Pier"
    ],
    fullDescription: "Experience the Mother Road in all its glory. Route 66 represents the spirit of American adventure and freedom. This cross-country journey takes you through eight states, offering a unique glimpse into American history, culture, and landscape. From bustling cities to ghost towns, from prairies to deserts, Route 66 has it all."
  },
  {
    id: "3",
    title: "Norwegian Fjords Circuit",
    description: "Marvel at Norway's stunning fjords, waterfalls, and mountain peaks on this spectacular Nordic adventure.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
    duration: "10 days",
    distance: "1,200 miles",
    difficulty: "Challenging" as const,
    rating: 4.7,
    reviewCount: 156,
    price: "$$$",
    tags: ["Mountains", "Fjords", "Nordic", "Nature"],
    author: "Erik Andersen",
    highlights: [
      "Drive through Geirangerfjord",
      "Cross the Atlantic Road",
      "Visit Lofoten Islands",
      "Experience midnight sun",
      "See Northern Lights (winter)"
    ],
    fullDescription: "Norway's fjords offer some of the most dramatic scenery on Earth. This challenging but rewarding road trip takes you through deep valleys carved by ancient glaciers, past towering waterfalls, and along winding mountain roads. The route includes several ferry crossings and offers breathtaking views around every corner."
  },
  {
    id: "4",
    title: "Great Ocean Road Explorer",
    description: "Discover Australia's most scenic coastal drive featuring limestone cliffs, surf beaches, and rainforest.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
    duration: "5 days",
    distance: "300 miles",
    difficulty: "Easy" as const,
    rating: 4.6,
    reviewCount: 298,
    price: "Free",
    tags: ["Coastal", "Australia", "Wildlife", "Surfing"],
    author: "Emma Thompson",
    highlights: [
      "See the Twelve Apostles",
      "Visit Port Campbell National Park",
      "Spot koalas in the wild",
      "Explore Otway Rainforest",
      "Surf at Bells Beach"
    ],
    fullDescription: "The Great Ocean Road is one of the world's most scenic coastal drives. Built by returned soldiers between 1919 and 1932, this road is both a war memorial and a testament to human determination. The route offers stunning ocean views, unique rock formations, and diverse wildlife."
  },
  {
    id: "5",
    title: "Ring Road Iceland",
    description: "Circle Iceland's dramatic landscapes including glaciers, volcanoes, geysers, and northern lights.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800",
    duration: "12 days",
    distance: "830 miles",
    difficulty: "Challenging" as const,
    rating: 4.9,
    reviewCount: 201,
    price: "$$",
    tags: ["Iceland", "Glaciers", "Volcanoes", "Adventure"],
    author: "Björk Sigurdsson",
    highlights: [
      "Visit Blue Lagoon geothermal spa",
      "See Gullfoss waterfall",
      "Explore Jökulsárlón glacier lagoon",
      "Hunt for Northern Lights",
      "Hike on Vatnajökull glacier"
    ],
    fullDescription: "Iceland's Ring Road offers access to the country's most incredible natural wonders. This complete circuit of the island takes you through diverse landscapes including black sand beaches, massive glaciers, active volcanoes, and geothermal hot springs. Every day brings new adventures and photographic opportunities."
  },
  {
    id: "6",
    title: "Swiss Alpine Grand Tour",
    description: "Wind through Switzerland's mountain passes, pristine lakes, and charming villages in this alpine adventure.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
    duration: "8 days",
    distance: "600 miles",
    difficulty: "Moderate" as const,
    rating: 4.8,
    reviewCount: 124,
    price: "$$$",
    tags: ["Mountains", "Lakes", "Alpine", "Scenic"],
    author: "Hans Müller",
    highlights: [
      "Drive the Furka Pass",
      "Cruise Lake Geneva",
      "Visit Matterhorn viewpoints",
      "Explore Interlaken",
      "Take scenic train rides"
    ],
    fullDescription: "Switzerland's mountain roads offer some of Europe's most spectacular driving experiences. This tour combines high alpine passes with serene lake shores, taking you through a landscape of snow-capped peaks, emerald valleys, and crystal-clear lakes. The route includes opportunities for hiking, skiing, and experiencing Swiss culture."
  }
];

export const tripCategories = [
  "All",
  "Coastal",
  "Mountains",
  "Desert",
  "Historic",
  "Adventure",
  "Scenic",
  "Cultural"
];

export const difficultyLevels = [
  "All",
  "Easy",
  "Moderate", 
  "Challenging"
];