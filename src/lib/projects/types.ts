export type Project = {
  name: string;
  featured?: boolean;
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
