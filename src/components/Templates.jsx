// import { useEffect, useState } from "react";
// import { getTemplates, saveTemplates } from "../utils/templates";

// export default function Templates() {
//   const [templates, setTemplates] = useState([]);
//   const [current, setCurrent] = useState({
//     id: null,
//     name: "",
//     type: "text",
//     content: "",
//   });

//   useEffect(() => { 
//     setTemplates(getTemplates());
//   }, []);

//   const handleSave = () => {
//     let updated;

//     if (current.id) {
//       updated = templates.map((t) =>
//         t.id === current.id ? current : t
//       );
//     } else {
//       updated = [
//         ...templates,
//         { ...current, id: Date.now() },
//       ];
//     }

//     setTemplates(updated);
//     saveTemplates(updated);
//     setCurrent({ id: null, name: "", type: "text", content: "" });
//   };

//   const handleEdit = (t) => setCurrent(t);

//   const handleDelete = (id) => {
//     const updated = templates.filter((t) => t.id !== id);
//     setTemplates(updated);
//     saveTemplates(updated);
//   };

//   return (
//     <div>
//       <h2>Templates</h2>

//       {/* Editor */}
//       <div style={card}>
//         <input
//           placeholder="Template Name"
//           value={current.name}
//           onChange={(e) =>
//             setCurrent({ ...current, name: e.target.value })
//           }
//         />

//         <select
//           value={current.type}
//           onChange={(e) =>
//             setCurrent({ ...current, type: e.target.value })
//           }
//         >
//           <option value="text">Text</option>
//           <option value="json">JSON</option>
//           <option value="html">HTML</option>
//            <option value="prn">PRN</option> 
//         </select>

//         <textarea
//           rows={8}
//           placeholder="Template Content"
//           value={current.content}
//           onChange={(e) =>
//             setCurrent({ ...current, content: e.target.value })
//           }
//         />

//         <button onClick={handleSave}>Save Template</button>
//       </div>

//       {/* List */}
//       <div>
//         {templates.map((t) => (
//           <div key={t.id} style={listItem}>
//             <strong>{t.name}</strong>
//             <span>({t.type})</span>

//             <div>
//               <button onClick={() => handleEdit(t)}>Edit</button>
//               <button onClick={() => handleDelete(t.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const card = {
//   background: "#fff",
//   padding: 16,
//   borderRadius: 10,
//   display: "grid",
//   gap: 10,
//   maxWidth: 600,
// };

// const listItem = {
//   background: "#f5f5f5",
//   padding: 10,
//   marginTop: 10,
//   display: "flex",
//   justifyContent: "space-between",
// };



// import { useEffect, useState } from "react";
// import { getTemplates, saveTemplates } from "../utils/templates";

// export default function Templates() {
//   const [templates, setTemplates] = useState([]);
//   const [current, setCurrent] = useState({
//     id: null,
//     name: "",
//     type: "text",
//     content: "",
//   });

//   useEffect(() => {
//     setTemplates(getTemplates());
//   }, []);

//   const handleSave = () => {
//     let updated;

//     if (current.id) {
//       updated = templates.map((t) =>
//         t.id === current.id ? current : t
//       );
//     } else {
//       updated = [...templates, { ...current, id: Date.now() }];
//     }

//     setTemplates(updated);
//     saveTemplates(updated);
//     setCurrent({ id: null, name: "", type: "text", content: "" });
//   };

//   const handleEdit = (t) => setCurrent(t);

//   const handleDelete = (id) => {
//     const updated = templates.filter((t) => t.id !== id);
//     setTemplates(updated);
//     saveTemplates(updated);
//   };

//   return (
//     <div style={page}>
//       <h2 style={title}>Template Manager</h2>

//       {/* Editor */}
//       <div style={card}>
//         <h3 style={sectionTitle}>
//           {current.id ? "Edit Template" : "Create Template"}
//         </h3>

//         <input
//           style={input}
//           placeholder="Template Name"
//           value={current.name}
//           onChange={(e) =>
//             setCurrent({ ...current, name: e.target.value })
//           }
//         />

//         <select
//           style={input}
//           value={current.type}
//           onChange={(e) =>
//             setCurrent({ ...current, type: e.target.value })
//           }
//         >
//           <option value="text">Text</option>
//           <option value="json">JSON</option>
//           <option value="html">HTML</option>
//           <option value="prn">PRN</option>
//         </select>

//         <textarea
//           style={textarea}
//           rows={8}
//           placeholder="Template Content"
//           value={current.content}
//           onChange={(e) =>
//             setCurrent({ ...current, content: e.target.value })
//           }
//         />

//         <button style={primaryBtn} onClick={handleSave}>
//           {current.id ? "Update Template" : "Save Template"}
//         </button>
//       </div>

//       {/* List */}
//       <div style={listWrapper}>
//         <h3 style={sectionTitle}>Saved Templates</h3>

//         {templates.length === 0 && (
//           <p style={emptyText}>No templates created yet.</p>
//         )}

