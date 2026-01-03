import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Technologies />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
