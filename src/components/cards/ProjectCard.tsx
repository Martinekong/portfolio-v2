import {Link} from 'react-router-dom';
import {type Project} from '../../lib/projects';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

export default function ProjectCard({project}: {project: Project}) {
  const {name, teaser, tech, heroImage, heroAlt} = project;

  return (
    <div className="container-strong flex h-full flex-col gap-6 text-start overflow-hidden">
      <img src={heroImage} alt={heroAlt} className="h-48 object-cover w-full" />

      <div className="flex flex-1 flex-col gap-6 px-4 pb-6">
        <h3>{name}</h3>
        <p className="text-body">{teaser}</p>
        <div className="flex flex-wrap gap-3">
          {tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
        <Link
          to={`/projects/${name.toLowerCase()}`}
          className="button card-btn"
        >
          View Project
          <ArrowOutwardOutlinedIcon fontSize="small" />
        </Link>
      </div>
    </div>
  );
}
