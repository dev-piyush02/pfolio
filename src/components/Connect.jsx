import React from 'react';

const Connect = () => {
    return (
        <section id="connect" className="section connect-section">
            <h2 className="section-title">Let's Connect</h2>
            <div className="connect-content">
                <p>I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <div className="social-links">
                    <a href="mailto:mailpiyush02@yahoo.com" className="social-btn">Email Me</a>
                    <a href="https://www.linkedin.com/in/linkpiyush02/" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
                    <a href="https://github.com/devpiyush02" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
                    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn">Twitter</a> */}
                </div>
            </div>
        </section>
    );
};

export default Connect;
