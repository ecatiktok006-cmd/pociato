import React from 'react';
import { MenuItem } from '../types';
import { Eye, Flame, Award } from 'lucide-react';

interface MenuListOldStyleProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export default function MenuListOldStyle({ items, onSelectItem }: MenuListOldStyleProps) {
  const pizzas = items.filter(i => i.category === 'pizza');
  const coffees = items.filter(i => i.category === 'coffee');
  const pastries = items.filter(i => i.category === 'pastry');

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-10 bg-[#f8f1e5] border-8 double border-[#3c2a21] text-[#2c1d11] shadow-2xl relative select-none">
      {/* Vintage decorative corners */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#3c2a21]"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#3c2a21]"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#3c2a21]"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#3c2a21]"></div>

      {/* Outer double border margin */}
      <div className="border border-dashed border-[#3c2a21]/40 p-4 md:p-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 pb-6 border-b-2 border-[#3c2a21] relative">
          <div className="text-[11px] uppercase tracking-[0.25em] font-mono font-bold text-[#8c5a3c] mb-2">
            * Established 1994 *
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-black tracking-tight text-[#2c1d11] uppercase mb-2">
            Pociato Coffee & Pizza
          </h2>
          <p className="font-serif italic text-xs md:text-sm text-[#5c4033] max-w-md mx-auto leading-relaxed">
            Prepared with fresh local ingredients, slow-fermented sourdough, and roasted specialty beans.
          </p>
          <div className="text-xs font-serif mt-4 text-[#8c5a3c] flex items-center justify-center gap-1.5 select-none">
            <span>◆</span>
            <span>DAILY FRESH SELECTIONS</span>
            <span>◆</span>
          </div>

          {/* Elegant decorative separator */}
          <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-[#f8f1e5] px-4 font-serif text-lg text-[#3c2a21] tracking-widest">
            ❦ ❧ ❦
          </div>
        </div>

        {/* Informative instructions */}
        <div className="text-center text-xs font-serif italic text-[#6a4e42] mb-10 bg-[#eae1d0] py-2 px-4 rounded border border-[#3c2a21]/15">
          👉 Click on any item below to customize ingredients and add it to your order.
        </div>

        {/* 1. ARTISANAL PIZZAS SECTION */}
        <div className="mb-14" id="old-style-pizzas">
          <div className="text-center mb-8">
            <h3 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-wider text-[#1c110a] border-b border-[#3c2a21]/30 pb-1.5 inline-block min-w-[200px]">
              Ⅰ. Artisanal Pizzas
            </h3>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#8c5a3c] mt-1">Baked in our 450°C brick oven</p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {pizzas.map((pizza) => (
              <div
                key={pizza.id}
                onClick={() => onSelectItem(pizza)}
                className="group cursor-pointer hover:bg-[#eae1d0]/50 p-2 rounded transition-all duration-200"
              >
                {/* Item Line */}
                <div className="flex items-end justify-between font-serif text-sm md:text-base font-bold text-[#2c1d11]">
                  <span className="flex items-center gap-1.5 truncate group-hover:text-red-900 transition-colors">
                    {pizza.name}
                    {pizza.badge && (
                      <span className="inline-flex items-center gap-0.5 text-[8px] bg-[#3c2a21] text-white px-1.5 py-0.5 rounded uppercase font-sans tracking-wide">
                        <Award className="w-2.5 h-2.5 text-[#f8f1e5]" />
                        {pizza.badge}
                      </span>
                    )}
                  </span>
                  
                  {/* Dotted leader connector */}
                  <span className="flex-grow border-b border-dotted border-[#3c2a21]/50 mx-2 mb-1"></span>
                  
                  <span className="font-mono text-xs md:text-sm font-semibold text-[#8c4f2b]">
                    ${pizza.price.toFixed(2)}
                  </span>
                </div>

                {/* Description and tags */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mt-1 pl-2">
                  <p className="font-serif italic text-xs text-[#5c4033]/95 max-w-xl leading-relaxed">
                    {pizza.description}
                  </p>
                  
                  {pizza.dietary && pizza.dietary.length > 0 && (
                    <div className="flex gap-1 flex-wrap self-start md:self-auto">
                      {pizza.dietary.map(d => (
                        <span key={d} className="text-[8px] uppercase tracking-wider font-mono border border-[#3c2a21]/40 px-1.5 py-0.5 rounded bg-[#fcf8f0]">
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="text-center my-8 text-[#3c2a21]/40 tracking-widest text-lg">
          ━━━━━━ ❖ ━━━━━━
        </div>

        {/* 2. SPECIALTY COFFEE SECTION */}
        <div className="mb-14" id="old-style-coffees">
          <div className="text-center mb-8">
            <h3 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-wider text-[#1c110a] border-b border-[#3c2a21]/30 pb-1.5 inline-block min-w-[200px]">
              Ⅱ. Specialty Sips
            </h3>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#8c5a3c] mt-1">Fresh roasted daily, custom ground</p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {coffees.map((coffee) => (
              <div
                key={coffee.id}
                onClick={() => onSelectItem(coffee)}
                className="group cursor-pointer hover:bg-[#eae1d0]/50 p-2 rounded transition-all duration-200"
              >
                {/* Item Line */}
                <div className="flex items-end justify-between font-serif text-sm md:text-base font-bold text-[#2c1d11]">
                  <span className="flex items-center gap-1.5 truncate group-hover:text-amber-900 transition-colors">
                    {coffee.name}
                    {coffee.badge && (
                      <span className="text-[8px] border border-[#3c2a21] text-[#3c2a21] px-1 py-0.2 rounded font-sans uppercase font-bold tracking-wider">
                        {coffee.badge}
                      </span>
                    )}
                  </span>
                  
                  {/* Dotted leader connector */}
                  <span className="flex-grow border-b border-dotted border-[#3c2a21]/50 mx-2 mb-1"></span>
                  
                  <span className="font-mono text-xs md:text-sm font-semibold text-[#8c4f2b]">
                    ${coffee.price.toFixed(2)}
                  </span>
                </div>

                {/* Description */}
                <div className="pl-2 mt-1">
                  <p className="font-serif italic text-xs text-[#5c4033]/95 max-w-xl leading-relaxed">
                    {coffee.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="text-center my-8 text-[#3c2a21]/40 tracking-widest text-lg">
          ━━━━━━ ❖ ━━━━━━
        </div>

        {/* 3. HOUSE BAKED PASTRIES SECTION */}
        <div className="mb-8" id="old-style-pastries">
          <div className="text-center mb-8">
            <h3 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-wider text-[#1c110a] border-b border-[#3c2a21]/30 pb-1.5 inline-block min-w-[200px]">
              Ⅲ. Baked Goods
            </h3>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#8c5a3c] mt-1">Handmade daily in our bakery room</p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {pastries.map((pastry) => (
              <div
                key={pastry.id}
                onClick={() => onSelectItem(pastry)}
                className="group cursor-pointer hover:bg-[#eae1d0]/50 p-2 rounded transition-all duration-200"
              >
                {/* Item Line */}
                <div className="flex items-end justify-between font-serif text-sm md:text-base font-bold text-[#2c1d11]">
                  <span className="flex items-center gap-1.5 truncate group-hover:text-amber-800 transition-colors">
                    {pastry.name}
                  </span>
                  
                  {/* Dotted leader connector */}
                  <span className="flex-grow border-b border-dotted border-[#3c2a21]/50 mx-2 mb-1"></span>
                  
                  <span className="font-mono text-xs md:text-sm font-semibold text-[#8c4f2b]">
                    ${pastry.price.toFixed(2)}
                  </span>
                </div>

                {/* Description */}
                <div className="pl-2 mt-1">
                  <p className="font-serif italic text-xs text-[#5c4033]/95 max-w-xl leading-relaxed">
                    {pastry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <div className="text-center mt-12 pt-6 border-t border-[#3c2a21]/20 font-serif text-[11px] text-[#6a4e42] italic">
          * Tax & service charge not included. Please inform your server of any allergies before placing your order. *
        </div>

      </div>
    </div>
  );
}
