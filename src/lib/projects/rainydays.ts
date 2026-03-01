import {type Project} from './types';

import RainydaysHero from '../../assets/rainydays/rainydays-hero.webp';
import Rainydays1 from '../../assets/rainydays/rainydays1.webp';
import Rainydays2 from '../../assets/rainydays/rainydays2.webp';
import Rainydays3 from '../../assets/rainydays/rainydays3.webp';

export const rainydays: Project = {
  name: 'Rainydays',
  featured: false,
  teaser:
    'An interactive online store with product filtering, cart functionality and API-driven content.',
  intro:
    'Rainydays is an online store for outdoor clothing built as part of my JavaScript 1 course assignment at Noroff. The project focuses on fetching products from an external API, rendering them, and managing a fully functional shopping cart using vanilla JavaScript.',
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
      body: 'Rainydays was developed as part of my JavaScrip 1 course assignment at Noroff. The goal was to build an e-commerce site using vanilla JavaScript and an external REST API. Users can browse products, filter by gender and view detailed product pages before adding items to their cart.',
      bullets: [
        'Dynamic product rendering from RainyDays API.',
        'Gender and on-sale product filtering.',
        'Product detail pages with full information.',
      ],
      image: Rainydays1,
      imageAlt: 'Rainydays hero section',
    },
    {
      title: 'Technologies used',
      body: 'This project was built with HTML5, CSS3 and JavaScript, with the fetch API used for retrieving product data. LocalStorage was implemented to manage the shopping cart state across pages.',
      bullets: [
        'Vanilla JavaScript.',
        'Fetch API for product data.',
        'LocalStorage for cart functionality.',
        'Responsive layout built with CSS.',
      ],
      image: Rainydays2,
      imageAlt: 'Rainydays product grid',
    },
    {
      title: 'Features and Highlights',
      body: 'Rainydays shows my ability to structure a small e-commerce application with multiple pages and interactive functionality.',
      bullets: [
        'Add and remove items from cart.',
        'Checkout summary page with selected products.',
        'Order confirmation flow.',
      ],
      image: Rainydays3,
      imageAlt: 'Rainydays order confirmed page',
    },
  ],
};
