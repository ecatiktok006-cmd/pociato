import React, { useState } from 'react';
import { BRANCHES } from '../data';
import { MapPin, Phone, Clock, ChevronRight, CheckCircle, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BranchAvailable({ experienceLevel = 1 }: { experienceLevel?: 1 | 2 | 3 }) {
  const [activeBranchId, setActiveBranchId] = useState(BRANCHES[0].id);

  if (experienceLevel === 2) {
    const activeBranch = BRANCHES.find(b => b.id === activeBranchId) || BRANCHES[0];

    return (
      <section id="branches-section" className="py-16 md:py-24 px-4 bg-[#fff8f1] relative w-full max-w-5xl mx-auto font-sans scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center space-x-2 px-3 py-1 bg-[#8b0f15]/10 rounded-full text-xs font-semibold text-[#8b0f15] tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Our Branches</span>
          </span>
          <h2 className="font-serif text-3.5xl md:text-5xl text-[#1d1b17] tracking-tight">Our Micro Havens</h2>
          <p className="font-sans text-sm md:text-base text-[#1d1b17]/75 mt-3 leading-relaxed">
            Step into our warm industrial brick-and-steel sanctuaries. Each location houses our massive custom stoneware pizza oven and hand-tuned espresso setups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT COLUMN: Branch Details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#b57a4e]">Select Branch Location</span>
            <div className="space-y-4">
              {BRANCHES.map((branch) => {
                const isSelected = activeBranchId === branch.id;
                return (
                  <div
                    key={branch.id}
                    onClick={() => setActiveBranchId(branch.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-[#8b0f15] shadow-xl translate-x-1'
                        : 'border-[#1d1b17]/10 bg-white/40 hover:border-[#1d1b17]/35 hover:bg-white/80'
                    }`}
                  >
                    <div className="w-full h-32 rounded-lg mb-3 overflow-hidden relative">
                      <img
                        src={branch.imageUrl}
                        alt={branch.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 px-2.5 py-1 text-[9px] font-mono uppercase font-bold text-[#1d1b17] bg-[#fff8f1] shadow-sm rounded-md">
                        {branch.tableAvailability}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif text-base font-bold text-[#1d1b17]">{branch.name.replace('Pociato Coffee & Pizza – ', '').replace('Pociato Coffee & Pizza - ', '')}</h4>
                      <p className="text-xs text-[#1d1b17]/70 italic mt-0.5">{branch.vibe}</p>
                    </div>

                    <div className="mt-3 text-right">
                      <span className={`text-[9px] uppercase font-mono tracking-wider font-bold ${isSelected ? 'text-[#8b0f15]' : 'text-[#1d1b17]/40'}`}>
                        {isSelected ? '● Active Selection' : 'Click to View'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Branch Detail Card & Interactive Map */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-[#1d1b17]/5 relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#8b0f15]"></div>

              <div>
                <div className="mb-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1d1b17]">{activeBranch.name}</h3>
                  <p className="text-xs text-[#b57a4e] font-medium mt-1 uppercase tracking-wider">{activeBranch.vibe}</p>
                </div>

                {/* Interactive Map Iframe */}
                <div className="w-full h-[280px] rounded-xl overflow-hidden border border-[#1d1b17]/10 mb-6 bg-gray-50 relative">
                  {activeBranch.mapUrl ? (
                    <iframe
                      src={activeBranch.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${activeBranch.name} Map`}
                      className="absolute inset-0"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                      <MapPin className="w-10 h-10 mb-2" />
                      <span className="text-xs">Map currently unavailable</span>
                    </div>
                  )}
                </div>

                {/* Detailed Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#1d1b17] border-t border-gray-100 pt-5">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#8b0f15] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">Address</span>
                        <span className="font-medium text-xs leading-relaxed">{activeBranch.address}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-[#8b0f15] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">Contact Info</span>
                        <span className="font-medium text-xs leading-relaxed">{activeBranch.contact}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#8b0f15] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">Operating Hours</span>
                        <span className="font-medium text-xs leading-relaxed">{activeBranch.hours}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Navigation className="w-4 h-4 text-[#8b0f15] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">Status</span>
                        <span className="font-bold text-xs text-emerald-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Open Now
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeBranch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-[#8b0f15] text-white hover:bg-[#8b0f15]/90 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (experienceLevel === 1) {
    const activeBranch = BRANCHES.find(b => b.id === activeBranchId) || BRANCHES[0];
    
    return (
      <section id="branches-section" className="py-16 md:py-24 px-4 bg-[#fff8f1] relative w-full max-w-7xl mx-auto font-sans scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center space-x-2 px-3 py-1 bg-[#8b0f15]/10 rounded-full text-xs font-semibold text-[#8b0f15] tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Our Branches</span>
          </span>
          <h2 className="font-serif text-3.5xl md:text-5xl text-[#1d1b17] tracking-tight">Our Micro Havens</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-[#1d1b17]/5 relative">
          
          {/* Vertical Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-3">
            {BRANCHES.map(branch => {
              const isSelected = activeBranchId === branch.id;
              return (
              <button
                key={branch.id}
                onClick={() => setActiveBranchId(branch.id)}
                className={`text-left p-5 rounded-xl transition-all duration-300 relative overflow-hidden group border ${
                  isSelected 
                    ? 'bg-[#fff8f1] border-[#8b0f15] shadow-md translate-x-1' 
                    : 'bg-white border-[#1d1b17]/10 hover:border-[#1d1b17]/35 hover:bg-[#fff8f1]/50'
                }`}
              >
                <h3 className={`font-serif text-lg mb-1 relative z-10 font-bold ${isSelected ? 'text-[#1d1b17]' : 'text-[#1d1b17]'}`}>{branch.name.split('–')[1] || branch.name}</h3>
                <p className={`text-xs relative z-10 ${isSelected ? 'text-[#1d1b17]/75' : 'text-[#1d1b17]/60'}`}>{branch.address}</p>
                
                <AnimatePresence>
                  {isSelected && branch.imageUrl && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: '140px', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="w-full rounded-lg overflow-hidden relative"
                    >
                      <img src={branch.imageUrl} alt={branch.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {isSelected && (
                  <motion.div layoutId="activeTabIndicator" className="absolute left-0 top-0 w-1.5 h-full bg-[#8b0f15]" />
                )}
              </button>
            )})}
          </div>

          {/* Details Pane */}
          <div className="w-full lg:w-2/3 flex flex-col rounded-xl overflow-hidden bg-white border border-[#1d1b17]/10 relative h-full min-h-[500px]">
            <div className="h-[320px] w-full bg-gray-50 relative">
              {activeBranch.mapUrl ? (
                <iframe 
                  src={activeBranch.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${activeBranch.name} Map`}
                  className="absolute inset-0"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-[#1d1b17]/40">
                  <MapPin className="w-10 h-10 mb-2" />
                  <span className="text-xs">Map currently unavailable</span>
                </div>
              )}
            </div>
            <div className="p-8 bg-white flex-grow flex flex-col justify-center border-t border-[#1d1b17]/5">
              <h3 className="font-serif text-2xl font-bold text-[#1d1b17] mb-2">{activeBranch.name}</h3>
              <p className="text-xs text-[#b57a4e] font-medium mb-6 uppercase tracking-wider">{activeBranch.vibe}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#1d1b17]">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#8b0f15] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#1d1b17]/50 block">Contact</span>
                    <span className="font-medium text-xs leading-relaxed">{activeBranch.contact}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#8b0f15] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#1d1b17]/50 block">Hours</span>
                    <span className="font-medium text-xs leading-relaxed">{activeBranch.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }

  // Level 3: Immersive 3D Spatial/Interactive Showcase
  const activeBranch = BRANCHES.find(b => b.id === activeBranchId) || BRANCHES[0];

  return (
    <section id="branches-section" className="py-24 px-4 bg-[#fff8f1] relative w-full font-sans overflow-hidden min-h-[800px] flex items-center perspective-[1000px] scroll-mt-20">
      
      {/* Background ambient lighting based on selection */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none transition-colors duration-1000 ease-in-out">
         <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#8b0f15] blur-[150px] rounded-full mix-blend-multiply opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Panel: UI Control Card with Glassmorphism */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="mb-4">
            <span className="text-[#8b0f15] text-sm font-bold tracking-[0.2em] uppercase mb-2 block">Our Locations</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1d1b17] uppercase tracking-tight font-black">Select a <br/>Haven</h2>
          </div>

          <div className="space-y-4">
            {BRANCHES.map((branch) => {
              const isActive = activeBranchId === branch.id;
              
              // Determine if open based on real-world time mock
              const isOpen = true;

              return (
                <div 
                  key={branch.id}
                  onClick={() => setActiveBranchId(branch.id)}
                  className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden group ${
                    isActive 
                      ? 'bg-white border border-[#8b0f15] shadow-xl translate-x-2' 
                      : 'bg-white/60 border border-[#1d1b17]/10 hover:bg-white'
                  }`}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1.5">
                    <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-red-500'}`} />
                    <span className="text-[10px] text-[#1d1b17]/50 uppercase tracking-widest font-bold">
                      {isOpen ? 'Open Now' : 'Closed'}
                    </span>
                  </div>

                  <h3 className={`text-xl font-serif font-bold transition-colors duration-300 ${isActive ? 'text-[#1d1b17]' : 'text-[#1d1b17]/60 group-hover:text-[#1d1b17]/90'}`}>
                    {branch.name.split('–')[1] || branch.name}
                  </h3>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-[#1d1b17]/10 flex flex-col space-y-3"
                      >
                        {branch.imageUrl && (
                          <div className="w-full h-32 rounded-lg overflow-hidden relative mb-2">
                            <img src={branch.imageUrl} alt={branch.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex items-start text-[#1d1b17]/80 text-sm">
                          <MapPin className="w-4 h-4 mr-3 text-[#8b0f15] flex-shrink-0 mt-0.5" />
                          <span>{branch.address}</span>
                        </div>
                        <div className="flex items-start text-[#1d1b17]/80 text-sm">
                          <Phone className="w-4 h-4 mr-3 text-[#8b0f15] flex-shrink-0 mt-0.5" />
                          <span>{branch.contact}</span>
                        </div>
                        <div className="flex items-start text-[#1d1b17]/80 text-sm">
                          <Clock className="w-4 h-4 mr-3 text-[#8b0f15] flex-shrink-0 mt-0.5" />
                          <span>{branch.hours}</span>
                        </div>
                        
                        <a 
                          href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                          target="_blank" rel="noopener noreferrer"
                          className="mt-4 flex items-center justify-center w-full py-2.5 rounded-lg bg-[#8b0f15] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#8b0f15]/90 transition-colors group/btn"
                        >
                          <Navigation className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Navigate Here
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Panel: Interactive 3D Spatial Presentation */}
        <div className="lg:col-span-7 h-[600px] relative preserve-3d">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBranchId}
              initial={{ opacity: 0, rotateY: 15, rotateX: 5, z: -100, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, z: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -15, rotateX: -5, z: -100, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
              className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-[#1d1b17]/10 bg-white preserve-3d"
            >
              {activeBranch.mapUrl ? (
                <iframe 
                  src={activeBranch.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${activeBranch.name} Map`}
                  className="absolute inset-0 opacity-90 transition-all duration-1000 grayscale-[20%] sepia-[10%] hue-rotate-[-10deg]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50">
                  <MapPin className="w-16 h-16 text-[#1d1b17]/20 mb-4" />
                  <p className="text-[#1d1b17]/50 uppercase tracking-widest text-sm">Spatial Data Offline</p>
                </div>
              )}
              
              {/* Overlay elements for 3D effect */}
              <div 
                className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 backdrop-blur-md border border-[#1d1b17]/5 shadow-xl transition-transform duration-500 ease-out hover:scale-[1.02] cursor-pointer"
                style={{ transform: 'translateZ(50px)' }}
              >
                <h3 className="text-2xl font-serif font-bold text-[#1d1b17] mb-1">{activeBranch.name}</h3>
                <p className="text-[#b57a4e] text-xs uppercase tracking-wider font-semibold">{activeBranch.vibe}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
