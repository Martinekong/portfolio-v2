import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section-wrapper mt-32 text-left">
      <div className="container p-8 shadow-xl">
        <span className="teaser-title">404</span>
        <h1 className="mt-3 text-4xl sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-xl text-body">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back somewhere familiar.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/" className="button primary-btn">
            Back home
          </Link>
          <Link to="/projects" className="button secondary-btn">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
