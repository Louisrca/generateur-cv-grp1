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
export const usePostCurriculum = () => {
  return useMutation((data) =>
    webApiCall("/curriculum", {
      body: JSON.stringify(data),
      method: "POST",
    })
  );
};
