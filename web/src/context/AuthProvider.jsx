import { createContext, useState, useEffect } from "react";
// import { User, AuthContextProps } from "../types/AuthContextProviderModel";
import { decodeJwtToken } from "../utils/decodeJwtToken";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt_token");
    if (jwtToken) {
      decodeJwtToken(jwtToken, setUser);
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("jwt_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
