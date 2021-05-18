import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Spiral</h1>
        <NavLink to="/" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Fastener</NavLink>
    </header>
);

export default Header;