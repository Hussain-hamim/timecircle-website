const stats = [
  { value: "120k+", label: "spots with real posts" },
  { value: "2M+", label: "members discovering" },
  { value: "38k", label: "plans made weekly" },
];

export default function Stats() {
  return (
    <section className="wrap">
      <div className="stats">
        {stats.map((s) => (
          <div key={s.value} className="stat">
            <strong>{s.value}</strong>
            {s.label}
          </div>
        ))}
      </div>
    </section>
  );
}
