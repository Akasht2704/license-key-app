// import { useEffect, useState } from "react";
// import { getTemplates } from "../utils/templates";
// import { extractVariables, applyVariables } from "../utils/templateUtils";

// export default function PrnPrint() {
//   const [templates, setTemplates] = useState([]);
//   const [selected, setSelected] = useState(null);
//   const [vars, setVars] = useState([]);
//   const [values, setValues] = useState({});
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     const all = getTemplates(); 
//     setTemplates(all.filter(t => t.type === "prn"));
//   }, []);

//   const handleSelect = (id) => {
//     const tpl = templates.find(t => t.id === Number(id));
//     setSelected(tpl);

//     const detected = extractVariables(tpl.content);
//     setVars(detected);

//     const initial = {};
//     detected.forEach(v => initial[v] = "");
//     setValues(initial);
//   };

//   const handlePrint = () => {
//     if (!selected) return alert("Select template");
//     if (count <= 0) return alert("Invalid count");

//     for (const k of vars) {
//       if (!values[k]) return alert(`Missing ${k}`);
//     }

//     const finalPRN = applyVariables(selected.content, values);

//     window.electronAPI.printPRN(finalPRN, Number(count));
//   };

//   return (
//     <div style={{ maxWidth: 600 }}>
//       <h2>PRN Print</h2>

//       {/* TEMPLATE SELECT */}
//       <select onChange={(e) => handleSelect(e.target.value)}>
//         <option value="">Select PRN Template</option>
//         {templates.map(t => (
//           <option key={t.id} value={t.id}>{t.name}</option>
//         ))}
//       </select>

//       {/* VARIABLES */}
//       {vars.length > 0 && (
//         <>
//           <h4>Variables</h4>
//           {vars.map(v => (
//             <input
//               key={v}
//               placeholder={v}
//               value={values[v]}
//               onChange={(e) =>
//                 setValues({ ...values, [v]: e.target.value })
//               }
//             />
//           ))}
//         </>
//       )}

//       {/* PRINT CONTROLS */}
//       {selected && (
//         <>
//           <div>
//             Print Count:
//             <input
//               type="number"
//               value={count}
//               min={1}
//               onChange={(e) => setCount(e.target.value)}
//             />
//           </div>

//           <button onClick={handlePrint}>PRINT</button>
//         </>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { getTemplates } from "../utils/templates";
import { extractVariables, applyVariables } from "../utils/templateUtils";

export default function PrnPrint() {
  const [templates, setTemplates] = useState([]);
  const [selected, setSelected] = useState(null);
  const [vars, setVars] = useState([]);
  const [values, setValues] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    const all = getTemplates();
    setTemplates(all.filter(t => t.type === "prn"));
  }, []);

  const handleSelect = (id) => {
    const tpl = templates.find(t => t.id === Number(id));
    setSelected(tpl);

    const detected = extractVariables(tpl.content);
    setVars(detected);

    const initial = {};
    detected.forEach(v => (initial[v] = ""));
    setValues(initial);
  };

  const handlePrint = () => {

    console.log("electronAPI:", window.electronAPI);
    
    if (!selected) return alert("Select template");
    if (count <= 0) return alert("Invalid count");

    for (const k of vars) {
      if (!values[k]) return alert(`Missing ${k}`);
    }

    const finalPRN = applyVariables(selected.content, values);
    window.electronAPI.printPRN(finalPRN, Number(count));
  };

  return (
    <div style={app}>

      {/* LEFT SIDEBAR */}
      <aside style={sidebar}>
        <div style={sidebarHeader}>PRN Templates</div>

        {templates.length === 0 && (
          <div style={muted}>No PRN templates</div>
        )}

        {templates.map(t => (
          <div
            key={t.id}
            style={{
              ...templateItem,
              ...(selected?.id === t.id ? templateActive : {})
            }}
            onClick={() => handleSelect(t.id)}
          >
            {t.name}
          </div>
        ))}
      </aside>

      {/* MAIN WORKSPACE */}
      <main style={workspace}>
        {!selected && (
          <div style={emptyState}>
            Select a PRN template from the left panel
          </div>
        )}

        {selected && (
          <>
            {/* HEADER */}
            <div style={header}>
              <h2 style={{ margin: 0 }}>{selected.name}</h2>
              <span style={badge}>PRN</span>
            </div>

            {/* VARIABLES */}
            <section style={panel}>
              <h4 style={panelTitle}>Variables</h4>

              {vars.length === 0 && (
                <p style={muted}>No variables found</p>
              )}

              {vars.map(v => (
                <div key={v} style={varRow}>
                  <label style={label}>{v}</label>
                  <input
                    style={input}
                    value={values[v]}
                    onChange={(e) =>
                      setValues({ ...values, [v]: e.target.value })
                    }
                  />
                </div>
              ))}
            </section>

            {/* PRINT SETTINGS */}
            <section style={panel}>
              <h4 style={panelTitle}>Print Settings</h4>

              <div style={printRow}>
                <label style={label}>Number of Copies</label>
                <input
                  type="number"
                  min={1}
                  value={count}
                  style={countInput}
                  onChange={(e) => setCount(e.target.value)}
                />
              </div>
            </section>
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer style={footer}>
        <button
          style={{
            ...printBtn,
            opacity: selected ? 1 : 0.4,
            cursor: selected ? "pointer" : "not-allowed",
          }}
          onClick={handlePrint}
          disabled={!selected}
        >
          PRINT
        </button>
      </footer>
    </div>
  );
}

/* ------------------- STYLES ------------------- */

const app = {
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "260px 1fr",
  gridTemplateRows: "1fr auto",
  background: "#1b1b1b",
  color: "#e5e5e5",
  fontFamily: "Segoe UI, system-ui, sans-serif",
};

const sidebar = {
  gridRow: "1 / span 2",
  background: "#111",
  borderRight: "1px solid #333",
  padding: 16,
};

const sidebarHeader = {
  fontSize: 13,
  color: "#999",
  marginBottom: 10,
};

const templateItem = {
  padding: "10px 12px",
  borderRadius: 6,
  cursor: "pointer",
  marginBottom: 4,
  transition: "background 0.2s",
};

const templateActive = {
  background: "#2a2a2a",
};

const workspace = {
  padding: 20,
  overflowY: "auto",
};

const header = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: 20,
};

const badge = {
  background: "#333",
  padding: "4px 8px",
  borderRadius: 6,
  fontSize: 12,
};

const panel = {
  background: "#242424",
  borderRadius: 10,
  padding: 16,
  marginBottom: 16,
};

const panelTitle = {
  marginBottom: 14,
};

const varRow = {
  display: "flex",
  flexDirection: "column",
  marginBottom: 14,
};

const label = {
  fontSize: 12,
  color: "#aaa",
  marginBottom: 4,
};

const input = {
  padding: "9px 10px",
  borderRadius: 6,
  border: "1px solid #444",
  background: "#1a1a1a",
  color: "#fff",
};

const printRow = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const countInput = {
  ...input,
  width: 120,
};

const footer = {
  gridColumn: "2",
  padding: 14,
  borderTop: "1px solid #333",
  background: "#161616",
};

const printBtn = {
  width: "100%",
  padding: "14px",
  borderRadius: 10,
  border: "none",
  background: "#22c55e",
  color: "#000",
  fontSize: 16,
  fontWeight: "bold",
};

const emptyState = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
  fontSize: 15,
};

const muted = {
  color: "#777",
};



