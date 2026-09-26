import Link from "next/link";

const steps = [
  {
    n: "1",
    title: "Explore the living map",
    text: "Spots, events, meetups and social hotspots — powered by real posts, not ads.",
    tags: ["📍 spots", "🔥 trending", "🎟 events"],
  },
  {
    n: "2",
    title: "See what's actually happening",
    text: "Short videos + photos tied to a place. Who's there, what's the vibe, what's it cost.",
    tags: ["🎥 48 posts", "✨ chill", "💸 $"],
  },
  {
    n: "3",
    title: "Make a plan in one tap",
    text: "Create or join a plan, chat with the group, show up. Post after and keep the loop going.",
    cta: true,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="wrap">
      <div className="sec-head">
        <div className="eyebrow">👁 How it works</div>
        <h2>Discover → See → Join → Go</h2>
        <p className="sub">
          Google Maps tells you where. TikTok shows you what it looks like.
          locale gets you there <b>with people</b>.
        </p>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <div key={s.n} className="step">
            <div className="n">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <p style={{ marginTop: 12 }}>
              {s.tags?.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
              {s.cta && (
                <Link className="btn btn-orange" href="#plans">
                  Try it →
                </Link>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
