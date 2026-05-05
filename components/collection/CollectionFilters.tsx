'use client';

import { useState } from 'react';

const CATEGORIES = ['Hoodies', 'Shorts', 'Tees', 'Accessories'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export default function CollectionFilters() {
  const [categories, setCategories] = useState<string[]>(['Hoodies']);
  const [sizes, setSizes] = useState<string[]>(['S', 'M']);
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('200');

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  return (
    <aside className="w-[220px] flex-shrink-0">
      <div className="mb-8">
        <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-brand-primary">Category</h3>
        {CATEGORIES.map((cat) => (
          <label key={cat} className="flex items-center gap-[10px] text-sm text-muted mb-[10px] cursor-pointer">
            <input
              type="checkbox"
              checked={categories.includes(cat)}
              onChange={() => toggle(categories, setCategories, cat)}
              className="accent-brand-secondary"
            />
            {cat}
          </label>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-brand-primary">Size</h3>
        {SIZES.map((size) => (
          <label key={size} className="flex items-center gap-[10px] text-sm text-muted mb-[10px] cursor-pointer">
            <input
              type="checkbox"
              checked={sizes.includes(size)}
              onChange={() => toggle(sizes, setSizes, size)}
              className="accent-brand-secondary"
            />
            {size}
          </label>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-brand-primary">Price Range</h3>
        <div className="flex gap-[10px]">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-[90px] px-3 py-2 border border-gray-200 rounded-md text-[13px]"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-[90px] px-3 py-2 border border-gray-200 rounded-md text-[13px]"
          />
        </div>
      </div>
    </aside>
  );
}
