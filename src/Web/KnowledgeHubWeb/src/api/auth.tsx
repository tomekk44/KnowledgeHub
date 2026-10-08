import api from "./axios";

export async function login(username: string, password: string) {
  const res = await api.post("/api/auth/login", { username, password });
  localStorage.setItem("token", res.data.token);
}

export async function logout() {
  localStorage.removeItem("token");
}

export async function getSession() {
  const res = await api.get("/api/auth/me");
  return res.data;
}
