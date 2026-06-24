import React, { useState } from 'react';
import { MenuItem } from '../types';

interface LevelOneMenuProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export default function LevelOneMenu({ items, onSelectItem }: LevelOneMenuProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pizza' | 'coffee' | 'pastry'>('all');

  const filteredItems = items.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* Minimalist Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12">
        {(['all', 'pizza', 'coffee', 'pastry'] as const).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm md:text-base font-medium tracking-wide uppercase transition-colors pb-1 border-b-2 ${
              activeCategory === category
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Modern Grid Presentation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="group flex flex-col cursor-pointer"
          >
            {/* Minimalist Image Container */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50 mb-4 rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Clean Typography Content */}
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2 gap-4">
                <h3 className="font-semibold text-gray-900 text-base md:text-lg leading-tight group-hover:text-gray-600 transition-colors">
                  {item.name}
                </h3>
                <span className="font-medium text-gray-900 whitespace-nowrap">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">
                {item.description}
              </p>
              
              <div className="mt-auto pt-2 flex flex-wrap gap-2">
                {item.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-900 bg-gray-100 px-2 py-1 rounded-sm">
                    {item.badge}
                  </span>
                )}
                {item.dietary?.map((d) => (
                  <span key={d} className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-200 px-2 py-1 rounded-sm">
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
