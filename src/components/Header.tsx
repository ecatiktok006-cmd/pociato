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
  const baseHeaderClass = "fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-12 py-3 md:py-4 flex flex-col md:flex-row items-center md:justify-between pointer-events-none gap-3 md:gap-0 transition-all duration-300";
  
  // Level 1: Static (absolute, no sticky glass)
  // Level 2 & 3: Sticky glassmorphism on scroll
  const stickyClass = experienceLevel > 1 && isScrolled 
    ? "bg-black/60 backdrop-blur-lg border-b border-white/10 shadow-lg" 
    : "bg-transparent";
    
  const headerPosition = experienceLevel === 1 ? "absolute" : "fixed";

  const toggleDropdown = () => setLevelDropdownOpen(!levelDropdownOpen);

  return (
    <nav className={`${baseHeaderClass} ${stickyClass} ${headerPosition.replace('fixed', '')} ${experienceLevel > 1 ? 'fixed' : 'absolute'}`}>
      {/* Left section: Level Picker */}
      <div className="w-full md:w-auto flex flex-col items-start justify-center pointer-events-auto md:flex-none relative">
         <button 
           onClick={toggleDropdown}
           className="mt-8 md:mt-0 flex items-center justify-between gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-wider backdrop-blur-md transition-colors w-40"
         >
            <span>Lvl {experienceLevel}: {experienceLevel === 1 ? 'Static' : experienceLevel === 2 ? 'Motion' : '3D/GSAP'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${levelDropdownOpen ? 'rotate-180' : ''}`} />
         </button>
         
         {levelDropdownOpen && (
           <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in z-50">
             <button onClick={() => { setExperienceLevel(1); setLevelDropdownOpen(false); }} className={`text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider ${experienceLevel === 1 ? 'bg-burgundy text-white' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>Level 1: Static (No Motion)</button>
             <button onClick={() => { setExperienceLevel(2); setLevelDropdownOpen(false); }} className={`text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider ${experienceLevel === 2 ? 'bg-burgundy text-white' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>Level 2: Basic Motion & UI</button>
             <button onClick={() => { setExperienceLevel(3); setLevelDropdownOpen(false); }} className={`text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider ${experienceLevel === 3 ? 'bg-burgundy text-white' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>Level 3: Advanced WebGL/3D</button>
           </div>
         )}
      </div>

      {/* Center Floating Pill Navigation - styled to match mockup */}
      <div className="pointer-events-auto flex items-center bg-white/20 backdrop-blur-md px-1 py-1 rounded-full text-xs font-semibold mx-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2 shadow-sm uppercase tracking-widest mt-2 md:mt-0">
        {(['menu', 'branch', 'about'] as const).map((tab) => {
          const isActive = activeTab === tab;
          const hoverEffect = experienceLevel > 1 ? "hover:text-white hover:bg-white/10" : "hover:text-white";
          const activeEffect = experienceLevel > 1 && isActive ? "bg-white/20 scale-105" : "";

          return (
            <button
              key={tab}
              id={`tab-btn-${tab}`}
              onClick={() => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-[10px] md:text-sm font-bold flex items-center gap-1.5 ${
                isActive
                  ? `text-white ${activeEffect}`
                  : `text-white/70 ${hoverEffect}`
              }`}
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
