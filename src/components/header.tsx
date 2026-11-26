"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { navigation, profile } from "@/data/profile";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [compact, setCompact] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setCompact(!entry.isIntersecting));
    if (sentinel.current) observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystem = () => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {}
      document.documentElement.dataset.theme = query.matches ? "dark" : "light";
    };
    query.addEventListener("change", onSystem);
    const visibleSections = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleSections.add(entry.target);
          else visibleSections.delete(entry.target);
        }
        const nearest = [...visibleSections].sort((a, b) =>
          Math.abs(a.getBoundingClientRect().top - window.innerHeight * 0.15) -
          Math.abs(b.getBoundingClientRect().top - window.innerHeight * 0.15),
        )[0];
        if (nearest) setActive(nearest.id === "top" ? "" : nearest.id);
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    [{ id: "top" }, ...navigation.filter(item => item.id !== "contact")].forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    // The final section may never reach the upper activation band because
    // scrolling stops at the footer. Activate it while it is visibly in view.
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive("contact");
        else setActive(current => current === "contact" ? "" : current);
      },
      { rootMargin: "-15% 0px 0px 0px", threshold: 0.1 },
    );
    const contact = document.getElementById("contact");
    if (contact) contactObserver.observe(contact);
    return () => {
      observer.disconnect();
      contactObserver.disconnect();
      query.removeEventListener("change", onSystem);
    };
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  function toggleTheme() {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }
  return (
    <>
    <div className="header-sentinel" ref={sentinel} aria-hidden="true" />
    <header className={`site-header${compact ? " is-scrolled" : ""}`}>
      <div className="nav-shell container">
        <Link
          href="/"
          className="brand"
          aria-label="Farhan Adiwidya Pradana, home"
          onClick={() => setOpen(false)}
        >
          <span className="monogram">
            f<span>.</span>
          </span>
          <span>
            farhan<span className="brand-suffix"> / portfolio</span>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
          id="main-navigation"
        >
          {navigation.map((item) => (
            <Link
              href={`/#${item.id}`}
              key={item.id}
              aria-current={active === item.id ? "location" : undefined}
              onClick={() => {
                setActive(item.id);
                setOpen(false);
              }}
            >
              {item.label}
              <span className="active-dot" />
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
          >
            <Sun size={18} className="sun-icon" />
            <Moon size={18} className="moon-icon" />
          </button>
          <a
            className="nav-contact"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Let’s talk on LinkedIn (opens in a new tab)"
          >
            Let’s talk <ArrowUpRight size={16} />
          </a>
          <button
            id="menu-toggle"
            className="icon-button menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
    </>
  );
}
