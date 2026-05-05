import CollectionFilters from 'components/collection/CollectionFilters';
import CollectionGrid from 'components/collection/CollectionGrid';
import CollectionHeader from 'components/collection/CollectionHeader';
import Footer from 'components/layout/footer';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Collection | Waves MVMNT',
  description: 'Performance activewear for every movement.',
};

export default async function CollectionPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await props.params;

  const title = handle === 'all' ? 'All Products' : handle.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <CollectionHeader title={title} description="Performance activewear for every movement" />
      <div className="flex gap-10 px-20 py-[60px]">
        <CollectionFilters />
        <CollectionGrid />
      </div>
      <Footer />
    </>
  );
}
