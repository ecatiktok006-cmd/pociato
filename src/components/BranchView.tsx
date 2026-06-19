import React, { useState } from 'react';
import { BRANCHES } from '../data';
import { TableReservation } from '../types';
import { MapPin, Phone, Calendar, Clock, Users, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BranchView() {
  const [formData, setFormData] = useState({
    branchId: BRANCHES[0].id,
    name: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    partySize: 2,
    tablePreference: 'Espresso Bar',
    specialRequests: ''
  });

  const [confirmedReservation, setConfirmedReservation] = useState<TableReservation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newReservation: TableReservation = {
        id: `res-${Math.random().toString(36).substr(2, 9)}`,
        ...formData
      };
      setConfirmedReservation(newReservation);
      setIsSubmitting(false);
    }, 1200);
  };

  const selectedBranchObj = BRANCHES.find(b => b.id === formData.branchId) || BRANCHES[0];

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 md:px-0">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center space-x-2 px-3 py-1 bg-burgundy/10 rounded-full text-xs font-semibold text-burgundy tracking-wider uppercase mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Branches & Table Reservations</span>
        </span>
        <h2 className="font-serif text-3.5xl md:text-5xl text-espresso tracking-tight">Our Micro Havens</h2>
        <p className="font-sans text-sm md:text-base text-espresso/75 mt-3 leading-relaxed">
          Step into our warm industrial brick-and-steel sanctuaries. Each location houses our massive custom stoneware pizza oven and hand-tuned espresso setups.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT COLUMN: Branch Details */}
        <div className="lg:col-span-5 space-y-8">
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-caramel">Select Branch Location</span>
          <div className="space-y-6">
            {BRANCHES.map((branch) => {
              const isSelected = formData.branchId === branch.id;
              return (
                <div
                  key={branch.id}
                  onClick={() => setFormData({ ...formData, branchId: branch.id })}
                  className={`p-5 rounded-lg border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'glass-light border-burgundy shadow-xl translate-x-1'
                      : 'border-espresso/10 hover:border-espresso/35 hover:bg-espresso/[0.02]'
                  }`}
                >
                  <div className="w-full h-40 rounded mb-4 overflow-hidden relative">
                    <img
                      src={branch.imageUrl}
                      alt={branch.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2.5 py-1 text-[9px] font-mono uppercase font-bold text-[#1d1b17] bg-cream shadow-sm rounded-sm">
                      {branch.tableAvailability}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-espresso">{branch.name}</h4>
                    <p className="text-xs text-espresso/70 italic mt-1">{branch.vibe}</p>
                    
                    <div className="mt-4 space-y-2 text-xs text-espresso">
                      <p className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-caramel flex-shrink-0 mt-0.5" />
                        <span>{branch.address}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Phone className="w-3.5 h-3.5 text-caramel flex-shrink-0 mt-0.5" />
                        <span>{branch.contact}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Clock className="w-3.5 h-3.5 text-caramel flex-shrink-0 mt-0.5" />
                        <span>{branch.hours}</span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 text-right">
                    <span className={`text-[10px] uppercase font-mono tracking-wider font-bold ${isSelected ? 'text-burgundy' : 'text-espresso/50'}`}>
                      {isSelected ? '● Selected for Reservation' : 'Click to Reserve'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Table Reservation Form / Ticket */}
        <div className="lg:col-span-7">
          <div className="glass-light p-6 md:p-10 rounded-lg shadow-xl border border-matte-black/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-burgundy"></div>

            {confirmedReservation ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-espresso">Table Reserved Successfully!</h3>
                <p className="text-sm text-espresso/75 mt-2 max-w-md mx-auto">
                  We have secured your spot at **{selectedBranchObj.name}**! A digital receipt and companion calendar invite was dispatched to {confirmedReservation.email}.
                </p>

                {/* Ticket Stub Output */}
                <div className="bg-[#f0e6d6] p-6 rounded border border-dashed border-espresso/20 max-w-sm mx-auto mt-8 text-left font-mono text-xs text-espresso space-y-3 relative">
                  <span className="absolute -top-3 left-1/2 -ml-8 bg-burgundy text-white px-3 py-0.5 border border-[#bf8da2]/10 rounded-full text-[8px] uppercase tracking-wider font-bold">
                    POCIATO TICKET
                  </span>
                  
                  <div className="border-b border-espresso/15 pb-2.5 text-center">
                    <h5 className="font-serif text-base font-bold tracking-tight text-espresso">Reservation Receipt</h5>
                    <p className="text-[9px] text-[#8c6753]">ID: {confirmedReservation.id.toUpperCase()}</p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <p className="flex justify-between">
                      <span className="text-espresso/60">GUEST NAME:</span>
                      <span className="font-bold text-espresso">{confirmedReservation.name}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-espresso/60">DATE:</span>
                      <span className="font-bold text-espresso">{confirmedReservation.date}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-espresso/60">TIME:</span>
                      <span className="font-bold text-espresso">{confirmedReservation.time}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-espresso/60">PARTY SIZE:</span>
                      <span className="font-bold text-espresso">{confirmedReservation.partySize} Guests</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-espresso/60">TABLE ASSIGN:</span>
                      <span className="font-bold text-espresso">{confirmedReservation.tablePreference}</span>
                    </p>
                    {confirmedReservation.specialRequests && (
                      <div className="pt-2 border-t border-espresso/10 mt-2 text-[10px] text-espresso/70 italic">
                        " {confirmedReservation.specialRequests} "
                      </div>
                    )}
                  </div>

                  <div className="border-t border-espresso/15 pt-2 text-center text-[10px] text-espresso/50">
                    * Present this ticket at the host stand. Res. held for 15 mins.
                  </div>
                </div>

                <button
                  onClick={() => setConfirmedReservation(null)}
                  className="mt-8 px-6 py-2.5 bg-espresso text-cream hover:bg-espresso/90 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-espresso">Instantly Reserve a Table</h3>
                  <p className="text-xs text-espresso/70 mt-1">
                    Select your preferred venue, party size, and table section below.
                  </p>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/70 font-semibold mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white/40 border border-espresso/20 rounded-sm text-sm focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/70 font-semibold mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white/40 border border-espresso/20 rounded-sm text-sm focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/70 font-semibold mb-1.5">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        className="w-full px-3 py-2 bg-white/40 border border-espresso/20 rounded-sm text-sm focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/70 font-semibold mb-1.5">
                      Time
                    </label>
                    <select
                      value={formData.time}
                      className="w-full px-3 py-2 bg-white/40 border border-espresso/20 rounded-sm text-sm focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    >
                      <option value="08:00">8:00 AM (Breakfast)</option>
                      <option value="10:00">10:00 AM (Brunch)</option>
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="14:00">2:00 PM (Siesta)</option>
                      <option value="17:00">5:00 PM (Aperitivo)</option>
                      <option value="18:00">6:00 PM (Dinner Hour)</option>
                      <option value="19:30">7:30 PM (Dinner Hour)</option>
                      <option value="21:00">9:00 PM (Late Night Pizza)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/70 font-semibold mb-1.5">
                      Party Size
                    </label>
                    <div className="flex items-center space-x-1">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, partySize: Math.max(1, formData.partySize - 1) })}
                        className="px-2 py-1 bg-espresso/5 rounded-sm hover:bg-espresso/10 text-espresso font-mono text-sm"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-mono font-bold text-sm text-espresso">{formData.partySize}</span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, partySize: Math.min(12, formData.partySize + 1) })}
                        className="px-2 py-1 bg-espresso/5 rounded-sm hover:bg-espresso/10 text-espresso font-mono text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/70 font-semibold mb-1.5">
                    Table Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Espresso Bar', 'Courtyard', 'Stone Oven Front'].map((pref) => {
                      const isPrefSel = formData.tablePreference === pref;
                      return (
                        <button
                          key={pref}
                          type="button"
                          onClick={() => setFormData({ ...formData, tablePreference: pref })}
                          className={`p-2.5 rounded-sm text-xs font-medium border text-center transition-all ${
                            isPrefSel
                              ? 'bg-burgundy text-white border-burgundy shadow-md shadow-burgundy/10'
                              : 'bg-white/30 border-espresso/15 text-espresso hover:bg-espresso/5'
                          }`}
                        >
                          {pref}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/70 font-semibold mb-1.5">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Sourdough allergies, anniversary seating, high chairs..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full px-3 py-2 bg-white/40 border border-espresso/20 rounded-sm text-sm focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-burgundy hover:bg-burgundy/90 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px] active:translate-y-0 disabled:opacity-75 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Allocating Table...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-white" />
                      <span>Confirm Reservation At {selectedBranchObj.name.split(' - ')[1] || 'Foundry'}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
