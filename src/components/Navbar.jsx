import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'projects', 'connect'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={() => handleLinkClick('home')}>Portfolio</a>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className={`nav-links ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#education" className={`nav-links ${activeSection === 'education' ? 'active' : ''}`} onClick={() => handleLinkClick('education')}>Education</a>
          </li>
          <li className="nav-item">
            <a href="#experience" className={`nav-links ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => handleLinkClick('experience')}>Experience</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={`nav-links ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => handleLinkClick('projects')}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#connect" className={`nav-links ${activeSection === 'connect' ? 'active' : ''}`} onClick={() => handleLinkClick('connect')}>Connect</a>
          </li>
        </ul>
        <div className="navbar-right">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