//         {templates.map((t) => (
//           <div key={t.id} style={listItem}>
//             <div>
//               <strong>{t.name}</strong>
//               <div style={typeBadge}>{t.type}</div>
//             </div>

//             <div style={actions}>
//               <button
//                 style={editBtn}
//                 onClick={() => handleEdit(t)}
//               >
//                 Edit
//               </button>
//               <button
//                 style={deleteBtn}
//                 onClick={() => handleDelete(t.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ---------------- STYLES (UI ONLY) ---------------- */

// const page = {
//   minHeight: "100vh",
//   padding: 20,
//   background: "#f4f6f8",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// };

// const title = {
//   marginBottom: 20,
// };

// const sectionTitle = {
//   marginBottom: 10,
// };

// const card = {
//   background: "#ffffff",
//   padding: 20,
//   borderRadius: 12,
//   display: "grid",
//   gap: 12,
//   width: "100%",
//   maxWidth: 700,
//   boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
// };

// const input = {
//   padding: "10px 12px",
//   borderRadius: 8,
//   border: "1px solid #ccc",
//   fontSize: 14,
// };

// const textarea = {
//   ...input,
//   resize: "vertical",
//   fontFamily: "inherit",
// };

// const primaryBtn = {
//   padding: "10px",
//   borderRadius: 8,
//   border: "none",
//   background: "#4f46e5",
//   color: "#fff",
//   fontWeight: "bold",
//   cursor: "pointer",
// };

// const listWrapper = {
//   marginTop: 30,
//   width: "100%",
//   maxWidth: 700,
// };

// const listItem = {
//   background: "#ffffff",
//   padding: 14,
//   marginTop: 10,
//   borderRadius: 10,
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
// };

// const typeBadge = {
//   fontSize: 12,
//   color: "#555",
// };

// const actions = {
//   display: "flex",
//   gap: 8,
// };

// const editBtn = {
//   padding: "6px 12px",
//   borderRadius: 6,
//   border: "none",
//   background: "#0ea5e9",
//   color: "#fff",
//   cursor: "pointer",
// };

// const deleteBtn = {
//   padding: "6px 12px",
//   borderRadius: 6,
//   border: "none",
//   background: "#ef4444",
//   color: "#fff",
//   cursor: "pointer",
// };

// const emptyText = {
//   color: "#777",
//   marginTop: 10,
// };





import { useEffect, useState } from "react";
import { getTemplates, saveTemplates } from "../utils/templates";

export default function Templates() {
  const [templates, setTemplates] = useState([]);
  const [current, setCurrent] = useState({
    id: null,
    name: "",
    type: "text",
    content: "",
  });
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    setTemplates(getTemplates());
  }, []);

  const handleChange = (field, value) => {
    setCurrent({ ...current, [field]: value });
    setIsModified(true);
  };

  const handleSave = () => {
    let updated;

    if (current.id) {
      updated = templates.map((t) =>
        t.id === current.id ? current : t
      );
    } else {
      updated = [
        ...templates,
        { ...current, id: Date.now() },
      ];
    }

    setTemplates(updated);
    saveTemplates(updated);
    setCurrent({ id: null, name: "", type: "text", content: "" });
    setIsModified(false);
  };

  const handleEdit = (t) => {
    setCurrent(t);
    setIsModified(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this template?")) {
      const updated = templates.filter((t) => t.id !== id);
      setTemplates(updated);
      saveTemplates(updated);
    }
  };

  const handleReset = () => {
    setCurrent({ id: null, name: "", type: "text", content: "" });
    setIsModified(false);
  };

  return (
    <div style={container}>
      <header style={header}>
        <h2 style={title}>Templates</h2>
        <p style={subtitle}>Create and manage your message templates</p>
      </header>

      <div style={content}>
        {/* Editor Section */}
        <section style={section}>
          <div style={card}>
            <div style={cardHeader}>
              <h3 style={sectionTitle}>
                {current.id ? "Edit Template" : "Create New Template"}
              </h3>
              {current.id && (
                <button 
                  onClick={handleReset}
                  style={cancelButton}
                  title="Cancel editing"
                >
                  Cancel Edit
                </button>
              )}
            </div>

            <div style={formGroup}>
              <label htmlFor="template-name" style={label}>
                Template Name
              </label>
              <input
                id="template-name"
                placeholder="e.g., Welcome Email"
                value={current.name}
                onChange={(e) => handleChange("name", e.target.value)}
                style={input}
              />
            </div>

            <div style={formGroup}>
              <label htmlFor="template-type" style={label}>
                Template Type
              </label>
              <select
                id="template-type"
                value={current.type}
                onChange={(e) => handleChange("type", e.target.value)}
                style={select}
              >
                <option value="text">Text</option>
                <option value="json">JSON</option>
                <option value="html">HTML</option>
                <option value="prn">PRN</option>
              </select>
            </div>

            <div style={formGroup}>
              <label htmlFor="template-content" style={label}>
                Template Content
              </label>
              <textarea
                id="template-content"
                rows={10}
                placeholder="Enter your template content here..."
                value={current.content}
                onChange={(e) => handleChange("content", e.target.value)}
                style={textarea}
              />
            </div>

            <div style={buttonGroup}>
              <button
                onClick={handleSave}
                disabled={!current.name.trim() || !current.content.trim()}
                style={{
                  ...primaryButton,
                  ...(!current.name.trim() || !current.content.trim() ? disabledButton : {})
                }}
              >
                {current.id ? "Update Template" : "Save Template"}
              </button>
              {isModified && (
                <button onClick={handleReset} style={secondaryButton}>
                  Reset
                </button>
              )}
            </div>
          </div>
        </section>

        {/* List Section */}
        <section style={section}>
          <div style={listHeader}>
            <h3 style={sectionTitle}>Saved Templates</h3>
            <span style={countBadge}>
              {templates.length} template{templates.length !== 1 ? 's' : ''}
            </span>
          </div>

          {templates.length === 0 ? (
            <div style={emptyState}>
              <p style={emptyText}>No templates yet. Create your first one!</p>
            </div>
          ) : (
            <div style={listContainer}>
              {templates.map((t) => (
                <div 
                  key={t.id} 
                  style={{
                    ...listItem,
                    ...(current.id === t.id ? selectedItem : {})
                  }}
                >
                  <div style={itemInfo}>
                    <div style={itemHeader}>
                      <strong style={itemName}>{t.name}</strong>
                      <span style={typeBadge}>{t.type.toUpperCase()}</span>
                    </div>
                    <p style={itemPreview}>
                      {t.content.length > 100 
                        ? `${t.content.substring(0, 100)}...` 
                        : t.content}
                    </p>
                  </div>
                  
                  <div style={itemActions}>
                    <button 
                      onClick={() => handleEdit(t)}
                      style={actionButton}
                      title="Edit template"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(t.id)}
                      style={deleteButton}
                      title="Delete template"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

// Styles
const container = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "24px 20px",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  color: "#333",
};

const header = {
  marginBottom: "32px",
};

const title = {
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 8px 0",
  color: "#1a1a1a",
};

const subtitle = {
  fontSize: "16px",
  color: "#666",
  margin: "0",
};

const content = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "32px",
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
  },
};

const section = {
  minWidth: "0", // Prevent overflow
};

const card = {
  background: "#ffffff",
  padding: "24px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
};

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "600",
  margin: "0",
  color: "#1a1a1a",
};

const formGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const label = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#444",
};

