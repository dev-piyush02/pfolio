import React from 'react';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: "Leefpad | Anywhere Notes",
            description: "Leefpad is a simple and effective note-taking application that allows users to create notes without authentication, enabling instant access across devices. Accesing and managing notes is secure and handled through JWT authentication.",
            technologies: "SpringBoot, Spring Security, JWT, React, MongoDB",
            image: "https://via.placeholder.com/300",
            demoLink: "#",
            github: "#"
        },
        {
            id: 2,
            title: "Gas Pipeline Montoring System",
            description: "Gas Pipeline Monitoring System is a web application that focuses on helping industries to monitor the gas pipelines in real-time, identify any leaks in the system and alert the relevant authorities.",
            technologies: "Python, Django, ESP32, IoT, AWS",
            image: "https://via.placeholder.com/300",
            demoLink: "#",
            github: "#"
        },
        {
            id: 3,
            title: "Gaming Fantix | Cloud Gaming",
            description: "Gaming Fantix is a web application that allows users to stream and play video games on the cloud. Removing the hassle of downloading, installing and managing the game on their device.",
            technologies: "Python, Django, AWS, Unity",
            image: "https://via.placeholder.com/300",
            demoLink: "#",
            github: "#"
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
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-link">Live Demo</a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
