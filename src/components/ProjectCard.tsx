import {Link} from 'react-router-dom';
import {type Project} from '../lib/projects';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

export default function ProjectCard({project}: {project: Project}) {
  const {name, teaser, tech, heroImage, heroAlt} = project;

  return (
    <div className="flex h-full flex-col gap-6 text-start bg-white/7 overflow-hidden rounded-3xl border border-white/10">
      <img src={heroImage} alt={heroAlt} className="h-48 object-cover" />

      <div className="flex flex-1 flex-col gap-6 px-4 pb-6">
        <h3 className="text-3xl tracking-wider">{name}</h3>
        <p className="text-white/80">{teaser}</p>
        <div className="flex flex-wrap gap-3">
          {tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
        <Link
          to={`/projects/${name.toLowerCase()}`}
          onClick={() => window.scrollTo({top: 0, behavior: 'auto'})}
          className="button card-btn"
        >
          View Project
          <ArrowOutwardOutlinedIcon fontSize="small" />
        </Link>
      </div>
    </div>
  );
}
