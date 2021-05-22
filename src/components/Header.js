import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="container">
        <div className="header__box">
            <Link to="/" className="header__title">
                <h1>Spiral</h1>
            </Link>
        </div>
    </div>
);

export default Header;