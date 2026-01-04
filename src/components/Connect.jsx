import React from 'react';

const Connect = () => {
    return (
        <section id="connect" className="section connect-section">
            <h2 className="section-title">Let's Connect</h2>
            <div className="connect-content">
                <p>I'm always open to new learning opportunities.<br /> Whether you have a question or just want to say hi, feel free to reach out.</p>
                <div className="social-links">
                    <a href="mailto:mailpiyush02@yahoo.com" className="social-btn">Email Me</a>
                    <a href="https://www.linkedin.com/in/linkpiyush02/" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
                    <a href="https://github.com/dev-piyush02" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
                    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn">Twitter</a> */}
                </div>
            </div>
        </section>
    );
};

export default Connect;
