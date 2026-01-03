import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <p>&copy; {currentYear} Piyush. All rights reserved.</p>
                <p className="footer-built-with">Built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
