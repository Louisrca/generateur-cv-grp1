import { jwtDecode } from "jwt-decode";

const TokenExpired = (token) => {
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    if (!decodedToken.exp) return true;
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      return true;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};
export default TokenExpired;
