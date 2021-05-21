import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="container container-box">
        
            <Link to="/" className="header__title">
                <h1>Spiral</h1>
            </Link>
        
    </header>
);

export default Header;