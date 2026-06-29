/**
 * Shared Type Definitions for Pociato Coffee & Pizza
 */

export interface CustomizationOption {
  name: string;
  choices: string[];
  prices?: { [choiceUrl: string]: number }; // Optional surcharge for specific chioces
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'pizza' | 'coffee' | 'pastry' | 'pasta' | 'combo';
  subcategory?: 'frappes' | 'signature-coffee' | 'essential' | 'non-coffee' | 'spark-series' | 'pastries' | 'cakes' | 'muffin' | 'pie' | 'finger-food' | 'pasta' | 'pizza' | 'combo';
  image: string;
  badge?: string; // e.g. "Signature", "Chef's Choice", "Best Seller"
  dietary?: ('Vegan' | 'Vegetarian' | 'Gluten-Free' | 'Nut-Free')[];
  customizations?: CustomizationOption[];
  icons?: ('hot' | 'cold')[];
}

export interface CartItem {
  cartId: string; // Unique ID in cart
  item: MenuItem;
  quantity: number;
  selectedCustomizations: { [optionName: string]: string };
  specialInstructions?: string;
  singleItemPriceWithAddons: number;
}

export interface Branch {
  id: string;
  name: string;
  vibe: string;
  address: string;
  contact: string;
  hours: string;
  tableAvailability: string; // e.g. "Limited", "Good", "Busy"
  imageUrl: string;
  mapUrl?: string;
}

export interface TableReservation {
  id: string;
  branchId: string;
  name: string;
  email: string;
  date: string;
  time: string;
  partySize: number;
  tablePreference: string;
  specialRequests?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  timestamp: string;
  itemCategory?: 'pizza' | 'coffee' | 'pastry' | 'pasta' | 'combo';
  itemName?: string;
}
