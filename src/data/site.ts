/**
 * Local mock data for Sona'i' Shuddha Masala Co.
 * No backend, no database — everything below is plain JavaScript data
 * loaded into React state by StoreContext.
 */

import heroSpices from "@/assets/hero-spices.jpg";
import aboutWorkshop from "@/assets/about-workshop.jpg";
import catHaldi from "@/assets/cat-haldi.jpg";
import catMirchi from "@/assets/cat-mirchi.jpg";
import catDhaniya from "@/assets/cat-dhaniya.jpg";
import catGaram from "@/assets/cat-garam.jpg";
import catMutton from "@/assets/cat-mutton.jpg";
import catChicken from "@/assets/cat-chicken.jpg";
import prodHaldi from "@/assets/prod-haldi.jpg";
import prodMirchi from "@/assets/prod-mirchi.jpg";
import prodDhaniya from "@/assets/prod-dhaniya.jpg";
import prodGaram from "@/assets/prod-garam.jpg";
import prodMutton from "@/assets/prod-mutton.jpg";
import prodChicken from "@/assets/prod-chicken.jpg";
import detailHaldi from "@/assets/detail-haldi.jpg";
import detailMirchi from "@/assets/detail-mirchi.jpg";
import detailDhaniya from "@/assets/detail-dhaniya.jpg";
import detailGaram from "@/assets/detail-garam.jpg";
import detailMutton from "@/assets/detail-mutton.jpg";
import detailChicken from "@/assets/detail-chicken.jpg";
import pfManufacturing from "@/assets/pf-manufacturing.jpg";
import pfGrinding from "@/assets/pf-grinding.jpg";
import pfBlending from "@/assets/pf-blending.jpg";
import pfPackaging from "@/assets/pf-packaging.jpg";
import pfQuality from "@/assets/pf-quality.jpg";
import pfTraditional from "@/assets/pf-traditional.jpg";
import gal1 from "@/assets/gal-1.jpg";
import gal2 from "@/assets/gal-2.jpg";
import gal3 from "@/assets/gal-3.jpg";
import gal4 from "@/assets/gal-4.jpg";
import gal5 from "@/assets/gal-5.jpg";
import ctaBanner from "@/assets/cta-banner.jpg";

export const BUSINESS = {
  name: "Sona'i' Shuddha Masala Co.",
  owner: "Sona",
  tagline: "Pure Spices. Authentic Flavours. Trusted Quality.",
  category: "Spice Manufacturing & Food Processing",
  address: "Chuadherewadi, Someshwar Chawk, Pune 412 306, Maharashtra, India",
  phone: "9055550198",
  email: "info@sonaimasala.com",
  mapQuery: "Someshwar Chawk, Chuadherewadi, Pune 412306, Maharashtra",
};

/** Mock admin credentials — frontend only, no authentication backend. */
export const ADMIN_CREDENTIALS = {
  email: "admin@sonaimasala.com",
  password: "sonai@123",
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  active: boolean;
};

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Haldi",
    slug: "haldi",
    description: "Golden turmeric powder with deep colour and warm earthy aroma.",
    image: catHaldi,
    active: true,
  },
  {
    id: "cat-2",
    name: "Mirchi",
    slug: "mirchi",
    description: "Bold red chilli powder ground from sun-dried Guntur chillies.",
    image: catMirchi,
    active: true,
  },
  {
    id: "cat-3",
    name: "Dhaniya",
    slug: "dhaniya",
    description: "Freshly ground coriander with a fragrant, citrus-sweet finish.",
    image: catDhaniya,
    active: true,
  },
  {
    id: "cat-4",
    name: "Garam Masala",
    slug: "garam-masala",
    description: "A traditional warm blend of slow-roasted whole spices.",
    image: catGaram,
    active: true,
  },
  {
    id: "cat-5",
    name: "Mutton Masala",
    slug: "mutton-masala",
    description: "Robust blend built for rich, slow-cooked mutton preparations.",
    image: catMutton,
    active: true,
  },
  {
    id: "cat-6",
    name: "Chicken Masala",
    slug: "chicken-masala",
    description: "Balanced everyday blend for curries, roasts and marinades.",
    image: catChicken,
    active: true,
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  ingredients: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  detailImage: string;
  weights: string[];
  inStock: boolean;
  featured: boolean;
  status: "Active" | "Draft";
  highlights: string[];
  usage: string;
  addedOn: string;
};

