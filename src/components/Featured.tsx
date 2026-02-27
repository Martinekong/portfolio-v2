import {projects} from '../lib/projects';
import ProjectCard from './ProjectCard';

export default function Featured() {
  return (
    <section id="projects" className="section-wrapper">
      <span className="tracking-widest uppercase text-[#A3DCE6]">
        portfolio
      </span>
      <h2 className="text-5xl sm:text-6xl tracking-wider mt-4">
        Featured Projects
      </h2>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
