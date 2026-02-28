import {Link} from 'react-router-dom';
import {projects} from '../../lib/projects';
import ProjectCard from '../cards/ProjectCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from '../ui/SectionHeader';

export default function Featured() {
  const FEATURED_COUNT = 3;

  return (
    <section id="featured" className="section-wrapper">
      <div>
        <SectionHeader
          teaser="portfolio"
          title="Featured Projects"
          color="text-accent-blue"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.slice(0, FEATURED_COUNT).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <Link to={'/projects'} className="button secondary-btn w-full">
        View All Projects
        <ArrowForwardIcon fontSize="small" />
      </Link>
    </section>
  );
}
