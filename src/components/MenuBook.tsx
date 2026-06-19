import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Sparkles, Pizza, Coffee, Flame, Heart, ArrowRight, Eye } from 'lucide-react';

interface MenuBookProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export default function MenuBook({ items, onSelectItem }: MenuBookProps) {
  const [currentPage, setCurrentPage] = useState<'pizza' | 'coffee'>('pizza');

  // Filter items
  const pizzas = items.filter(i => i.category === 'pizza');
  const coffees = items.filter(i => i.category === 'coffee');
  const pastries = items.filter(i => i.category === 'pastry');

  return (
    <div className="w-full flex flex-col items-center">
      {/* Mobile Page Toggle for the Book */}
      <div className="flex md:hidden items-center justify-center space-x-2 mt-2 mb-6">
        <button
          onClick={() => setCurrentPage('pizza')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
            currentPage === 'pizza'
              ? 'bg-[#1c120c] text-white shadow-md'
              : 'bg-white/10 text-white/80'
          }`}
        >
          Page 1: Pizza
        </button>
        <button
          onClick={() => setCurrentPage('coffee')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
            currentPage === 'coffee'
              ? 'bg-[#1c120c] text-white shadow-md'
              : 'bg-white/10 text-white/80'
          }`}
        >
          Page 2: Coffee & Pastry
        </button>
      </div>

      {/* Outer book binding frame (thick black/dark hardcover border matching mockup) */}
      <div className="w-full max-w-5xl bg-[#1a0e06] p-2.5 md:p-3.5 rounded-[12px] md:rounded-[24px] shadow-2xl relative">
        {/* Inside elegant hot-stamp borderline */}
        <div className="absolute inset-1.5 border border-[#3e2714]/40 rounded-[10px] md:rounded-[20px] pointer-events-none"></div>

