import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    // Afficher un écran de chargement ou un placeholder pendant que l'authentification est en cours
    return <CircularProgress />;
  }
  if (!user) {
    // Rediriger si l'utilisateur n'est pas authentifié
    return <Navigate to="/login" />;
  }
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
