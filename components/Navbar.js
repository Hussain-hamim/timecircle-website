import Link from "next/link";

export default function Navbar() {
  return (
    <div className="topbar">
      <div className="wrap nav">
        <div className="logo">
          locale<span>.</span>
        </div>
        <nav className="links">
          <Link href="#how">How it works</Link>
          <Link href="#map">Map</Link>
          <Link href="#feed">Feed</Link>
          <Link href="#plans">Plans</Link>
          <Link href="#cities">Cities</Link>
        </nav>
        <div className="nav-cta">
          <Link className="btn" href="#">
            Log in
          </Link>
          <Link className="btn btn-dark" href="#">
            Get the app
          </Link>
        </div>
      </div>
    </div>
  );
}
