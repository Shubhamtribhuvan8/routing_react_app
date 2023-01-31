import React, { useContext } from "react";
import LoginForm from './LoginForm';
import { AuthContext } from './AuthContext';

function Login() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? <h1 style={{textAlign:"center"}}>You are logged in! ||Please Click On Users Button! </h1> : <LoginForm toggleAuth={toggleAuth} />}
    </div>
  );
}

export default Login;
