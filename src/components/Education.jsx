import React from 'react';

const Education = () => {
    const educationData = [
        {
            id: 1,
            school: "Chandigarh University, Mohali",
            degree: "Bachelor of Engineering in Computer Science",
            year: "2021 - 2024",
            description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems."
        },
        {
            id: 2,
            school: "Government Polytechnic, Ranchi",
            degree: "Diploma in Computer Science",
            year: "2018 - 2021",
            description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems."
        },
    ];

    return (
        <section id="education" className="section education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
                {educationData.map((item) => (
                    <div key={item.id} className="education-card">
                        <h3>{item.school}</h3>
                        <p className="degree">{item.degree}</p>
                        <p className="year">{item.year}</p>
                        <p className="description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
