import React from 'react';

const Experience = () => {
    const experienceData = [
        {
            id: 1,
            role: "Product Engineer",
            company: "Tata Consultancy Services",
            duration: "Sep 2024 - Present",
            description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software."
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
                        <p className="description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
