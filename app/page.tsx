import Banner from 'components/home/Banner';
import FeaturedProducts from 'components/home/FeaturedProducts';
import Hero from 'components/home/Hero';
import Footer from 'components/layout/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Waves MVMNT — Premium Activewear',
  description: 'Premium activewear designed for performance and style. Built for those who never stop moving.',
  openGraph: {
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Banner />
      <Footer />
    </>
  );
}
