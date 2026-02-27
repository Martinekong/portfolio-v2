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
            <span
              key={t}
              className="py-1 px-4 rounded-full border border-white/10 bg-white/6 backdrop-blur text-sm text-white/85"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          to={`/project/${name.toLowerCase()}`}
          className="flex w-full justify-center items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 transition hover:bg-white/15 mt-auto"
        >
          View Project
          <ArrowOutwardOutlinedIcon fontSize="small" />
        </Link>
      </div>
    </div>
  );
}
