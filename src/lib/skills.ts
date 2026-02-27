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

export type Skill = {
  icon: IconType;
  name: string;
  color: string;
};

export const skills: Skill[] = [
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
