import {contactItems} from '../../lib/contact/contactItems';
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
          {contactItems.map((item) => {
            const Icon = item.Icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                aria-label={item.title}
                className="social-btn"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <SouthOutlinedIcon className="mt-20 animate-bounce" />
      </div>
    </section>
  );
}
