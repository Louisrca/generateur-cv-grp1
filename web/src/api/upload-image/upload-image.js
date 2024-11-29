import { webApiCall, webApiCallForUpload } from "../utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetImage = (cvId) => {
  return useQuery({
    queryKey: ["profile-image", cvId],
    queryFn: () =>
      webApiCall(`/upload/${cvId}`, {
        body: null,
        method: "GET",
      }),
  });
};

export const useUploadImage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    // Fonction mutationFn
    ({ image, curriculumId }) => {
      const formData = new FormData();
      formData.append("image", image); // Ajout de l'image
      formData.append("curriculumId", curriculumId); // Ajout de l'ID du curriculum

      // Appel à votre API pour uploader l'image
      return webApiCallForUpload("/upload/new-image", {
        body: formData, // Envoi du FormData
        method: "POST",
      });
    },
    {
      // Option de mutation
      onSuccess: () => {
        // Invalidates the cache and refetches queries related to recommendations-by-user
        queryClient.invalidateQueries(["profile-image"]);
      },
      onError: (error) => {
        console.error("Image upload failed", error);
        // Gérer l'erreur de manière appropriée
      },
    }
  );
};
