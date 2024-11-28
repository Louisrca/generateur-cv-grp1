import React from "react";
import { useParams } from "react-router-dom";
import { useGetRecommentation, useDeleteRecommendation } from "../../api/recommendation/recommendation";

export default function DeleteRecommendations() {
  const { cvId } = useParams();
  const { data: recommendations, isLoading, isError } = useGetRecommentation(cvId);
  const { mutate: deleteRecommendation } = useDeleteRecommendation();

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette recommandation ?")) {
      deleteRecommendation(id);
    }
  };

  if (isLoading) return <p>Chargement des recommandations...</p>;
  if (isError) return <p>Erreur lors de la récupération des recommandations.</p>;

  return (
    <div>
      <h2>Recommandations</h2>

      {recommendations && recommendations.length > 0 ? (
        <ul>
          {recommendations.map((rec) => (
            <li key={rec.id}>
              <p>
                <strong>{rec.author || "Auteur anonyme"} :</strong> {rec.message}
              </p>
              <button onClick={() => handleDelete(rec.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune recommandation disponible pour ce CV.</p>
      )}
    </div>
  );
}