export const products: Product[] = [
  {
    id: "sonai-haldi-powder",
    name: "Sona'i' Haldi Powder",
    category: "Haldi",
    shortDescription: "Premium turmeric powder with rich colour and aroma.",
    description:
      "Our Haldi is ground from carefully sorted Sangli turmeric fingers, dried to the right moisture and milled slowly so the natural oils are never lost. The result is a bright, honest colour and the warm earthy aroma that a good Maharashtrian kitchen expects.",
    ingredients: "100% pure ground turmeric (Curcuma longa). No colour, no starch, no fillers.",
    price: 165,
    oldPrice: 199,
    rating: 4.8,
    reviews: 214,
    image: prodHaldi,
    detailImage: detailHaldi,
    weights: ["100 g", "250 g", "500 g", "1 kg"],
    inStock: true,
    featured: true,
    status: "Active",
    highlights: [
      "Single-origin Sangli turmeric",
      "Naturally high colour value",
      "Slow ground to protect aroma",
      "Lab checked for purity",
    ],
    usage: "Add half a teaspoon to hot oil at the start of a curry, or to warm milk at night.",
    addedOn: "2026-01-12",
  },
  {
    id: "sonai-lal-mirchi-powder",
    name: "Sona'i' Lal Mirchi Powder",
    category: "Mirchi",
    shortDescription: "Bold red chilli powder with authentic Indian flavour.",
    description:
      "A confident chilli powder blended from sun-dried Guntur and Byadgi chillies — Guntur for the heat, Byadgi for the deep red colour. Stems are removed by hand before grinding, so every spoon tastes clean and bright rather than dusty.",
    ingredients: "Sun-dried red chillies (Guntur, Byadgi). Nothing else.",
    price: 189,
    oldPrice: 229,
    rating: 4.7,
    reviews: 186,
    image: prodMirchi,
    detailImage: detailMirchi,
    weights: ["100 g", "250 g", "500 g", "1 kg"],
    inStock: true,
    featured: true,
    status: "Active",
    highlights: [
      "Hand-destemmed before grinding",
      "Balanced heat and colour",
      "No artificial colouring",
      "Consistent medium-fine grind",
    ],
    usage: "Perfect for zunka, misal, curries and tandoori marinades.",
    addedOn: "2026-01-18",
  },
  {
    id: "sonai-dhaniya-powder",
    name: "Sona'i' Dhaniya Powder",
    category: "Dhaniya",
    shortDescription: "Freshly ground coriander powder with a sweet citrus finish.",
    description:
      "Coriander seed is the backbone of everyday Indian cooking, so we grind it in small batches and pack it immediately. You get the fragrant, faintly sweet aroma of freshly milled dhaniya instead of the flat taste of stock that has been sitting for months.",
    ingredients: "100% ground coriander seed (Coriandrum sativum).",
    price: 145,
    rating: 4.6,
    reviews: 132,
    image: prodDhaniya,
    detailImage: detailDhaniya,
    weights: ["100 g", "250 g", "500 g"],
    inStock: true,
    featured: true,
    status: "Active",
    highlights: [
      "Small-batch fresh grinding",
      "Aroma-locked packaging",
      "Ideal thickening base for gravies",
      "Naturally cooling spice",
    ],
    usage: "Use generously in bhaji, dal and vegetable gravies as a body-building base.",
    addedOn: "2026-02-02",
  },
  {
    id: "sonai-garam-masala",
    name: "Sona'i' Garam Masala",
    category: "Garam Masala",
    shortDescription: "Aromatic traditional spice blend of slow-roasted whole spices.",
    description:
      "Fourteen whole spices — cinnamon, black and green cardamom, cloves, bay leaf, black pepper, star anise, nutmeg and more — are roasted separately to their own perfect point, then blended to a house recipe passed down within the family.",
    ingredients:
      "Coriander, cumin, cinnamon, green and black cardamom, cloves, bay leaf, black pepper, star anise, nutmeg, mace, fennel, dry ginger, stone flower.",
    price: 249,
    oldPrice: 299,
    rating: 4.9,
    reviews: 301,
    image: prodGaram,
    detailImage: detailGaram,
    weights: ["50 g", "100 g", "250 g"],
    inStock: true,
    featured: true,
    status: "Active",
    highlights: [
      "14 whole spices, roasted separately",
      "Family house recipe",
      "Strong finishing aroma",
      "A little goes a long way",
    ],
    usage: "Sprinkle in the last two minutes of cooking so the aroma stays alive.",
    addedOn: "2026-02-14",
  },
  {
    id: "sonai-mutton-masala",
    name: "Sona'i' Mutton Masala",
    category: "Mutton Masala",
    shortDescription: "Rich and aromatic blend for mutton preparations.",
    description:
      "Built for slow cooking. Deep-roasted chillies, coriander and warm whole spices stand up to long simmering, giving mutton rassa and Kolhapuri-style curries their signature colour, body and lingering warmth.",
    ingredients:
      "Red chilli, coriander, cumin, black pepper, cloves, cinnamon, bay leaf, dry coconut, poppy seed, stone flower, turmeric, salt.",
    price: 269,
    oldPrice: 329,
    rating: 4.8,
    reviews: 158,
    image: prodMutton,
    detailImage: detailMutton,
    weights: ["50 g", "100 g", "250 g"],
    inStock: true,
    featured: true,
    status: "Active",
    highlights: [
      "Roasted dry coconut base",
      "Holds up to long cooking",
      "Deep colour without artificial dye",
      "Authentic Maharashtrian profile",
    ],
    usage: "Two tablespoons per 500 g of mutton, added after the onions brown.",
    addedOn: "2026-02-26",
  },
  {
    id: "sonai-chicken-masala",
    name: "Sona'i' Chicken Masala",
    category: "Chicken Masala",
    shortDescription: "Balanced spice blend for delicious chicken recipes.",
    description:
      "A lighter, brighter cousin of our mutton blend. Fenugreek leaf and fennel round off the heat, which makes it just as good for a quick weeknight curry as it is for a marinade before the grill.",
    ingredients:
      "Coriander, red chilli, cumin, turmeric, fennel, kasuri methi, garlic, ginger, black pepper, cardamom, cinnamon.",
    price: 239,
    oldPrice: 279,
    rating: 4.7,
    reviews: 176,
    image: prodChicken,
    detailImage: detailChicken,
    weights: ["50 g", "100 g", "250 g"],
    inStock: true,
    featured: true,
    status: "Active",
    highlights: [
      "Kasuri methi finish",
      "Works as curry base or marinade",
      "Medium heat, family friendly",
      "Freshly blended each batch",
    ],
    usage: "Mix with curd and lemon for a two-hour marinade before roasting.",
    addedOn: "2026-03-04",
  },
];

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  published: boolean;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "pf-1",
    title: "In-House Spice Manufacturing Unit",
    category: "Spice Manufacturing",
    description:
      "Our Pune facility runs dedicated lines for turmeric, chilli and blends so flavours never cross over.",
    image: pfManufacturing,
    published: true,
  },
  {
    id: "pf-2",
    title: "Cold Grinding Line",
    category: "Spice Grinding",
    description:
      "Temperature-controlled milling keeps volatile oils intact, which is what you smell when a pack is opened.",
    image: pfGrinding,
    published: true,
  },
  {
    id: "pf-3",
    title: "Traditional Masala Blending",
    category: "Masala Blending",
    description:
      "House recipes are weighed to the gram and blended in stainless drums for a consistent taste every batch.",
    image: pfBlending,
    published: true,
  },
  {
    id: "pf-4",
    title: "Retail & Bulk Packaging",
    category: "Product Packaging",
    description:
      "Aroma-barrier pouches from 50 g retail packs up to 25 kg bulk supply for hotels and caterers.",
    image: pfPackaging,
    published: true,
  },
  {
    id: "pf-5",
    title: "Batch Quality Processing",
    category: "Quality Processing",
    description:
      "Every batch is checked for moisture, colour value and foreign matter before it is released for packing.",
    image: pfQuality,
    published: true,
  },
  {
    id: "pf-6",
    title: "Sun-Dried Ingredient Sourcing",
    category: "Traditional Spice Preparation",
    description:
      "We buy directly from farming families who still sun-dry chilli and turmeric the traditional way.",
    image: pfTraditional,
    published: true,
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  published: boolean;
};

