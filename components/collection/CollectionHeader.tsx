interface CollectionHeaderProps {
  title: string;
  description: string;
}

export default function CollectionHeader({ title, description }: CollectionHeaderProps) {
  return (
    <div className="bg-brand-primary text-white px-20 py-[60px]">
      <h1 className="font-heading text-[42px] font-bold">{title}</h1>
      <p className="text-muted mt-3 text-base">{description}</p>
    </div>
  );
}
