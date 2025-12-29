export default function KeyValueTable({ title, data, setData }) {
  const update = (i, field, value) => {
    const copy = [...data];
    copy[i][field] = value;
    setData(copy);
  };

  const removeRow = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <>
      <h4 style={{ marginBottom: 8 }}>{title}</h4>

      {data.map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 3fr 1fr 40px",
            gap: 8,
            marginBottom: 8,
            alignItems: "center",
          }}
        >
          {/* Key */}
          <input
            placeholder="Key"
            value={row.key}
            onChange={(e) => update(i, "key", e.target.value)}
          />

          {/* Value */}
          <input
            placeholder="Value"
            disabled={!row.default}
            value={row.value}
            onChange={(e) => update(i, "value", e.target.value)}
          />

          {/* Default toggle */}
          <label style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <input
              type="checkbox"
              checked={row.default}
              onChange={(e) => update(i, "default", e.target.checked)}
            />
            Default
          </label>

          {/* Delete icon */}
          <button
            onClick={() => removeRow(i)}
            title="Delete"
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "#dc2626",
              fontSize: 18,
            }}
          >
            ❌
          </button>
        </div>
      ))}

      <button
        onClick={() =>
          setData([...data, { key: "", value: "", default: false }])
        }
      >
        + Add
      </button>
    </>
  );
}
