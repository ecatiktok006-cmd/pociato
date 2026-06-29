import React from 'react';
import { MenuItem } from '../types';
import { ShoppingBag, Eye, Star, Heart, Coffee as CoffeeIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface MenuGridsProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export default function MenuGrids({ items, onSelectItem, onQuickAdd }: MenuGridsProps) {
  // Segment the data into the precise category groups
  const pizzas = items.filter(i => i.category === 'pizza');
  const pastas = items.filter(i => i.category === 'pasta');
  const coffees = items.filter(i => i.category === 'coffee');
  const pastries = items.filter(i => i.category === 'pastry');
  const combos = items.filter(i => i.category === 'combo');

  // Coffee subgroups
  const signatureCoffees = coffees.filter(c => c.subcategory !== 'essential');
  const essentialCoffees = coffees.filter(c => c.subcategory === 'essential');

  // Pastry subgroups
  const simplePastries = pastries.filter(p => p.subcategory !== 'cakes');
  const cakes = pastries.filter(p => p.subcategory === 'cakes');

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

  const redMenuVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full space-y-16 mt-20 font-sans">
      
      {/* 1. Artisanal Pizzas Cards */}
      <motion.section 
        id="pizzas-session"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-serif text-3xl text-[#f7f1ea] tracking-tight">Artisanal Pizzas</h3>
            <p className="font-sans text-xs text-caramel tracking-wider uppercase mt-1 font-semibold">Slow Fermented • Sourdough Neapolitan</p>
          </div>
          <div className="h-px bg-white/10 flex-grow mx-8 hidden sm:block"></div>
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
                    <span className="font-serif text-lg font-bold text-burgundy whitespace-nowrap">
                      RM {pizza.price.toFixed(2)}
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

      {/* 2. Artisanal Pastas Cards */}
      <motion.section 
        id="pastas-session"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-serif text-3xl text-[#f7f1ea] tracking-tight">Artisanal Pastas</h3>
            <p className="font-sans text-xs text-caramel tracking-wider uppercase mt-1 font-semibold">Al Dente Spaghetti • Rich Herb Blends</p>
          </div>
          <div className="h-px bg-white/10 flex-grow mx-8 hidden sm:block"></div>
        </div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pastas.map((pasta) => (
            <motion.div 
              variants={itemVariants}
              key={pasta.id}
              className="group rounded-lg overflow-hidden glass-light flex flex-col justify-between hover:-translate-y-1 transition-all duration-350 cursor-pointer shadow-md hover:shadow-lg border border-matte-black/10"
              onClick={() => onSelectItem(pasta)}
            >
              {/* Image */}
              <div className="w-full h-44 relative overflow-hidden">
                <img 
                  src={pasta.image} 
                  alt={pasta.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-base font-bold text-espresso group-hover:text-burgundy transition-colors truncate">
                      {pasta.name}
                    </h4>
                    <span className="font-serif text-base font-bold text-burgundy whitespace-nowrap">
                      RM {pasta.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-espresso/70 mt-1.5 leading-relaxed line-clamp-3">
                    {pasta.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-espresso/5 flex justify-between items-center">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-caramel font-bold">Customize Protein</span>
                  <button className="text-burgundy text-[11px] font-serif font-bold uppercase">Configure →</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Themed Red Menu for Coffee and Pastries */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={redMenuVariants}
        className="w-full bg-[#3a0b12] text-white rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] mt-24 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        <div className="p-8 md:p-12 lg:p-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-serif text-3xl text-[#f7f1ea] tracking-tight">Signature Coffee & Drinks</h3>
              <p className="font-sans text-xs text-caramel tracking-wider uppercase mt-1 font-semibold">Artisanal Blends • Roasted Locally • Cold Frappes</p>
            </div>
            <div className="h-px bg-white/10 flex-grow mx-8 hidden sm:block"></div>
          </div>
          
          {/* SIGNATURE COFFEE LIST */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            {/* Left Column */}
            <div className="space-y-8">
              {signatureCoffees.slice(0, Math.ceil(signatureCoffees.length / 2)).map((coffee, idx) => (
                <div 
                  key={coffee.id} 
                  className="cursor-pointer group flex flex-col p-4 -m-4 rounded-2xl hover:bg-white/[0.04] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:translate-x-2 transition-all duration-300" 
                  onClick={() => onSelectItem(coffee)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start font-bold text-lg md:text-xl text-white/95 group-hover:text-[#ffb703] transition-colors duration-300">
                      <span className="mr-3 w-4 text-left text-white/40 group-hover:text-white/60 transition-colors">{idx + 1}.</span>
                      <span className="flex-1">{coffee.name}</span>
                      {coffee.icons && (
                        <div className="ml-3 flex space-x-1.5 opacity-80 mt-1 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                          {coffee.icons.includes('hot') && <div className="w-[18px] h-[18px] rounded-full bg-[#e63946] flex items-center justify-center text-[9px] shadow-sm">🔥</div>}
                          {coffee.icons.includes('cold') && <div className="w-[18px] h-[18px] rounded-full bg-[#48cae4] flex items-center justify-center text-[9px] shadow-sm">❄️</div>}
                        </div>
                      )}
                    </div>
                    <div className="font-bold text-lg md:text-xl shrink-0 ml-4 text-white/90 group-hover:text-white transition-colors duration-300">
                      RM{coffee.price.toFixed(0)}
                    </div>
                  </div>
                  <p className="text-sm md:text-sm text-white/70 mt-1.5 pl-7 max-w-[95%] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {coffee.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {signatureCoffees.slice(Math.ceil(signatureCoffees.length / 2)).map((coffee, idx) => (
                <div 
                  key={coffee.id} 
                  className="cursor-pointer group flex flex-col p-4 -m-4 rounded-2xl hover:bg-white/[0.04] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:translate-x-2 transition-all duration-300" 
                  onClick={() => onSelectItem(coffee)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start font-bold text-lg md:text-xl text-white/95 group-hover:text-[#ffb703] transition-colors duration-300">
                      <span className="mr-3 w-4 text-left text-white/40 group-hover:text-white/60 transition-colors">{idx + 1 + Math.ceil(signatureCoffees.length / 2)}.</span>
                      <span className="flex-1">{coffee.name}</span>
                      {coffee.icons && (
                        <div className="ml-3 flex space-x-1.5 opacity-80 mt-1 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                          {coffee.icons.includes('hot') && <div className="w-[18px] h-[18px] rounded-full bg-[#e63946] flex items-center justify-center text-[9px] shadow-sm">🔥</div>}
                          {coffee.icons.includes('cold') && <div className="w-[18px] h-[18px] rounded-full bg-[#48cae4] flex items-center justify-center text-[9px] shadow-sm">❄️</div>}
                        </div>
                      )}
                    </div>
                    <div className="font-bold text-lg md:text-xl shrink-0 ml-4 text-white/90 group-hover:text-white transition-colors duration-300">
                      RM{coffee.price.toFixed(0)}
                    </div>
                  </div>
                  <p className="text-sm md:text-sm text-white/70 mt-1.5 pl-7 max-w-[95%] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {coffee.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black tracking-wide uppercase text-white/95" style={{ fontFamily: 'Impact, sans-serif' }}>
              ESSENTIAL
            </h2>
          </div>

          {/* ESSENTIAL COFFEE LIST */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
             <div className="space-y-8">
               {essentialCoffees.map((item, idx) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col group cursor-pointer p-4 -m-4 rounded-2xl hover:bg-white/[0.04] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:translate-x-2 transition-all duration-300"
                    onClick={() => onSelectItem(item)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start font-bold text-lg md:text-xl text-white/95 group-hover:text-[#ffb703] transition-colors duration-300">
                        <span className="mr-3 w-4 text-left text-white/40 group-hover:text-white/60 transition-colors">{idx + 1}.</span>
                        <span>{item.name}</span>
                        {item.icons && (
                          <div className="ml-3 flex space-x-1.5 opacity-80 mt-1 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                            {item.icons.includes('hot') && <div className="w-[18px] h-[18px] rounded-full bg-[#e63946] flex items-center justify-center text-[9px] shadow-sm">🔥</div>}
                            {item.icons.includes('cold') && <div className="w-[18px] h-[18px] rounded-full bg-[#48cae4] flex items-center justify-center text-[9px] shadow-sm">❄️</div>}
                          </div>
                        )}
                      </div>
                      <div className="font-bold text-lg md:text-xl shrink-0 ml-4 text-white/90 group-hover:text-white transition-colors duration-300">
                        RM{item.price.toFixed(0)}
                      </div>
                    </div>
                    <p className="text-sm md:text-sm text-white/70 mt-1.5 pl-7 max-w-[95%] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
               ))}
             </div>
             
             <div className="space-y-8 mt-8 lg:mt-0">
               <div>
                 <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-white">ADDITIONAL</h3>
                 <ul className="space-y-3 text-white/80 font-medium pl-2">
                   <li className="flex items-center">
                     <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-3"></span>
                     Milk Option (Oat Milk) <span className="ml-2 font-bold text-white">+ RM2</span>
                   </li>
                   <li className="flex items-center">
                     <span className="w-1.5 h-1.5 rounded-full bg-white/50 mr-3"></span>
                     Extra Shot <span className="ml-2 font-bold text-white">+ RM3</span>
                   </li>
                 </ul>
               </div>
             </div>
          </div>

          {/* PASTRIES & CAKES BLOCKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {/* Pastries Category Block */}
            <div className="bg-[#5c151f] rounded-[32px] p-8 md:p-10 shadow-xl border border-white/5">
              <h3 className="text-3xl md:text-4xl font-black mb-8 tracking-wide text-white/95 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>PASTRIES & PIES</h3>
              <div className="space-y-6">
                {simplePastries.map((pastry, idx) => (
                  <div 
                    key={pastry.id} 
                    className="cursor-pointer group flex flex-col p-4 -m-4 rounded-2xl hover:bg-white/[0.04] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:translate-x-2 transition-all duration-300" 
                    onClick={() => onSelectItem(pastry)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start font-bold text-lg text-white/95 group-hover:text-[#ffb703] transition-colors duration-300">
                        <span className="mr-2 w-4 text-left text-white/40 group-hover:text-white/60 transition-colors">{idx + 1}.</span>
                        <span className="flex-1 leading-tight mt-0.5">{pastry.name}</span>
                      </div>
                      <div className="font-bold text-lg shrink-0 ml-4 text-white/90 group-hover:text-white transition-colors duration-300">
                        RM{pastry.price.toFixed(0)}
                      </div>
                    </div>
                    <p className="text-sm text-white/70 mt-1.5 pl-6 leading-relaxed max-w-[95%] group-hover:text-white/90 transition-colors duration-300">
                      {pastry.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cakes Category Block */}
            <div className="bg-[#85444e] rounded-[32px] p-8 md:p-10 shadow-xl border border-white/5 relative overflow-hidden flex flex-col">
              <h3 className="text-3xl md:text-4xl font-black mb-8 tracking-wide text-white/95 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>SIGNATURE CAKES</h3>
              <div className="space-y-6 z-10 flex-grow">
                {cakes.map((cake, idx) => (
                  <div 
                    key={cake.id} 
                    className="cursor-pointer group flex flex-col p-4 -m-4 rounded-2xl hover:bg-white/[0.04] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:translate-x-2 transition-all duration-300"
                    onClick={() => onSelectItem(cake)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start font-bold text-lg text-white/95 group-hover:text-[#ffb703] transition-colors duration-300">
                        <span className="mr-2 w-4 text-left text-white/40 group-hover:text-white/60 transition-colors">{idx + 1}.</span>
                        <span className="flex-1 leading-tight mt-0.5">{cake.name}</span>
                      </div>
                      <div className="font-bold text-lg shrink-0 ml-4 text-white/90 group-hover:text-white transition-colors duration-300">
                        RM{cake.price.toFixed(0)}
                      </div>
                    </div>
                    <p className="text-sm text-white/70 mt-1.5 pl-6 leading-relaxed max-w-[95%] group-hover:text-white/90 transition-colors duration-300">
                      {cake.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#9a545e] rounded-full blur-2xl opacity-50 pointer-events-none" />
            </div>
          </div>

          <div className="mt-16 text-center text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-semibold">
            *Prices listed are not inclusive of service charge and SST.
          </div>
        </div>
      </motion.section>

      {/* 4. Must Have Combos */}
      <motion.section 
        id="combos-session"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-serif text-3xl text-[#f7f1ea] tracking-tight">Must-Have Combos & Feasts</h3>
            <p className="font-sans text-xs text-caramel tracking-wider uppercase mt-1 font-semibold">Curated Sharing Platters • Value Bundles</p>
          </div>
          <div className="h-px bg-white/10 flex-grow mx-8 hidden sm:block"></div>
        </div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {combos.map((combo) => (
            <motion.div 
              variants={itemVariants}
              key={combo.id}
              className="group rounded-2xl overflow-hidden bg-gradient-to-br from-[#2e1c0c] to-[#120a04] p-6 hover:-translate-y-1 transition-all duration-350 cursor-pointer shadow-xl border border-white/5 flex flex-col justify-between"
              onClick={() => onSelectItem(combo)}
            >
              <div>
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative">
                  <img 
                    src={combo.image} 
                    alt={combo.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <span className="px-3 py-1 rounded bg-burgundy text-white font-mono text-xs font-bold uppercase tracking-wider">VALUE COMBO</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-serif text-xl font-bold text-white group-hover:text-caramel transition-colors">
                    {combo.name}
                  </h4>
                  <span className="font-sans text-xl font-bold text-caramel whitespace-nowrap">
                    RM {combo.price.toFixed(2)}
                  </span>
                </div>
                <p className="font-sans text-xs text-white/70 mt-2 leading-relaxed">
                  {combo.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-caramel uppercase font-bold tracking-wider">
                <span>Perfect for groups & parties</span>
                <span className="text-white hover:underline flex items-center gap-1">Order Combo →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

    </div>
  );
}
