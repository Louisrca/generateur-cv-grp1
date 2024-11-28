import { webApiCall } from "../utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetCurriculums = () => {
  return useQuery({
    queryKey: ["curriculums"],
    queryFn: () =>
      webApiCall("/curriculum", {
        body: null,
        method: "GET",
      }),
  });
};

export const useGetCurriculumByUserId = (userId) => {
  return useQuery({
    queryKey: ["curriculum", userId],
    queryFn: () =>
      webApiCall(`/curriculum/${userId}`, {
        body: null,
        method: "GET",
      }),
  });
};

export const usePostCurriculum = () => {
  return useMutation((data) =>
    webApiCall("/curriculum", {
      body: JSON.stringify(data),
      method: "POST",
    })
  );
};

export const useDeleteCurriculum = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // La fonction pour effectuer la requête DELETE
    mutationFn: (cvId) =>
      webApiCall(`/curriculum/${cvId}`, {
        method: "DELETE",
      }),

    // Callback pour gérer le succès
    onSuccess: () => {
      // Rafraîchit les données liées aux curriculums et recommandations
      queryClient.invalidateQueries(["curriculum"]); // Si vous avez une clé pour les curriculums
    },

    // Callback pour gérer les erreurs
    onError: (error) => {
      console.error("Erreur lors de la suppression du curriculum :", error);
    },
  });
};
