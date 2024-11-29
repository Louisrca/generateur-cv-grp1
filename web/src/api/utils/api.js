const makeApiCall = async (input, init) => {
  const response = await fetch(input, init);

  return response.json();
};

export const webApiCall = (pathname, init) => {
  const JWT_TOKEN = localStorage.getItem("jwt_token");

  const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

  return makeApiCall(`${API_URL}${pathname}`, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JWT_TOKEN}`,
    },
  });
};

export const webApiCallForUpload = (pathname, init) => {
  const JWT_TOKEN = localStorage.getItem("jwt_token");

  const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

  return makeApiCall(`${API_URL}${pathname}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${JWT_TOKEN}`,
    },
  });
};
