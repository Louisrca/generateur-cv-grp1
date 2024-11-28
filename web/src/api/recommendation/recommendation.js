import { webApiCall } from "../utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetRecommentation = (cvId) => {
  return useQuery({
    queryKey: ["recommendations"],
    queryFn: () =>
      webApiCall(`/recommendations/${cvId}`, {
        body: null,
        method: "GET",
      }),
  });
};

export const useCreateRecommendation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      webApiCall("/recommendations", {
        body: JSON.stringify(data),
        method: "POST",
      }),
    onSuccess: () => {
      // Rafraîchit les données liées aux recommandations
      queryClient.invalidateQueries(["recommendations"]);
    },
  });
};

export const useDeleteRecommendation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (cvId) =>
      webApiCall(`/recommendations/${cvId}`, {
        body: null,
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["recommendations"]);
    },
    onError: (error) => {
      console.error("Erreur lors de la suppression :", error);
    },
  });
};
