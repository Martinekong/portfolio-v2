import {type Project} from './types';

import VarivoHero from '../../assets/varivo/varivo-hero.webp';
import Varivo1 from '../../assets/varivo/varivo1.webp';
import Varivo2 from '../../assets/varivo/varivo2.webp';
import Varivo3 from '../../assets/varivo/varivo3.webp';

export const varivo: Project = {
  name: 'Varivo',
  featured: true,
  teaser:
    'An e-commerce platform with search and sort features, cart functionality and clean checkout flow.',
  intro:
    'Varivo is a single-page e-commerce application built with React and TypeScript. The project focused on reusable components and a smooth shopping experience - including cart functionality, product search and a validated checkout flow.',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  heroImage: VarivoHero,
  heroAlt: 'White sneakers',
  links: [
    {label: 'Live site', href: 'https://varivo.netlify.app/', external: true},
    {
      label: 'GitHub repo',
      href: 'https://github.com/Martinekong/fed2-js-frameworks-ca',
      external: true,
    },
  ],
  sections: [
    {
      title: 'About the project',
      body: 'Varivo was developed as part of my JavaScript Frameworks course at Noroff. The goal was to build a fully functional e-commerce application using React and TypeScript while interacting with an external API. I focused on creating a clean component structure, reusable UI patterns and predictable state handling across pages.',
      bullets: [
        'Product listing with search and sorting.',
        'Dynamic product detail pages.',
        'Cart system with persistent state.',
      ],
      image: Varivo1,
      imageAlt: 'Varivo home page with product grid',
    },
    {
      title: 'Technologies used',
      body: 'This project was built with React and TypeScript to ensure scalable and type-safe component development. React Router was used for navigation and Tailwind CSS for a consistent design system. I also implemented testing with Jest and React Testing Library.',
      bullets: [
        'React + TypeScript for structured and maintainable components.',
        'React Router for client-side routing.',
        'Tailwind CSS for responsive utility-first styling.',
        'Jest and React Testing Library for component testing.',
        'React Hot Toast for UI feedback.',
      ],
      image: Varivo2,
      imageAlt: 'Varivo product detail page',
    },
    {
      title: 'Features and Highlights',
      body: 'Varivo shows my ability for more advanced frond-end patterns including centralized cart logic and controlled form validation. My focus was on user experience, including real-time cart updates and slide-over panels throughout the checkout flow.',
      bullets: [
        'Global cart state with dynamic quantity updates.',
        'Order confirmation page that resets cart state.',
        'Favorites toggle functionality.',
        'Search and sorting with filtering logic.',
        'TypeScript-validated contact form.',
      ],
      image: Varivo3,
      imageAlt: 'Varivo checkout flow',
    },
  ],
};
