import React from 'react';

const Experience = () => {
    const experienceData = [
        {
            id: 1,
            role: "Product Engineer",
            company: "Tata Consultancy Services",
            duration: "Sep 2024 - Present",
            description1: "Designed and developed 3 SpringBoot based microservices and 20+ RESTful APIs supporting enterprise-scale banking applications.",
            description2: "Implemented event-driven communication using Apache Kafka to enable asynchronous processing and reliable data flow across backend services.",
            description3: "Delivered 9+ end-to-end backend features, ensuring scalability, security, and high performance across complex business workflows.",
            description4: "Automated build and deployment pipelines using Jenkins CI/CD, improving release reliability and reducing manual deployment effort.",
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
                {experienceData.map((item) => (
                    <div key={item.id} className="experience-card">
                        <h3>{item.role}</h3>
                        <h4 className="company">{item.company}</h4>
                        <p className="duration">{item.duration}</p>
                        <p className="description">{item.description1}</p>
                        <p className="description">{item.description2}</p>
                        <p className="description">{item.description3}</p>
                        <p className="description">{item.description4}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
