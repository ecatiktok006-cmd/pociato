import React, { useState } from 'react';
import { MenuItem } from '../types';

interface LevelOneMenuProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export default function LevelOneMenu({ items, onSelectItem }: LevelOneMenuProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pizza' | 'coffee' | 'pastry' | 'pasta' | 'combo'>('all');

  const filteredItems = items.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20">
      {/* Refined Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-16">
        {(['all', 'pizza', 'coffee', 'pastry', 'pasta', 'combo'] as const).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-xs md:text-sm font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 pb-2 border-b-2 ${
              activeCategory === category
                ? 'border-burgundy text-burgundy'
                : 'border-transparent text-espresso/40 hover:text-espresso/80 hover:border-espresso/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Elegant List Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="group flex items-center gap-6 cursor-pointer"
          >
            {/* Minimalist Image Container */}
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border border-black/5 bg-cream">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Clean Typography Content */}
            <div className="flex flex-col flex-grow justify-center py-2">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-serif font-bold text-lg md:text-xl text-espresso group-hover:text-burgundy transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <span className="font-sans font-bold text-burgundy ml-4 whitespace-nowrap text-sm md:text-base">
                  RM {item.price.toFixed(2)}
                </span>
              </div>
              
              <div className="border-b border-espresso/10 w-full my-2 relative"></div>
              
              <p className="text-espresso/70 text-xs md:text-sm leading-relaxed line-clamp-2">
                {item.description}
              </p>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {item.badge && (
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white bg-burgundy px-2 py-1 rounded-sm">
                    {item.badge}
                  </span>
                )}
                {item.dietary?.map((d) => (
                  <span key={d} className="text-[9px] uppercase tracking-widest text-caramel border border-caramel/30 px-2 py-1 rounded-sm">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
