import AboutImg from '../assets/about/about.png';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <span className="tracking-widest uppercase text-accent-blue">about</span>
      <h2 className="text-5xl sm:text-6xl tracking-wider mt-4">
        Get to Know Me
      </h2>

      <div className="bg-white/7 backdrop-blur-xl rounded-3xl mt-12 p-8 flex flex-col md:flex-row gap-12 border-white/12 border">
        <img
          src={AboutImg}
          alt="Martine smiling in blue suit"
          className="h-64 w-64 sm:h-80 sm:w-80 rounded-full shadow-md border border-white/12 mx-auto object-cover"
        />

        <div className="text-start flex flex-col gap-4">
          <h3 className="tracking-wider text-2xl font-medium">I'm Martine</h3>
          <p className="tracking-wide leading-relaxed text-white/80">
            After spending eight years in healthcare, I discovered a strong
            passion for problem-solving, creativity, and technology. That led me
            into frontend development.
          </p>
          <p className="tracking-wide leading-relaxed text-white/80">
            Today, I work as a Frontend Developer, building modern web
            applications with React, TypeScript, Tailwind and Vite. I focus on
            creating intuitive, responsive and visually refined user
            experiences, while maintaining clean and scalable code under the
            hood.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#featured"
              className="rounded-full bg-[linear-gradient(90deg,#B5CCF7_0%,#A3DCE6_100%)] px-6 py-3 text-sm font-medium text-black shadow-md transition hover:opacity-90 hover:shadow-lg w-40 text-center hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium shadow-md hover:shadow-lg transition duration-300 hover:bg-white/10 w-40 text-center text-[#B5CCF7] hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
