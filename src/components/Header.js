import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
    <div className="container">
    
        <div className="header__box">

            <Link 
                to="/dashboard" 
                className="header__title"
            >
                <h1>Spirals</h1>
            </Link>
            
            
        </div>

        <div className="header__button">
            <button
                    onClick={startLogout}
                    className="button-link"
                >
                    Log out
            </button>
        </div>

    </div>
);

const mapDispatchToProps = (dispatch) => (
    {
        startLogout: () => dispatch(startLogout())
    }
)

export default connect(undefined, mapDispatchToProps)(Header);