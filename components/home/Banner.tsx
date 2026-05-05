import Link from 'next/link';

export default function Banner() {
  return (
    <section className="bg-brand-primary text-white px-20 py-20 flex items-center justify-between">
      <div>
        <h2 className="font-heading text-[36px] font-bold max-w-[480px] leading-tight">
          New Collection Dropping This Week
        </h2>
        <p className="text-muted mt-3 text-base">Limited pieces. Built to move.</p>
      </div>
      <Link
        href="/collections/new"
        className="bg-brand-secondary text-white px-10 py-4 rounded-md text-base whitespace-nowrap hover:opacity-90 transition-opacity flex-shrink-0"
      >
        View Collection
      </Link>
    </section>
  );
}