        {/* The Open Book Pages inside */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#fcf8f0] rounded-[6px] md:rounded-[12px] relative border-4 border-[#20130a] min-h-[580px] md:min-h-[640px] shadow-inner overflow-hidden">
          
          {/* Virtual Spine Shadow in middle (Desktop exclusive divider) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-[2px] w-[5px] bg-gradient-to-r from-espresso/20 via-espresso/35 to-espresso/20 z-10"></div>
          
          {/* LEFT PAGE: Artisanal Pizzas */}
          <div className={`p-6 md:p-10 flex flex-col justify-between ${currentPage === 'pizza' ? 'block' : 'hidden md:flex'}`}>
            <div>
              {/* Header */}
              <div className="text-center mb-8 border-b border-espresso/10 pb-4">
                <h3 className="font-serif text-2xl md:text-3.5xl text-espresso tracking-tight relative inline-block">
                  Artisanal Pizzas
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-burgundy/60"></span>
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-caramel font-bold mt-1.5">Page 1 • Wood Fired Neapolitan</p>
              </div>

              {/* Pizza Items */}
              <div className="space-y-6">
                {pizzas.map((pizza) => (
                  <div 
                    key={pizza.id}
                    onClick={() => onSelectItem(pizza)}
                    className="flex items-start space-x-3 group cursor-pointer hover:bg-espresso/[0.03] p-1.5 rounded-sm transition-all duration-300 animate-fade-in relative"
                  >
                    {/* Small preview image thumbnail */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-sm overflow-hidden flex-shrink-0 border border-espresso/15 shadow-sm relative">
                      <img 
                        src={pizza.image} 
                        alt={pizza.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-matte-black/0 group-hover:bg-matte-black/20 flex items-center justify-center transition-colors">
                        <Eye className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex-grow min-w-0 pr-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-sm md:text-base font-bold text-espresso group-hover:text-burgundy transition-colors truncate">
                          {pizza.name}
                        </h4>
                        <span className="font-sans font-semibold text-xs text-burgundy ml-1">
                          ${pizza.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-[11px] md:text-xs text-espresso/80 line-clamp-2 mt-1">
                        {pizza.description}
                      </p>
                      
                      {/* Dietary Tag */}
                      {pizza.dietary && pizza.dietary.map(d => (
                        <span key={d} className="inline-block mt-2 text-[8px] tracking-wider uppercase font-semibold text-espresso border border-espresso/30 px-1.5 rounded-full bg-white/50">
                          {d}
                        </span>
                      ))}

                      {pizza.badge && (
                        <span className="inline-block mt-2 ml-1 text-[8px] font-bold text-white bg-burgundy/80 px-1.5 py-0.5 rounded-sm">
                          {pizza.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Page Number indicator */}
            <div className="text-center pt-6 border-t border-espresso/10 mt-6">
              <span className="font-mono text-xs text-espresso/45">Page 1</span>
            </div>
          </div>

          {/* RIGHT PAGE: Coffee & Pastries */}
          <div className={`p-6 md:p-10 flex flex-col justify-between ${currentPage === 'coffee' ? 'block' : 'hidden md:flex'} border-t md:border-t-0 border-espresso/15 md:border-l border-white/20`}>
            <div>
              {/* Header */}
              <div className="text-center mb-6 border-b border-espresso/10 pb-4">
                <h3 className="font-serif text-2xl md:text-3.5xl text-espresso tracking-tight relative inline-block">
                  Third-Wave Sips & Sweets
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-burgundy/60"></span>
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-caramel font-bold mt-1.5">Page 2 • Specialty Brews & Bakeries</p>
              </div>

              {/* Specialty Coffees Section */}
              <div className="mb-6">
                <h4 className="font-serif text-sm uppercase tracking-wider font-bold text-[#6a493a] border-b border-[#ab998a]/30 pb-1 mb-3 flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-caramel" /> Specialty Coffees
                </h4>
                <div className="space-y-3">
                  {coffees.map((coffee) => (
                    <div 
                      key={coffee.id}
                      onClick={() => onSelectItem(coffee)}
                      className="group cursor-pointer hover:bg-espresso/[0.03] p-1 rounded-sm transition-all duration-200"
                    >
                      <div className="flex items-baseline justify-between text-espresso font-serif text-sm">
                        <span className="font-bold group-hover:text-burgundy transition-colors">{coffee.name}</span>
                        <span className="dotted-connector"></span>
                        <span className="font-sans font-semibold text-xs text-burgundy">${coffee.price.toFixed(2)}</span>
                      </div>
                      <p className="text-[11px] md:text-xs text-espresso/70 font-sans italic mt-0.5">
                        {coffee.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* House Pastries Section */}
              <div>
                <h4 className="font-serif text-sm uppercase tracking-wider font-bold text-[#6a493a] border-b border-[#ab998a]/30 pb-1 mb-3">
                  🌸 Baked Pastries
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {pastries.map((pastry) => (
                    <div 
                      key={pastry.id}
                      onClick={() => onSelectItem(pastry)}
                      className="p-2.5 rounded bg-cream/40 hover:bg-[#eae0d0] border border-espresso/5 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Miniature unsplash thumbnails */}
                        <div className="w-full h-14 rounded-sm overflow-hidden border border-espresso/5 mb-1.5">
                          <img 
                            src={pastry.image} 
                            alt={pastry.name} 
                            className="w-full h-full object-cover scale-[1.02] hover:scale-110 transition-transform duration-300" 
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h5 className="font-serif text-xs font-bold text-espresso leading-tight">{pastry.name}</h5>
                        <p className="text-[9px] text-espresso/70 line-clamp-2 mt-0.5 leading-snug">{pastry.description}</p>
                      </div>
                      <div className="mt-2 text-right">
                        <span className="font-sans font-bold text-xs text-burgundy">${pastry.price.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Page Number indicator */}
            <div className="text-center pt-6 border-t border-espresso/10 mt-6">
              <span className="font-mono text-xs text-espresso/45">Page 2</span>
            </div>
          </div>

        </div>
        
        {/* Soft elegant lighting overlay */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
