const PRODUCTS = [
  { name: 'Performance Hoodie', price: '$89.00' },
  { name: 'Training Shorts', price: '$54.00' },
  { name: 'Movement Tee', price: '$39.00' },
];

export default function FeaturedProducts() {
  return (
    <section className="px-20 py-20">
      <h2 className="font-heading text-[32px] font-bold mb-10 text-brand-primary">Featured Products</h2>
      <div className="grid grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-[240px] bg-surface" />
            <div className="p-5">
              <h3 className="text-base font-semibold text-brand-primary">{product.name}</h3>
              <p className="text-brand-secondary text-lg font-bold mt-2">{product.price}</p>
              <button className="mt-[14px] w-full bg-brand-primary text-white rounded-md py-3 text-sm hover:opacity-90 transition-opacity cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
