export interface User {
  name: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}
