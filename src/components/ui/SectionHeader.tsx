type HeaderContent = {
  teaser: string;
  title: string;
  color: 'text-accent-blue' | 'text-accent-purple';
};

export default function SectionHeader({teaser, title, color}: HeaderContent) {
  return (
    <div>
      <span className={`teaser-title ${color}`}>{teaser}</span>
      <h2 className="mt-2">{title}</h2>
    </div>
  );
}