export const gallery: GalleryItem[] = [
  { id: "g-1", title: "Spice Colour Palette", category: "Ingredients", image: gal1, published: true },
  { id: "g-2", title: "Brass Mortar & Pestle", category: "Traditional", image: gal2, published: true },
  { id: "g-3", title: "Tempering Whole Spices", category: "Indian Cooking", image: gal3, published: true },
  { id: "g-4", title: "Raw Material Storage", category: "Processing", image: gal4, published: true },
  { id: "g-5", title: "Festive Spice Hamper", category: "Packaging", image: gal5, published: true },
];

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  published: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Priya Kulkarni",
    location: "Kothrud, Pune",
    rating: 5,
    review:
      "The haldi colour is so natural that I stopped buying branded packs. My aamti finally tastes like my aai's.",
    published: true,
  },
  {
    id: "t-2",
    name: "Amit Patil",
    location: "Satara",
    rating: 5,
    review:
      "We use the mutton masala at our small dhaba. Consistent batch after batch, and customers notice the difference.",
    published: true,
  },
  {
    id: "t-3",
    name: "Sneha Joshi",
    location: "Nashik",
    rating: 4,
    review:
      "Freshly ground dhaniya has such a clean aroma. Packaging is neat and delivery to Nashik was quick.",
    published: true,
  },
  {
    id: "t-4",
    name: "Rahul Deshmukh",
    location: "Hadapsar, Pune",
    rating: 5,
    review:
      "Ordered the garam masala on a friend's recommendation. Half a spoon is enough — that tells you it is honest quality.",
    published: true,
  },
];

