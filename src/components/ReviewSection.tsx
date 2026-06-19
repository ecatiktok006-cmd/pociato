import React, { useState, useEffect } from 'react';
import { INITIAL_REVIEWS } from '../data';
import { Review } from '../types';
import { Star, MessageSquare, Plus, CheckCircle2, Sparkles } from 'lucide-react';

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('pociato_reviews');
    return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
  });

  const [activeFilter, setActiveFilter] = useState<'all' | 'pizza' | 'coffee' | 'pastry'>('all');
  
  // Form State
  const [showForm, setShowForm] = useState(false);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState<'pizza' | 'coffee' | 'pastry'>('pizza');
  const [itemName, setItemName] = useState('');
  const [text, setText] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('pociato_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !text) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author,
      rating,
      text,
      timestamp: 'Just now',
      itemCategory: category,
      itemName: itemName || undefined
    };

    setReviews([newReview, ...reviews]);
    setSuccess(true);
    setAuthor('');
    setRating(5);
    setText('');
    setItemName('');

    setTimeout(() => {
      setSuccess(false);
      setShowForm(false);
    }, 2000);
  };

  const filteredReviews = reviews.filter(r => {
    if (activeFilter === 'all') return true;
    return r.itemCategory === activeFilter;
  });

  // Math
  const averageRating = (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 md:px-0">
      
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center space-x-2 px-3 py-1 bg-burgundy/10 rounded-full text-xs font-semibold text-burgundy tracking-wider uppercase mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Guest Testimonials & Reviews</span>
        </span>
        <h2 className="font-serif text-3.5xl md:text-5xl text-espresso tracking-tight">The Word on the Crust</h2>
        <p className="font-sans text-sm md:text-base text-espresso/75 mt-3 leading-relaxed">
          From early-morning espresso connoisseurs to midnight Neapolitan purists, see what our wonderful community has to say about the Pociato kitchen.
        </p>
      </div>

      {/* Overview stats & filter rail */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
        
        {/* Rating Breakdown card */}
        <div className="md:col-span-4 bg-espresso/5 p-6 rounded-lg border border-espresso/10 text-center flex flex-col justify-between">
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider text-caramel font-bold mb-3">Average Guest Rating</h4>
            <div className="text-5xl font-serif font-black text-espresso">{averageRating}</div>
            
            <div className="flex items-center justify-center space-x-1 mt-2 text-amber-500">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star 
                  key={s} 
                  className={`w-5 h-5 fill-current ${
                    s <= Math.round(Number(averageRating)) ? 'text-amber-500' : 'text-gray-300'
                  }`} 
                />
              ))}
            </div>
            
            <p className="text-[11px] text-espresso/60 mt-4 leading-normal">
              Based on {reviews.length} authentic guest submissions from our Iron Foundry & Rusty Anchor branch guestbooks.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full mt-6 py-2.5 bg-burgundy hover:bg-burgundy/95 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-all shadow hover:shadow-md flex items-center justify-center space-x-1"
          >
            <Plus className="w-4 h-4" />
            <span>Write in Guestbook</span>
          </button>
        </div>

        {/* Filters & Review Stream */}
        <div className="md:col-span-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-espresso/10">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'pizza', 'coffee', 'pastry'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-espresso text-cream shadow-sm'
                      : 'bg-espresso/5 text-espresso hover:bg-espresso/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <span className="text-[11px] font-mono text-caramel font-bold tracking-wider uppercase">
              {filteredReviews.length} Reviews
            </span>
          </div>

          {/* Form slide-in or toggle */}
          {showForm && (
            <div className="p-5 md:p-8 rounded-lg bg-cream/70 border-2 border-dashed border-caramel/40 animate-fade-in relative">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-espresso">Review Logged!</h4>
                  <p className="text-xs text-espresso/80 mt-1">Thank you for sharing your culinary thoughts with us.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-bold text-espresso flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-caramel" /> Submit a New Guestbook Entry
                    </h4>
                    <button 
                      type="button" 
                      onClick={() => setShowForm(false)} 
                      className="text-xs text-espresso/50 hover:text-espresso"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-espresso">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alessia Russo"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full mt-1.5 px-3 py-2 bg-white/40 border border-espresso/20 rounded-sm text-xs focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-espresso">
                        Item Category Triaged
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as any)}
                        className="w-full mt-1.5 px-3 py-2 bg-white/40 border border-espresso/20 rounded-sm text-xs focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                      >
                        <option value="pizza">🍕 Pizza Crusts</option>
                        <option value="coffee">☕ Coffee Brews</option>
                        <option value="pastry">🍰 Baked Sweets</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-espresso">
                        Item Tried (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Truffle Fungi, Oat Milk Latte"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        className="w-full mt-1.5 px-3 py-2 bg-white/40 border border-espresso/20 rounded-sm text-xs focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-espresso">
                        Score Rating ({rating} Stars)
                      </label>
                      <div className="flex items-center space-x-1.5 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="focus:outline-none"
                          >
                            <Star 
                              className={`w-6 h-6 fill-current transition-colors ${
                                star <= rating ? 'text-amber-500 hover:scale-110' : 'text-gray-300'
                              }`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider font-semibold text-espresso">
                      Your Sincere Sourdough / Brew Review
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share your raw review on food prep, crust crumb density, pour quality, or the ambient acoustic levels..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="w-full mt-1.5 px-3 py-2 bg-white/40 border border-espresso/20 rounded-sm text-xs focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 bg-espresso hover:bg-burgundy text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-all shadow"
                  >
                    Post to Guestbook Stream
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Review items stream */}
          <div className="space-y-4">
            {filteredReviews.length === 0 ? (
              <div className="text-center py-12 text-espresso/50 text-sm">
                No reviews found for this filter. Be the first to leave one!
              </div>
            ) : (
              filteredReviews.map((review) => (
                <div 
                  key={review.id}
                  className="p-5 rounded-lg border border-espresso/10 bg-white/40 hover:bg-white/60 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-serif text-sm font-bold text-espresso">{review.author}</span>
                      <div className="flex items-center space-x-1 text-amber-500 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`w-3.5 h-3.5 fill-current ${
                              star <= review.rating ? 'text-amber-500' : 'text-gray-200'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-espresso/50">{review.timestamp}</span>
                  </div>

                  <p className="text-xs text-espresso/80 mt-3 leading-relaxed italic pr-2">
                    " {review.text} "
                  </p>

                  {review.itemName && (
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-caramel/15 text-espresso font-semibold rounded-full border border-caramel/15">
                        {review.itemCategory === 'pizza' ? '🍕' : review.itemCategory === 'coffee' ? '☕' : '🍰'} Tried: {review.itemName}
                      </span>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
