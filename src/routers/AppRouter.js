import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import FastenerDashboardPage from '../components/FastenerDashboardPage';
import AddFastenerPage from '../components/AddFastenerPage';
import EditFastenerPage from '../components/EditFastenerPage';
import NotFoundPage from '../components/NotFoundPage';

import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={FastenerDashboardPage}/>
                <PrivateRoute path="/create" component={AddFastenerPage} />
                <PrivateRoute path="/edit/:id" component={EditFastenerPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;