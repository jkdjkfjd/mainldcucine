// data/galleryData.js
export const galleryData = [
  {
    slug: "modular-kitchen",
    title: "MODULAR KITCHEN",
    subtitle: "Contemporary Kitchen Designs",
    layoutType: "kitchen",  // Different layout for kitchen
    description: "Explore our premium modular kitchen collections featuring modern designs, smart storage, and premium finishes.",
    category: "Kitchen",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?q=80&w=2070",
    bannerImage: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?q=80&w=2070",
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?q=80&w=2070",
        title: "Modern Kitchen",
        category: "Kitchen",
        description: "Sleek handle-less design with ambient lighting"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2070",
        title: "Classic Kitchen",
        category: "Kitchen",
        description: "Traditional charm with modern functionality"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2070",
        title: "Minimalist Kitchen",
        category: "Kitchen",
        description: "Clean lines and clutter-free design"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1556909114-44e7137b4d7a?q=80&w=2070",
        title: "Luxury Kitchen",
        category: "Kitchen",
        description: "High-end finishes and premium appliances"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1556909172-37ab7298b4a6?q=80&w=2070",
        title: "Open Kitchen",
        category: "Kitchen",
        description: "Seamless integration with living space"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2070",
        title: "Island Kitchen",
        category: "Kitchen",
        description: "Perfect for entertaining"
      }
    ],
    features: [
      "Premium German Hardware",
      "Soft-close Mechanisms",
      "Water-resistant Plywood",
      "Customizable Colors",
      "100% VOC Free Finish",
      "10 Year Warranty"
    ],
    stats: [
      { label: "Projects Completed", value: "500+" },
      { label: "Happy Clients", value: "480+" },
      { label: "Expert Designers", value: "25+" },
      { label: "Years Experience", value: "12+" }
    ]
  },
  {
    slug: "wardrobe",
    title: "WARDROBE COLLECTION",
    subtitle: "Luxury Wardrobe Designs",
    layoutType: "luxury",  // Different layout for wardrobe
    description: "Discover our exquisite wardrobe designs that combine style with intelligent storage solutions.",
    category: "Wardrobe",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070",
    bannerImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070",
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070",
        title: "Walk-in Wardrobe",
        category: "Wardrobe",
        description: "Spacious luxury walk-in closet"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2070",
        title: "Sliding Wardrobe",
        category: "Wardrobe",
        description: "Space-saving sliding doors"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070",
        title: "Glass Wardrobe",
        category: "Wardrobe",
        description: "Elegant glass finish"
      }
    ],
    features: [
      "Customizable Interiors",
      "Soft-close Drawers",
      "LED Lighting Options",
      "Mirror Finishes",
      "Anti-bacterial Coating"
    ],
    stats: [
      { label: "Styles Available", value: "50+" },
      { label: "Color Options", value: "100+" }
    ]
  },
  {
    slug: "vanity",
    title: "VANITY UNITS",
    subtitle: "Elegant Bathroom Vanities",
    layoutType: "minimal",  // Different layout for vanity
    description: "Transform your bathroom with our premium vanity units designed for luxury and functionality.",
    category: "Vanity",
    heroImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070",
    bannerImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070",
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070",
        title: "Modern Vanity",
        category: "Vanity"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
        title: "Double Vanity",
        category: "Vanity"
      }
    ],
    features: ["Marble Top", "Soft-close Doors", "Storage Space"],
    stats: []
  },
  {
    slug: "bar-unit",
    title: "BAR UNITS",
    subtitle: "Luxury Bar & Entertainment",
    layoutType: "modern",
    description: "Elegant bar units for your home entertainment space.",
    category: "Bar",
    heroImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070",
    bannerImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070",
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070",
        title: "Home Bar",
        category: "Bar"
      }
    ],
    features: ["LED Lighting", "Glass Shelves", "Wine Rack"],
    stats: []
  },
  {
    slug: "lcd_unit",
    title: "LCD UNITS",
    subtitle: "Modern Entertainment Centers",
    layoutType: "modern",
    description: "Stylish TV units that enhance your living room decor.",
    category: "Entertainment",
    heroImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
    bannerImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070",
        title: "Wall Mounted Unit",
        category: "Entertainment"
      }
    ],
    features: ["Cable Management", "Storage Space", "Modern Design"],
    stats: []
  },
  {
    slug: "doors",
    title: "DOORS COLLECTION",
    subtitle: "Premium Door Designs",
    layoutType: "classic",
    description: "Beautiful and durable doors for your home.",
    category: "Doors",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
    bannerImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
        title: "Wooden Door",
        category: "Doors"
      }
    ],
    features: ["Premium Wood", "Durable Finish", "Custom Sizes"],
    stats: []
  },
  {
    slug: "wall-paneling",
    title: "WALL PANELING",
    subtitle: "Elegant Wall Solutions",
    layoutType: "artistic",
    description: "Transform your walls with stunning paneling designs.",
    category: "Walls",
    heroImage: "https://images.unsplash.com/photo-1616046229478-2461b6276f6a?q=80&w=2070",
    bannerImage: "https://images.unsplash.com/photo-1616046229478-2461b6276f6a?q=80&w=2070",
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1616046229478-2461b6276f6a?q=80&w=2070",
        title: "3D Paneling",
        category: "Walls"
      }
    ],
    features: ["Acoustic Properties", "Variety of Textures", "Easy Installation"],
    stats: []
  },
  {
    slug: "trunkey_interior_projects",
    title: "TURNKEY PROJECTS",
    subtitle: "Complete Interior Solutions",
    layoutType: "premium",
    description: "End-to-end interior design services for your home.",
    category: "Projects",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070",
    bannerImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070",
    gallery: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070",
        title: "Living Room",
        category: "Projects"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1618219740975-4090abd2a87e?q=80&w=2070",
        title: "Bedroom",
        category: "Projects"
      }
    ],
    features: ["Complete Solution", "Project Management", "Quality Assurance"],
    stats: []
  }
];

export default galleryData;