export type OrderStatus =
  | "Pending"
  | "Confirmed"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export type Order = {
  id: string;
  customer: string;
  phone: string;
  address: string;
  items: { name: string; qty: number; price: number }[];
  date: string;
  amount: number;
  payment: "Cash on Delivery" | "Online Payment";
  paymentStatus: "Paid" | "Pending";
  status: OrderStatus;
};

export const orders: Order[] = [
  {
    id: "SNI-24019",
    customer: "Priya Kulkarni",
    phone: "9822011234",
    address: "Kothrud, Pune 411038",
    items: [
      { name: "Sona'i' Haldi Powder", qty: 2, price: 165 },
      { name: "Sona'i' Garam Masala", qty: 1, price: 249 },
    ],
    date: "2026-08-14",
    amount: 579,
    payment: "Online Payment",
    paymentStatus: "Paid",
    status: "Delivered",
  },
  {
    id: "SNI-24020",
    customer: "Amit Patil",
    phone: "9730045511",
    address: "Powai Naka, Satara 415002",
    items: [{ name: "Sona'i' Mutton Masala", qty: 5, price: 269 }],
    date: "2026-08-16",
    amount: 1345,
    payment: "Cash on Delivery",
    paymentStatus: "Pending",
    status: "Shipped",
  },
  {
    id: "SNI-24021",
    customer: "Sneha Joshi",
    phone: "9960078822",
    address: "College Road, Nashik 422005",
    items: [
      { name: "Sona'i' Dhaniya Powder", qty: 3, price: 145 },
      { name: "Sona'i' Lal Mirchi Powder", qty: 1, price: 189 },
    ],
    date: "2026-08-18",
    amount: 624,
    payment: "Online Payment",
    paymentStatus: "Paid",
    status: "Processing",
  },
  {
    id: "SNI-24022",
    customer: "Rahul Deshmukh",
    phone: "9011223344",
    address: "Hadapsar, Pune 411028",
    items: [{ name: "Sona'i' Chicken Masala", qty: 2, price: 239 }],
    date: "2026-08-20",
    amount: 478,
    payment: "Cash on Delivery",
    paymentStatus: "Pending",
    status: "Pending",
  },
];

export type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  orders: number;
  spend: number;
};

export const customers: Customer[] = [
  {
    id: "c-1",
    name: "Priya Kulkarni",
    phone: "9822011234",
    email: "priya.k@example.com",
    city: "Pune",
    orders: 7,
    spend: 4210,
  },
  {
    id: "c-2",
    name: "Amit Patil",
    phone: "9730045511",
    email: "amit.dhaba@example.com",
    city: "Satara",
    orders: 12,
    spend: 15840,
  },
  {
    id: "c-3",
    name: "Sneha Joshi",
    phone: "9960078822",
    email: "sneha.joshi@example.com",
    city: "Nashik",
    orders: 4,
    spend: 2380,
  },
  {
    id: "c-4",
    name: "Rahul Deshmukh",
    phone: "9011223344",
    email: "rahul.d@example.com",
    city: "Pune",
    orders: 3,
    spend: 1490,
  },
];

