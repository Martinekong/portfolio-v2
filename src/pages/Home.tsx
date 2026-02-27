import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';

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
