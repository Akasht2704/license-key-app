import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../services/authService";
import { saveToken } from "../utils/token";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [licenseKey, setLicenseKey] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await loginApi(licenseKey);

      // assuming API response: { token: "JWT_TOKEN" }
      if (res?.token) {
        await saveToken(res.token);
        setAuth(true);

        // ✅ IMPORTANT: direct redirect
        navigate("/dashboard", { replace: true });
        console.log('after navigation');
        
      } else {
        alert("Invalid license key");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={licenseKey}
        onChange={(e) => setLicenseKey(e.target.value)}
        placeholder="Enter 16 digit license key"
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Checking..." : "Login"}
      </button>
    </div>
  );
}
