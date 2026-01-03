import React from 'react';
import '../App.css';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: "Leefpad | Anywhere Notes",
            description: "Leefpad is a simple note-taking app that allows users to create notes without authentication, enabling instant access across devices. Accesing and managing notes is secure and handled through JWT authentication.",
            technologies: "SpringBoot, JWT, HTTPOnly, React, MongoDB",
            image: "/leaf-pad.png",
            demoLink: "#",
            github: "https://github.com/dev-piyush02/leefpad"
        },
        {
            id: 2,
            title: "Gas Pipeline Monitoring System",
            description: "Gas Pipeline Monitoring System is a web application that focuses on helping industries to monitor the gas pipelines in real-time, identify any leaks in the system and alert the relevant authorities.",
            technologies: "Python, Django, ESP32, IoT, AWS",
            image: "/gas-ppln.jpg",
            demoLink: "#",
            github: "https://github.com/dev-piyush02/GasPipelineMonitoring"
        },
        {
            id: 3,
            title: "Gaming Fantix | Cloud Gaming",
            description: "Gaming Fantix is a web application that allows users to stream and play video games on the cloud. Removing the hassle of downloading, installing and managing the game on their device.",
            technologies: "Python, Django, AWS, Unity",
            image: "/e-sports.jpg",
            demoLink: "#",
            github: "https://github.com/dev-piyush02/gamingfantix.github.io"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <h2 className="section-title">Personal Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p>{project.technologies}</p>
                            <div className="project-links">
                                <a href={project.demoLink} className="btn-link">Live Demo</a>
                                <a href={project.github} className="btn-link">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
