const text =
  "☕ COZY CAFÉ — people hanging out tonight · 🎸 LIVE MUSIC — 8 interested · 🌅 SUNSET SPOT — trending nearby · 🍜 NEW RAMEN — loved by your crowd · ";

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden>
      <div>
        {text}
        {text}
      </div>
    </div>
  );
}
