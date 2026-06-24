import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MenuBook from './components/MenuBook';
import MenuListOldStyle from './components/MenuListOldStyle';
import MenuGrids from './components/MenuGrids';
import BranchView from './components/BranchView';
import AboutView from './components/AboutView';
import ReviewSection from './components/ReviewSection';
import CartDrawer from './components/CartDrawer';
import CustomizeModal from './components/CustomizeModal';
import AiAssistant from './components/AiAssistant';
import { MENU_ITEMS } from './data';
import { CartItem, MenuItem } from './types';
import { Coffee, Pizza, Sparkles, MessageSquare, Instagram, Heart, Star, Phone, Shield, ArrowUp, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'menu' | 'branch' | 'about' | 'reviews'>('menu');
  const [experienceLevel, setExperienceLevel] = useState<1 | 2 | 3>(2);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('pociato_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedCustomizeItem, setSelectedCustomizeItem] = useState<MenuItem | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Advanced scroll-tied motion (Level 3)
  const { scrollYProgress } = useScroll();
  const pizzaY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const pizzaRotate = useTransform(scrollYProgress, [0, 0.5], [0, 45]);
  const leavesParallax = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Footer Modal States
  const [activeFooterModal, setActiveFooterModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('pociato_cart', JSON.stringify(cart));
  }, [cart]);

  // Monitor scroll height to show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToBag = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((ci) => {
        if (ci.item.id !== newItem.item.id) return false;
        // Compare customizations
        const k1 = Object.keys(ci.selectedCustomizations);
        const k2 = Object.keys(newItem.selectedCustomizations);
        if (k1.length !== k2.length) return false;
        return k1.every(key => ci.selectedCustomizations[key] === newItem.selectedCustomizations[key]);
      });

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }
      return [...prevCart, newItem];
    });
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((ci) => {
          if (ci.cartId === cartId) {
            return { ...ci, quantity: ci.quantity + delta };
          }
          return ci;
        })
        .filter((ci) => ci.quantity > 0);
    });
  };

  const handleRemoveItem = (cartId: string) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Quick order handler (bypasses customizations with defaults)
  const handleQuickAdd = (item: MenuItem) => {
    const defaults: { [optionName: string]: string } = {};
    if (item.customizations) {
      item.customizations.forEach((opt) => {
        defaults[opt.name] = opt.choices[0];
      });
    }

    const cartId = `cart-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    const newCartItem: CartItem = {
      cartId,
      item,
      quantity: 1,
      selectedCustomizations: defaults,
      singleItemPriceWithAddons: item.price
    };

    handleAddToBag(newCartItem);
    
    // trigger small haptic notification state
    const popBtn = document.getElementById('cart-trigger-btn');
    if (popBtn) {
      popBtn.classList.add('scale-110', 'bg-caramel');
      setTimeout(() => {
        popBtn.classList.remove('scale-110', 'bg-caramel');
      }, 300);
    }
  };

  const totalCartQuantity = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <div className={`min-h-screen bg-[#fff8f1] text-[#1d1b17] font-sans flex flex-col justify-between ${experienceLevel === 1 ? 'level-1' : ''}`}>
      
      {/* Top sticky navigation */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={totalCartQuantity} 
        onOpenCart={() => setCartOpen(true)}
        experienceLevel={experienceLevel}
        setExperienceLevel={setExperienceLevel}
        isScrolled={isScrolled}
      />

      {/* Main Container */}
      <main className="flex-grow">
        
        {/* Render Tab 1: Menu (Has special hero) */}
        {activeTab === 'menu' && (
          <div className={experienceLevel > 1 ? "animate-fade-in relative z-0" : "relative z-0"}>
            {/* Ambient Hero Section with background coffee bar image and glassmorphism overlay */}
            <header 
               className="relative w-full min-h-[35vh] md:min-h-[42vh] flex flex-col items-center justify-start text-center px-4 overflow-hidden bg-cover bg-center pt-28 md:pt-36 pb-12"
               style={{ backgroundImage: `url('/bg.png')` }}
            >
              {/* Back blur darkening matrix overlay - red mood */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#8b0f15]/95 via-[#61050a]/90 to-[#1a0102]/95 mix-blend-multiply z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#b11016]/40 via-[#67050b]/20 to-transparent z-0"></div>

              {/* Logo block */}
              <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6 md:gap-7 mt-2">
                <div className="flex items-center justify-center w-full px-4">
                  <img 
                    src="/logo2.png" 
                    className="max-w-[280px] md:max-w-[480px] w-full h-auto object-contain select-none filter drop-shadow-2xl transition-transform duration-700 hover:scale-[1.01]" 
                    alt="Pociato Coffee & Pizza Logo" 
                  />
                </div>

                <p style={{ fontFamily: 'var(--font-hand)' }} className="text-xl md:text-[30px] text-white max-w-[800px] mx-auto leading-[1.4] md:leading-[1.5] tracking-wide drop-shadow-md px-4 mt-2 font-normal">
                  Deep smoke from red-oak coals, velvet milk from direct-trade roasts. Enter a modern sanctuary built on sourdough starters and high-pressure double extractions.
                </p>
              </div>
            </header>

            {/* Transitional section with cafe interior bg2.png behind the pizza */}
            <div 
              className="relative w-full min-h-[400px] md:min-h-[580px] bg-cover bg-center overflow-visible py-16 flex flex-col items-center justify-center -mt-1"
              style={{ backgroundImage: `url('/bg2.png')` }}
            >
              {/* Perfect dark-red vignette to blend bg2 into the overall dark-red palette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d0306] via-[#5c0309]/80 to-[#1a0102] mix-blend-multiply z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a0102]/90 via-[#5c0309]/45 to-[#240104]/95 z-0"></div>

              {/* Seamless overlay of floating green leaves floating around the pizza */}
              {experienceLevel >= 2 ? (
                <motion.div 
                  key="motion-leaves"
                  className="absolute inset-0 z-10 pointer-events-none -translate-y-16 md:-translate-y-24 scale-110" 
                  style={{ y: leavesParallax, backgroundImage: `url('/leaves.png')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                />
              ) : (
                <div key="plain-leaves" className="absolute inset-0 z-10 pointer-events-none -translate-y-16 md:-translate-y-24 scale-110" style={{ backgroundImage: `url('/leaves.png')`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
              )}

              {/* Floating Pizza with perfect mockup 3D hover scale and lighting shadow */}
              <div className="relative z-20 flex flex-col items-center w-full max-w-5xl mx-auto px-4 -translate-y-4 md:translate-y-4" style={{ perspective: '1200px' }}>
                {experienceLevel === 3 ? (
                   <motion.video 
                     key="video-pizza"
                     style={{ y: pizzaY, rotateZ: pizzaRotate }}
                     src="/pizza3D.webm" 
                     className="max-w-[450px] md:max-w-[880px] w-full hover:scale-[1.08] transition-all duration-700 ease-out mx-auto drop-shadow-[0_45px_45px_rgba(0,0,0,0.95)] relative object-contain outline-none border-none bg-transparent" 
                     autoPlay
                     loop
                     muted
                     playsInline
                   />
                ) : experienceLevel === 2 ? (
                   <motion.img 
                     key="motion-pizza"
                     style={{ y: pizzaY, rotateZ: pizzaRotate }}
                     src="/pizza.png" 
                     className="max-w-[320px] md:max-w-[650px] w-full hover:scale-[1.08] transition-all duration-700 ease-out mx-auto drop-shadow-[0_45px_45px_rgba(0,0,0,0.95)] relative object-contain" 
                     alt="Artisanal Pizza" 
                   />
                ) : (
                   <img 
                     key="plain-pizza"
                     src="/pizza.png" 
                     className="max-w-[320px] md:max-w-[650px] w-full mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.85)] relative object-contain" 
                     alt="Artisanal Pizza" 
                   />
                )}

                {/* Overlapping 'Great MENU' handwritten typography */}
                <div className="absolute top-[82%] md:top-[85%] left-1/2 -translate-x-1/2 text-center w-full flex flex-col items-center justify-center z-30 pointer-events-none">
                  <div style={{ fontFamily: 'var(--font-script)' }} className="text-white text-6xl md:text-[110px] -rotate-3 -ml-16 md:-ml-32 drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] leading-none font-normal">Great</div>
                  <div style={{ fontFamily: 'var(--font-marker)' }} className="text-white text-7xl md:text-[145px] tracking-widest leading-[0.6] ml-16 md:ml-36 drop-shadow-[0_10px_20px_rgba(0,0,0,1)] transform -translate-y-1 md:-translate-y-3 text-center">MENU</div>
                </div>
              </div>
            </div>

            {/* Content: Opened physical Book Section / Old Style Menu List */}
            {experienceLevel === 1 ? (
              <section 
                id="old-menu-section" 
                className="py-16 md:py-24 px-4 bg-[#fffcf7] relative z-15 scroll-mt-20"
              >
                <MenuListOldStyle items={MENU_ITEMS} onSelectItem={setSelectedCustomizeItem} />
              </section>
            ) : (
              <section 
                id="book-menu-section" 
                className="pt-28 md:pt-48 pb-16 md:pb-28 px-4 md:px-12 bg-[#36050a] relative z-15 scroll-mt-20"
              >
                {/* Outer ivory/cream rounded card matching mockup exactly */}
                <div className="max-w-6xl mx-auto bg-[#fcf6ee] rounded-[32px] md:rounded-[64px] shadow-2xl p-4 md:p-12 relative z-10 border border-cream/10">
                  <MenuBook items={MENU_ITEMS} onSelectItem={setSelectedCustomizeItem} />
                </div>
              </section>
            )}

            {/* Content: Dedicated Coffee Frappe Menu Section as requested */}
            <section 
              id="coffee-frappes-section" 
              className="py-12 md:py-16 px-4 md:px-12 bg-cover bg-center bg-no-repeat relative overflow-hidden text-white"
              style={{ backgroundImage: "url('/frappe.jpg')" }}
            >
              {/* Perfect dark coffee ambient overlay to subtly blend without hiding the image */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a0104]/70 via-[#2f0409]/60 to-[#120002]/80 z-0"></div>

              {/* Radial overlay to match the high-end vignette look in the mockup photo */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.7)_100%)] pointer-events-none z-0"></div>

              <div id="frappes-wrapper-card" className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
                
                {/* Brand Header */}
                <div className="text-center mb-6 select-none">
                  <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] font-medium text-white/50 block mb-1">
                    POCIATO
                  </span>
                  <h2 
                    style={{ fontFamily: 'var(--font-marker)' }} 
                    className="text-4xl md:text-[64px] font-black uppercase tracking-wider text-white select-none leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.85)]"
                  >
                    FRAPPE
                  </h2>
                </div>

                {/* The beautiful 3 items descriptions as seen in the mockup, laid out beautifully in a compact layout */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl px-2 mt-2">
                  {[
                    {
                      num: "1",
                      id: "coffee-caramel-frappe",
                      name: "Caramel Frappe Coffee",
                      price: "15",
                      description: "Espresso blended with fresh milk, caramel sauce and frappe powder over ice until smooth and creamy. Topped with whipped cream and an extra drizzle of caramel for an indulgent finish."
                    },
                    {
                      num: "2",
                      id: "coffee-chocolate-frappe",
                      name: "Belgian Chocolate Frappe",
                      price: "15",
                      description: "Premium cocoa powder blended with milk, sugar and ice to create a rich, creamy texture. Deep chocolate flavour with a refreshing icy finish."
                    },
                    {
                      num: "3",
                      id: "coffee-matcha-frappe",
                      name: "Matcha Frappe",
                      price: "15",
                      description: "Bold matcha blended with frappe powder, fresh milk, sugar and ice. Smooth, creamy and perfectly chilled for a refreshing treat."
                    }
                  ].map((frappe) => {
                    const fullItem = MENU_ITEMS.find(item => item.id === frappe.id);
                    return (
                      <div 
                        key={frappe.id}
                        id={`frappe-item-${frappe.num}`}
                        onClick={() => {
                          if (fullItem) {
                            setSelectedCustomizeItem(fullItem);
                          }
                        }}
                        className="group flex flex-col cursor-pointer p-4 md:p-5 rounded-2xl transition-all duration-300 bg-black/60 hover:bg-black/80 border border-white/5 hover:border-[#00d8f5]/30 hover:shadow-[0_8px_24px_rgba(0,216,245,0.15)] animate-fade-in"
                      >
                        {/* Title & Badge */}
                        <div className="flex items-start justify-between gap-2 mb-2.5">
                          <h3 className="text-base md:text-lg font-bold tracking-tight text-white group-hover:text-[#00e1ff] transition-colors leading-tight">
                            <span className="font-mono text-white/50 mr-1.5 font-normal">
                              {frappe.num}.
                            </span>
                            {frappe.name}
                          </h3>
                          
                          {/* Circle Iced/Snowflake tag */}
                          <div id={`snowflake-badge-${frappe.num}`} className="flex items-center space-x-1 bg-[#00d8f5] text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-md shrink-0">
                            <span>❄️</span>
                            <span className="font-sans">RM{frappe.price}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/70 font-sans text-xs md:text-sm leading-relaxed group-hover:text-white/90 transition-colors mt-auto">
                          {frappe.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>
          </div>
        )}

        {/* Tab 2: Branch View */}
        {activeTab === 'branch' && (
          <div className="pt-36 md:pt-40 pb-12 bg-[#fff8f1]">
            <BranchView experienceLevel={experienceLevel} />
          </div>
        )}

        {/* Tab 3: About View */}
        {activeTab === 'about' && (
          <div className="pt-36 md:pt-40 pb-12 bg-[#fff8f1]">
            <AboutView experienceLevel={experienceLevel} />
          </div>
        )}

        {/* Tab 4: Reviews Section */}
        {activeTab === 'reviews' && (
          <div className="pt-36 md:pt-40 pb-12 bg-[#fff8f1]">
            <ReviewSection experienceLevel={experienceLevel} />
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-matte-black text-cream border-t-2 border-caramel/20 py-16 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-caramel/15 flex items-center justify-center font-serif font-black text-sm text-caramel border border-caramel">
                C
              </div>
              <span className="font-serif text-lg tracking-wider font-bold text-cream uppercase">
                Pociato
              </span>
            </div>
            <p className="text-xs text-cream/70 leading-relaxed max-w-xs">
              Artisanal Pizza & Soulful Coffee in an industrial-chic haven. Experience our signature 72-hour dough rise and organic, direct-trade espresso.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-caramel hover:text-matte-black transition-all">
                <Instagram className="w-4 h-4 text-cream" />
              </a>
              <div className="text-xs font-mono text-caramel font-bold uppercase">#POCIATOCRAFT</div>
            </div>
          </div>

          <div className="md:col-span-2"></div>

          {/* Bistro hours list */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono text-xs uppercase tracking-wider font-bold text-caramel">Opening Hours</h5>
            <ul className="text-xs text-cream/60 space-y-1.5">
              <li>Mon - Fri: 7:00 AM - 10:00 PM</li>
              <li>Sat - Sun: 8:00 AM - 11:00 PM</li>
              <li className="text-caramel italic pt-2">* Ovens fired until 30 minutes before close.</li>
            </ul>
          </div>

          {/* Quick links & Contact details */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono text-xs uppercase tracking-wider font-bold text-caramel">Navigation & Contact</h5>
            <div className="flex flex-col space-y-2 text-xs">
              <button 
                onClick={() => setActiveFooterModal('contact')}
                className="text-left text-cream/60 hover:text-caramel transition-colors"
              >
                📞 Help Desk: contact@pociato.com
              </button>
              <button 
                onClick={() => setActiveFooterModal('privacy')}
                className="text-left text-cream/60 hover:text-caramel transition-colors"
              >
                🛡️ Privacy Guidelines
              </button>
              <button 
                onClick={() => setActiveFooterModal('terms')}
                className="text-left text-cream/60 hover:text-caramel transition-colors"
              >
                📜 Terms of Booking
              </button>
            </div>
          </div>

        </div>

        {/* Copywrite lines */}
        <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-cream/40">
          <p>© 2026 Pociato Artisanal Café. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0 text-cream/50">
            <Heart className="w-3 h-3 text-burgundy fill-current" />
            <span>Built for Sourdough Purists</span>
          </div>
        </div>
      </footer>

      {/* MODULAR COMPONENT PORTS */}

      {/* Cart Slider */}
      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Custom options Modal */}
      <CustomizeModal 
        item={selectedCustomizeItem} 
        onClose={() => setSelectedCustomizeItem(null)} 
        onAddToBag={handleAddToBag}
      />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 p-3 rounded bg-burgundy text-white shadow-xl border border-white/10 hover:scale-105 active:scale-95 transition-all z-30 cursor-pointer animate-fade-in"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </button>
      )}

      {/* AI Assistant Chat Widget (Level 3) */}
      <AiAssistant experienceLevel={experienceLevel} />

      {/* Footer Modals Overlay */}
      {activeFooterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-matte-black/75 backdrop-blur-xs">
          <div className="absolute inset-0" onClick={() => setActiveFooterModal(null)}></div>
          <div className="bg-[#fffcf8] p-6 md:p-8 rounded-lg shadow-2xl border border-espresso/15 max-w-md w-full relative z-10 animate-zoom-in text-espresso">
            <button 
              onClick={() => setActiveFooterModal(null)}
              className="absolute top-4 right-4 p-1 rounded-full bg-espresso/5 text-espresso/60 hover:text-espresso"
            >
              <X className="w-4 h-4" />
            </button>

            {activeFooterModal === 'contact' && (
              <div className="space-y-4">
                <h4 className="font-serif text-2xl font-bold tracking-tight text-burgundy">Reach Out to Pociato</h4>
                <p className="text-xs text-espresso/85 leading-relaxed">
                  Would you like to hire out our Iron Foundry mezzanine for an artisanal pizza baking class or private wine evening? Our team is glad to coordinate.
                </p>
                <div className="space-y-2 text-xs font-mono bg-espresso/5 p-4 rounded border">
                  <p className="font-bold flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-caramel" /> Phone: +1 (555) 901-4903</p>
                  <p className="font-bold">✉️ Email: reserve@pociato.com</p>
                  <p className="font-bold">📍 HQ Office: 428 S. Concrete Avenue, Suite B</p>
                </div>
              </div>
            )}

            {activeFooterModal === 'privacy' && (
              <div className="space-y-4">
                <h4 className="font-serif text-2xl font-bold tracking-tight text-burgundy flex items-center gap-1.5"><Shield className="w-5 h-5" /> Privacy Guidelines</h4>
                <p className="text-xs text-espresso/80 leading-relaxed">
                  We care deeply about your privacy. The name, email, table number, and cellular contacts you input inside this app are stored locally within your secure browser localstorage state.
                </p>
                <p className="text-xs text-espresso/80 leading-relaxed">
                  No remote trackers or advertisement pixels are ever activated. When you transmit order tickets, they are simulated seamlessly client-side to protect your personal eating behavior.
                </p>
              </div>
            )}

            {activeFooterModal === 'terms' && (
              <div className="space-y-4">
                <h4 className="font-serif text-2xl font-bold tracking-tight text-burgundy">📜 Terms of Booking</h4>
                <p className="text-xs text-espresso/80 leading-relaxed">
                  By securing a table reservation at Pociato, you agree to presented terms:
                </p>
                <ul className="text-xs text-espresso/85 list-disc pl-5 space-y-1.5 leading-relaxed">
                  <li>Reservations are strictly held for **15 minutes** past target time. If delayed, please drop us a ring.</li>
                  <li>Dine-In guests must select minimum one drink or pizza per seat block.</li>
                  <li>Sourdough contains gluten; please state any allergic intolerances in reservation notes!</li>
                </ul>
              </div>
            )}

            <button
              onClick={() => setActiveFooterModal(null)}
              className="w-full mt-6 py-2.5 bg-espresso hover:bg-burgundy text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-all text-center"
            >
              Continue Sourdough Exploring
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
