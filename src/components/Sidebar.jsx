// import { useState } from "react";

// export default function Sidebar({ onSelect }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div style={{ width: 240, background: "#1e1e1e", color: "#fff" }}>
//       <div
//         style={{ padding: 12, cursor: "pointer" }}
//         onClick={() => setOpen(!open)}
//       >
//         API Settings ▾
//       </div>

//       {open && (
//         <>
//           <div
//             style={{ padding: "8px 20px", cursor: "pointer" }}
//             onClick={() => onSelect("access")}
//           >
//             Access Token API Setting
//           </div>

//           <div
//             style={{ padding: "8px 20px", cursor: "pointer" }}
//             onClick={() => onSelect("data")}
//           >
//             Get Data API Setting
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


import { useState } from "react";

export default function Sidebar({ onSelect }) {
  const [apiOpen, setApiOpen] = useState(false);

  return (
    <div
      style={{
        width: 240,
        background: "#1e1e1e",
        color: "#fff",
        height: "100vh",
      }}
    >
      {/* API SETTINGS */}
      <div
        style={{ padding: 12, cursor: "pointer", fontWeight: "bold" }}
        onClick={() => setApiOpen(!apiOpen)}
      >
        ⚙️ API Settings ▾
      </div>

      {apiOpen && (
        <>
          <div
            style={{ padding: "8px 20px", cursor: "pointer" }}
            onClick={() => onSelect("access")}
          >
            🔑 Access Token API Setting
          </div>

          <div
            style={{ padding: "8px 20px", cursor: "pointer" }}
            onClick={() => onSelect("data")}
          >
            📡 Get Data API Setting
          </div>
        </>
      )}

      {/* SAVE TEMPLATES */}
      <div
        style={{
          padding: 12,
          cursor: "pointer",
          borderTop: "1px solid #333",
          marginTop: 10,
        }}
        onClick={() => onSelect("templates")}
      >
        🧾 Save Templates
      </div>
    </div>
  );
}

