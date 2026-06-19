import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingCart, ShoppingBag, ArrowRight, Printer, Sparkles, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    deliveryMethod: 'pickup', // pickup | dine-in
    tableNumber: ''
  });
  const [invoiceId, setInvoiceId] = useState('');

  if (!isOpen) return null;

  // Pricing math
  const subtotal = cart.reduce((acc, curr) => acc + (curr.singleItemPriceWithAddons * curr.quantity), 0);
  const salesTax = subtotal * 0.08; // 8%
  const total = subtotal + salesTax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);

    setTimeout(() => {
      setInvoiceId(`POC-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1500);
  };

  const resetCheckout = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-matte-black/60 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* Drawer Container (Aesthetic Glass / Darker Wood Accent) */}
      <div className="relative w-full max-w-md h-full bg-[#fcf8f2] shadow-2xl flex flex-col justify-between border-l border-espresso/15 z-10 animate-slide-in">
        
        {/* Header */}
        <div className="p-5 border-b border-espresso/10 bg-cream/90 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-burgundy" />
            <h3 className="font-serif text-lg font-bold text-espresso uppercase tracking-tight">Your Order Bag</h3>
            <span className="bg-espresso/10 text-espresso font-mono text-xs px-2 py-0.5 rounded-full font-bold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <button 
            id="close-cart-btn"
            onClick={onClose}
            className="p-1 rounded-sm text-espresso/60 hover:text-espresso hover:bg-espresso/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* State 1: Checkout Finished Receipt printer */}
        {checkoutComplete ? (
          <div className="p-6 flex-grow overflow-y-auto flex flex-col justify-between">
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-espresso">Order Transmitted!</h4>
              <p className="text-xs text-espresso/70 mt-1 max-w-[280px] mx-auto">
                Your ticket has been dispatched instantly to our wood oven kitchen and brewing station.
              </p>

              {/* Physical Bistro Invoice */}
              <div className="bg-white p-5 rounded border border-dashed border-espresso/20 text-left font-mono text-xs text-espresso mt-6 space-y-3 shadow-md relative max-w-xs mx-auto">
                <div className="absolute top-2 right-2 flex space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>

                <div className="text-center border-b border-espresso/10 pb-3">
                  <h5 className="font-serif text-sm font-black text-espresso tracking-wider uppercase">POCIATO CAFE</h5>
                  <p className="text-[9px] text-espresso/60">BREAD & CUP ARTISANS</p>
                  <p className="text-[9px] text-espresso/50 mt-1">Invoice: {invoiceId}</p>
                </div>

                <div className="space-y-1 text-[11px] border-b border-espresso/10 pb-3">
                  <p className="flex justify-between"><span>GUEST NAME:</span> <span className="font-semibold">{customerDetails.name}</span></p>
                  <p className="flex justify-between"><span>METHOD:</span> <span className="font-semibold uppercase">{customerDetails.deliveryMethod}</span></p>
                  {customerDetails.deliveryMethod === 'dine-in' && (
                    <p className="flex justify-between"><span>TABLE NO:</span> <span className="font-semibold">Table #{customerDetails.tableNumber}</span></p>
                  )}
                  <p className="flex justify-between"><span>CELL NO:</span> <span className="font-semibold">{customerDetails.phone}</span></p>
                </div>

                {/* Items listing */}
                <div className="space-y-2 text-[10px] border-b border-espresso/10 pb-3">
                  {cart.map((cartItem) => (
                    <div key={cartItem.cartId}>
                      <div className="flex justify-between">
                        <span>{cartItem.quantity}x {cartItem.item.name}</span>
                        <span>${(cartItem.singleItemPriceWithAddons * cartItem.quantity).toFixed(2)}</span>
                      </div>
                      
                      {/* customizations details */}
                      {Object.entries(cartItem.selectedCustomizations).map(([opt, choice]) => (
                        <p key={opt} className="text-[8px] text-espresso/50 pl-2 leading-none">
                          ↳ {opt}: {choice}
                        </p>
                      ))}

                      {cartItem.specialInstructions && (
                        <p className="text-[8px] text-burgundy italic pl-2 leading-none">
                          * "{cartItem.specialInstructions}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-1.5 text-xs text-espresso pt-1">
                  <p className="flex justify-between text-[11px]"><span className="text-espresso/60">SUBTOTAL:</span> <span>${subtotal.toFixed(2)}</span></p>
                  <p className="flex justify-between text-[11px]"><span className="text-espresso/60">SALES TAX (8%):</span> <span>${salesTax.toFixed(2)}</span></p>
                  <p className="flex justify-between border-t border-espresso/10 pt-2 font-bold text-sm text-espresso">
                    <span>TOTAL AMOUNT:</span>
                    <span className="text-burgundy">${total.toFixed(2)}</span>
                  </p>
                </div>

                <div className="border-t border-espresso/15 pt-3 text-center text-[9px] text-espresso/50 leading-relaxed">
                  * Order starts preparing immediately. Estimated wait: 12-15 minutes. Thank you!
                </div>
              </div>
            </div>

            <button
              onClick={resetCheckout}
              className="w-full py-3 bg-burgundy hover:bg-burgundy/90 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-all"
            >
              Order Something Else / Close
            </button>
          </div>
        ) : (
          <>
            {/* State 2: Empty Cart vs Cart list */}
            {cart.length === 0 ? (
              <div className="p-8 flex-grow flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-espresso/5 flex items-center justify-center text-espresso/40 mb-4 border border-espresso/10 animate-pulse">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-espresso">Your bag is empty</h4>
                <p className="text-xs text-espresso/60 max-w-[200px] mt-1.5">
                  Browse our sourdough pizza or specialty espresso brews and select your custom add-ons!
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-5 py-2.5 bg-espresso hover:bg-burgundy text-cream text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
                >
                  Return to Menu
                </button>
              </div>
            ) : (
              <div className="flex-grow overflow-y-auto p-5 space-y-5">
                
                {/* Scrollable list of items */}
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-caramel">Selected Delicacies</span>
                  {cart.map((item) => (
                    <div 
                      key={item.cartId}
                      className="p-4 rounded bg-white/60 border border-espresso/10 flex items-start space-x-3 hover:shadow-md transition-shadow relative"
                    >
                      {/* Image */}
                      <div className="w-16 h-16 rounded overflow-hidden border border-espresso/15 flex-shrink-0">
                        <img 
                          src={item.item.image} 
                          alt={item.item.name} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex-grow min-w-0 pr-3">
                        <h4 className="font-serif text-sm font-bold text-espresso truncate">{item.item.name}</h4>
                        <p className="font-sans text-xs text-burgundy font-semibold mt-0.5">${item.singleItemPriceWithAddons.toFixed(2)}</p>
                        
                        {/* Customizations summary */}
                        <div className="mt-1.5 space-y-0.5 text-[10px] text-espresso/60 italic">
                          {Object.entries(item.selectedCustomizations).map(([k, v]) => (
                            <p key={k}>
                              ↳ {k}: <span className="font-semibold text-espresso">{v}</span>
                            </p>
                          ))}
                          {item.specialInstructions && (
                            <p className="text-burgundy font-semibold mt-1">
                              * Notes: "{item.specialInstructions}"
                            </p>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 mt-3">
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, -1)}
                            className="w-6 h-6 rounded-full bg-espresso/5 hover:bg-espresso/10 text-espresso flex items-center justify-center font-bold text-xs"
                          >
                            -
                          </button>
                          <span className="font-mono text-xs font-bold text-espresso w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.cartId, 1)}
                            className="w-6 h-6 rounded-full bg-espresso/5 hover:bg-espresso/10 text-espresso flex items-center justify-center font-bold text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Remove item button */}
                      <button
                        onClick={() => onRemoveItem(item.cartId)}
                        className="p-1.5 rounded-sm text-espresso/40 hover:text-burgundy hover:bg-burgundy/5 transition-colors cursor-pointer self-start absolute top-3 right-3"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Settle Checkout Credentials form */}
                <div className="pt-6 border-t border-espresso/10 space-y-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-caramel">Checkout & Transmit Order</span>
                  
                  <form onSubmit={handleCheckout} className="space-y-3 bg-white/40 p-4 rounded border border-espresso/5">
                    
                    {/* Method radio toggle */}
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/60 font-semibold mb-1">
                        Dine-In Option
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setCustomerDetails({ ...customerDetails, deliveryMethod: 'pickup' })}
                          className={`py-1.5 rounded-sm text-xs border text-center transition-all ${
                            customerDetails.deliveryMethod === 'pickup'
                              ? 'bg-burgundy text-white border-burgundy font-bold'
                              : 'bg-white/40 border-espresso/10 text-espresso hover:bg-espresso/5'
                          }`}
                        >
                          Takeaway / Pickup
                        </button>
                        <button
                          type="button"
                          onClick={() => setCustomerDetails({ ...customerDetails, deliveryMethod: 'dine-in' })}
                          className={`py-1.5 rounded-sm text-xs border text-center transition-all ${
                            customerDetails.deliveryMethod === 'dine-in'
                              ? 'bg-burgundy text-white border-burgundy font-bold'
                              : 'bg-white/40 border-espresso/10 text-espresso hover:bg-espresso/5'
                          }`}
                        >
                          Dine-In (At Table)
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/60 font-semibold mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Eleanor V."
                          value={customerDetails.name}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                          className="w-full px-2.5 py-1.5 bg-white/70 border border-espresso/15 rounded-sm text-xs focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                        />
                      </div>

                      {customerDetails.deliveryMethod === 'dine-in' ? (
                        <div>
                          <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/60 font-semibold mb-1">
                            Table Number
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 14, 25"
                            value={customerDetails.tableNumber}
                            onChange={(e) => setCustomerDetails({ ...customerDetails, tableNumber: e.target.value })}
                            className="w-full px-2.5 py-1.5 bg-white/70 border border-espresso/15 rounded-sm text-xs focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                          />
                        </div>
                      ) : (
                        <div>
                          <label className="block text-[10px] uppercase font-mono tracking-wider text-espresso/60 font-semibold mb-1">
                            Cell Phone
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 555-0422"
                            value={customerDetails.phone}
                            onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                            className="w-full px-2.5 py-1.5 bg-white/70 border border-espresso/15 rounded-sm text-xs focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-espresso"
                          />
                        </div>
                      )}
                    </div>

                    {/* Transmit Action */}
                    <button
                      type="submit"
                      disabled={isCheckingOut}
                      className="w-full mt-3 py-3 bg-burgundy hover:bg-burgundy/90 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-75"
                    >
                      {isCheckingOut ? (
                        <span>Logging To Oven Stand...</span>
                      ) : (
                        <>
                          <span>Transmit Kitchen Ticket</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>

              </div>
            )}

            {/* Bottom Settle summary bar (only if cart not empty) */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-espresso/10 bg-cream/90 space-y-3">
                <div className="space-y-1.5 text-xs text-espresso">
                  <div className="flex justify-between">
                    <span className="text-espresso/60">Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-espresso/60">Sales Tax (8%):</span>
                    <span>${salesTax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-espresso pt-1">
                    <span>Total Order:</span>
                    <span className="text-burgundy">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}
