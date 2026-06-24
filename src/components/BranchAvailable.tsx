import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

export default function BranchAvailable() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white relative z-10 w-full max-w-7xl mx-auto font-sans">
      
      {/* Search Bar */}
      <div className="flex justify-center mb-12 w-full">
        <div className="relative w-full max-w-2xl">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full py-3 px-6 pr-12 rounded-full border-2 border-[#b57a4e] outline-none text-[#5c3e26] bg-white placeholder-[#b57a4e]/70 focus:ring-2 focus:ring-[#b57a4e]/20 transition-shadow"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#b57a4e]" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        
        {/* Left Side: Map */}
        <div className="w-full h-[400px] lg:h-[550px] rounded-md overflow-hidden bg-gray-200 border border-gray-300">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.513410710328!2d110.32948215!3d1.5542713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fba76cf13dbfdf%3A0xc6efea4a3d4d3f56!2sKuching%2C%20Sarawak%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1717364239857!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Branches Map"
          ></iframe>
        </div>

        {/* Right Side: Outlets List */}
        <div className="flex flex-col w-full h-full">
          <h2 className="text-3xl md:text-4xl font-black text-center uppercase tracking-tight text-[#1a1a1a] mb-8 font-serif" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.05em' }}>
            OUTLETS NEAR YOU
          </h2>

          <div className="flex flex-col space-y-4 mb-8 flex-grow">
            {[
              {
                name: "Richiamo Coffee UiTM 1",
                address: "RN 6, Universiti Teknologi MARA Cawangan Sarawak Kampus Samarahan, Jalan Meranek, 94300 Kota Samarahan,..."
              },
              {
                name: "Richiamo Coffee Metrocity Kuching",
                address: "LORONG METROCITY 1A7, METROCITY, 93050 Kuching, Sarawak, Malaysia"
              },
              {
                name: "Richiamo Coffee Putatan",
                address: "No. H, 36-G, Lorong Royal Plaza Putatan, Bandar Putatan, 88200 Putatan, Sabah, Malaysia"
              }
            ].map((branch, index) => (
              <div 
                key={index}
                className="bg-[#faecd9] rounded-2xl p-6 md:p-8 flex items-center justify-between hover:bg-[#f5e3ca] transition-colors cursor-pointer group"
              >
                <div className="pr-4 w-full">
                  <h3 className="font-bold text-xl md:text-2xl text-black mb-2 leading-tight">
                    {branch.name}
                  </h3>
                  <p className="text-black text-sm md:text-base leading-snug">
                    {branch.address}
                  </p>
                </div>
                <div className="flex-shrink-0 text-[#b57a4e] ml-2">
                  <ChevronRight className="w-10 h-10 stroke-[3]" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-3 md:space-x-4 mt-auto font-bold text-lg text-black">
            <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#b57a4e] text-white cursor-pointer hover:bg-[#9a643e] transition-colors">1</span>
            <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors">2</span>
            <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors">3</span>
            <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors">4</span>
            <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors">5</span>
            <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors">6</span>
            <span>...</span>
            <span className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer transition-colors">57</span>
          </div>

        </div>
      </div>
    </section>
  );
}
