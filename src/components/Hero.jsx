import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <h1>Hi, I'm <span className="highlight">Piyush</span></h1>
                <p className="hero-subtitle">Full Stack Developer, DevOps Engineer</p>
                <p className="hero-description">
                    I build scalable backend systems, design clean UI and everything in between. <br />  SpringBoot | React | Jenkins | Docker | Git | AWS
                </p>
                <a href="#projects" className="cta-button">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;
