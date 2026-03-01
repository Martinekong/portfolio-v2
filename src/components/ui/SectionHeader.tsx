type HeaderContent = {
  teaser: string;
  title: string;
  color: 'text-accent-blue' | 'text-accent-purple';
};

export default function SectionHeader({teaser, title, color}: HeaderContent) {
  return (
    <div>
      <span className={`tracking-widest uppercase ${color}`}>{teaser}</span>
      <h2 className="text-5xl sm:text-6xl tracking-wider mt-4">{title}</h2>
    </div>
  );
}