const input = {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "14px",
  transition: "border-color 0.2s",
  outline: "none",
};

const select = {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "14px",
  backgroundColor: "white",
  outline: "none",
};

const textarea = {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "14px",
  fontFamily: "monospace",
  resize: "vertical",
  outline: "none",
  minHeight: "150px",
};

const buttonGroup = {
  display: "flex",
  gap: "12px",
  marginTop: "8px",
};

const primaryButton = {
  padding: "12px 24px",
  backgroundColor: "#0066cc",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.2s",
  flex: "1",
};

const secondaryButton = {
  padding: "12px 24px",
  backgroundColor: "transparent",
  color: "#666",
  border: "1px solid #ddd",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s",
};

const cancelButton = {
  ...secondaryButton,
  padding: "8px 16px",
  fontSize: "13px",
};

const disabledButton = {
  opacity: "0.5",
  cursor: "not-allowed",
};

const listHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
};

const countBadge = {
  padding: "4px 12px",
  backgroundColor: "#f0f0f0",
  borderRadius: "20px",
  fontSize: "14px",
  color: "#666",
};

const listContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const listItem = {
  background: "#fafafa",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #eee",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  transition: "all 0.2s",
};

const selectedItem = {
  borderColor: "#0066cc",
  backgroundColor: "#f0f7ff",
};

const itemInfo = {
  flex: "1",
  minWidth: "0",
};

const itemHeader = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "8px",
};

const itemName = {
  fontSize: "16px",
  color: "#1a1a1a",
  margin: "0",
};

const typeBadge = {
  padding: "2px 8px",
  backgroundColor: "#e9ecef",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "500",
  color: "#495057",
};

const itemPreview = {
  fontSize: "14px",
  color: "#666",
  margin: "0",
  lineHeight: "1.4",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};

const itemActions = {
  display: "flex",
  gap: "8px",
  marginLeft: "16px",
  flexShrink: "0",
};

const actionButton = {
  padding: "6px 12px",
  backgroundColor: "#f0f0f0",
  color: "#333",
  border: "none",
  borderRadius: "4px",
  fontSize: "13px",
  cursor: "pointer",
  transition: "background-color 0.2s",
};

const deleteButton = {
  ...actionButton,
  backgroundColor: "#ffebee",
  color: "#d32f2f",
};

const emptyState = {
  padding: "48px 24px",
  textAlign: "center",
  backgroundColor: "#fafafa",
  borderRadius: "8px",
  border: "2px dashed #eee",
};

const emptyText = {
  fontSize: "16px",
  color: "#999",
  margin: "0",
};