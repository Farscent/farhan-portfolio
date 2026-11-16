"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: reduced ? 0 : 0.28,
        delay: Math.min(delay, 0.08),
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
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
    <Reveal className="section-heading">
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
