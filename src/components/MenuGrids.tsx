import React from 'react';
import { MenuItem } from '../types';
import { ShoppingBag, Eye, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface MenuGridsProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export default function MenuGrids({ items, onSelectItem, onQuickAdd }: MenuGridsProps) {
  // We can segment the data into Coffees, Pastries and Pizzas to display themed bento blocks
  const pizzas = items.filter(i => i.category === 'pizza');
  const coffees = items.filter(i => i.category === 'coffee');
  const pastries = items.filter(i => i.category === 'pastry');

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="w-full space-y-16 mt-20">
      
      {/* 1. Artisanal Pizzas Cards */}
      <motion.section 
        id="pizzas-session"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-serif text-3xl text-espresso tracking-tight">Artisanal Pizzas</h3>
            <p className="font-sans text-xs text-caramel tracking-wider uppercase mt-1 font-semibold">Slow Fermented • Sourdough Neapolitan</p>
          </div>
          <div className="h-px bg-espresso/15 flex-grow mx-8 hidden sm:block"></div>
        </div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pizzas.map((pizza) => (
            <motion.div 
              variants={itemVariants}
              key={pizza.id}
              className="group rounded-lg overflow-hidden glass-light flex flex-col justify-between hover:-translate-y-1 transition-all duration-350 cursor-pointer shadow-lg hover:shadow-xl border border-matte-black/10"
              onClick={() => onSelectItem(pizza)}
            >
              {/* Bleeding image at the top */}
              <div className="w-full h-56 relative overflow-hidden">
                <img 
                  src={pizza.image} 
                  alt={pizza.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge Overlay */}
                {pizza.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[9px] uppercase tracking-wider font-bold bg-burgundy text-white rounded-sm shadow-sm">
                    {pizza.badge}
                  </span>
                )}

                {/* Glassy action panel when hover */}
                <div className="absolute inset-0 bg-matte-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <span className="p-3 bg-white/95 rounded-sm hover:bg-cream transition-colors shadow-lg">
                    <Eye className="w-4 h-4 text-espresso" />
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickAdd(pizza);
                    }}
                    className="p-3 bg-burgundy hover:bg-burgundy/90 text-white rounded-sm transition-colors shadow-lg"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-bold text-espresso group-hover:text-burgundy transition-colors">
                      {pizza.name}
                    </h4>
                    <span className="font-serif text-lg font-bold text-burgundy">
                      ${pizza.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-espresso/75 mt-2 leading-relaxed">
                    {pizza.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-espresso/5 text-[10px] uppercase font-mono tracking-wider text-caramel font-bold">
                  <span>{pizza.dietary?.join(' • ') || 'Artisanal Flour'}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectItem(pizza);
                    }}
                    className="text-burgundy hover:underline text-xs flex items-center gap-1 font-serif uppercase tracking-normal"
                  >
                    View & Customize →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 2. Specialty Coffee Cards (Matching dark glassmorphism card mock in screenshot) */}
      <motion.section 
        id="coffees-session"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-serif text-3xl text-espresso tracking-tight">Specialty Coffee</h3>
            <p className="font-sans text-xs text-caramel tracking-wider uppercase mt-1 font-semibold">Third Wave Roasters • Espresso Base</p>
          </div>
          <div className="h-px bg-espresso/15 flex-grow mx-8 hidden sm:block"></div>
        </div>

        {/* 3 columns matching design: dark layout */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coffees.map((coffee) => (
            <motion.div 
              variants={itemVariants}
              key={coffee.id}
              onClick={() => onSelectItem(coffee)}
              className="p-6 rounded-lg glass-dark hover:translate-y-[-2px] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[180px] border border-white/5 relative overflow-hidden group"
            >
              {/* Subtle background glow effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-caramel/10 rounded-full blur-xl group-hover:bg-caramel/15 transition-all"></div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-serif text-lg font-bold text-cream group-hover:text-caramel transition-colors">
                    {coffee.name}
                  </h4>
                  {coffee.badge && (
                    <span className="text-[8px] bg-caramel text-matte-black font-semibold uppercase px-1.5 py-0.5 rounded-sm tracking-wider">
                      {coffee.badge}
                    </span>
                  )}
                </div>
                <p className="font-sans text-xs text-cream/70 mt-2 leading-relaxed max-w-[90%]">
                  {coffee.description}
                </p>
              </div>

              <div className="flex items-end justify-between mt-6">
                <span className="font-sans font-semibold text-sm text-caramel">
                  ${coffee.price.toFixed(2)}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickAdd(coffee);
                  }}
                  className="px-3 py-1 bg-white/10 group-hover:bg-caramel group-hover:text-espresso font-mono text-[10px] tracking-wider uppercase font-semibold text-white rounded-sm transition-all duration-300 flex items-center space-x-1"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Order</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 3. House Pastries Cards (Matching dark glassmorphism card mock in screenshot) */}
      <motion.section 
        id="pastries-session" 
        className="pb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-serif text-3xl text-espresso tracking-tight">House Pastries</h3>
            <p className="font-sans text-xs text-caramel tracking-wider uppercase mt-1 font-semibold">Baked Fresh daily at 5:00 AM</p>
          </div>
          <div className="h-px bg-espresso/15 flex-grow mx-8 hidden sm:block"></div>
        </div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastries.map((pastry) => (
            <motion.div 
              variants={itemVariants}
              key={pastry.id}
              onClick={() => onSelectItem(pastry)}
              className="p-6 rounded-lg glass-dark hover:translate-y-[-2px] transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[170px] border border-white/5 relative overflow-hidden group"
            >
              {/* Subtle background glow effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-burgundy/10 rounded-full blur-xl group-hover:bg-burgundy/15 transition-all"></div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-serif text-lg font-bold text-cream group-hover:text-caramel transition-colors">
                    {pastry.name}
                  </h4>
                  {pastry.badge && (
                    <span className="text-[8px] bg-burgundy text-white font-semibold uppercase px-1.5 py-0.5 rounded-sm tracking-wider">
                      {pastry.badge}
                    </span>
                  )}
                </div>
                <p className="font-sans text-xs text-cream/70 mt-2 leading-relaxed max-w-[90%]">
                  {pastry.description}
                </p>
              </div>

              <div className="flex items-end justify-between mt-6">
                <span className="font-sans font-semibold text-sm text-caramel">
                  ${pastry.price.toFixed(2)}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickAdd(pastry);
                  }}
                  className="px-3 py-1 bg-white/10 group-hover:bg-burgundy group-hover:text-white font-mono text-[10px] tracking-wider uppercase font-semibold text-white rounded-sm transition-all duration-300 flex items-center space-x-1"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Order</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

    </div>
  );
}
