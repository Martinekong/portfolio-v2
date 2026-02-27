import type {IconType} from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiCsswizardry,
  SiHtml5,
  SiGithub,
  SiGitlab,
  SiFigma,
  SiNetlify,
} from 'react-icons/si';

type Skill = {
  icon: IconType;
  name: string;
  color: string;
};

const skills: Skill[] = [
  {icon: SiReact, name: 'React', color: '#61DAFB'},
  {icon: SiTypescript, name: 'TypeScript', color: '#3178C6'},
  {icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E'},
  {icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF'},
  {icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4'},
  {icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D'},
  {icon: SiCsswizardry, name: 'CSS', color: '#663399'},
  {icon: SiHtml5, name: 'HTML', color: '#E34F26'},
  {icon: SiGithub, name: 'GitHub', color: '#FFFFFF'},
  {icon: SiGitlab, name: 'GitLab', color: '#FC6D26'},
  {icon: SiFigma, name: 'Figma', color: '#F24E1E'},
  {icon: SiNetlify, name: 'Netlify', color: '#00C7B7'},
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl px-6 mx-auto">
      <span className="tracking-widest uppercase text-[#B5CCF7]">
        expertise
      </span>
      <h2 className="text-5xl sm:text-6xl tracking-wider mt-4">
        Skills & Tools
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
    <div className="group relative flex items-center gap-4 rounded-full border border-white/12 bg-white/6 px-8 py-3 transition hover:-translate-y-0.5 hover:bg-white/10">
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
