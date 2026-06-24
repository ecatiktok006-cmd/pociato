import { MenuItem, Branch, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Artisanal Pizzas
  {
    id: 'pizza-margherita',
    name: 'Classic Margherita',
    description: 'San Marzano DOP, Fresh Mozzarella, Pecorino, Fresh Basil, Sourdough Crust & Extra Virgin Olive Oil.',
    price: 18.00,
    category: 'pizza',
    image: '/src/assets/images/classic_margherita_1781767148644.jpg',
    badge: 'Classic',
    dietary: ['Vegetarian'],
    customizations: [
      {
        name: 'Crust Style',
        choices: ['Traditional Sourdough', 'Extra Charred (Bistro Style)', 'Gluten-Free Crust (+ $3.00)']
      },
      {
        name: 'Melt Add-ons',
        choices: ['No Add-ons', 'Fresh Buffalo Mozzarella (+ $3.00)', 'Spicy Salami (+ $4.00)', 'Truffle Glaze (+ $2.50)']
      }
    ]
  },
  {
    id: 'pizza-truffle',
    name: 'Truffle Fungi',
    description: 'Wild Cremini & Shiitake Mushrooms, Black Truffle Cream, Fior di Latte Mozzarella, Caramelized Onions, Fresh Thyme.',
    price: 24.00,
    category: 'pizza',
    image: '/src/assets/images/truffle_fungi_1781767165823.jpg',
    badge: 'Signature',
    dietary: ['Vegetarian'],
    customizations: [
      {
        name: 'Double Mushrooms',
        choices: ['Standard Portions', 'Extra Wild Mushrooms (+ $3.00)']
      },
      {
        name: 'Truffle Intense',
        choices: ['Standard Drizzle', 'Extra White Truffle Oil (+ $2.00)']
      }
    ]
  },
  {
    id: 'pizza-diavola',
    name: 'Spicy Diavola',
    description: 'Artisanal Spicy Salami, Nduja (calabrian spreadable pork paste), Fresh Mozzarella, Green Chili peppers, Hot Chili Honey Drizzle.',
    price: 22.00,
    category: 'pizza',
    image: '/src/assets/images/spicy_diavola_1781767182214.jpg',
    badge: 'Heat Level 🌶️',
    customizations: [
      {
        name: 'Spice Customization',
        choices: ['Standard Spicy', 'Extra Hot (Added Dried Chili)', 'Mild (Easy on Nduja)']
      },
      {
        name: 'Sweet Drizzle',
        choices: ['Standard Hot Honey', 'Extra Chili Honey Drizzle (+ $1.00)', 'No Honey']
      }
    ]
  },

  // Specialty Coffee
  {
    id: 'coffee-house-blend',
    name: 'Pociato House Blend',
    description: 'Rich, dark chocolate and caramel notes. Standard pour brewed with direct-trade beans sourced from Colombia and Ethiopia.',
    price: 4.50,
    category: 'coffee',
    image: '/src/assets/images/specialty_latte_1781767200581.jpg',
    badge: 'Popular',
    customizations: [
      {
        name: 'Milk Type',
        choices: ['Whole Milk', 'Oat Milk (+ $0.75)', 'Amond Milk (+ $0.75)', 'Black / No Milk']
      },
      {
        name: 'Espresso Strength',
        choices: ['Double Shot (Standard)', 'Triple Shot (+ $1.25)', 'Single Shot']
      }
    ]
  },
  {
    id: 'coffee-oat-latte',
    name: 'Oat Milk Latte',
    description: 'Double shot of house espresso paired with steamed organic oat milk. Incredibly smooth, naturally sweet, and creamy.',
    price: 5.50,
    category: 'coffee',
    image: '/src/assets/images/specialty_latte_1781767200581.jpg',
    dietary: ['Vegan'],
    customizations: [
      {
        name: 'Sweetness level',
        choices: ['Unsweetened (Standard)', 'Subtle Vanilla (+ $0.50)', 'Warm Caramel (+ $0.50)', 'Spiced Cardamom Syrup (+ $0.75)']
      },
      {
        name: 'Temperature',
        choices: ['Steamed Hot', 'Over Ice']
      }
    ]
  },
  {
    id: 'coffee-flat-white',
    name: 'Velvet Flat White',
    description: 'Double ristretto espresso pulled shot topped with micro-foamed hot milk. Offers a higher ratio of espresso to milk for bold flavor.',
    price: 5.00,
    category: 'coffee',
    image: '/src/assets/images/specialty_latte_1781767200581.jpg',
    badge: 'Barista Choice',
    customizations: [
      {
        name: 'Chilled Version',
        choices: ['Hot (Traditional)', 'Iced Ristretto Flat White']
      },
      {
        name: 'Milk Select',
        choices: ['Whole Milk', 'Oat Milk (+ $0.75)', 'Skim Milk']
      }
    ]
  },

  // House Pastries
  {
    id: 'pastry-croissant',
    name: 'Butter Croissant',
    description: 'Flaky, golden, multilayered layers of traditional French-style sourdough laminated dough. Baked fresh in-house at 5:00 AM.',
    price: 4.00,
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400',
    badge: 'Fresh Daily',
    dietary: ['Vegetarian'],
    customizations: [
      {
        name: 'Serving Preference',
        choices: ['Warm / Heated', 'Room Temperature']
      },
      {
        name: 'Spread',
        choices: ['No Spread', 'Artisanal Salted Butter (+ $0.50)', 'House Fig Preserves (+ $0.75)']
      }
    ]
  },
  {
    id: 'pastry-cannoli',
    name: 'Pistachio Cannoli',
    description: 'Traditional crisp fried pastry shell filled with sweet, whipped impastata sheep ricotta and rolled in crushed Sicilian pistachios.',
    price: 6.00,
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400',
    badge: 'Artisanal',
    dietary: ['Vegetarian'],
    customizations: [
      {
        name: 'Garnish Accent',
        choices: ['Sicilian Pistachio Dust', 'Pistachio + Dark Chocolate Chips', 'Powdered Sugar Only']
      }
    ]
  },
  {
    id: 'pastry-tart',
    name: 'Dark Chocolate Tart',
    description: 'Luxurious 70% dark Valrhona chocolate ganache in a crisp French-method cocoa pastry shell, topped with a touch of Maldon sea salt.',
    price: 7.50,
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=400',
    badge: 'Premium Dessert',
    dietary: ['Vegetarian'],
    customizations: [
      {
        name: 'Dollop Accent',
        choices: ['No Garnish', 'Fresh Whipped Mascarpone Cream (+ $1.00)', 'Raspberry Coulis Side (+ $1.00)']
      }
    ]
  },
  {
    id: 'coffee-caramel-frappe',
    name: 'Caramel Frappe Coffee',
    description: 'Espresso blended with fresh milk, caramel sauce and frappe powder over ice until smooth and creamy. Topped with whipped cream and an extra drizzle of caramel for an indulgent finish.',
    price: 15.00,
    category: 'coffee',
    image: '/frappes.jpg',
    badge: 'RM15',
    customizations: [
      {
        name: 'Sweetness Level',
        choices: ['Regular Sweetness', 'Half Sweet', 'No Added Sugar Syrup', 'Extra Sweet']
      },
      {
        name: 'Whipped Cream',
        choices: ['Whipped Cream (Standard)', 'No Whipped Cream', 'Extra Caramel Syrup']
      }
    ]
  },
  {
    id: 'coffee-chocolate-frappe',
    name: 'Belgian Chocolate Frappe',
    description: 'Premium cocoa powder blended with milk, sugar and ice to create a rich, creamy texture. Deep chocolate flavour with a refreshing icy finish.',
    price: 15.00,
    category: 'coffee',
    image: '/frappes.jpg',
    badge: 'RM15',
    customizations: [
      {
        name: 'Chocolate Intensity',
        choices: ['Standard Belgian Richness', 'Extra Double Cocoa (+ $1.50)', 'Subtle Chocolate']
      },
      {
        name: 'Whipped Cream',
        choices: ['Whipped Cream (Standard)', 'No Whipped Cream', 'Extra Chocolate Sauce']
      }
    ]
  },
  {
    id: 'coffee-matcha-frappe',
    name: 'Matcha Frappe',
    description: 'Bold matcha blended with frappe powder, fresh milk, sugar and ice. Smooth, creamy and perfectly chilled for a refreshing treat.',
    price: 15.00,
    category: 'coffee',
    image: '/frappes.jpg',
    badge: 'RM15',
    dietary: ['Vegetarian'],
    customizations: [
      {
        name: 'Sweetness',
        choices: ['Regular Sweetness', 'Less Sweet', 'Unsweetened Matcha']
      },
      {
        name: 'Garnish',
        choices: ['Whipped Cream & Pistachios', 'Whipped Cream Only', 'No Whipped Cream', 'Extra Pistachio Dust (+ $0.50)']
      }
    ]
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'eco-majestic',
    name: 'Pociato Coffee & Pizza – Eco Majestic',
    vibe: 'Modern café with comfortable seating and ambient lighting.',
    address: 'Semenyih, Selangor',
    contact: '+60 12-345 6789 | eco-majestic@pociato.com',
    hours: 'Mon - Sun: 8:00 AM - 10:00 PM',
    tableAvailability: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.835926528741!2d101.83965585!3d2.9004523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdc8a0349f7e5b%3A0xc3c6046e729a5180!2sEco%20Majestic%2C%20Semenyih%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1717364239857!5m2!1sen!2sus'
  },
  {
    id: 'taman-kajang-utama',
    name: 'Pociato Coffee & Pizza – Taman Kajang Utama',
    vibe: 'Cozy neighborhood spot for quick bites and aromatic coffee.',
    address: 'Kajang, Selangor',
    contact: '+60 12-345 6790 | kajang-utama@pociato.com',
    hours: 'Mon - Sun: 8:00 AM - 10:00 PM',
    tableAvailability: 'Busy',
    imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=600',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.318392176472!2d101.782806!3d2.9733075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcbc8c84d6b6d%3A0x6b7cc9df1b8b6c0b!2sTaman%2C%20Kajang%20Utama%2C%20Kajang%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1717364239857!5m2!1sen!2sus'
  },
  {
    id: 'bandar-tun-hussein-onn',
    name: 'Pociato Coffee & Pizza – Bandar Tun Hussein Onn',
    vibe: 'Spacious and vibrant environment, perfect for gatherings.',
    address: 'Cheras, Selangor',
    contact: '+60 12-345 6791 | cheras@pociato.com',
    hours: 'Mon - Sun: 8:00 AM - 11:00 PM',
    tableAvailability: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=600',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.142426915243!2d101.761584!3d3.045053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3337a8bd9cfb%3A0xcab25c11bc32af2d!2sBandar%20Tun%20Hussein%20Onn%2C%20Cheras%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1717364239857!5m2!1sen!2sus'
  },
  {
    id: 'cbd-perdana-3',
    name: 'Pociato Coffee & Pizza – CBD Perdana 3',
    vibe: 'Sleek and modern interior designed for professionals and students.',
    address: 'Cyberjaya, Selangor',
    contact: '+60 12-345 6792 | cyberjaya@pociato.com',
    hours: 'Mon - Sun: 7:00 AM - 10:00 PM',
    tableAvailability: 'Excellent',
    imageUrl: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=600',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15939.297495543787!2d101.642106!3d2.919799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb6fb3e2b2e8d%3A0x6b7cc9df1b8b6c0b!2sCBD%20Perdana%203%2C%20Cyberjaya%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1717364239857!5m2!1sen!2sus'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Eleanor Vance',
    rating: 5,
    text: 'That sourdough crust on the Truffle Fungi is simply transcendent! It sits beautifully along with the rich, deep scent of the hot white truffle oil. This cafe has immediately stolen my weekends.',
    timestamp: '2 hours ago',
    itemCategory: 'pizza',
    itemName: 'Truffle Fungi'
  },
  {
    id: 'rev-2',
    author: 'Damien Mercer',
    rating: 5,
    text: 'A purist flat white that actually respects the ristretto weight. Pair it with the Sicilian Cannoli and you’ve got a taste of artisanal perfection that completely justifies the gorgeous price tag.',
    timestamp: 'Yesterday',
    itemCategory: 'coffee',
    itemName: 'Velvet Flat White'
  },
  {
    id: 'rev-3',
    author: 'Alessia C.',
    rating: 4,
    text: 'Loved the Margherita! It feels extremely premium and looks exactly like the high-end bistro menus in Naples. Only feedback is that table reservations are highly recommended, the Iron Foundry get very packed early on Saturday night!',
    timestamp: '3 days ago',
    itemCategory: 'pizza',
    itemName: 'Classic Margherita'
  }
];
