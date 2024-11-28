import { webApiCall } from "../utils/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


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
  const token = localStorage.getItem("jwt-token")
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data) =>
      webApiCall(`/users/update/${userId}`, {
        body: JSON.stringify(data),
        method: "PUT",
      }),
      onSuccess: () => {
        token && localStorage.removeItem("jwt-token");
        navigate("/login")
      }
  });
};
