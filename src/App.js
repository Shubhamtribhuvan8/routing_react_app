import React, { useState } from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import PrivateRoutes from './Components/PrivateRoutes';
import { AuthContext } from './Components/AuthContext';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import Users from './Components/Users';
import User from './Components/User';
import Routes from './Components/Routes';
import "./App.css"
function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);

const toggleAuth = () => {
setIsAuthenticated(!isAuthenticated);
};

return (
<div>
 <a href='/'><HomePage isAuthenticated={isAuthenticated}/></a>  
<div>
<AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
<Route exact path="/" component={Home} />
<Route exact path="/login" component={Login} />
<Route exact path="/users" component={Users} />
<Route exact path="/users/:id" component={User} />
{isAuthenticated && <Route path="/dashboard" component={PrivateRoutes} />}
</AuthContext.Provider>
</div>
</div>
);
}

const HomePage = ({ isAuthenticated }) => {
return (
<div style={{textAlign:"center"}}>
<h1>Home Page</h1>
<button className='btn'><a href="/">Home</a></button>
<button className='btn'><a href="/login">Login</a></button>
<button className='btn'><a href="/dashboard">Dashboard</a></button>
{isAuthenticated && <button className='btn'><a href="/users">Users</a></button>}
</div>
);
};

export default App;