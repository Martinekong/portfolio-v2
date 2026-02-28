import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import Hero from '../components/sections/Hero';
import Featured from '../components/sections/Featured';
import Skills from '../components/sections/Skills';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export default function Home() {
  const {hash} = useLocation();

  useEffect(() => {
    if (!hash) return;

    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  }, [hash]);

  return (
    <>
      <Hero />
      <Featured />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
