'use client';

import { useState } from 'react';

const PRODUCTS = [
  { name: 'Performance Hoodie', price: '$89.00', tag: 'New' },
  { name: 'Training Shorts', price: '$54.00', tag: null },
  { name: 'Movement Tee', price: '$39.00', tag: 'Sale' },
  { name: 'Compression Leggings', price: '$72.00', tag: null },
  { name: 'Track Jacket', price: '$98.00', tag: 'New' },
  { name: 'Sport Cap', price: '$28.00', tag: null },
];

const SORT_OPTIONS = ['Sort: Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

export default function CollectionGrid() {
  const [sort, setSort] = useState(SORT_OPTIONS[0]);
  const [page, setPage] = useState(1);

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-7">
        <span className="text-sm text-muted">12 products</span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-md text-sm"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-[220px] bg-surface relative">
              {product.tag && (
                <span className="absolute top-3 left-3 bg-brand-secondary text-white text-[11px] px-[10px] py-[3px] rounded-full">
                  {product.tag}
                </span>
              )}
            </div>
            <div className="p-[18px]">
              <h3 className="text-[15px] font-semibold text-brand-primary">{product.name}</h3>
              <p className="text-brand-secondary text-[17px] font-bold mt-[6px]">{product.price}</p>
              <button className="mt-3 w-full bg-brand-primary text-white rounded-md py-3 text-[13px] hover:opacity-90 transition-opacity cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-12">
        {[1, 2, 3].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`w-10 h-10 rounded-lg border text-sm cursor-pointer ${
              page === p
                ? 'bg-brand-primary text-white border-brand-primary'
                : 'bg-white text-brand-primary border-gray-200'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
