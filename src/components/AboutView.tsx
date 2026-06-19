import React from 'react';
import { Heart, Sparkles, ChefHat, Eye } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 md:px-0">
      
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-flex items-center space-x-2 px-3 py-1 bg-burgundy/10 rounded-full text-xs font-semibold text-burgundy tracking-wider uppercase mb-3">
          <Heart className="w-3.5 h-3.5" />
          <span>The Soul of Our Kitchen</span>
        </span>
        <h2 className="font-serif text-3.5xl md:text-5xl text-espresso tracking-tight">Roots in Smoke & Steam</h2>
        <p className="font-sans text-sm md:text-base text-espresso/75 mt-3 leading-relaxed">
          Pociato was born out of a simple obsession: why can’t outstanding wood-charred sourdough pizza be served side-by-side with meticulous third-wave coffee?
        </p>
      </div>

      {/* Story Bento block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        
        {/* Story copy */}
        <div className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-caramel">Our Origin</span>
          <h3 className="font-serif text-3xl font-bold text-espresso leading-tight">An Industrial Union</h3>
          <p className="text-sm text-espresso/80 leading-relaxed">
            In 2021, on a cold docks afternoon, founders Matteo and Alessia saw an abandoned brick iron foundry. By fusing Matteo's Naples-acquired dough-fermentation experiments with Alessia's passion for light-roast single-origin espresso pulls, the first blueprints of Pociato were drafted.
          </p>
          <p className="text-sm text-espresso/80 leading-relaxed">
            We built a kitchen where raw steel hooks meet the soft warmth of rising bread flour. A sanctuary of patience. Our sourdough starters are fed with reverse-osmosis spring water, and our coffees are roasted on an all-electric zero-emission fluid bed roaster at 180°C.
          </p>

          <div className="border-l-4 border-burgundy pl-4 italic text-xs text-[#523326]">
            "We don't believe in fast food. We raise our crusts for three full days. We pull our shots over a precise 28-second drag. Pociato is a love letter to artisanal kinetics."
            <span className="block mt-1 font-serif font-semibold text-espresso">— Matteo C., Master Baker</span>
          </div>
        </div>

        {/* Ambient chef image from unsplash */}
        <div className="relative group rounded-lg overflow-hidden shadow-2xl border border-espresso/10">
          <div className="absolute inset-0 bg-matte-black/20 z-10 pointer-events-none group-hover:bg-matte-black/5 transition-all"></div>
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600" 
            alt="Chefs prepared dough" 
            referrerPolicy="no-referrer"
            className="w-full h-[400px] object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-cream/90 backdrop-blur-md p-4 rounded text-xs text-espresso shadow-lg z-20">
            <p className="font-serif font-bold text-sm">Matteo's Wood Fired Oven</p>
            <p className="text-[10px] text-espresso/70 mt-1">Kept constant at 460°C (860°F) using seasoned red-oak logs sourced from local cooperative farms.</p>
          </div>
        </div>

      </div>

      {/* Pillars Section */}
      <div className="bg-espresso/5 p-6 md:p-12 rounded-lg border border-espresso/10 space-y-10">
        <div className="text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-caramel">The Guidelines We Bake By</span>
          <h3 className="font-serif text-2xl md:text-3.5xl font-bold text-espresso tracking-tight mt-1">Our Three Golden Tenets</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="space-y-3 bg-white/50 p-5 rounded border border-white/40">
            <div className="w-10 h-10 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center font-bold text-lg">72h</div>
            <h4 className="font-serif text-lg font-bold text-espresso">The 72-Hour Deep Cold Rise</h4>
            <p className="text-xs text-espresso/75 leading-relaxed">
              We slow-ferment our unique sourdough mixture inside a climate-controlled vault for 72 hours. This deeply breaks down starches, creating an exceptionally light, airy, caramelized crust structure with subtle tart lactic nuances.
            </p>
          </div>

          <div className="space-y-3 bg-white/50 p-5 rounded border border-white/40">
            <div className="w-10 h-10 rounded-full bg-caramel/10 text-caramel flex items-center justify-center font-bold text-lg">☕</div>
            <h4 className="font-serif text-lg font-bold text-espresso">Direct Trade Pure Sourcing</h4>
            <p className="text-xs text-espresso/75 leading-relaxed">
              Every bean can be traced to the hillside farm of origin. We purchase micro-lots from Colombia, Ethiopia, and Kenya at premiums far exceeding Fair Trade prices, ensuring sustainable agriculture and direct relationships.
            </p>
          </div>

          <div className="space-y-3 bg-white/50 p-5 rounded border border-white/40">
            <div className="w-10 h-10 rounded-full bg-amber-900/10 text-amber-900 flex items-center justify-center font-bold text-lg">🍅</div>
            <h4 className="font-serif text-lg font-bold text-espresso">Certified San Marzano Tomatoes</h4>
            <p className="text-xs text-espresso/75 leading-relaxed">
              No artificial enhancers or bulk pastes. Our pizza base uses strictly crushed DOP-certified San Marzano tomatoes harvested near Mount Vesuvius, resulting in an incredibly sweet, low-acid nectar base.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
