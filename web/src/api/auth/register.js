import { useMutation } from "@tanstack/react-query";
import { webApiCall } from "../utils/api";
// import { UserRegisterModel } from "../../../types/UserModel";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data) =>
      webApiCall("/auth/register", {
        body: JSON.stringify(data),
        method: "POST",
      }),
  });
};
