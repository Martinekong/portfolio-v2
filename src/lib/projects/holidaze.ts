import {type Project} from './types';

import HolidazeHero from '../../assets/holidaze/holidaze-hero.webp';
import Holidaze1 from '../../assets/holidaze/holidaze1.webp';
import Holidaze2 from '../../assets/holidaze/holidaze2.webp';
import Holidaze3 from '../../assets/holidaze/holidaze3.webp';

export const holidaze: Project = {
  name: 'Holidaze',
  featured: true,
  teaser:
    'A modern booking platform for vacation rentals with intuitive search, clean UI and seamless booking experience.',
  intro:
    'Holidaze is a full-featured booking platform built as my Project Exam 2 at Noroff. The application supports authentication, role-based access, venue management and booking flows, with a strong focus on reusable components and clean state handling.',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  heroImage: HolidazeHero,
  heroAlt: 'Sunbeds by a pool',
  links: [
    {
      label: 'Live site',
      href: 'https://martine-holidaze.netlify.app/',
      external: true,
    },
    {
      label: 'GitHub repo',
      href: 'https://github.com/Martinekong/fed2-pe2',
      external: true,
    },
  ],
  sections: [
    {
      title: 'About the project',
      body: 'Holidaze was developed as my final project exam at Noroff. The goal was to build a scalable booking platform where users can browse venues, create bookings and manage their profile. Users can also register as a venue manager and create, update or delete venues.',
      bullets: [
        'Authentication with protected and role-based routes.',
        'Create, edit and delete bookings.',
        'Venue management for authenticated managers.',
        'Search functionality across venue name and description.',
      ],
      image: Holidaze1,
      imageAlt: 'Holidaze homepage hero',
    },
    {
      title: 'Technologies used',
      body: 'The project is built with React, TypeScript and Tailwind CSS, using a modular and reusable component structure. I created a dedicated API client to separate network logic from UI components. Form validation is handled with Zod schemas, and route protection is implementet with custom guard components.',
      bullets: [
        'Reusable UI components.',
        'API client for all network requests.',
        'Zod schema validation for forms.',
        'AuthContext for global authentication state.',
        'SafeImage component with fallback handling.',
      ],
      image: Holidaze2,
      imageAlt: 'Holidaze venues page with grid',
    },
    {
      title: 'Features and Highlights',
      body: 'Holidaze demonstrates more advanced state handling and user experience patterns compared to my earlier projects. Reusable loading components and toast notifications ensures a smooth user flow. The application handles error states and avoids exposing raw API errors to the user.',
      bullets: [
        'Reusable loading and skeleton components.',
        'LocalStorage-based favorites system.',
        'Custom error messaging and user-friendly feedback.',
        'Responsive glass-inspired UI design.',
        'Full CRUD operations for bookings and venues.',
        'Profile dashboard.',
      ],
      image: Holidaze3,
      imageAlt: 'Holidaze manager profile dashboard',
    },
  ],
};
