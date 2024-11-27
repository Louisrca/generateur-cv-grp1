import { webApiCall } from "../utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetRecommentation = (cvId) => {
  return useQuery({
    queryKey: ["recommendations"],
    queryFn: () =>
      webApiCall(`/recommendations/${cvId}`, {
        body: null,
        method: "GET",
      }),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

export const useCreateRecommendation = () => {
  return useMutation({
    mutationFn: (data) =>
      webApiCall("/recommendations", {
        body: JSON.stringify(data),
        method: "POST",
      }),
  });
};
