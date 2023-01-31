import React, { useContext } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Dashboard from './Dashboard';
import Settings from './Settings';
import { useHistory } from 'react-router-dom';
function PrivateRoutes({ path }) {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  const history = useHistory();

  if (!isAuthenticated) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  return (
    <Route path={path}>
      <Dashboard />
      <Route path={`${path}/settings`} component={Settings} />
    </Route>
  );
}

export default PrivateRoutes;
