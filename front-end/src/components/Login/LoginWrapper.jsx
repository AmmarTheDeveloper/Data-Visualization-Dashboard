import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export function LoginWrapper({ children }) {
  const [token, setToken] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("email"));
  }, []);

  return !token ? children : <Navigate to="/dashboard" />;
}
