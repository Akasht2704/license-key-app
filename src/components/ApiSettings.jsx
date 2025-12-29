import { useEffect, useState } from "react";
import KeyValueTable from "./KeyValueTable";
import { loadSettings, saveSettings } from "../utils/apiSettingsStorage";

export default function ApiSettings({ type }) {
  const [enabled, setEnabled] = useState(false);
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("GET");
  const [headers, setHeaders] = useState([]);
  const [body, setBody] = useState([]);

  useEffect(() => {
    const data = loadSettings(type);
    if (data) {
      setEnabled(data.enabled ?? false);
      setEndpoint(data.endpoint || "");
      setMethod(data.method || "GET");
      setHeaders(data.headers || []);
      setBody(data.body || []);
    }
  }, [type]);

  const handleSave = () => {
    saveSettings(type, { enabled, endpoint, method, headers, body });
    alert("Settings saved");
  };

  return (
    <div
      style={{
        maxWidth: 900,
        background: "#fff",
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>
        {type === "access"
          ? "Access Token API Setting"
          : "Get Data API Setting"}
      </h2>

      {/* Method + Endpoint + Enable */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          style={{ padding: 8 }}
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
        </select>

        <input
          style={{ flex: 1, padding: 8 }}
          placeholder="Enter API Endpoint"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />

        {type === "access" && (
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontWeight: 500,
            }}
          >
            Enable
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
          </label>
        )}
      </div>

      {/* Headers + Body hidden when disabled */}
      {(type !== "access" || enabled) && (
        <>
          <div style={{ marginBottom: 20 }}>
            <KeyValueTable title="Headers" data={headers} setData={setHeaders} />
          </div>

          <div style={{ marginBottom: 20 }}>
            <KeyValueTable title="Body" data={body} setData={setBody} />
          </div>
        </>
      )}

      <div style={{ textAlign: "right" }}>
        <button
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
