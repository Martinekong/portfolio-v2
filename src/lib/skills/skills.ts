import type {IconType} from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVuedotjs,
  SiCsswizardry,
  SiHtml5,
  SiGit,
  SiFigma,
  SiPhp,
  SiPostman,
} from 'react-icons/si';

export type Skill = {
  icon: IconType;
  name: string;
  color: string;
};

export const skills: Skill[] = [
  {icon: SiReact, name: 'React', color: '#61DAFB'},
  {icon: SiTypescript, name: 'TypeScript', color: '#3178C6'},
  {icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E'},
  {icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D'},
  {icon: SiPhp, name: 'PHP', color: '#777BB4'},
  {icon: SiTailwindcss, name: 'Tailwind', color: '#38BDF8'},
  {icon: SiCsswizardry, name: 'CSS3', color: '#1572B6'},
  {icon: SiHtml5, name: 'HTML', color: '#E34F26'},
  {icon: SiGit, name: 'Git', color: '#F05032'},
  {icon: SiFigma, name: 'Figma', color: '#A259FF'},
  {icon: SiPostman, name: 'Postman', color: '#FF6C37'},
];
