import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PublicRoute = ({ 
    isAutheticated, 
    component: Component, 
    ...rest 
    }) => (
        <Route 
            {...rest} 
            component={(props) => (
                isAutheticated ? (
                    <Redirect to='/dashboard' />
                ) : (
                    <Component {...props} />
                ) 
            )} 
        />
);

const mapStateToProps = (state) => ({
    isAutheticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);