import api from "../api";


export const auth_login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => api.post("/auth/login", { email, password })