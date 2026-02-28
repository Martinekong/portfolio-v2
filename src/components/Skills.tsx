import {skills, type Skill} from '../lib/skills';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <div>
        <SectionHeader
          teaser="expertise"
          title="Skills & Tools"
          color="text-accent-purple"
        />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {skills.map((s) => (
          <SkillPill key={s.name} skill={s} />
        ))}
      </div>
    </section>
  );
}

function SkillPill({skill}: {skill: Skill}) {
  const Icon = skill.icon;

  return (
    <div className="group relative flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-3 transition hover:-translate-y-0.5 hover:bg-white/10">
      <Icon size={18} style={{color: skill.color}} />
      <p className="tracking-wide text-white/90">{skill.name}</p>
      <span
        className="absolute -inset-6 opacity-0 blur-2xl transition group-hover:opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${skill.color}, transparent 60%)`,
        }}
      />
    </div>
  );
}
