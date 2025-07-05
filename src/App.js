import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import GitHubStats from './components/GitHubStats';
import TechStack from './components/TechStack';
import Resume from './components/Resume';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2700);

    const hideTimer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
  <>
  {loading && <Loader fadeOut={fadeOut} />}
  {!loading && (
    <>
      <CustomCursor />
      <Navbar />
      <div className="fade-in-main">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <GitHubStats />
        <TechStack />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )}
</>

  );
}
