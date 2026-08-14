export function FlowSummary({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="flow-summary">
      {items.map((item, index) => (
        <div key={item.label}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item.label}</strong>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
