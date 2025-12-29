import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ApiSettings from "../components/ApiSettings";

export default function Dashboard() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar onSelect={setSelected} />

      <div style={{ flex: 1, padding: 20 }}>
        {selected && <ApiSettings type={selected} />}
      </div>
    </div>
  );
}
