import { useMutation } from "@tanstack/react-query";
import { webApiCall } from "../utils/api";
import { useNavigate } from "react-router-dom";

export const useRegisterUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) =>
      webApiCall("/auth/register", {
        body: JSON.stringify(data),
        method: "POST",
      }),
    onSuccess: () => {
      navigate("/login");
    },
  });
};
