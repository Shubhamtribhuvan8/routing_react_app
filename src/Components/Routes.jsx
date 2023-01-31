import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import PrivateRoutes from './PrivateRoutes';
import User from './User';
import Users from './Users';

const Routes = () => {
return (
<>
<Route exact path="/" component={Home} />
<Route exact path="/login" component={Login} />
<PrivateRoutes path="/dashboard" />
<Route exact path="/users" component={Users} />
<Route exact path="/user" component={User} />
</>
)
}

export default Routes;
