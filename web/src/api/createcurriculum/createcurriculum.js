import { webApiCall } from "../utils/api";
import { useMutation } from "@tanstack/react-query";

export const useCreateCurriculum = () => {
  return useMutation({
    mutationFn: (data) =>
      webApiCall("/curriculum", {
        body: JSON.stringify(data),
        method: "POST",
      }),
  });
};
