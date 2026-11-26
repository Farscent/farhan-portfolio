"use client";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { categories, projects } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import { Reveal, SectionHeading, useMotionPreference } from "./ui";
import { EditorialGallery } from "./editorial-gallery";

export function Projects() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [expanded, setExpanded] = useState(false);
  const expandControl = useRef<HTMLButtonElement>(null);
  const reduced = useMotionPreference();
  const filtered = projects.filter(
    (project) => category === "All" || project.category === category,
  );
  const visible = category === "All" && !expanded ? filtered.slice(0, 6) : filtered;
  return (
    <section className="section work-section" id="work">
      <div className="container">
        <SectionHeading
          number="02"
          label="Selected work"
          title="Things I’ve been building."
          description="Twelve projects spanning data engineering, analytics, machine learning, and numerical methods."
        />
        <div className="project-toolbar">
          <div
            className="filters"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={category === item ? "selected" : ""}
              >
                {item} <span className="filter-total">{projects.filter(project => item === "All" || project.category === item).length}</span>
              </button>
            ))}
          </div>
          <span className="project-count" aria-live="polite">
            {visible.length === filtered.length ? `${String(filtered.length).padStart(2, "0")} projects` : `${visible.length} of ${filtered.length} projects`}
          </span>
        </div>
        <motion.div
          key={category}
          className="project-grid"
          id="project-results"
          initial={false}
          animate={reduced ? { opacity: 1, y: 0 } : { opacity: [0.45, 1], y: [8, 0] }}
          transition={{ duration: reduced ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {visible.map((project) => (
            <Reveal key={project.slug} className={`project-entry project-entry-${project.image} ${project.featured ? "project-featured" : "project-compact"}`}>
              <article className="project-card">
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-image-link"
                  aria-label={`Read the ${project.title} case study`}
                >
                  <Reveal kind="image"><ProjectVisual variant={project.image} /></Reveal>
                  <span className="image-arrow">
                    <ArrowUpRight size={21} />
                  </span>
                </Link>
                <div className="project-editorial-copy">
                  <div className="project-meta">
                    <span>
                      <b className="project-number">
                        {String(projects.indexOf(project) + 1).padStart(
                          2,
                          "0",
                        )}
                        .
                      </b>{" "}
                      {project.category}
                    </span>
                    <span>{project.status.replace("Local MVP", "Local prototype")}</span>
                  </div>
                  <h3>
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="project-summary">{project.summary}</p>
                  <p className="project-approach">{project.secondaryFocus}</p>
                  <div className="tech-list">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <Link href={`/projects/${project.slug}`}>
                      Explore project <ArrowUpRight size={16} />
                    </Link>
                    <div>
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository (opens in a new tab)`}
                      >
                        <Github size={16} /> GitHub
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live dashboard <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </motion.div>
        {category === "All" && (
          <div className="more-projects">
            <button
              ref={expandControl}
              type="button"
              className="button button-outline"
              aria-expanded={expanded}
              aria-controls="project-results"
              onClick={() => {
                if (expanded) {
                  // Keep the focused control on screen as the gallery shrinks.
                  requestAnimationFrame(() => expandControl.current?.scrollIntoView({ block: "center", behavior: reduced ? "instant" : "smooth" }));
                }
                setExpanded(value => !value);
              }}
            >
              {expanded ? "Show fewer projects" : `View all ${projects.length} projects`}
            </button>
            <a
              href="https://github.com/Farscent"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        )}
        <noscript><nav aria-label="Complete project index"><p>Explore all twelve projects:</p><ul>{projects.map(project => <li key={project.slug}><Link href={`/projects/${project.slug}`}>{project.title}</Link></li>)}</ul></nav></noscript>
        <EditorialGallery />
      </div>
    </section>
  );
}
