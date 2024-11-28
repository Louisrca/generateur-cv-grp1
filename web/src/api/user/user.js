import { webApiCall } from "../utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";

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

export const useUpdateById = (userId) => {
  return useMutation({
    mutationFn: (data) =>
      webApiCall(`/users/update/${userId}`, {
        body: JSON.stringify(data),
        method: "PUT",
      }),
  });
};
