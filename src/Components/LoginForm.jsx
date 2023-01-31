import React, { useContext } from "react";
import { AuthContext } from './AuthContext';
import "./Login.css"
const LoginForm = ({ toggleAuth }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toggleAuth();
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <input type="text" placeholder="Username" className="fontman" />
      <input type="password" placeholder="Password"  className="fontman"/>
      <button type="submit" className="fontman">Login</button>
</form>
);
};

export default LoginForm;