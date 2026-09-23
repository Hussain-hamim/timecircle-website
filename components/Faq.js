"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Is this just Google Maps + TikTok?",
    a: "No. Maps tells you where, TikTok shows you what. locale connects content → place → people → plan. You can join the moment, not just watch it.",
  },
  {
    q: "How do plans work?",
    a: "Create or join a public plan, chat with participants, meet at the spot. Think dinners, drinks, runs, sunset hangs — with AI matching by vibe, interests and age.",
  },
  {
    q: "Is it free?",
    a: "Yes — discover, post and join plans free. Later: premium filters, promoted spots for businesses, and featured placement on the map.",
  },
  {
    q: "For travelers or locals?",
    a: "Both. Travelers find the real city fast. Locals break routine and meet their neighborhood.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="wrap faq">
      <div className="sec-head">
        <h2>Questions?</h2>
      </div>
      {faqs.map((f, i) => (
        <details
          key={f.q}
          className="faq-item"
          open={open === i}
          onToggle={(e) => {
            if (e.currentTarget.open) setOpen(i);
            else if (open === i) setOpen(-1);
          }}
        >
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
      <div style={{ textAlign: "center", marginTop: 28 }}>
        <div className="final">
          <h2>
            Ready to touch grass
            <br />
            with cool people?
          </h2>
          <p style={{ margin: "12px 0 24px", fontWeight: 600 }}>
            Join the waitlist — get your city unlocked + early access.
          </p>
          <Link className="btn" style={{ background: "#fff" }} href="#">
            ✦ Get early access
          </Link>
          <div className="store" style={{ marginBottom: 0 }}>
            <span>⬢ App Store</span>
            <span>▶ Google Play</span>
          </div>
        </div>
      </div>
    </section>
  );
}
