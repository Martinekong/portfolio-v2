import {type Project} from './types';

import ScienceHero from '../../assets/science/science-hero.webp';
import Science1 from '../../assets/science/science1.webp';
import Science2 from '../../assets/science/science2.webp';
import Science3 from '../../assets/science/science3.webp';

export const science: Project = {
  name: 'Science Museum',
  featured: false,
  teaser:
    'A museum website built with HTML and CSS, designed to engage children and families.',
  intro:
    'Science Museum is a responsive website developes as my Semester Project 1 at Noroff. The goal was to simulate a real-world client brief and create an engaging and accessible website for a community science museum aimed at children and families.',
  tech: ['HTML', 'CSS'],
  heroImage: ScienceHero,
  heroAlt: 'The earth from space',
  links: [
    {
      label: 'Live site',
      href: 'https://martinekong.github.io/FED1-SP1/',
      external: true,
    },
    {
      label: 'GitHub repo',
      href: 'https://github.com/Martinekong/FED1-SP1',
      external: true,
    },
  ],
  sections: [
    {
      title: 'About the project',
      body: 'This project was built to simulate a professional client brief. The goal was to design and develop a visually engaging and informative website that appeals to young audiences (ages 7-15) and their families. My focus was placed on images for a fun experience.',
      bullets: [
        'Multi-page structure with clear navigation.',
        'Design focused on children and families.',
      ],
      image: Science1,
      imageAlt: 'Science museum homepage with hero section',
    },
    {
      title: 'Technologies used',
      body: 'The website was built using semantic HTML5 and vanilla CSS without frameworks. This project strengthened my understanding of layout systems, responsive design techniques and accessibility best practices.',
      bullets: [
        'Semantic HTML5 structure.',
        'Responsive design using CSS.',
        'Accessibility considerations.',
      ],
      image: Science2,
      imageAlt: 'Science Museum exhibitions page layout',
    },
    {
      title: 'Features and Highlights',
      body: 'Science Museum demonstrates my ability to plan and structure a complete multi-page website from scratch. My focus was on ensuring that the experience would be engaging while still being accessible and easy to navigate.',
      bullets: [
        'Responsive layouts across desktop and mobile.',
        'Engaging imagery and typography.',
      ],
      image: Science3,
      imageAlt: 'Science museum about page',
    },
  ],
};
