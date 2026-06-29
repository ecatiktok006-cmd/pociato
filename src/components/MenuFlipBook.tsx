import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Eye, Coffee } from 'lucide-react';

interface MenuFlipBookProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export default function MenuFlipBook({ items, onSelectItem }: MenuFlipBookProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter items
  const pizzas = items.filter(i => i.category === 'pizza' || i.category === 'pasta' || i.category === 'combo');
  const coffees = items.filter(i => i.category === 'coffee');
  const pastries = items.filter(i => i.category === 'pastry');

  return (
    <div className="w-full flex flex-col items-center py-12 perspective-[2000px]">
      
      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center gap-4 mb-8 z-20">
        <button 
          onClick={() => setIsFlipped(false)}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${!isFlipped ? 'bg-[#1c120c] text-white' : 'bg-white/10 text-white/80'}`}
        >
          Page 1
        </button>
        <button 
          onClick={() => setIsFlipped(true)}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${isFlipped ? 'bg-[#1c120c] text-white' : 'bg-white/10 text-white/80'}`}
        >
          Page 2
        </button>
      </div>

      <div className="relative w-full max-w-5xl h-[700px] md:h-[650px] shadow-2xl rounded-lg preserve-3d">
        {/* Book back cover / shadow */}
        <div className="absolute inset-0 bg-[#1a0e06] rounded-[24px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border-4 border-[#120a04]"></div>

        {/* Book Container */}
        <div className="absolute inset-2 md:inset-4 flex bg-[#20130a] rounded-[16px] overflow-hidden border border-[#3e2714]/50 preserve-3d">
          
          {/* Left Static Page (Underneath Flip Page) */}
          <div className="hidden md:block absolute left-0 w-1/2 h-full bg-[#fcf8f0] border-r border-[#d4c9bc] p-10 z-0">
             {/* Same content as Pizza Page */}
             <PizzaPageContent pizzas={pizzas} onSelectItem={onSelectItem} />
          </div>

          {/* Right Static Page (Underneath Flip Page) */}
          <div className="hidden md:block absolute right-0 w-1/2 h-full bg-[#fcf8f0] p-10 z-0">
             <CoffeePageContent coffees={coffees} pastries={pastries} onSelectItem={onSelectItem} />
          </div>

          {/* The Flipping Page */}
          <div 
            className="absolute top-0 right-0 w-full md:w-1/2 h-full origin-left transition-transform duration-[600ms] ease-in-out preserve-3d z-10 cursor-pointer"
            style={{
              transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'
            }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front of flipping page (Right side initially) */}
            <div 
              className="absolute inset-0 w-full h-full bg-[#fcf8f0] backface-hidden p-6 md:p-10 shadow-[-10px_0_20px_rgba(0,0,0,0.1)] md:border-l border-black/10"
            >
               {/* Mobile shows Pizza on front, Desktop shows Coffee on front */}
               <div className="md:hidden h-full">
                 <PizzaPageContent pizzas={pizzas} onSelectItem={onSelectItem} />
               </div>
               <div className="hidden md:block h-full">
                 <CoffeePageContent coffees={coffees} pastries={pastries} onSelectItem={onSelectItem} />
                 
                 {/* Page curl affordance */}
                 <div className="absolute bottom-4 right-4 flex items-center gap-2 text-burgundy opacity-50 animate-pulse">
                   <span className="text-xs font-mono font-bold">CLICK TO FLIP</span>
                 </div>
               </div>
               
               {/* Spine shadow for front */}
               <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Back of flipping page (Left side when flipped) */}
            <div 
              className="absolute inset-0 w-full h-full bg-[#fcf8f0] backface-hidden p-6 md:p-10 shadow-[10px_0_20px_rgba(0,0,0,0.1)] border-r border-black/10"
              style={{ transform: 'rotateY(180deg)' }}
            >
               {/* Mobile shows Coffee on back, Desktop shows Pizza on back */}
               <div className="md:hidden h-full">
                 <CoffeePageContent coffees={coffees} pastries={pastries} onSelectItem={onSelectItem} />
               </div>
               <div className="hidden md:block h-full">
                 <PizzaPageContent pizzas={pizzas} onSelectItem={onSelectItem} />
                 
                 {/* Page curl affordance */}
                 <div className="absolute bottom-4 left-4 flex items-center gap-2 text-burgundy opacity-50 animate-pulse">
                   <span className="text-xs font-mono font-bold">CLICK TO FLIP BACK</span>
                 </div>
               </div>
               
               {/* Spine shadow for back */}
               <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          {/* Center Spine (Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-4 -ml-2 bg-gradient-to-r from-transparent via-black/30 to-transparent z-20 pointer-events-none"></div>

        </div>
      </div>
    </div>
  );
}

// Reusable Page Contents

function PizzaPageContent({ pizzas, onSelectItem }: { pizzas: MenuItem[], onSelectItem: (item: MenuItem) => void }) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col flex-grow overflow-hidden">
        <div className="text-center mb-4 border-b border-black/10 pb-3 shrink-0">
          <h3 className="font-serif text-2xl md:text-3xl text-[#3e2714] tracking-tight relative inline-block">
            Artisanal Mains & Combos
          </h3>
          <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#8c5a3c] font-bold mt-1">Page 1 • Oven Pizzas, Pasta & Feast</p>
        </div>

        <div className="space-y-4 overflow-y-auto pr-1 flex-grow scrollbar-thin" style={{ maxHeight: '420px' }}>
          {pizzas.map((pizza) => (
            <div 
              key={pizza.id}
              onClick={(e) => { e.stopPropagation(); onSelectItem(pizza); }}
              className="flex items-start space-x-3 group cursor-pointer hover:bg-black/5 p-2 rounded-sm transition-all duration-300 relative z-30"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden flex-shrink-0 border border-black/10">
                <img 
                  src={pizza.image} 
                  alt={pizza.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-grow min-w-0 pr-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-sm md:text-base font-bold text-[#3e2714] group-hover:text-burgundy truncate">
                    {pizza.name}
                  </h4>
                  <span className="font-sans font-bold text-xs text-burgundy ml-1 whitespace-nowrap">
                    RM {pizza.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-[10px] md:text-xs text-[#3e2714]/80 line-clamp-2 mt-1">
                  {pizza.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center pt-4 border-t border-black/10 mt-4 shrink-0">
        <span className="font-mono text-xs text-black/40">Page 1</span>
      </div>
    </div>
  );
}

function CoffeePageContent({ coffees, pastries, onSelectItem }: { coffees: MenuItem[], pastries: MenuItem[], onSelectItem: (item: MenuItem) => void }) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col flex-grow overflow-hidden">
        <div className="text-center mb-4 border-b border-black/10 pb-3 shrink-0">
          <h3 className="font-serif text-2xl md:text-3xl text-[#3e2714] tracking-tight relative inline-block">
            Third-Wave Sips & Sweets
          </h3>
          <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#8c5a3c] font-bold mt-1">Page 2 • Specialty Brews & Bakeries</p>
        </div>

        <div className="space-y-6 overflow-y-auto pr-1 flex-grow scrollbar-thin" style={{ maxHeight: '420px' }}>
          <div>
            <h4 className="font-serif text-xs uppercase tracking-wider font-bold text-[#6a493a] border-b border-black/10 pb-1 mb-2 flex items-center gap-1.5 sticky top-0 bg-[#fcf8f0] z-10 pt-1">
              <Coffee className="w-3.5 h-3.5 text-[#8c5a3c]" /> Specialty Drinks
            </h4>
            <div className="space-y-2">
              {coffees.map((coffee) => (
                <div 
                  key={coffee.id}
                  onClick={(e) => { e.stopPropagation(); onSelectItem(coffee); }}
                  className="group cursor-pointer hover:bg-black/5 p-1 rounded-sm transition-all duration-200 relative z-30"
                >
                  <div className="flex justify-between items-baseline text-[#3e2714] font-serif text-sm">
                    <span className="font-bold group-hover:text-burgundy">{coffee.name}</span>
                    <span className="font-sans font-bold text-xs text-burgundy">RM {coffee.price.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-[#3e2714]/70 font-sans italic mt-0.5 truncate">
                    {coffee.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xs uppercase tracking-wider font-bold text-[#6a493a] border-b border-black/10 pb-1 mb-2 sticky top-0 bg-[#fcf8f0] z-10 pt-1">
              🌸 Handcrafted Baked Pastries & Cakes
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {pastries.map((pastry) => (
                <div 
                  key={pastry.id}
                  onClick={(e) => { e.stopPropagation(); onSelectItem(pastry); }}
                  className="p-2 rounded bg-white/50 border border-black/5 hover:shadow-sm cursor-pointer transition-all duration-300 relative z-30"
                >
                  <div className="w-full h-12 rounded-sm overflow-hidden mb-1">
                    <img src={pastry.image} alt={pastry.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h5 className="font-serif text-[11px] font-bold text-[#3e2714] truncate">{pastry.name}</h5>
                  <div className="mt-1 flex justify-between items-center">
                    <span className="font-sans font-bold text-[10px] text-burgundy">RM {pastry.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 border-t border-black/10 mt-4 shrink-0">
        <span className="font-mono text-xs text-black/40">Page 2</span>
      </div>
    </div>
  );
}
