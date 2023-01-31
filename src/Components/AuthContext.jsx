import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  login: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuth: isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
