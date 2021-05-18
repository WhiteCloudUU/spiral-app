import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import FastenerDashboardPage from '../components/FastenerDashboardPage';
import AddFastenerPage from '../components/AddFastenerPage';
import EditFastenerPage from '../components/EditFastenerPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={FastenerDashboardPage} exact={true}/>
                <Route path="/create" component={AddFastenerPage} />
                <Route path="/edit/:id" component={EditFastenerPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;