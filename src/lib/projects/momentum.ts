import {type Project} from './types';

import MomentumHero from '../../assets/momentum/momentum-hero.webp';
import Momentum1 from '../../assets/momentum/momentum1.webp';
import Momentum2 from '../../assets/momentum/momentum2.webp';
import Momentum3 from '../../assets/momentum/momentum3.webp';

export const momentum: Project = {
  name: 'Momentum',
  featured: false,
  teaser:
    'A responsive workout blog with post carousel, dynamic feed and authenticated admin tools.',
  intro:
    'Momentum is a dynamic workout blog built as my Project Exam 1 at Noroff. It fetches blog content from an external API and lets users browse posts, read full articles and share direct links. An authenticated admin flow allows creating, editing and deleting posts.',
  tech: ['JavaScript', 'HTML', 'CSS'],
  heroImage: MomentumHero,
  heroAlt: 'Weights and pink smoothie',
  links: [
    {
      label: 'Live site',
      href: 'https://martinekong.github.io/FED1-PE1/',
      external: true,
    },
    {
      label: 'GitHub repo',
      href: 'https://github.com/Martinekong/FED1-PE1',
      external: true,
    },
  ],
  sections: [
    {
      title: 'About the project',
      body: 'Momentum was developed as my Project Exam 1 at Noroff, with the goal of creating a fully responsive blog experience using vanilla JavaScript. The project focuses on fetching, rendering and navigating blog content from an external API, while also supporting authenticated admin actions such as publishing and managing posts.',
      bullets: [
        'Dynamic blog feed with carousel and post grid',
        'Individual post pages with shareable URLs.',
        'Admin-only create, edit and delete functionality.',
      ],
      image: Momentum1,
      imageAlt: 'Momentum homepage showing post grid',
    },
    {
      title: 'Technologies used',
      body: 'This project was built using HTML5, CSS3 and vanilla JavaScript. I used the Fetch API for retrieving and updating blog content, and localStorage for handling a simple authentication state.',
      bullets: [
        'Vanilla JavaScript + Fetch API for API integration.',
        'LocalStorage used for login/auth state.',
        'Responsive layout built with modern CSS.',
      ],
      image: Momentum2,
      imageAlt: 'Momentum blog post detail page',
    },
    {
      title: 'Features and Highlights',
      body: 'Momentum strengtened my ability to plan and build a multi-page front-end project with different user states. A key focus was creating a smooth reading experience, clear navigation and a structured admin flow for managing content.',
      bullets: [
        'Carousel for showcasing latest posts.',
        'Grid with search functionality.',
        'Admin tools for content management (create/edit/delete).',
        'Mobile-first responsive design across pages.',
      ],
      image: Momentum3,
      imageAlt: 'Momentum login page',
    },
  ],
};
