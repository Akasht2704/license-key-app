import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { getToken } from "./utils/token";
import { useEffect, useState } from "react";

export default function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = getToken();
    setAuth(!!token);
  }, []);

  if (auth === null) return null;

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={auth ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={auth ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}
