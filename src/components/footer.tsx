import { ArrowUp } from "lucide-react";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="brand" href="/">
          <span className="monogram">
            f<span>.</span>
          </span>
          <span>Farhan Adiwidya Pradana</span>
        </Link>
        <p>Still learning. Still tinkering.</p>
        <a href="#top" className="back-top">
          Back to top <ArrowUp size={15} />
        </a>
        <span className="copyright">© {new Date().getFullYear()} Farhan</span>
      </div>
    </footer>
  );
}
