import { useMutation } from "@tanstack/react-query";
import { webApiCall } from "../utils/api";
// import { UserLoginModel } from "../../types/UserModel";
import { useNavigate } from "react-router-dom";
import { decodeJwtToken } from "../../utils/decodeJwtToken";
// import { User } from "../../types/AuthContextProviderModel";
import useAuth from "../../hooks/useAuth";

const JWT_TOKEN_KEY = "jwt_token";

const setJwtToken = (token, setUser) => {
  localStorage.setItem(JWT_TOKEN_KEY, token);
  decodeJwtToken(token, setUser);
};

export const useLoginUser = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: (data) =>
      webApiCall("/auth/login", {
        body: JSON.stringify(data),
        method: "POST",
      }),
    onSuccess: (res) => {
      setJwtToken(res.user.token, setUser);
      navigate("/");
    },
    onError: (error) => {
      const err = error;
      console.error("Login failed:", err.message);
    },
  });
};
