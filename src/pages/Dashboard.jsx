// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import ApiSettings from "../components/ApiSettings";

// export default function Dashboard() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <Sidebar onSelect={setSelected} />

//       <div style={{ flex: 1, padding: 20 }}>
//         {selected && <ApiSettings type={selected} />}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ApiSettings from "../components/ApiSettings";
import Templates from "../components/Templates";

export default function Dashboard() {
  const [selected, setSelected] = useState(null);

  const renderContent = () => {
    switch (selected) {
      case "access":
        return <ApiSettings type="access" />;

      case "data":
        return <ApiSettings type="data" />;

      case "templates":
        return <Templates />;

      default:
        return (
          <div style={{ color: "#555" }}>
            👈 Select an option from sidebar
          </div>
        );
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar onSelect={setSelected} />

      <div style={{ flex: 1, padding: 20 }}>
        {renderContent()}
      </div>
    </div>
  );
}

