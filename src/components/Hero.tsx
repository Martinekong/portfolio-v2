import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';

export default function Hero() {
  return (
    <section className="section-wrapper mt-50">
      <div className="flex flex-col items-center">
        <span className="tracking-widest uppercase text-white/90">
          hello, I'm
        </span>
        <h1 className="text-7xl sm:text-8xl font-bold tracking-wider bg-[linear-gradient(90deg,#B5CCF7_0%,#A3DCE6_100%)] bg-clip-text text-transparent">
          Martine
        </h1>
        <p className="text-lg uppercase tracking-wider text-white/70 mt-4">
          A Frontend Developer
        </p>

        <p className="max-w-lg text-pretty text-white/90 leading-relaxed tracking-wide mt-6">
          I design and build modern, responsive and scalable web applications,
          combining clean architecture with thoughtful, user-focused design.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a href="#featured" className="button primary-btn">
            View My Work
          </a>
          <a href="#contact" className="button secondary-btn">
            Get in Touch
          </a>
        </div>

        <div className="flex items-center gap-8 mt-8">
          <a
            href="https://github.com/martinekong"
            target="_blank"
            aria-label="GitHub profile"
            className="social-btn"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/martine-kongsrud"
            target="_blank"
            aria-label="LinkedIn profile"
            className="social-btn"
          >
            <LinkedInIcon />
          </a>

          <a
            href="mailto:martinekongsrud@outlook.com"
            aria-label="Send email"
            className="social-btn"
          >
            <EmailOutlinedIcon />
          </a>
        </div>

        <SouthOutlinedIcon className="mt-20 animate-bounce" />
      </div>
    </section>
  );
}
