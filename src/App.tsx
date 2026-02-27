import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:name" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
