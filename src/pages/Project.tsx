import {Link, useParams} from 'react-router-dom';
import {getProjectByName} from '../lib/projects';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

export default function Project() {
  const {name} = useParams();

  const project = name ? getProjectByName(name) : undefined;

  if (!project) {
    return (
      <section className="flex flex-col gap-4 mt-40 px-6 items-center">
        <p className="text-white/70">Project not found</p>
        <Link
          to={'/#projects'}
          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium transition duration-300 hover:bg-white/10 text-center text-[#B5CCF7] hover:-translate-y-1 max-w-48"
        >
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="mt-32 section-wrapper text-left w-full">
      <span className="tracking-widest uppercase text-white/60">project</span>
      <h1 className="mt-3 text-5xl sm:text-6xl font-semibold tracking-wider">
        {project.name}
      </h1>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/12 bg-white/6 shadow-xl w-full">
        <img
          src={project.heroImage}
          alt={project.heroAlt}
          className="h-80 w-full object-cover"
          loading="eager"
        />

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <p className="maw-w-3xl text-white/80 leading-relaxed">
            {project.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/12 bg-white/6 px-4 py-1 text-sm text-white/85"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                className="flex w-full justify-center items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 transition hover:bg-white/15 mt-auto"
              >
                {l.label}
                <ArrowOutwardOutlinedIcon fontSize="small" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-24">
        {project.sections.map((s) => (
          <div key={s.title} className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-wider">
                {s.title}
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">{s.body}</p>

              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-5 space-y-2 text-white/80">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/50" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <img
              src={s.image}
              alt={s.imageAlt}
              className="object-cover rounded-2xl border border-white/12"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
