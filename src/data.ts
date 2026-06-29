import { MenuItem, Branch, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- ARTISANAL PIZZAS ---
  {
    id: 'pizza-wagyu',
    name: 'Signature Wagyu Pizza',
    description: 'Our luxurious 11-inch creation layered with melted mozzarella, premium A5 Wagyu slices and signature Italian red sauce. Finished with cherry tomatoes, jalapenos and a delicate drizzle of olive oil. Rich, tender and unmistakably indulgent.',
    price: 88.00,
    category: 'pizza',
    subcategory: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    badge: 'Best Seller',
    customizations: [
      {
        name: 'Crust Style',
        choices: ['Traditional Sourdough', 'Extra Charred (Bistro Style)', 'Gluten-Free Crust (+ $3.00)']
      }
    ]
  },
  {
    id: 'pizza-sukiya',
    name: 'Sukiya Beef Pizza',
    description: 'Sukiya Beef Pizza combines rich Japanese-inspired flavors with a cheesy pizza favorite. Topped with savory sukiya sauce, generous mozzarella cheese, tender beef slices, and finished with sesame seeds and fresh spring onions for a flavorful, satisfying bite.',
    price: 45.00,
    category: 'pizza',
    subcategory: 'pizza',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Crust Style',
        choices: ['Traditional Sourdough', 'Extra Charred (Bistro Style)', 'Gluten-Free Crust (+ $3.00)']
      }
    ]
  },
  {
    id: 'pizza-smokey-duck',
    name: 'Smokey Duck Indulgence',
    description: 'A unique combination of slightly tangy Italian red sauce with melted mozzarella and parmesan over smoked duck slices. Finished with a drizzle of spicy honey and fresh rocket for a peppery lift. Rich, smoky and indulgent.',
    price: 39.00,
    category: 'pizza',
    subcategory: 'pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Crust Style',
        choices: ['Traditional Sourdough', 'Extra Charred (Bistro Style)', 'Gluten-Free Crust (+ $3.00)']
      }
    ]
  },
  {
    id: 'pizza-streaky-beef',
    name: 'Streaky Beef Mozzarella Blis',
    description: 'An indulgent 11-inch pizza layered with rich Italian red sauce, melted mozzarella and smoky streaky beef slices. Finished with parmesan, fresh rocket leaves and a drizzle of olive oil for a bold, flavorful experience.',
    price: 39.00,
    category: 'pizza',
    subcategory: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Crust Style',
        choices: ['Traditional Sourdough', 'Extra Charred (Bistro Style)', 'Gluten-Free Crust (+ $3.00)']
      }
    ]
  },
  {
    id: 'pizza-beef-pepperoni',
    name: 'Beef Pepperoni Pizza',
    description: 'A thin, soft crust spread with our signature Italian red sauce, layered with melted mozzarella and lightly baked beef pepperoni until crisp at the edges. Finished with fresh basil and olive oil for a beautifully balanced, savoury finish.',
    price: 37.00,
    category: 'pizza',
    subcategory: 'pizza',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Crust Style',
        choices: ['Traditional Sourdough', 'Extra Charred (Bistro Style)', 'Gluten-Free Crust (+ $3.00)']
      }
    ]
  },
  {
    id: 'pizza-chicken-pepperoni',
    name: 'Chicken Pepperoni',
    description: 'Our Italian red sauce base topped with melted mozzarella and smoky chicken pepperoni slices. Finished with parmesan and olive oil. A satisfying balance of savoury meat and creamy cheese in every bite.',
    price: 35.00,
    category: 'pizza',
    subcategory: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Crust Style',
        choices: ['Traditional Sourdough', 'Extra Charred (Bistro Style)', 'Gluten-Free Crust (+ $3.00)']
      }
    ]
  },
  {
    id: 'pizza-alfredo-chicken',
    name: 'Alfredo Chicken Pizza',
    description: 'An 11-inch pizza layered with rich, creamy Alfredo sauce, topped with melted mozzarella and juicy chicken slices. Finished with parmesan, fresh basil and a light drizzle of olive oil - where cheese, cream and chicken come together in perfect harmony.',
    price: 35.00,
    category: 'pizza',
    subcategory: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Crust Style',
        choices: ['Traditional Sourdough', 'Extra Charred (Bistro Style)', 'Gluten-Free Crust (+ $3.00)']
      }
    ]
  },
  {
    id: 'pizza-classic-basil',
    name: 'Classic Basil Mozzarella',
    description: 'An 11-inch classic built on our signature Italian red sauce, generously topped with melted mozzarella and parmesan. Completed with fresh basil and a touch of olive oil for a timeless, comforting flavour.',
    price: 25.00,
    category: 'pizza',
    subcategory: 'pizza',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Crust Style',
        choices: ['Traditional Sourdough', 'Extra Charred (Bistro Style)', 'Gluten-Free Crust (+ $3.00)']
      }
    ]
  },

  // --- FRAPPES ---
  {
    id: 'frappe-caramel',
    name: 'Caramel Frappe Coffee',
    description: 'Espresso blended with fresh milk, caramel sauce and frappe powder over ice until smooth and creamy. Topped with whipped cream and an extra drizzle of caramel for an indulgent finish.',
    price: 15.00,
    category: 'coffee',
    subcategory: 'frappes',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&q=80&w=600',
    icons: ['cold'],
    customizations: [
      {
        name: 'Sweetness',
        choices: ['Standard Sweetness', 'Less Sweet', 'Extra Sweet']
      }
    ]
  },
  {
    id: 'frappe-belgian-chocolate',
    name: 'Belgian Chocolate Frappe',
    description: 'Premium cocoa powder blended with milk, sugar and ice to create a rich, creamy texture. Deep chocolate flavour with a refreshing icy finish.',
    price: 15.00,
    category: 'coffee',
    subcategory: 'frappes',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600',
    icons: ['cold'],
    customizations: [
      {
        name: 'Sweetness',
        choices: ['Standard Sweetness', 'Less Sweet', 'Extra Sweet']
      }
    ]
  },
  {
    id: 'frappe-matcha',
    name: 'Matcha Frappe',
    description: 'Bold matcha blended with frappe powder, fresh milk, sugar and ice. Smooth, creamy and perfectly chilled for a refreshing treat.',
    price: 15.00,
    category: 'coffee',
    subcategory: 'frappes',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600',
    icons: ['cold'],
    customizations: [
      {
        name: 'Sweetness',
        choices: ['Standard Sweetness', 'Less Sweet', 'Extra Sweet']
      }
    ]
  },

  // --- SIGNATURE COFFEE ---
  {
    id: 'sig-cream-butter-latte',
    name: 'Cream Butter Latte',
    description: 'Rich espresso blended with fresh milk and sweetened milk for a creamy base. Topped with a luscious buttercream made from whipped cream and butterscotch sauce. Smooth, indulgent and refreshing.',
    price: 15.00,
    category: 'coffee',
    subcategory: 'signature-coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    badge: 'Best Seller',
    icons: ['hot', 'cold'],
    customizations: [
      {
        name: 'Serving Option',
        choices: ['Over Ice (Cold)', 'Hot Steamed']
      },
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'sig-mont-blanc',
    name: 'Mont Blanc',
    description: 'A refreshing espresso-based drink with a subtle hint of orange, topped with our special creamy foam for a smooth and unique finish.',
    price: 15.00,
    category: 'coffee',
    subcategory: 'signature-coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    badge: 'Best Seller',
    icons: ['cold'],
    customizations: [
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'sig-caramel-macchiato',
    name: 'Caramel Macchiato',
    description: 'Bold espresso layered with steamed fresh milk and a touch of vanilla syrup, finished with salted caramel. A beautiful harmony of sweet and salty in every sip.',
    price: 15.00,
    category: 'coffee',
    subcategory: 'signature-coffee',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600',
    icons: ['hot', 'cold'],
    customizations: [
      {
        name: 'Serving Option',
        choices: ['Over Ice (Cold)', 'Hot Steamed']
      },
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'sig-french-vanilla-latte',
    name: 'French Vanilla Latte',
    description: 'Espresso with chilled fresh milk and sweetened milk, enhanced with a delicate touch of vanilla syrup. Smooth, fragrant and perfectly balanced.',
    price: 13.00,
    category: 'coffee',
    subcategory: 'signature-coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
    icons: ['hot', 'cold'],
    customizations: [
      {
        name: 'Serving Option',
        choices: ['Over Ice (Cold)', 'Hot Steamed']
      },
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'sig-salted-caramel-latte',
    name: 'Salted Caramel Latte',
    description: 'Rich espresso paired with fresh milk and finished with salted caramel syrup. A well-balanced blend of sweetness and subtle saltiness.',
    price: 13.00,
    category: 'coffee',
    subcategory: 'signature-coffee',
    image: 'https://images.unsplash.com/photo-1557006021-b85feb2bc5ae?auto=format&fit=crop&q=80&w=600',
    icons: ['hot', 'cold'],
    customizations: [
      {
        name: 'Serving Option',
        choices: ['Over Ice (Cold)', 'Hot Steamed']
      },
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'sig-spanish-latte',
    name: 'Spanish Latte',
    description: 'Bold espresso combined with chilled fresh milk and sweetened milk, creating a smooth, creamy and comforting coffee experience.',
    price: 12.00,
    category: 'coffee',
    subcategory: 'signature-coffee',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=600',
    icons: ['hot', 'cold'],
    customizations: [
      {
        name: 'Serving Option',
        choices: ['Over Ice (Cold)', 'Hot Steamed']
      },
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },

  // --- ESSENTIAL COFFEE ---
  {
    id: 'ess-latte',
    name: 'Latte',
    description: 'Bold espresso combined with fresh milk and served over ice for a smooth, creamy and refreshing finish.',
    price: 11.00,
    category: 'coffee',
    subcategory: 'essential',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
    badge: 'Best Seller',
    icons: ['hot', 'cold'],
    customizations: [
      {
        name: 'Serving Option',
        choices: ['Over Ice (Cold)', 'Hot Steamed']
      },
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'ess-cappuccino',
    name: 'Cappuccino',
    description: 'A classic Italian favourite featuring espresso, steamed milk and a velvety layer of milk foam. Perfectly balanced and timeless.',
    price: 11.00,
    category: 'coffee',
    subcategory: 'essential',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600',
    icons: ['hot'],
    customizations: [
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'ess-americano',
    name: 'Americano',
    description: 'Espresso diluted with hot water, delivering a clean, bold and full-bodied coffee flavour. Perfect for those who enjoy it pure and strong.',
    price: 9.00,
    category: 'coffee',
    subcategory: 'essential',
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80&w=600',
    icons: ['hot', 'cold'],
    customizations: [
      {
        name: 'Serving Option',
        choices: ['Over Ice (Cold)', 'Hot Steamed']
      },
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },

  // --- NON-COFFEE ---
  {
    id: 'nc-strawberry-matcha',
    name: 'Strawberry Matcha Latte',
    description: 'A vibrant blend of strawberry puree and syrup layered with creamy fresh milk and premium matcha. Sweet, smooth and beautifully balanced with striking layers in every sip.',
    price: 15.00,
    category: 'coffee',
    subcategory: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600',
    badge: 'Best Seller',
    icons: ['cold'],
    customizations: [
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'nc-blueberry-matcha',
    name: 'Blueberry Matcha Latte',
    description: 'A creamy blend of premium matcha and sweet blueberry, perfectly balanced with milk for a smooth, fruity and earthy flavour in every sip.',
    price: 15.00,
    category: 'coffee',
    subcategory: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600',
    icons: ['cold'],
    customizations: [
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'nc-passionfruit-matcha',
    name: 'Passionfruit Matcha Latte',
    description: 'Matcha paired with fresh milk, passionfruit puree and a hint of passionfruit syrup, blended with milk. A refreshing sweet-and-tangy combination with a unique twist.',
    price: 15.00,
    category: 'coffee',
    subcategory: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600',
    icons: ['cold'],
    customizations: [
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'nc-matcha-latte',
    name: 'Matcha Latte',
    description: 'Finely whisked matcha blended with fresh milk and lightly sweetened, served over ice. Smooth, creamy and delicately earthy. A refreshing choice anytime.',
    price: 12.00,
    category: 'coffee',
    subcategory: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600',
    icons: ['hot', 'cold'],
    customizations: [
      {
        name: 'Serving Option',
        choices: ['Over Ice (Cold)', 'Hot Steamed']
      },
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'nc-oh-cocoa',
    name: 'Oh Cocoa',
    description: 'Rich chocolate crafted from premium cocoa powder, blended with fresh milk and lightly sweetened. Smooth, velvety and indulgent with deep chocolate flavour.',
    price: 12.00,
    category: 'coffee',
    subcategory: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600',
    icons: ['hot', 'cold'],
    customizations: [
      {
        name: 'Serving Option',
        choices: ['Over Ice (Cold)', 'Hot Steamed']
      },
      {
        name: 'Milk Surcharges',
        choices: ['Fresh Milk', 'Oat Milk (+ RM2.00)', 'Extra Shot (+ RM3.00)']
      }
    ]
  },
  {
    id: 'nc-peach-tea',
    name: 'Peach Tea',
    description: 'Refreshing tea infused with peach flavour for a light and fruity taste.',
    price: 11.00,
    category: 'coffee',
    subcategory: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600',
    icons: ['cold']
  },
  {
    id: 'nc-apple-tea',
    name: 'Apple Tea',
    description: 'Refreshing tea with a sweet apple flavour and a smooth finish.',
    price: 11.00,
    category: 'coffee',
    subcategory: 'non-coffee',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600',
    icons: ['cold']
  },

  // --- SPARK SERIES ---
  {
    id: 'spark-carrot-ginger',
    name: 'Carrot Ginger Ale',
    description: 'Sparkling soda with a mixed berry flavour, offering a refreshing sweet and fruity taste.',
    price: 13.00,
    category: 'coffee',
    subcategory: 'spark-series',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=600',
    badge: 'Best Seller',
    icons: ['cold']
  },
  {
    id: 'spark-lemonade-peach',
    name: 'Lemonade Peach',
    description: 'Fresh lemonade blended with peach flavour and lightly sweetened, served over ice. Sweet, tangy and fruity. Made for warm days.',
    price: 13.00,
    category: 'coffee',
    subcategory: 'spark-series',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=600',
    icons: ['cold']
  },
  {
    id: 'spark-lemonade-pink-guava',
    name: 'Lemonade Pink Guava',
    description: 'Refreshing lemonade infused with pink guava flavour, lightly sweetened and served chilled. A tropical sweet-and-tangy delight.',
    price: 13.00,
    category: 'coffee',
    subcategory: 'spark-series',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=600',
    icons: ['cold']
  },
  {
    id: 'spark-lemonade-mango',
    name: 'Lemonade Mango',
    description: 'Classic lemonade combined with ripe mango flavour, served over ice. Smooth, fruity and refreshingly balanced.',
    price: 13.00,
    category: 'coffee',
    subcategory: 'spark-series',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=80&w=600',
    icons: ['cold']
  },

  // --- PASTRIES ---
  {
    id: 'pastry-chicken-croissant',
    name: 'Smoked Chicken & Cheese Croissant',
    description: 'A buttery layered croissant filled with tender smoked chicken and coated in a creamy garlic sauce, topped with melted cheese for a savoury, satisfying bite.',
    price: 12.00,
    category: 'pastry',
    subcategory: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pastry-kouign-amann',
    name: 'Kouign Amann',
    description: 'A caramelised, buttery pastry with delicate crisp layers and a beautifully balanced sweet-and-salty finish.',
    price: 11.00,
    category: 'pastry',
    subcategory: 'pastries',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pastry-chocolate-croissant',
    name: 'Chocolate Croissant',
    description: 'A rich, flaky chocolate croissant crafted from chocolate dough and filled with premium dark chocolate for a deep, indulgent flavour.',
    price: 11.00,
    category: 'pastry',
    subcategory: 'pastries',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pastry-almond-croissant',
    name: 'Almond Croissant',
    description: 'A flaky, buttery croissant filled with rich almond cream and custard, finished with toasted almond flakes. Crisp on the outside, soft and indulgent within.',
    price: 11.00,
    category: 'pastry',
    subcategory: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pastry-french-croissant',
    name: 'French Croissant',
    description: 'A classic all-butter croissant with delicate layers, golden and crisp on the outside, light and airy on the inside.',
    price: 9.00,
    category: 'pastry',
    subcategory: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600'
  },

  // --- CAKES ---
  {
    id: 'cake-tiramisu',
    name: 'Tiramisu Cake',
    description: 'A classic Italian dessert layered with espresso-soaked sponge, mascarpone cream and a dusting of cocoa powder. Light, creamy and delicately rich in every bite.',
    price: 20.00,
    category: 'pastry',
    subcategory: 'cakes',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cake-salted-caramel-cheesecake',
    name: 'Salted Caramel Burnt Cheesecake',
    description: 'Our signature burnt cheesecake features a lightly caramelised exterior with a soft, creamy centre. Balanced with rich cheese and smooth salted caramel for a perfect finish.',
    price: 13.00,
    category: 'pastry',
    subcategory: 'cakes',
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cake-nutella-cheesecake',
    name: 'Nutella Burnt Cheesecake',
    description: 'A beautifully caramelised outer layer with a luscious, creamy interior infused with rich Nutella. Served on a crisp biscuit base. Perfect for chocolate and hazelnut lovers.',
    price: 13.00,
    category: 'pastry',
    subcategory: 'cakes',
    image: 'https://images.unsplash.com/photo-1607301401219-4475451e0691?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cake-raspberry-cheesecake',
    name: 'Raspberry Vanilla Burnt Cheesecake',
    description: 'A delicately burnt exterior with a smooth, creamy centre, infused with fragrant vanilla and bright raspberry notes. A refreshing balance of sweetness and gentle tartness.',
    price: 13.00,
    category: 'pastry',
    subcategory: 'cakes',
    image: 'https://images.unsplash.com/photo-1607301401219-4475451e0691?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cake-mango-peach-cheesecake',
    name: 'Mango Peach Burnt Cheesecake',
    description: 'A lightly caramelised top with a soft, creamy interior, layered with sweet mango and fragrant peach flavours. A tropical twist that is both vibrant and satisfying.',
    price: 13.00,
    category: 'pastry',
    subcategory: 'cakes',
    image: 'https://images.unsplash.com/photo-1607301401219-4475451e0691?auto=format&fit=crop&q=80&w=600'
  },

  // --- MUFFIN ---
  {
    id: 'muffin-butterscotch',
    name: 'Butterscotch Muffin',
    description: 'Soft and moist muffin infused with rich butterscotch flavour, folded with white chocolate chips for a sweet, fragrant and indulgent bite.',
    price: 7.00,
    category: 'pastry',
    subcategory: 'muffin',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'muffin-red-velvet',
    name: 'Red Velvet Muffin',
    description: 'A soft, vibrant red velvet muffin with a hint of cocoa aroma, topped with chocolate chips.',
    price: 7.00,
    category: 'pastry',
    subcategory: 'muffin',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600'
  },

  // --- PIE ---
  {
    id: 'pie-mushroom-chicken',
    name: 'Mushroom Chicken Pie',
    description: 'Golden flaky pastry filled with tender chicken and mushrooms in a rich, creamy sauce. Comforting, savoury and satisfying in every bite.',
    price: 12.00,
    category: 'pastry',
    subcategory: 'pie',
    image: 'https://images.unsplash.com/photo-1535926122414-9952ef6236b9?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pie-blackpepper-chicken',
    name: 'Blackpepper Chicken Pie',
    description: 'Crisp pastry filled with chicken cooked in aromatic black pepper, blended with creamy sauce and gentle spices. Bold, savoury and flavourful.',
    price: 12.00,
    category: 'pastry',
    subcategory: 'pie',
    image: 'https://images.unsplash.com/photo-1535926122414-9952ef6236b9?auto=format&fit=crop&q=80&w=600'
  },

  // --- FINGER FOOD ---
  {
    id: 'ff-chicken-popcorn',
    name: 'Chicken Popcorn',
    description: 'Bite-sized seasoned chicken coated in a crispy crust and fried to golden perfection. A light, flavourful snack perfect for sharing. Loved by both adults and kids.',
    price: 15.00,
    category: 'pastry',
    subcategory: 'finger-food',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ff-sweet-potato-fries',
    name: 'Sweet Potato Fries',
    description: 'Golden sweet potato fries with a crisp exterior and soft centre, offering a natural sweetness. A flavourful twist for something a little different, served with your choice of sauce.',
    price: 14.00,
    category: 'pastry',
    subcategory: 'finger-food',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ff-french-fries',
    name: 'French Fries',
    description: 'Crispy on the outside, soft and fluffy on the inside. Perfect as a side or snack, best enjoyed warm with your choice of dipping sauce.',
    price: 10.00,
    category: 'pastry',
    subcategory: 'finger-food',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600'
  },

  // --- PASTA ---
  {
    id: 'pasta-salted-egg',
    name: 'Salted Egg Pasta',
    description: 'Rich and creamy salted egg sauce tossed with aromatic garlic, shallots and fragrant curry leaves. Finished with cherry tomatoes, pea sprouts and shredded cheese.',
    price: 22.00,
    category: 'pasta',
    subcategory: 'pasta',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Select Protein Option',
        choices: ['Chicken Pepperoni (Standard)', 'Streakybeef (+ RM0)', 'Smoked Duck (+ RM2)', 'Prawn (+ RM4)']
      }
    ]
  },
  {
    id: 'pasta-carbonara',
    name: 'Carbonara Pasta',
    description: 'Silky, creamy pasta cooked with garlic and onions, enriched with thick cream and full cream milk, then elevated with Parmesan cheese and a blend of black and white pepper for a smooth, balanced finish. Finished with cherry tomatoes, pea sprouts and shredded cheese.',
    price: 22.00,
    category: 'pasta',
    subcategory: 'pasta',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Select Protein Option',
        choices: ['Chicken Pepperoni (Standard)', 'Streakybeef (+ RM0)', 'Smoked Duck (+ RM2)', 'Prawn (+ RM4)']
      }
    ]
  },
  {
    id: 'pasta-aglio-olio',
    name: 'Aglio Olio Pasta',
    description: 'Spaghetti tossed in fragrant olive oil with thinly sliced garlic, seasoned with crushed black pepper, dried parsley and oregano. Simple, aromatic and beautifully herbaceous. Finished with cherry tomatoes, pea sprouts and shredded cheese.',
    price: 21.00,
    category: 'pasta',
    subcategory: 'pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Select Protein Option',
        choices: ['Chicken Pepperoni (Standard)', 'Streakybeef (+ RM0)', 'Smoked Duck (+ RM3)', 'Prawn (+ RM4)']
      }
    ]
  },
  {
    id: 'pasta-pomodoro',
    name: 'Pomodoro Pasta',
    description: 'Tender pasta coated in a slow-cooked tomato sauce prepared with garlic and onions, blended with tomato paste and crushed tomatoes. Lightly seasoned with herbs and spices for a well-rounded, comforting flavour. Finished with cherry tomatoes, pea sprouts and shredded cheese.',
    price: 22.00,
    category: 'pasta',
    subcategory: 'pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600',
    customizations: [
      {
        name: 'Select Protein Option',
        choices: ['Chicken Pepperoni (Standard)', 'Streakybeef (+ RM0)', 'Smoked Duck (+ RM2)', 'Prawn (+ RM4)']
      }
    ]
  },

  // --- MUST HAVE COMBOS ---
  {
    id: 'combo-wagyu-double-trouble',
    name: 'Wagyu Double Trouble (2-3 Pax)',
    description: 'The ultimate feast containing our signature 11-inch Wagyu Pizzas x2.',
    price: 167.00,
    category: 'combo',
    subcategory: 'combo',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'combo-wagyu-duck-attack',
    name: 'Wagyu Duck Attack (4-5 Pax)',
    description: 'A massive premium compilation containing: Signature Wagyu Pizza x1, Smoked Duck Indulgence Pizza x1, Streaky Beef Salted Egg Pasta x1, Chicken Pepperoni Carbonara Pasta x1.',
    price: 165.00,
    category: 'combo',
    subcategory: 'combo',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'combo-pociato-grand-feast',
    name: 'Pociato Grand Feast (6-7 Pax)',
    description: 'The absolute mega feast perfect for large groups: Signature Wagyu Pizza x1, Smoked Duck Indulgence Pizza x1, Beef Pepperoni Pizza x1, Streaky Beef Salted Egg Pasta x1, Chicken Pepperoni Carbonara Pasta x1, Butterscotch Muffin x1.',
    price: 205.00,
    category: 'combo',
    subcategory: 'combo',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'combo-croissant-hot-choc',
    name: 'French Croissant + Hot Chocolate Combo',
    description: 'A timeless breakfast combination: Golden flaky French Croissant paired with a warm cup of Oh Cocoa hot chocolate.',
    price: 22.00,
    category: 'combo',
    subcategory: 'combo',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600'
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
    text: 'That Signature Wagyu Pizza is simply transcendent! It sits beautifully with the rich, deep scent of the hot white truffle oil. This cafe has immediately stolen my weekends.',
    timestamp: '2 hours ago',
    itemCategory: 'pizza',
    itemName: 'Signature Wagyu Pizza'
  },
  {
    id: 'rev-2',
    author: 'Damien Mercer',
    rating: 5,
    text: 'The Strawberry Matcha Latte is outstanding, featuring striking layers of fresh strawberry purée and ceremonial matcha. An absolute must-try!',
    timestamp: 'Yesterday',
    itemCategory: 'coffee',
    itemName: 'Strawberry Matcha Latte'
  },
  {
    id: 'rev-3',
    author: 'Alessia C.',
    rating: 4,
    text: 'The Sukiya Beef Pizza feels extremely premium and looks exactly like high-end fusion cuisine in Tokyo. Highly recommended!',
    timestamp: '3 days ago',
    itemCategory: 'pizza',
    itemName: 'Sukiya Beef Pizza'
  }
];
