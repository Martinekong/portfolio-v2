import {Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:name" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
