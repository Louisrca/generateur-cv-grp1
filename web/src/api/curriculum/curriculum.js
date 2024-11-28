import { webApiCall } from "../utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";

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
    onError: (error) => {
      console.error("Error fetching curriculum", error);
    },
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

export const useDeleteCurriculum = (cvId) => {
  return useMutation(() =>
    webApiCall(`/curriculum/${cvId}`, {
      body: null,
      method: "DELETE",
    })
  );
};
