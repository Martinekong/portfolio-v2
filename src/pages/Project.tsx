import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {projects, getProjectByName} from '../lib/projects';
import ProjectNotFound from '../components/sections/ProjectNotFound';
import Button from '../components/ui/Button';

import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

export default function Project() {
  const {name} = useParams();
  const [copied, setCopied] = useState(false);

  const project = name ? getProjectByName(projects, name) : undefined;

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  }

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <section className="section-wrapper mt-32 text-left gap-10">
      <div>
        <span className="teaser-title">project</span>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1>{project.name}</h1>

          <div className="flex items-center gap-3 relative">
            <Button
              onClick={copyLink}
              variant="secondary"
              className="px-4 py-2 text-white/80 w-auto hover:translate-y-0 font-normal"
            >
              <ContentCopyOutlinedIcon fontSize="small" />
              Copy link
            </Button>

            {copied && (
              <span className="absolute left-8 top-12 text-sm text-white/70 tracking-wide pointer-events-none">
                Link copied!
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="container-strong overflow-hidden shadow-xl w-full mb-8">
        <img
          src={project.heroImage}
          alt={project.heroAlt}
          className="h-80 w-full object-cover"
          loading="eager"
        />

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <p className="text-body">{project.intro}</p>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">
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
                rel={l.external ? 'noreferrer' : undefined}
                className="button card-btn"
              >
                {l.label}
                <ArrowOutwardOutlinedIcon fontSize="small" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-24">
        {project.sections.map((s) => (
          <div key={s.title} className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">{s.title}</h2>
              <p className="mt-4 text-body">{s.body}</p>

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
