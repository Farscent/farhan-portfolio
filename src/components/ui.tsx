"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (listener: () => void) => {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
};
const getMotionPreference = () => window.matchMedia(reducedMotionQuery).matches;
const getServerMotionPreference = () => true;

// The installed Motion hook snapshots the initial preference. This subscription
// also cancels running entrances when the operating-system preference changes.
export function useMotionPreference() {
  return useSyncExternalStore(subscribeMotion, getMotionPreference, getServerMotionPreference);
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  kind = "text",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  kind?: "text" | "image" | "heading";
}) {
  const reduced = useMotionPreference();
  const animation = useRef<Animation | null>(null);
  const entered = useRef(false);
  useEffect(() => {
    if (reduced) animation.current?.cancel();
    return () => animation.current?.cancel();
  }, [reduced]);
  return (
    <motion.div
      className={className}
      data-reveal={kind}
      initial={false}
      viewport={{ once: true, amount: 0.08 }}
      onViewportEnter={(entry) => {
        if (!entry || entered.current) return;
        entered.current = true;
        (entry.target as HTMLElement).dataset.revealed = "true";
        if (reduced || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !entry.target.animate) return;
        // The server renders visible content. Animate only after observation;
        // no hidden CSS state, timer, or animation completion is needed to read it.
        const frames = kind === "image"
          ? [{ opacity: 0.5, clipPath: "inset(0 0 10% 0)" }, { opacity: 1, clipPath: "inset(0)" }]
          : [{ opacity: 0.25, transform: `translateY(${kind === "heading" ? 12 : 20}px)` }, { opacity: 1, transform: "translateY(0)" }];
        animation.current = entry.target.animate(frames, {
          duration: kind === "image" ? 620 : 480,
          delay: Math.min(delay, 0.16) * 1000,
          easing: "cubic-bezier(.16,1,.3,1)",
          fill: "backwards",
        });
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroIntro({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useMotionPreference();
  useEffect(() => {
    const root = ref.current;
    if (!root || reduced || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const selectors = [".hero-greeting", "h1", ".hero-discipline, .hero-headline, .hero-description, .hero-personal", ".hero-photo", ".hero-buttons, .hero-social-row, .hero-learning-note"];
    const animations = selectors.flatMap((selector, index) =>
      [...root.querySelectorAll(selector)].map(node => node.animate(
        index === 3
          ? [{ clipPath: "inset(0 0 7% 0)" }, { clipPath: "inset(0)" }]
          : [{ opacity: 0.3, transform: `translateY(${index === 1 ? 14 : 10}px)` }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 500, delay: index * 65, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" },
      )),
    );
    return () => animations.forEach(animation => animation.cancel());
  }, [reduced]);
  return <div className="hero-spread" ref={ref}>{children}</div>;
}

export function EditorialDivider() {
  return <Reveal className="editorial-divider" kind="heading"><span /></Reveal>;
}
export function SectionHeading({
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="section-heading" kind="heading">
      <div>
        <h2>{title}</h2>
        <p className="section-caption">{label}</p>
      </div>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}
export function SocialLinks({ labels = false }: { labels?: boolean }) {
  return (
    <div className={`socials ${labels ? "social-labels" : ""}`}>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Farhan on GitHub (opens in a new tab)"
      >
        <Github size={19} />
        {labels && (
          <>
            GitHub
            <ArrowUpRight size={15} />
          </>
        )}
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Farhan on LinkedIn (opens in a new tab)"
      >
        <Linkedin size={19} />
        {labels && (
          <>
            LinkedIn
            <ArrowUpRight size={15} />
          </>
        )}
      </a>
      {!labels && (
        <a href={`mailto:${profile.email}`} aria-label="Email Farhan">
          <Mail size={19} />
        </a>
      )}
    </div>
  );
}
