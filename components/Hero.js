import Link from "next/link";

const pins = [
  { label: "🎸 Live music · 8 in", hot: true, style: { top: 30, left: 30 } },
  { label: "☕ Cozy café", style: { top: 90, right: 20 } },
  { label: "🍜 Ramen · hype", style: { top: 150, left: 60 } },
  { label: "🌅 Sunset spot", style: { bottom: 30, right: 40 } },
];

const feed = [
  {
    emoji: "🍜",
    bg: "#FFD6E8",
    title: "New ramen spot just dropped",
    meta: "📍 Fukuya · 214 going this week · 🎥 48 posts",
  },
  {
    emoji: "🎸",
    bg: "#CFF3D6",
    title: "Secret jazz bar, no sign",
    meta: "📍 Basement 44 · 8 interested tonight",
  },
];

export default function Hero() {
  return (
    <header className="hero wrap">
      <div className="eyebrow">👀 The social layer of your city</div>
      <h1>
        Stop searching.
        <br />
        Start <em>discovering.</em>
      </h1>
      <p className="sub">
        <b>No endless lists. No dead reviews.</b> See what people are actually
        doing tonight — then join them.
      </p>
      <div className="hero-cta">
        <Link className="btn btn-orange" href="#">
          ✦ Find your vibe
        </Link>
        <Link className="btn" href="#how">
          ▶ Watch how it works
        </Link>
      </div>
      <div className="store">
        <span>⬢ Download on App Store</span>
        <span>▶ Get it on Google Play</span>
      </div>

      <div className="hero-grid">
        <div className="side-card yellow">
          <span className="tag">🔥 TRENDING 0.4 mi</span>
          <h3>Sunset rooftop session</h3>
          <p>12 people here now. Chill house, cheap spritz.</p>
          <div className="avatars">
            <i style={{ background: "#FF9AA2" }} />
            <i style={{ background: "#FFC531" }} />
            <i style={{ background: "#8ED0FF" }} />
            <i style={{ background: "#B8F1B0" }} />
            <i
              style={{
                background: "#fff",
                fontSize: 12,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +8
            </i>
          </div>
          <Link className="btn btn-dark" href="#plans">
            Join plan →
          </Link>
        </div>

        <div className="phone">
          <div className="phone-top">
            <span>📍 map · tonight</span>
            <span>●●●</span>
          </div>
          <div className="mapfake">
            {pins.map((p) => (
              <span
                key={p.label}
                className={p.hot ? "pin hot" : "pin"}
                style={p.style}
              >
                {p.label}
              </span>
            ))}
          </div>
          {feed.map((f) => (
            <div key={f.title} className="feedcard">
              <div className="thumb" style={{ background: f.bg }}>
                {f.emoji}
              </div>
              <div>
                <b>{f.title}</b>
                <br />
                <small>{f.meta}</small>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="side-card mint" style={{ marginBottom: 18 }}>
            <span className="tag">✨ AI PICK FOR YOU</span>
            <h3>“I&apos;m bored tonight”</h3>
            <p>We found 4 spots matching your vibe + age group.</p>
          </div>
          <div className="side-card pink">
            <span className="tag">💬 GROUP CHAT · 6</span>
            <h3>Friday night crew?</h3>
            <p>Maya, Jonas + 4 want ramen → rooftop.</p>
            <Link className="btn" href="#plans">
              Say I&apos;m in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
