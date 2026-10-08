import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import type { AuthState } from "../types/User";

export function useAuthContext(): AuthState {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuthContext must be used inside <AuthProvider>");
  }

  return ctx;
}
