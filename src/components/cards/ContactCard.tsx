import {type ContactItem} from '../../lib/contactItem';

export default function ContactCard({item}: {item: ContactItem}) {
  const {title, value, href, external, Icon} = item;

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/6 p-8 text-left shadow-md transition hover:-translate-y-1 hover:shadow-lg"
    >
      <span
        className="absolute -inset-10 opacity-0 blur-3xl transition group-hover:opacity-20"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #B5CCF7, transparent 60% )',
        }}
      />

      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/5">
          <Icon />
        </div>

        <div className="flex flex-col">
          <p className="text-sm tracking-widest text-white/70">{title}</p>
          <p className="mt-1 font-medium tracking-wide text-white/90">
            {value}
          </p>
        </div>
      </div>

      <div className="relative mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition group-hover:text-white">
        <span>Open</span>
        <span className="transition group-hover:translate-x-0.5">→</span>
      </div>
    </a>
  );
}
