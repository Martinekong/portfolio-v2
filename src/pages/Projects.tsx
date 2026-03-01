import {projects} from '../lib/projects';
import ProjectCard from '../components/cards/ProjectCard';

export default function Projects() {
  return (
    <section className="mt-32 section-wrapper text-left">
      <div>
        <span className="tracking-widest uppercase text-white/60">
          All projects
        </span>
        <h1 className="mt-3 text-5xl sm:text-6xl font-semibold tracking-wider">
          Portfolio
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
