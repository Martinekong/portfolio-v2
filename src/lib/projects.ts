export type Project = {
  name: string;
  teaser: string;
  description: string;
  tech: string[];
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    name: 'Holidaze',
    teaser:
      'A modern booking platform for vacation rentals with intuitive search, clean UI and seamless booking experience.',
    description: '',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1645359271414-3697b7a5781f?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Holidaze project preview',
  },
  {
    name: 'Varivo',
    teaser:
      'An e-commerce platform with search and sort features, cart functionality and clean checkout flow.',
    description: '',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Varivo project preview',
  },
  {
    name: 'Bidly',
    teaser:
      'An auction house platform wth bidding logic, user interaction and responsive layout built with focus on usability.',
    description: '',
    tech: ['JavaScript', 'Tailwind CSS'],
    image:
      'https://images.unsplash.com/photo-1586383334472-84d9bc3a9fe3?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Bidly project preview',
  },
];
