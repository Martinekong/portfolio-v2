import {type Skill} from '../../lib/skills';

export default function SkillPill({skill}: {skill: Skill}) {
  const Icon = skill.icon;

  return (
    <li className="group relative flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-3 transition hover:-translate-y-0.5 hover:bg-white/10">
      <Icon size={18} style={{color: skill.color}} />
      <p className="tracking-wide text-white/90">{skill.name}</p>
      <span
        className="absolute -inset-6 opacity-0 blur-2xl transition group-hover:opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${skill.color}, transparent 60%)`,
        }}
      />
    </li>
  );
}