export const heroContent = {
  enabled: true,
  title: "Pure Spices. Authentic Flavours.",
  subtitle:
    "Premium ground spices and authentic masala blends crafted to bring the true taste of India to every kitchen.",
  image: heroSpices,
  primaryCta: "Shop Spices",
  secondaryCta: "Explore Our Story",
};

export const aboutContent = {
  heading: "Crafting the True Taste of India",
  description:
    "Sona'i' Shuddha Masala Co. is a spice manufacturing and food processing unit based in Chuadherewadi, Pune. We grind, blend and supply premium ground spices and authentic masala blends — from everyday haldi, mirchi and dhaniya to slow-roasted garam, mutton and chicken masalas.",
  secondary:
    "Everything begins with the raw material. We buy directly from farming families, clean and sort by hand, and mill in small batches so the natural oils that carry aroma are never burnt away. Recipes are weighed to the gram, so the packet you buy next month tastes exactly like the one in your kitchen today.",
  image: aboutWorkshop,
  highlights: [
    "Directly sourced, hand-sorted ingredients",
    "Small-batch grinding for a fresher aroma",
    "Gram-accurate traditional blend recipes",
    "Hygienic, food-grade processing and packing",
  ],
  stats: [
    { value: "18+", label: "Years of spice craft" },
    { value: "6", label: "Signature blends" },
    { value: "2,400+", label: "Households served" },
    { value: "100%", label: "No added colour" },
  ],
};

export const trustStrip = [
  { title: "100% Authentic Flavours", text: "Traditional taste in every blend.", icon: "leaf" },
  { title: "Premium Quality", text: "Carefully selected ingredients.", icon: "award" },
  { title: "Hygienic Processing", text: "Clean and controlled preparation.", icon: "shield" },
  { title: "Freshly Ground", text: "Rich aroma and authentic flavour.", icon: "mortar" },
];

export const whyChooseUs = [
  {
    id: "w-1",
    title: "Authentic Indian Flavours",
    text: "Recipes rooted in Maharashtrian kitchens, not in a flavour laboratory.",
    icon: "leaf",
  },
  {
    id: "w-2",
    title: "Carefully Selected Spices",
    text: "Every lot is inspected for colour, moisture and aroma before it enters the mill.",
    icon: "search",
  },
  {
    id: "w-3",
    title: "Hygienic Processing",
    text: "Food-grade equipment, covered handling and clean-room packing.",
    icon: "shield",
  },
  {
    id: "w-4",
    title: "Premium Quality",
    text: "No added colour, no starch, no bulking agents — ever.",
    icon: "award",
  },
  {
    id: "w-5",
    title: "Traditional Spice Blending",
    text: "Whole spices roasted separately, then blended by a family house recipe.",
    icon: "mortar",
  },
  {
    id: "w-6",
    title: "Customer-Focused Service",
    text: "Retail packs, bulk supply and a phone number that an actual person answers.",
    icon: "phone",
  },
];

export const processSteps = [
  {
    id: "p-1",
    step: "01",
    title: "Ingredient Selection",
    text: "Carefully selected quality spices sourced directly from trusted growers.",
  },
  { id: "p-2", step: "02", title: "Cleaning", text: "Ingredients are cleaned, de-stoned and prepared by hand." },
  { id: "p-3", step: "03", title: "Grinding", text: "Spices are carefully ground at controlled temperature for rich aroma." },
  { id: "p-4", step: "04", title: "Blending", text: "Traditional spice combinations are weighed and blended to recipe." },
  { id: "p-5", step: "05", title: "Quality Check", text: "Every batch undergoes colour, moisture and purity inspection." },
  { id: "p-6", step: "06", title: "Packaging", text: "Finished spices are sealed in aroma-barrier packs for customers." },
];

export const ctaContent = {
  heading: "Bring Authentic Indian Flavours to Your Kitchen",
  text: "Discover premium spices and traditional masala blends crafted for rich aroma, colour and unforgettable taste.",
  button: "Shop Our Spices",
  image: ctaBanner,
};

export const siteSettings = {
  businessName: BUSINESS.name,
  phone: BUSINESS.phone,
  email: BUSINESS.email,
  address: BUSINESS.address,
  deliveryFee: 60,
  freeDeliveryAbove: 999,
  currency: "₹",
};

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
