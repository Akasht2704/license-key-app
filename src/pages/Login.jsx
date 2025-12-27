import { useState } from "react";
import { loginApi } from "../services/authService";
import { saveToken } from "../utils/token";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [licenseKey, setLicenseKey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (licenseKey.length !== 16) {
      setError("License key must be 16 digits");
      return;
    }

    try {
      const res = await loginApi(licenseKey);

      console.log("Login response:", res);
      saveToken(res.token); // save JWT in txt file
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid license key");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>License Login</h2>

      <input
        type="text"
        value={licenseKey}
        maxLength={16}
        onChange={(e) => setLicenseKey(e.target.value)}
        placeholder="Enter 16 digit license key"
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
