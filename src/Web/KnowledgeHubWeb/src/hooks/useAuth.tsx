import { useEffect, useState } from "react";
import { getSession } from "../api/auth";
import type { User } from "../types/User";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const session = await getSession();
        setUser(session);
      } catch {
        setUser(null);
      }
    }

    load();
  }, []);

  return { user, isLoggedIn: !!user };
}
