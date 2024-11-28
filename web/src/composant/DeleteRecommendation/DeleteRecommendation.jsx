import React from "react";
import { useGetUserById } from "../../api/user/user";
import { useGetRecommendation, useDeleteRecommendation } from "../../api/recommendation/recommendation";

const UserRecommendations = ({ userId }) => {
  // Récupérer les données utilisateur, y compris les CV
  const { data: user, isLoading: isUserLoading, isError: isUserError } = useGetUserById(userId);

  // Hook pour supprimer une recommandation
  const deleteRecommendation = useDeleteRecommendation();

  if (isUserLoading) return <p>Chargement des données utilisateur...</p>;
  if (isUserError) return <p>Erreur lors de la récupération des données utilisateur.</p>;

  // Vérifier si l'utilisateur a des CV
  const { cvs } = user || {};
  if (!cvs || cvs.length === 0) {
    return <p>Aucun CV trouvé pour cet utilisateur.</p>;
  }

  return (
    <div>
      <h1>Recommandations de {user.name}</h1>
      {cvs.map((cv) => (
        <CvRecommendations
          key={cv.id}
          cvId={cv.id}
          cvTitle={cv.title}
          deleteRecommendation={deleteRecommendation}
        />
      ))}
    </div>
  );
};

// Composant pour afficher les recommandations d'un CV spécifique
const CvRecommendations = ({ cvId, cvTitle, deleteRecommendation }) => {
  const { data: recommendations, isLoading, isError } = useGetRecommendation(cvId);

  const handleDelete = (recommendationId) => {
    if (window.confirm("Voulez-vous supprimer cette recommandation ?")) {
      deleteRecommendation.mutate(recommendationId, {
        onSuccess: () => alert("Recommandation supprimée avec succès."),
        onError: () => alert("Erreur lors de la suppression."),
      });
    }
  };

  if (isLoading) return <p>Chargement des recommandations pour le CV : {cvTitle}...</p>;
  if (isError) return <p>Erreur lors du chargement des recommandations pour {cvTitle}.</p>;

  return (
    <div style={{ marginBottom: "2em" }}>
      <h2>{cvTitle}</h2>
      {recommendations?.length > 0 ? (
        <ul>
          {recommendations.map((recommendation) => (
            <li key={recommendation.id} style={{ marginBottom: "1em" }}>
              <p><strong>{recommendation.title}</strong></p>
              <p>{recommendation.content}</p>
              <button
                onClick={() => handleDelete(recommendation.id)}
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
