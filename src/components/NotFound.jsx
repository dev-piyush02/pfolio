import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-oops">Oops!</h1>
            <h2 className="not-found-subtitle">404 - PAGE NOT FOUND</h2>
            <p className="not-found-text">
                The page you are looking for might have been removed had its name changed or is temporarily unavailable.
            </p>
            <a href="/" className="not-found-btn">
                GO TO HOMEPAGE
            </a>
        </div>
    );
};

export default NotFound;
