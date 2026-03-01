import {type Project} from './types';

import BidlyHero from '../../assets/bidly/bidly-hero.webp';
import Bidly1 from '../../assets/bidly/bidly1.webp';
import Bidly2 from '../../assets/bidly/bidly2.webp';
import Bidly3 from '../../assets/bidly/bidly3.webp';

export const bidly: Project = {
  name: 'Bidly',
  featured: true,
  teaser:
    'An auction house platform wth bidding logic, user interaction and responsive layout built with focus on usability.',
  intro:
    'Bidly is an auction house platform built as my Semester Project 2 at Noroff. The application allows users to register, create listings, place bids and manage their profile - all powered by the Noroff Auction House API.',
  tech: ['JavaScript', 'Tailwind CSS'],
  heroImage: BidlyHero,
  heroAlt: 'Laptop on a desk',
  links: [
    {
      label: 'Live site',
      href: 'https://martinekong.github.io/fed2-sp2/',
      external: true,
    },
    {
      label: 'GitHub repo',
      href: 'https://github.com/Martinekong/fed2-sp2',
      external: true,
    },
  ],
  sections: [
    {
      title: 'About the project',
      body: 'Bidly was developed as part of my Semester Project 2 at Noroff. The goal was to build a fully functional auction platform using vanilla JavaScript and Tailwind CSS. I handled authentication, conditional UI, API integration and dynamic updates manually. This project really strengthened my confidence in structuring larger JavaScript applications and thinking about user flow.',
      bullets: [
        'Full CRUD functionality for listings.',
        'User authentication and profile management.',
        'Dynamic bid handling with real-time updates.',
      ],
      image: Bidly1,
      imageAlt: 'Bidly homepage with listing grid',
    },
    {
      title: 'Technologies used',
      body: 'This project was built with JavaScript (ES Modules), HTML5 and Tailwind CSS. This project strengthened my understanding of DOM manipulation, modular JavaScript structure and API communication. Tailwind allowed me to build a consistent and responsive UI while maintaining clean and reusable utility-based styling.',
      bullets: [
        'Vanilla JavaScript with modular structure.',
        'Noroff Auction House API (v2).',
        'Tailwind CSS for responsive design.',
        'ESLint and Prettier for consistency.',
      ],
      image: Bidly2,
      imageAlt: 'Bidly listing detail page with bidding functionality',
    },
    {
      title: 'Features and Highlights',
      body: 'Bidly shows my ability to build a larger front-end project with multiple pages and user states. Accessibility and clear user feedback were important priorities throughout the project.',
      bullets: [
        'Search and sorting functionality.',
        'Conditional UI based on login state.',
        'Accessible and keyboard-friendly interactions.',
        'Profile dashboard for managing listings and bids.',
      ],
      image: Bidly3,
      imageAlt: 'Bidly user profile dashboard',
    },
  ],
};
