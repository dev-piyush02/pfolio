import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Piyush</span></h1>
                <p className="hero-subtitle">A Full Stack Developer</p>
                <p className="hero-description">
                    I build stuff.
                </p>
                <a href="#projects" className="cta-button">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;
