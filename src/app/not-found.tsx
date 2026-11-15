import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <p className="eyebrow">404 / A MISSING CONNECTION</p>
      <h1>
        This page took
        <br />a different path.
      </h1>
      <p>Let’s get you back to the projects.</p>
      <Link className="button button-primary" href="/#work">
        <ArrowLeft size={16} /> Explore the work
      </Link>
    </main>
  );
}
