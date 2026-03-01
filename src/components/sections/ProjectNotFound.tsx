import {Link} from 'react-router-dom';

export default function ProjectNotFound() {
  return (
    <section className="section-wrapper mt-32 text-left">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <span className="tracking-widest uppercase text-white/60">404</span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-wider">
          Project not found
        </h1>
        <p className="mt-4 max-w-xl text-white/80 leading-relaxed">
          This project doesn't exist or has been moved. Head back to the
          portfolio and pick one from the list.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/projects" className="button primary-btn">
            View all projects
          </Link>
          <Link to="/#featured" className="button secondary-btn">
            Back to featured
          </Link>
        </div>
      </div>
    </section>
  );
}
