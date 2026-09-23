import Link from "next/link";

const cards = [
  {
    emoji: "☕",
    title: "Cozy café",
    meta: "People hanging out here tonight · 0.3 mi",
    cta: "See posts →",
  },
  {
    emoji: "🎸",
    title: "Live music",
    meta: "8 people interested · starts 9pm",
    cta: "Join plan →",
  },
  {
    emoji: "🌅",
    title: "Sunset spot",
    meta: "Trending nearby · 214 saves today",
    cta: "View map →",
  },
  {
    emoji: "🍜",
    title: "New ramen place",
    meta: "Popular with people like you",
    cta: "Match vibe →",
  },
];

export default function Bored() {
  return (
    <section className="bored">
      <div className="wrap" style={{ padding: "20px 24px" }}>
        <h2>
          “I&apos;m bored tonight.”
          <br />
          We got you.
        </h2>
        <p style={{ textAlign: "center", opacity: 0.85, fontWeight: 600 }}>
          Tell locale your mood. Get places + people, not a list of pins.
        </p>
        <div className="bored-grid">
          {cards.map((c) => (
            <div key={c.title} className="bcard">
              <div className="big">{c.emoji}</div>
              <b>{c.title}</b>
              <small>{c.meta}</small>
              <br />
              <br />
              <Link className="btn" href="#map">
                {c.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
