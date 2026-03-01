import {skills} from '../../lib/skills';
import SectionHeader from '../ui/SectionHeader';
import SkillPill from '../cards/SkillPill';

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <SectionHeader
        teaser="expertise"
        title="Skills & Tools"
        color="text-accent-purple"
      />

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {skills.map((s) => (
          <SkillPill key={s.name} skill={s} />
        ))}
      </ul>
    </section>
  );
}
