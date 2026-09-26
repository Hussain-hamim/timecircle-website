import Link from "next/link";

const items = [
  {
    id: "feed",
    tag: "📱 SOCIAL FEED",
    title: "A TikTok you'll actually leave the house for.",
    text: "Short videos, photos, local discoveries — all linked to a real location, with other interested people and open plans attached. No doomscroll, just “oh, that's 5 min away.”",
    tags: ["#hidden-gems", "#tonight", "#under-20"],
    visual: "📲",
    visualClass: "v1",
    flip: false,
  },
  {
    id: "map",
    tag: "📍 LIVING MAP",
    title: "The city, lit up by people.",
    text: "Trending spots, events, activities and user plans on one map. Save places, build collections, follow vibes — cozy, loud, cheap, late, artsy.",
    cta: { label: "Explore demo map", href: "#cities" },
    visual: "🗺️",
    visualClass: "v2",
    flip: true,
  },
  {
    id: "plans",
    tag: "🤝 PLANS + PEOPLE",
    title: "Nomadtable energy, for everyday life.",
    text: "Create a ramen run, join a sunset crew, chat with participants, match by interests + age. For travelers, locals, students — anyone with a free evening.",
    tags: ["nearby people", "group chat", "AI match"],
    visual: "💬",
    visualClass: "v3",
    flip: false,
  },
];

export default function Experiences() {
  return (
    <section id="map" className="wrap">
      <div className="sec-head">
        <div className="eyebrow">🗺 Map + Feed</div>
        <h2>Every video has an address. Every place has a crowd.</h2>
      </div>
      {items.map((item) => (
        <div key={item.id} id={item.id} className={item.flip ? "exp flip" : "exp"}>
          <div className="exp-txt">
            <span className="tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {(item.tags || item.cta) && (
              <p style={{ marginTop: 14 }}>
                {item.tags?.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
                {item.cta && (
                  <Link className="btn btn-dark" href={item.cta.href}>
                    {item.cta.label}
                  </Link>
                )}
              </p>
            )}
          </div>
          <div className={`exp-visual ${item.visualClass}`}>{item.visual}</div>
        </div>
      ))}
    </section>
  );
}
