import { createContext } from "react";
import type { AuthState } from "../types/User";

export const AuthContext = createContext<AuthState | null>(null);
