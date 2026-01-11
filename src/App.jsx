import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <Education />
            <Experience />
            <Technologies />
            <Projects />
            <Connect />
            <hr className="div-line" />
            <Footer />
          </>
        } />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;


// return (
//     <div className="App">
//       {/* <div
//         className="cursor-glow"
//         style={{
//           background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(97, 138, 250, 0.15), transparent 50%)`
//         }}
//       /> */}
//       <Navbar />
//       <Hero />
//       <Education />
//       <Experience />
//       <Technologies />
//       <Projects />
//       <Connect />
//       <Footer />
//     </div>
//   );