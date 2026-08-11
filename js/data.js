/* Fixed data for Glowria Skincare Website */
const SITE = {
  name: "Glowria",
  nameEn: "Glowria",
  tagline: "Purity of nature for your skin's beauty",
  phone: "+966 50 000 0000",
  email: "hello@glowria-skin.com",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592585675020",
    instagram: "https://www.instagram.com/glowria_skincare_routine",
    tiktok: "https://www.tiktok.com/",
  },
};

const SKIN_TYPES = [
  { id: "all", label: "All" },
  { id: "oily", label: "Oily" },
  { id: "dry", label: "Dry" },
  { id: "mixed", label: "Combination" },
  { id: "sensitive", label: "Sensitive" },
];

const PRODUCTS = [
  {
    id: "p1",
    name: "Glow Cleanse — Gentle Gel Cleanser",
    short: "Your 60-second reset. A gentle everyday gel cleanser that removes dirt and excess oil.",
    description:
      "Your 60-second reset. A gentle everyday gel cleanser that removes dirt, excess oil and the day without leaving skin feeling stripped. Leaves your skin fresh, comfortable and ready for the next step.",
    price: 129,
    volume: "60 ml",
    skin: ["sensitive", "mixed", "dry", "oily"],
    featured: true,
    rating: 4.8,
    reviewsCount: 64,
    image: "images/products/p1.jpg",
    benefits: ["Gentle everyday cleansing", "Removes excess oil without stripping", "Leaves skin fresh & comfortable"],
    ingredients: ["Aqua", "Glycerin", "Gentle Cleansing Agents"],
    howToUse: "Apply to damp face, massage gently for 60 seconds, and rinse thoroughly.",
  },
  {
    id: "p2",
    name: "Glow Repair — Niacinamide Serum",
    short: "A lightweight niacinamide serum designed to improve dullness and uneven tone.",
    description:
      "Your daily repair step. A lightweight niacinamide serum designed to improve the appearance of dullness, uneven tone, post-breakout marks and uneven texture while leaving skin looking calmer and smoother. Fast-absorbing and easy to layer.",
    price: 249,
    volume: "30 ml",
    skin: ["mixed", "oily", "sensitive"],
    featured: true,
    rating: 4.9,
    reviewsCount: 88,
    image: "images/products/p2.jpg",
    benefits: ["Improves post-breakout marks", "Evens out skin tone & texture", "Fast-absorbing and easy to layer"],
    ingredients: ["Niacinamide", "Hyaluronic Acid", "Aqua"],
    howToUse: "Apply 2–3 drops morning and evening to clean skin before moisturizing.",
  },
  {
    id: "p3",
    name: "Glow Shield — Daily Sunscreen Moisturizer SPF 50+",
    short: "A daily moisturizer with SPF 50+ that defends skin from UV exposure.",
    description:
      "Protection without the heavy feeling. A daily moisturizer with SPF 50+ that helps defend skin from everyday UV exposure while keeping it comfortable and hydrated. Lightweight enough to become an everyday habit.",
    price: 299,
    volume: "50 ml",
    skin: ["sensitive", "mixed", "dry", "oily"],
    featured: true,
    rating: 4.8,
    reviewsCount: 73,
    image: "images/products/p3.jpg",
    benefits: ["Broad-spectrum SPF 50+ protection", "Lightweight non-heavy formula", "Keeps skin hydrated daily"],
    ingredients: ["Zinc Oxide", "UV Filters", "Hydrating Complex"],
    howToUse: "Apply generously as the last step of your morning routine 15 minutes before sun exposure.",
  },
  {
    id: "p4",
    name: "The Glow Routine Set — Cleanse + Repair + Protect",
    short: "The complete Glowria routine in one simple set. For him & her.",
    description:
      "The complete Glowria routine in one simple set. Cleanse. Repair. Protect. Three everyday essentials designed for busy mornings, long days and people who want healthy-looking skin without a complicated routine. For him & her.",
    price: 599,
    volume: "Full Set (3 Products)",
    skin: ["sensitive", "mixed", "dry", "oily"],
    featured: true,
    rating: 5.0,
    reviewsCount: 112,
    image: "images/products/p4.jpg",
    benefits: ["Complete 3-step routine", "Designed for busy lifestyle", "Suitable for all skin types (For him & her)"],
    ingredients: ["Glow Cleanse", "Glow Repair Serum", "Glow Shield SPF 50+"],
    howToUse: "Step 1: Cleanse with Glow Cleanse. Step 2: Repair with Niacinamide Serum. Step 3: Protect with Glow Shield SPF 50+.",
  },
];

