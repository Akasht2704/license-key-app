import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { auth } = useAuth();

  if (auth === null) return null;

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={auth ? <Navigate to="/dashboard" /> : <Login />} />
        <Route
          path="/dashboard"
          element={auth ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </HashRouter>
  );
}
