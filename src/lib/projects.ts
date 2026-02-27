import Holidaze1 from '../assets/holidaze/holidaze1.webp';
import Holidaze2 from '../assets/holidaze/holidaze2.webp';
import Holidaze3 from '../assets/holidaze/holidaze3.webp';
import Varivo1 from '../assets/varivo/varivo1.webp';
import Varivo2 from '../assets/varivo/varivo2.webp';
import Varivo3 from '../assets/varivo/varivo3.webp';
import Bidly1 from '../assets/bidly/bidly1.webp';
import Bidly2 from '../assets/bidly/bidly2.webp';
import Bidly3 from '../assets/bidly/bidly3.webp';

export type Project = {
  name: string;
  teaser: string;
  intro: string;
  tech: string[];
  heroImage: string;
  heroAlt: string;
  sections: ProjectSection[];
  links: ProjectLink[];
};

export type ProjectSection = {
  title: string;
  body: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Holidaze',
    teaser:
      'A modern booking platform for vacation rentals with intuitive search, clean UI and seamless booking experience.',
    intro:
      'Holidaze is a full-featured booking platform built as my Project Exam 2 at Noroff. The application supports authentication, role-based access, venue management and booking flows, with a strong focus on reusable architecture and clean state handling.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    heroImage:
      'https://images.unsplash.com/photo-1645359271414-3697b7a5781f?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heroAlt: 'Holidaze project preview',
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
        body: 'Holidaze was developed as my final project exam at Noroff. The goal was to build a scalable booking platform where users can browse venues, create bookings and manage their profile. Users can also register as a venue manager and create, update or delete venues. The application is fully integrated with Noroff Holidaze API and implements authentication, protected routes and role-based access control.',
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
        body: 'The project is built with React, TypeScript and Tailwind CSS, using a modular and reusable component structure. An API client was created to centralize all network requests, ensuring clear separation between UI and data fetching logic. Form validation is handled with Zod schemas, and route protection is implemented using custom AuthGuard and ManagerGuard components.',
        bullets: [
          'Reusable UI components.',
          'Centralized API client for all network requests.',
          'Zod schema validation for forms.',
          'AuthContext for global authentication state.',
          'SafeImage component with fallback handling.',
        ],
        image: Holidaze2,
        imageAlt: 'Holidaze venues page with grid',
      },
      {
        title: 'Features and Highlights',
        body: 'Holidaze demonstrates advanced state handling and user experience patterns. Loading skeletons and reusable loading components ensure smooth transitions, while toast notifications provide immediate feedback for user actions. The application handles error states and avoids exposing raw API errors to the user.',
        bullets: [
          'Reusable loading states and skeleton components.',
          'LocalStorage-based favorites system.',
          'Focus on error handling and custom error messaging.',
          'Responsive glass-inspired UI design.',
          'Full CRUD operations for bookings and venues.',
          'Profile dashboard.',
        ],
        image: Holidaze3,
        imageAlt: 'Holidaze manager profile dashboard',
      },
    ],
  },
  {
    name: 'Varivo',
    teaser:
      'An e-commerce platform with search and sort features, cart functionality and clean checkout flow.',
    intro:
      'Varivo is a single-page e-commerce application built with React and TypeScript. The project focuses on structured state management, reusable components and a smooth shopping experience - including cart functionality, product search and a validated checkout flow.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    heroImage:
      'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heroAlt: 'Varivo project preview',
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
          'Responsive layout across all screen sizes.',
        ],
        image: Varivo1,
        imageAlt: 'Varivo home page with product grid',
      },
      {
        title: 'Technologies used',
        body: 'This project was built with React and TypeScript to ensure scalable and type-safe component development. React Router was used for navigation and Tailwind CSS provided a consistent design system. I also implemented testing with Jest and React Testing Library to validate core functionality and improve reliability.',
        bullets: [
          'React + TypeScript for structured and maintainable components.',
          'React Router for client-side routing.',
          'Tailwind CSS for responsive utility-first styling.',
          'Jest and React Testing Library for component testing.',
          'React Hot Toast for non-blocking UI feedback.',
        ],
        image: Varivo2,
        imageAlt: 'Varivo product detail page',
      },
      {
        title: 'Features and Highlights',
        body: 'Varivo shows my ability for more advanced frond-end patterns including centralized cart logic and controlled form validation. Particular focus was placed on user experience, including real-time cart updates, slid-over panels and clear confirmation states throughout the checkout flow.',
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
  },
  {
    name: 'Bidly',
    teaser:
      'An auction house platform wth bidding logic, user interaction and responsive layout built with focus on usability.',
    intro:
      'Bidly is an auction house platform built as my Semester Project 2 at Noroff. The application allows users to register, create listings, place bids and manage their profile - all powered by the Noroff Auction House API.',
    tech: ['JavaScript', 'Tailwind CSS'],
    heroImage:
      'https://images.unsplash.com/photo-1586383334472-84d9bc3a9fe3?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heroAlt: 'Bidly project preview',
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
        body: 'Bidly was developed as part of my Semester Project 2 at Noroff. The goal was to build a fully functional auction platform using vanilla JavaScript and Tailwind CSS, interacting with a REST API. I focused on creating a responsive and intuitive user experience while handling authentication, state management and API integration without the use of frameworks.',
        bullets: [
          'Full CRUD functionality for listings.',
          'User authentication and profile management.',
          'Dynamic bid handling with real-time updates from API.',
        ],
        image: Bidly1,
        imageAlt: 'Bidly homepage with listing grid',
      },
      {
        title: 'Technologies used',
        body: 'This project was built using JavaScript (ES Modules), HTML5 and Tailwind CSS. This project strengthened my understanding of DOM manipulation, modular JavaScript structure and API communication patterns. Tailwind allowed me to build a consistent and responsive UI while maintaining clean and reusable utility-based styling.',
        bullets: [
          'Vanilla JavaScript with modular structure.',
          'Noroff Auction House API (v2).',
          'Tailwind CSS for responsive design.',
          'ESLint and Prettier for code consistency.',
        ],
        image: Bidly2,
        imageAlt: 'Bidly listing detail page with bidding functionality',
      },
      {
        title: 'Features and Highlights',
        body: 'Bidly shows my ability to structure a larger front-end project with multiple pages and user states. Special attention was given to accessibility, conditional rendering based on authentication state and clear feedback for user actions such as bidding or managing listings.',
        bullets: [
          'Search and sorting functionality on homepage.',
          'Conditional UI based on login state.',
          'Accessible and keyboard-friendly interactions.',
          'Profile dashboard for managing listings and bids.',
        ],
        image: Bidly3,
        imageAlt: 'Bidly user profile dashboard',
      },
    ],
  },
];

export function getProjectByName(name: string) {
  return projects.find((p) => p.name.toLowerCase() === name);
}
