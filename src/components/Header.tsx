import React, { useState } from 'react';
import { ShoppingBag, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeTab: 'menu' | 'branch' | 'about' | 'reviews';
  setActiveTab: (tab: 'menu' | 'branch' | 'about' | 'reviews') => void;
  cartCount: number;
  onOpenCart: () => void;
  experienceLevel: 1 | 2 | 3;
  setExperienceLevel: (level: 1 | 2 | 3) => void;
  isScrolled: boolean;
}

export default function Header({ activeTab, setActiveTab, cartCount, onOpenCart, experienceLevel, setExperienceLevel, isScrolled }: HeaderProps) {
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);

  // Determine header classes based on level
  const baseHeaderClass = "top-0 left-0 right-0 z-50 w-full px-4 md:px-12 py-3 md:py-4 flex flex-col md:flex-row items-center md:justify-between transition-all duration-300 pointer-events-none";
  
  // Level 1: sleek top sticky header, white background, black text
  const levelOneStickyClass = experienceLevel === 1 
    ? (isScrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-white")
    : "";

  // Level 2 & 3: Sticky glassmorphism on scroll
  const glassStickyClass = experienceLevel > 1 && isScrolled 
    ? "bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-lg" 
    : "bg-transparent";

  const headerPosition = "fixed";

  const toggleDropdown = () => setLevelDropdownOpen(!levelDropdownOpen);

  return (
    <nav className={`${baseHeaderClass} ${experienceLevel === 1 ? levelOneStickyClass : glassStickyClass} fixed`}>
      {/* Left section: Level Picker */}
      <div className="w-full md:w-auto flex flex-col items-start justify-center pointer-events-auto md:flex-none relative">
         <button 
           onClick={toggleDropdown}
           className={`mt-8 md:mt-0 flex items-center justify-between gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-colors w-40 border ${
             experienceLevel === 1 
              ? "bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-800"
              : "bg-white/10 hover:bg-white/20 border-white/20 text-white"
           }`}
         >
            <span>Lvl {experienceLevel}: {experienceLevel === 1 ? 'Static' : experienceLevel === 2 ? 'Motion & AI' : 'Workspace Sandbox'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${levelDropdownOpen ? 'rotate-180' : ''}`} />
         </button>
         
         {levelDropdownOpen && (
           <div className={`absolute top-full left-0 mt-2 w-48 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in z-50 ${
             experienceLevel === 1 ? "bg-white border border-gray-100" : "bg-black/90 backdrop-blur-xl border border-white/10"
           }`}>
             <button onClick={() => { setExperienceLevel(1); setLevelDropdownOpen(false); }} className={`text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider ${
               experienceLevel === 1 ? 'bg-gray-100 text-gray-900' : 'text-white/60 hover:text-white hover:bg-white/10'
             }`}>Level 1: Minimalist</button>
             <button onClick={() => { setExperienceLevel(2); setLevelDropdownOpen(false); }} className={`text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider ${
               experienceLevel === 2 ? 'bg-burgundy text-white' : (experienceLevel === 1 ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white/60 hover:text-white hover:bg-white/10')
             }`}>Level 2: Interactive</button>
             <button onClick={() => { setExperienceLevel(3); setLevelDropdownOpen(false); }} className={`text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider ${
               experienceLevel === 3 ? 'bg-burgundy text-white' : (experienceLevel === 1 ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50' : 'text-white/60 hover:text-white hover:bg-white/10')
             }`}>Level 3: Page-Flip 3D</button>
           </div>
         )}
      </div>

      {/* Center Floating Pill Navigation */}
      <div className={`pointer-events-auto flex items-center px-1 py-1 rounded-full text-xs font-semibold mx-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2 shadow-sm uppercase tracking-widest mt-2 md:mt-0 ${
        experienceLevel === 1 ? "bg-gray-100" : "bg-white/20 backdrop-blur-md"
      }`}>
        {(['menu', 'branch', 'about'] as const).map((tab) => {
          const isActive = activeTab === tab;
          
          let activeClass = "";
          let hoverClass = "";

          if (experienceLevel === 1) {
            activeClass = isActive ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50";
          } else {
            activeClass = isActive ? "bg-white/20 text-white scale-105" : "text-white/70 hover:text-white hover:bg-white/10";
          }

          return (
            <button
              key={tab}
              id={`tab-btn-${tab}`}
              onClick={() => {
                if (tab === 'branch') {
                  setActiveTab('menu');
                  setTimeout(() => {
                    const el = document.getElementById('branches-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                } else {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-[10px] md:text-sm font-bold flex items-center gap-1.5 ${activeClass}`}
            >
              <span>{tab === 'menu' ? 'Menu' : tab === 'branch' ? 'Branch' : 'About'}</span>
            </button>
          );
        })}
      </div>

      {/* Right section - hidden for symmetry but matches structure */}
      <div className="hidden md:flex items-center space-x-3 pointer-events-auto w-40 justify-end">
      </div>
    </nav>
  );
}
