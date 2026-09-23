const cities =
  "New York · Los Angeles · Austin · Chicago · Miami · Toronto · London · Paris · Berlin · Barcelona · Lisbon · Amsterdam · Copenhagen · Stockholm · Milan · Rome · Tokyo · Seoul · Osaka · Singapore · Bangkok · Bali · Mumbai · Bangalore · Sydney · Melbourne · Mexico City · Bogotá · Buenos Aires · São Paulo · Lima · Cape Town · Lagos · Cairo · Istanbul · Dubai · Tel Aviv · Warsaw · Prague · Vienna · Budapest";

export default function Cities() {
  return (
    <section id="cities" className="wrap">
      <div className="sec-head">
        <h2>Find your city.</h2>
        <p>Launching in 40 cities. Your crowd is already posting.</p>
      </div>
      <div className="cities">
        <p>{cities}</p>
      </div>
    </section>
  );
}
