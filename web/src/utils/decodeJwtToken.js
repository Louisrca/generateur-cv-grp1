import { jwtDecode } from "jwt-decode";
import TokenExpired from "./tokenExpiration";

export const decodeJwtToken = (jwtToken, setUser) => {
  if (!jwtToken) {
    console.error("JWT token is empty or undefined");
    return;
  }

  // Vérifie si le token est expiré
  if (TokenExpired(jwtToken)) {
    console.warn("JWT token is expired");
    localStorage.removeItem("jwt_token");
    setUser(null);
    return;
  }

  try {
    const decodedToken = jwtDecode(jwtToken);

    if (decodedToken.id) {
      setUser({ id: decodedToken.id });
    } else {
      console.error(
        "Decoded JWT token does not contain the required 'id' field"
      );
      localStorage.removeItem("jwt_token");
      setUser(null);
    }
  } catch (error) {
    console.error("Error decoding JWT token", error);
    localStorage.removeItem("jwt_token");
    setUser(null);
  }
};
