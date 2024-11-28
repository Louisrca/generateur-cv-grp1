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

export const useGetCurriculumById = (cvId) => {
  return useQuery({
    queryKey: ["curriculumById", cvId],
    queryFn: () =>
      webApiCall(`/curriculum/single-curriculum/${cvId}`, {
        body: null,
        method: "GET",
      }),
  });
};

export const useGetCurriculumByUserId = (userId) => {
  return useQuery({
    queryKey: ["curriculumByAuthor", userId],
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
export const useUpdateCurriculum = (userId) => {
  return useMutation((data) =>
    webApiCall(`/curriculum/${userId}`, {
      body: JSON.stringify(data),
      method: "PUT",
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
