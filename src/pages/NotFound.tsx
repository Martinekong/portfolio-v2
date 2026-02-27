import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text center">
      <span className="text-sm tracking-widest text-[#B5CCF7]">404</span>

      <h1 className="text-6xl sm:text-7xl mt-4 font-bold tracking-wider bg-[linear-gradient(90deg,#B5CCF7_0%,#A3DCE6_100%)] bg-clip-text text-transparent leading-[1.2]">
        Page not found
      </h1>

      <p className="mt-6 max-w-lg text-white/80 leading-relaxed">
        The page you're looking for doesn't exist or may have been moved. Let's
        get you back somewhere familiar.
      </p>

      <Link
        to={'/'}
        className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition duration-300 hover:bg-white/10 w-40 text-center text-[#B5CCF7] hover:-translate-y-1 mt-10"
      >
        Back Home
      </Link>
    </section>
  );
}
