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
  });
};

export const useCreateRecommendation = () => {
  return useMutation((recommendation) =>
    webApiCall("/recommendations", {
      body: recommendation,
      method: "POST",
    })
  );
};
