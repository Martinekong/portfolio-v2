import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center min-h-screen justify-center overflow-hidden">
      <span className="tracking-widest uppercase text-white/90">
        hello, I'm
      </span>
      <h1 className="text-7xl sm:text-8xl font-bold tracking-wider bg-[linear-gradient(90deg,#B5CCF7_0%,#A3DCE6_100%)] bg-clip-text text-transparent">
        Martine
      </h1>
      <p className="text-lg uppercase tracking-wider mt-4 text-white/70">
        A Frontend Developer
      </p>
      <p className="mt-6 max-w-lg text-pretty text-white/90 leading-relaxed tracking-wide">
        I design and build beautiful, responsive and performant web experiences
        with modern technologies and pixel-perfect attention to detail.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="rounded-full bg-[linear-gradient(90deg,#B5CCF7_0%,#A3DCE6_100%)] px-6 py-3 text-sm font-medium text-black shadow-md transition hover:opacity-90 hover:shadow-lg w-40 text-center"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition duration-300 hover:bg-white/10 w-40 text-center text-[#B5CCF7]"
        >
          Get in Touch
        </a>
      </div>

      <div className="flex items-center gap-8 mt-8">
        <div className="h-12 w-12 flex items-center hover:text-[#A3DCE6] transition duration-300 justify-center bg-white/5 rounded-full hover:bg-white/10 border border-white/15 ">
          <GitHubIcon />
        </div>
        <div className="h-12 w-12 flex items-center justify-center hover:text-[#A3DCE6] transition duration-300 bg-white/5 rounded-full hover:bg-white/10 border border-white/15">
          <LinkedInIcon />
        </div>
        <div className="h-12 w-12 flex items-center justify-center hover:text-[#A3DCE6] transition duration-300 bg-white/5 rounded-full hover:bg-white/10 border border-white/15">
          <EmailOutlinedIcon />
        </div>
      </div>

      <SouthOutlinedIcon className="mt-20 animate-bounce" />
    </section>
  );
}
