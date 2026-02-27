import HolidazeHero from '../assets/holidaze/holidaze-hero.webp';
import Holidaze1 from '../assets/holidaze/holidaze1.webp';
import Holidaze2 from '../assets/holidaze/holidaze2.webp';
import Holidaze3 from '../assets/holidaze/holidaze3.webp';
import VarivoHero from '../assets/varivo/varivo-hero.webp';
import Varivo1 from '../assets/varivo/varivo1.webp';
import Varivo2 from '../assets/varivo/varivo2.webp';
import Varivo3 from '../assets/varivo/varivo3.webp';
import BidlyHero from '../assets/bidly/bidly-hero.webp';
import Bidly1 from '../assets/bidly/bidly1.webp';
import Bidly2 from '../assets/bidly/bidly2.webp';
import Bidly3 from '../assets/bidly/bidly3.webp';
import MomentumHero from '../assets/momentum/momentum-hero.webp';
import Momentum1 from '../assets/momentum/momentum1.webp';
import Momentum2 from '../assets/momentum/momentum2.webp';
import Momentum3 from '../assets/momentum/momentum3.webp';
import RainydaysHero from '../assets/rainydays/rainydays-hero.webp';
import Rainydays1 from '../assets/rainydays/rainydays1.webp';
import Rainydays2 from '../assets/rainydays/rainydays2.webp';
import Rainydays3 from '../assets/rainydays/rainydays3.webp';
import ScienceHero from '../assets/science/science-hero.webp';
import Science1 from '../assets/science/science1.webp';
import Science2 from '../assets/science/science2.webp';
import Science3 from '../assets/science/science3.webp';

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
  {
    name: 'Momentum',
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
  },
  {
    name: 'Rainydays',
    teaser:
      'An interactive online store with product filtering, cart functionality and API-driven content.',
    intro:
      'Rainydays is an online store for outdoor clothing built as part of my JavaScript 1 course assignment at Noroff. The project focuses on fetching products from an external API, rendering them, and managing a fully functional shopping cars using vanilla JavaScript.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    heroImage: RainydaysHero,
    heroAlt: 'Man standing on top of a mountain',
    links: [
      {
        label: 'Live site',
        href: 'https://martinekong.github.io/FED1-JS1-CA/',
        external: true,
      },
      {
        label: 'GitHub repo',
        href: 'https://github.com/Martinekong/FED1-JS1-CA',
        external: true,
      },
    ],
    sections: [
      {
        title: 'About the project',
        body: 'Rainydays was developed as part of my JavaScrip 1 course assignment at Noroff. The goal was to build a dynamic e-commerce experience using vanilla JavaScript and an external REST API. Users can browse products, filter by category and view detailed product pages before adding items to their cart.',
        bullets: [
          'Dynamic product rendering from RainyDays API.',
          'Category and type-based product filtering.',
          'Dedicated product detail pages with full information.',
        ],
        image: Rainydays1,
        imageAlt: 'Rainydays hero section',
      },
      {
        title: 'Technologies used',
        body: 'This project was built with HTML5, CSS3 and JavaScript, with the fetch API used for retrieving product data. LocalStorage was implemented to manage the shopping cart state across pages.',
        bullets: [
          'Vanilla JavaScript.',
          'Fetch API for product data retrieval.',
          'LocalStorage for cart persistence.',
          'Responsive layout built with CSS.',
        ],
        image: Rainydays2,
        imageAlt: 'Rainydays product grid',
      },
      {
        title: 'Features and Highlights',
        body: 'Rainydays shows my ability to structure a small e-commerce application with multiple pages and interactive functionality. Special attention was given to filtering logic and cart management.',
        bullets: [
          'Add and remove items from cart.',
          'Checkout summary page with selected products.',
          'Order confirmation flow.',
        ],
        image: Rainydays3,
        imageAlt: 'Rainydays order confirmed page',
      },
    ],
  },
  {
    name: 'Science Museum',
    teaser:
      'A museum website built with semantic HTML and responsive CSS, designed to engage children and families.',
    intro:
      'Science Museum is a responsive website developes as my Semester Project 1 at Noroff. The goal was to simulate a real-world client bried and create an engaging and accessible website for a community science museum aimed at children and families.',
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
        body: 'This project was built to simulate a professional client brief. The goal was to design and develop a visually engaging and informative website that appeals to young audiences (ages 7-15) and their families. My focus was placed on clarity, accessibility and images for a fun experience.',
        bullets: [
          'Multi-page structure with clear navigation.',
          'Audience-focused design for children and families.',
          'Legal and informational pages included (privacy and terms).',
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
          'Accessibility considerations (contrast, structure, clarity).',
        ],
        image: Science2,
        imageAlt: 'Science Museum exhibitions page layout',
      },
      {
        title: 'Features and Highlights',
        body: 'Science Museum demonstrates my ability to plan and structure a complete multi-page website from scratch. Special attention was given to visual hierarchy, readability and ensuring that the experience remains engaging while still being accessible and easy to navigate.',
        bullets: [
          'Responsive layouts across desktop and mobile.',
          'Engaging imagery and typography.',
        ],
        image: Science3,
        imageAlt: 'Science museum about page',
      },
    ],
  },
];

export function getProjectByName(name: string) {
  return projects.find((p) => p.name.toLowerCase() === name);
}
