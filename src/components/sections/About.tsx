import AboutImg from '../../assets/about/about.png';
import SectionHeader from '../ui/SectionHeader';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader
        teaser="about"
        title="Get to Know Me"
        color="text-accent-blue"
      />

      <div className="container-strong p-8 flex flex-col md:flex-row gap-12">
        <img
          src={AboutImg}
          alt="Martine smiling in blue suit"
          className="h-64 w-64 sm:h-80 sm:w-80 rounded-full shadow-md border border-white/10 mx-auto object-cover"
        />

        <div className="text-start flex flex-col gap-4">
          <h3 className="text-2xl font-medium">I'm Martine</h3>
          <p className="text-body">
            After spending eight years in healthcare, I discovered a strong
            passion for problem-solving, creativity, and technology. That led me
            into frontend development.
          </p>
          <p className="text-body">
            Today, I work as a Frontend Developer, building modern web
            applications with React, TypeScript, Tailwind and Vite. I focus on
            creating intuitive, responsive and visually refined user
            experiences, while maintaining clean and scalable code under the
            hood.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#featured" className="button primary-btn">
              View My Work
            </a>
            <a href="#contact" className="button secondary-btn">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
