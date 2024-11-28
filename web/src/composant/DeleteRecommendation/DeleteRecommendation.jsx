import { useParams } from "react-router-dom";
import {
  useGetRecommendationsByUser,
  useDeleteRecommendation,
} from "../../api/recommendation/recommendation";

// Composant pour afficher les recommandations d'un CV spécifique
const UserRecommendations = () => {
  const user = useParams();
  console.log("🚀 ~ UserRecommendations ~ user:", user.id);

  const {
    data: recommendations,
    isLoading,
    isError,
  } = useGetRecommendationsByUser(user.id);

  const allRecommendations = recommendations?.recommandations;

  const deleteRecommendation = useDeleteRecommendation();

  const handleDelete = (recommandationId) => {
    if (window.confirm("Voulez-vous supprimer cette recommandation ?")) {
      deleteRecommendation.mutate(recommandationId);
    }
  };

  if (isLoading) return <p>Chargement des recommandations pour le CV </p>;
  if (isError)
    return <p>Erreur lors du chargement des recommandations pour </p>;

  return (
    <div style={{ marginBottom: "2em" }}>
      {allRecommendations?.length > 0 ? (
        <ul>
          {allRecommendations.map((recommendation) => (
            <li key={recommendation._id} style={{ marginBottom: "1em" }}>
              <p>
                <strong>{recommendation.message}</strong>
              </p>

              <button
                onClick={() => handleDelete(recommendation._id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "0.5em 1em",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune recommandation trouvée pour ce CV.</p>
      )}
    </div>
  );
};

export default UserRecommendations;
