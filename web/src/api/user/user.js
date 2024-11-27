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

export const useUpdateById = (userId) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data) =>
        webApiCall(`/users/update/${userId}`, {
          body: JSON.stringify(data),
          method: "PUT",
        }),
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    });
  };
  