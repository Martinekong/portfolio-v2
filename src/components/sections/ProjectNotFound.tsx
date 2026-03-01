import {Link} from 'react-router-dom';

export default function ProjectNotFound() {
  return (
    <section className="section-wrapper mt-32 text-left">
      <div className="container p-8 shadow-xl">
        <span className="teaser-title">404</span>
        <h1 className="mt-3 text-4xl sm:text-5xl">Project not found</h1>
        <p className="mt-4 max-w-xl text-body">
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
