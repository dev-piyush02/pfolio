import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Connect from './components/Connect';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
