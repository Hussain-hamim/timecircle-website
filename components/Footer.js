import Link from "next/link";

const cols = [
  { title: "Discover", links: ["Map", "Feed", "Plans", "Cities"] },
  { title: "Company", links: ["About", "Careers", "Business", "Creators"] },
  { title: "Resources", links: ["Safety", "Guidelines", "Help", "Privacy"] },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <div className="logo" style={{ color: "#FFF7E3" }}>
            locale<span>.</span>
          </div>
          <p style={{ opacity: 0.7, marginTop: 10, maxWidth: 280 }}>
            The social layer of the real world. Discover places. Discover
            people. Go touch grass, together.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <b>{c.title}</b>
            {c.links.map((l) => (
              <Link key={l} href="#">
                {l}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div
        className="wrap"
        style={{ marginTop: 24, opacity: 0.6, fontSize: 13 }}
      >
        © 2026 locale — design concept only.
      </div>
    </footer>
  );
}
