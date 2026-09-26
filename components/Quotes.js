const quotes = [
  {
    text: "“I moved cities and had a dinner crew in 4 days. The map felt alive — I just picked a pin with good energy.”",
    author: "— Priya, 24 · Lisbon",
  },
  {
    text: "“It's my 'bored' button. Friday: ramen video → joined 6 strangers → now we have a group chat.”",
    author: "— Jonas, 27 · Berlin",
  },
  {
    text: "“As a café owner, our slow Tuesdays became jam nights. People discover us through posts, not ads.”",
    author: "— Café Mira · Local business",
  },
];

export default function Quotes() {
  return (
    <section className="wrap">
      <div className="sec-head">
        <h2>People keep showing up.</h2>
      </div>
      <div className="quotes">
        {quotes.map((q) => (
          <div key={q.author} className="q">
            {q.text}
            <small>{q.author}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
