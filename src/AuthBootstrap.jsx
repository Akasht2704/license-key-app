import { useEffect } from "react";
import { validateAuth } from "./utils/validateAuth";
import { getToken } from "./utils/token";
import { useAuth } from "./context/AuthContext";

export default function AuthBootstrap({ children }) {
  const { setAuth } = useAuth();

  useEffect(() => {
    async function boot() {
      const token = getToken();

      if (!token) {
        setAuth(false);
        return;
      }

      const valid = await validateAuth();
      setAuth(valid);
    }

    boot();
  }, []);

  return children;
}
