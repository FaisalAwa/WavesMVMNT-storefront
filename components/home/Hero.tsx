import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex items-center justify-between px-20 py-20 min-h-[560px] bg-surface">
      <div className="flex-1">
        <h1 className="font-heading text-[52px] font-bold leading-tight max-w-[540px] text-brand-primary">
          Move With <span className="text-brand-secondary">Purpose</span> Every Day
        </h1>
        <p className="mt-5 text-lg text-muted max-w-[440px] leading-relaxed">
          Premium activewear designed for performance and style. Built for those who never stop moving.
        </p>
        <Link
          href="/collections/all"
          className="mt-9 inline-block bg-brand-primary text-white px-10 py-4 rounded-md text-base hover:opacity-90 transition-opacity"
        >
          Shop Now
        </Link>
      </div>
      <div className="w-[420px] h-[380px] bg-brand-accent rounded-xl flex-shrink-0" />
    </section>
  );
}
