import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

export const PrivateRoute = ({ 
    isAutheticated, 
    component: Component, 
    ...rest 
    }) => (
        <Route 
            {...rest} 
            component={(props) => (
                isAutheticated ? (
                    <div>
                        <Header />
                        <Component {...props} />
                    </div>
                ) : (
                    <Redirect to='/' />
                ) 
            )} 
        />
    );

const mapStateToProps = (state) => ({
    isAutheticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);