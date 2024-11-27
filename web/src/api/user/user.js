import { webApiCall } from "../utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetUserById = (userId) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () =>
      webApiCall(`/users/${userId}`, {
        body: null,
        method: "GET",
      }),
  });
};