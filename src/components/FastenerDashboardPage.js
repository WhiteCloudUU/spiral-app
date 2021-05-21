import React from 'react';
import { Link } from 'react-router-dom';
import FastenerList from './FastenerList';

const ExpenseDashboardPage = () => (
    <div className="container">
        <div className="page-summary">
            <Link to="/create" className="button">
                New Fastener
            </Link>
        </div>
        

        <FastenerList />
    </div>
);

export default ExpenseDashboardPage;