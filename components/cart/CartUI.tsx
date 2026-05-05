'use client';

import { useState } from 'react';

interface CartItemData {
  id: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
}

const INITIAL_ITEMS: CartItemData[] = [
  { id: '1', name: 'Performance Hoodie', variant: 'Size: S · Color: Black', price: 89, qty: 1 },
  { id: '2', name: 'Training Shorts', variant: 'Size: M · Color: Navy', price: 54, qty: 2 },
];

export default function CartUI() {
  const [items, setItems] = useState<CartItemData[]>(INITIAL_ITEMS);
  const [promo, setPromo] = useState('');

  const updateQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const remove = (id: string) => setItems((prev) => prev.filter((item) => item.id !== id));

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="flex gap-[60px] px-20 py-[60px] items-start">
      <div className="flex-1">
        <h1 className="font-heading text-[32px] font-bold mb-8 text-brand-primary">Your Cart</h1>

        {items.map((item) => (
          <div key={item.id} className="flex gap-6 items-center py-6 border-b border-gray-100">
            <div className="w-[100px] h-[100px] bg-surface rounded-lg flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-base font-semibold text-brand-primary">{item.name}</h3>
              <p className="text-[13px] text-muted mt-1">{item.variant}</p>
              <p className="text-base font-bold text-brand-secondary mt-2">${item.price.toFixed(2)}</p>
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="w-8 h-8 rounded-md border border-gray-200 bg-white text-base cursor-pointer hover:bg-gray-50"
                >
                  −
                </button>
                <span className="text-[15px] font-semibold min-w-6 text-center">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, 1)}
                  className="w-8 h-8 rounded-md border border-gray-200 bg-white text-base cursor-pointer hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => remove(item.id)}
                className="mt-2 text-[13px] text-muted underline cursor-pointer bg-transparent border-none"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[340px] flex-shrink-0 bg-surface rounded-xl p-8 sticky top-10">
        <h2 className="font-heading text-xl font-bold mb-6 text-brand-primary">Order Summary</h2>
        <div className="flex justify-between text-sm text-muted mb-[14px]">
          <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-muted mb-[14px]">
          <span>Shipping</span><span>Free</span>
        </div>
        <div className="flex justify-between text-sm text-muted mb-[14px]">
          <span>Discount</span><span>—</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-brand-primary border-t border-gray-200 pt-4 mt-2">
          <span>Total</span><span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex gap-[10px] my-5">
          <input
            type="text"
            placeholder="Promo code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            className="flex-1 px-[14px] py-[10px] border border-gray-200 rounded-md text-sm"
          />
          <button className="px-[18px] py-[10px] bg-brand-primary text-white rounded-md text-sm cursor-pointer hover:opacity-90">
            Apply
          </button>
        </div>

        <button className="w-full bg-brand-secondary text-white rounded-lg py-[18px] text-base font-semibold cursor-pointer hover:opacity-90 mt-2">
          Proceed to Checkout
        </button>
        <span className="block text-center mt-[14px] text-sm text-muted underline cursor-pointer">
          Continue Shopping
        </span>
      </div>
    </div>
  );
}
