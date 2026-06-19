import React, { useState, useEffect } from 'react';
import { MenuItem, CartItem } from '../types';
import { X, ShoppingBag, Plus, Sparkles, CheckCircle } from 'lucide-react';

interface CustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToBag: (cartItem: CartItem) => void;
}

export default function CustomizeModal({ item, onClose, onAddToBag }: CustomizeModalProps) {
  if (!item) return null;

  const [selectedCustomizations, setSelectedCustomizations] = useState<{ [optionName: string]: string }>({});
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedNote, setAddedNote] = useState(false);

  // Initialize first choice selections automatically
  useEffect(() => {
    if (item.customizations) {
      const defaults: { [optionName: string]: string } = {};
      item.customizations.forEach((opt) => {
        defaults[opt.name] = opt.choices[0]; // pick first choice
      });
      setSelectedCustomizations(defaults);
    } else {
      setSelectedCustomizations({});
    }
    setSpecialInstructions('');
    setQuantity(1);
    setAddedNote(false);
  }, [item]);

  const handleSelection = (optionName: string, choice: string) => {
    setSelectedCustomizations({
      ...selectedCustomizations,
      [optionName]: choice
    });
  };

  // Math: Calculate if any choice increases base price
  let additionalCost = 0;
  if (item.customizations) {
    Object.entries(selectedCustomizations).forEach(([optName, choice]) => {
      // Crude parsing of "+ $X.XX" format to calculate real additive price increments
      const priceRegex = /\+\s*\$\s*([0-9.]+)/i;
      const match = (choice as string).match(priceRegex);
      if (match && match[1]) {
        additionalCost += parseFloat(match[1]);
      }
    });
  }

  const singleItemPriceWithAddons = item.price + additionalCost;
  const totalPrice = singleItemPriceWithAddons * quantity;

  const handleConfirm = () => {
    const cartId = `cart-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    const newCartItem: CartItem = {
      cartId,
      item,
      quantity,
      selectedCustomizations,
      specialInstructions: specialInstructions.trim() || undefined,
      singleItemPriceWithAddons
    };

    onAddToBag(newCartItem);
    setAddedNote(true);

    setTimeout(() => {
      setAddedNote(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-matte-black/70 backdrop-blur-xs">
      {/* Backdrop closer */}
      <div onClick={onClose} className="absolute inset-0"></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#fffcf8] rounded-lg shadow-2xl border border-espresso/15 flex flex-col md:flex-row overflow-hidden animate-zoom-in z-10 max-h-[90vh]">
        
        {/* Close Button Trigger */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-matte-black/60 text-white hover:bg-burgundy hover:scale-105 transition-all z-20 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Bleeding Hero Image panel */}
        <div className="w-full md:w-1/2 h-44 md:h-auto relative overflow-hidden bg-espresso/5 flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-matte-black/50 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-4 left-4 text-white p-1">
            <span className="text-[9px] uppercase tracking-wider font-bold bg-caramel text-matte-black px-2 py-0.5 rounded-sm">
              {item.category === 'pizza' ? '🍕 Wood Oven Pizza' : item.category === 'coffee' ? '☕ Barista Brewed' : '🍰 Baked Pastry'}
            </span>
            <h3 className="font-serif text-2xl font-bold tracking-tight mt-1 ml-0.5">{item.name}</h3>
          </div>
        </div>

        {/* Right: Customization selections layout */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between max-h-[60vh] md:max-h-[80vh]">
          
          <div className="space-y-5">
            <div>
              <p className="font-serif text-lg font-black text-burgundy">${item.price.toFixed(2)} Base</p>
              <p className="text-xs text-espresso/75 mt-1">{item.description}</p>
            </div>

            {/* Customization Options lists */}
            {item.customizations && item.customizations.length > 0 && (
              <div className="space-y-4 pt-3 border-t border-espresso/10">
                {item.customizations.map((option) => (
                  <div key={option.name} className="space-y-2">
                    <label className="block text-[10px] uppercase font-mono tracking-wider font-bold text-caramel">
                      {option.name} <span className="text-espresso/50 font-normal font-sans">(Select one)</span>
                    </label>
                    <div className="space-y-1">
                      {option.choices.map((choice) => {
                        const isSelected = selectedCustomizations[option.name] === choice;
                        return (
                          <button
                            key={choice}
                            onClick={() => handleSelection(option.name, choice)}
                            className={`w-full text-left px-3 py-2 text-xs rounded border transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-burgundy text-white border-burgundy font-bold shadow-sm'
                                : 'bg-[#faf6f0] border-espresso/10 text-espresso hover:bg-espresso/5'
                            }`}
                          >
                            <span>{choice}</span>
                            {isSelected && <span className="text-[10px] uppercase font-bold text-cream">Selected</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Special Instructions comment */}
            <div className="pt-3 border-t border-espresso/10">
              <label className="block text-[10px] uppercase font-mono tracking-wider font-bold text-caramel mb-1.5">
                Kitchen Prep Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. well done crust, honey on side, extra cup sleeve..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-3 py-2 bg-white/40 border border-espresso/20 rounded-sm text-xs focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
              />
            </div>
          </div>

          {/* Settle Drawer footer */}
          <div className="pt-6 border-t border-espresso/10 mt-6 space-y-4">
            
            <div className="flex items-center justify-between">
              {/* Counter buttons */}
              <div className="flex items-center space-x-1.5 bg-espresso/5 rounded p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded bg-white hover:bg-cream border border-espresso/10 text-espresso flex items-center justify-center font-bold text-sm"
                >
                  -
                </button>
                <span className="font-mono text-sm font-bold text-espresso w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded bg-white hover:bg-cream border border-espresso/10 text-espresso flex items-center justify-center font-bold text-sm"
                >
                  +
                </button>
              </div>

              {/* Live tally total */}
              <div className="text-right">
                <span className="block text-[10px] text-espresso/50 uppercase tracking-widest font-bold">Total price</span>
                <span className="font-serif text-xl font-bold text-burgundy">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Confirm buttons */}
            {addedNote ? (
              <div className="py-2.5 bg-emerald-600 text-white font-mono text-xs uppercase tracking-wider font-bold rounded-sm text-center flex items-center justify-center space-x-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Added To Order Bag!</span>
              </div>
            ) : (
              <button
                onClick={handleConfirm}
                className="w-full py-3 bg-burgundy hover:bg-burgundy/90 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-all shadow-md flex items-center justify-center space-x-1.5"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span>Add {quantity} To Order Bag</span>
              </button>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
