import {Link} from 'react-router-dom';
import {projects} from '../lib/projects';
import ProjectCard from './ProjectCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Featured() {
  const FEATURED_COUNT = 3;

  return (
    <section id="featured" className="section-wrapper">
      <span className="tracking-widest uppercase text-[#A3DCE6]">
        portfolio
      </span>
      <h2 className="text-5xl sm:text-6xl tracking-wider mt-4">
        Featured Projects
      </h2>

      <div className="mt-12 gap-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.slice(0, FEATURED_COUNT).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <Link
          to={'/projects'}
          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition duration-300 hover:bg-white/10 text-center text-[#B5CCF7] hover:-translate-y-1 mt-8 w-full flex gap-2 justify-center"
        >
          View All Projects
          <ArrowForwardIcon fontSize="small" />
        </Link>
      </div>
    </section>
  );
}
