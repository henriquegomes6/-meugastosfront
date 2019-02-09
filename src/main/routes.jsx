import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import DashBoard from '../dashboard/dashboard';
import DashboardSemRedux from '../dashboardSemRedux/dashboardSemRedux';
import BillingCycles from '../billingCycles/billingCycles';

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={DashBoard} />
        <Route path='dashdoardsemredux' component={DashboardSemRedux} />
        <Route path='billingcycles' component={BillingCycles} />
        <Redirect from='*' to='/' />
    </Router>
);