const ARTICLES = [
  {
    id: "a1",
    title: "5-Minute Morning Skincare Routine",
    excerpt:
      "Simple, consistent steps for fresh skin before stepping out, without complexity or excessive products.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=75",
    date: "July 12, 2026",
    readTime: "4 min read",
    body: [
      "You don't need a lengthy routine to start your day with balanced skin. The secret lies in consistency and proper layering rather than the number of products.",
      "Start with a gentle cleanser tailored to your skin type, followed by an alcohol-free toner to prepare your skin. Next, apply a lightweight morning serum like Vitamin C, follow with moisturizer, and finish with sunscreen—the non-negotiable step.",
      "If you have oily skin, opt for a lightweight water-based moisturizer. Dry skin types will benefit from a slightly richer cream before sunscreen. Combination skin can focus rich moisture on the cheeks and lighter formulas on the T-zone.",
      "Stick to this sequence for two weeks and notice the difference in radiance, makeup longevity, and skin comfort throughout the day.",
    ],
  },
  {
    id: "a2",
    title: "How to Choose Products for Your Skin Type",
    excerpt:
      "A quick guide for oily, dry, combination, and sensitive skin so you can shop with confidence.",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1000&q=75",
    date: "June 28, 2026",
    readTime: "6 min read",
    body: [
      "Knowing your skin type saves you from endless trial and error. Observe your clean skin one hour after cleansing, without applying any products.",
      "If you notice visible shine on your forehead and nose, your skin leans oily. Feeling tightness and flaking indicates dry skin. A mix of both means combination, while rapid redness and stinging point to sensitivity that needs soothing formulas.",
      "For oily skin: gentle foaming cleanser, balancing toner, non-comedogenic moisturizer. For dry skin: creamy cleanser and nourishing oils. For sensitive skin: short ingredient lists free from strong fragrances.",
      "Introduce one new product every two weeks to truly understand what works for you.",
    ],
  },
  {
    id: "a3",
    title: "Sunscreen Every Day… Even in the Shade",
    excerpt:
      "UV rays penetrate through windows and clouds. Here is how to smartly protect your skin.",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1000&q=75",
    date: "June 9, 2026",
    readTime: "5 min read",
    body: [
      "Sunscreen isn't just for summer. UV rays sneak through glass and cloud cover, causing long-term dullness and hyperpigmentation over time.",
      "Choose at least SPF 30 for daily wear, and SPF 50 if spending extended time outdoors. Reapply every two hours when exposed to direct sunlight.",
      "Mineral sunscreen is an excellent choice for sensitive skin. Apply a two-finger amount for face and neck, without forgetting the eye contour and hairline.",
      "Make sunscreen the final step in your morning routine before makeup, and your skin will thank you months from now.",
    ],
  },
  {
    id: "a4",
    title: "Natural Ingredients Worthy of Your Routine",
    excerpt:
      "Rose water, argan, and aloe vera: real benefits and how to integrate them without overwhelming skin.",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=75",
    date: "May 21, 2026",
    readTime: "5 min read",
    body: [
      "Nature offers effective ingredients when formulated at studied concentrations. Not everything natural suits every skin type, but certain ingredients have proven gentle and beneficial.",
      "Rose water calms and delivers an instant sense of refreshment. Argan oil nourishes dryness without excessive heaviness when using a few drops at night. Aloe vera cools redness post-sun exposure or light exfoliation.",
      "Golden rule: Add one ingredient at a time and monitor your skin for three days before introducing another new product.",
      "At Glowria, we select these ingredients because they align closely with daily skin needs, formulating them clearly so you can understand and trust them.",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Al-Otaibi",
    city: "Riyadh",
    text: "My combination skin became much more balanced after two weeks on the serum and toner. The texture is lightweight and scent is very subtle.",
    rating: 5,
  },
  {
    name: "Lama Hassan",
    city: "Jeddah",
    text: "The gentle cleanser saved my sensitive skin. Finally a product that cleanses without tightness or redness.",
    rating: 5,
  },
  {
    name: "Hind Al-Qahtani",
    city: "Dammam",
    text: "I ordered the hydrating cream and argan oil as a gift. The packaging is elegant and the experience exceeded expectations.",
    rating: 4,
  },
];