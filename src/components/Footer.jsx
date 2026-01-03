import React from 'react';
import '../App.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <p>&copy; {currentYear} Piyush. All rights reserved.</p>
                <p>Email: mailpiyush02@yahoo.com</p>
                <p className="footer-built-with">Built with React, Vite and 🩷</p>
            </div>
        </footer>
    );
};

export default Footer;
