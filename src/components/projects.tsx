"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { categories, projects } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import { Reveal, SectionHeading } from "./ui";

const orderedProjects = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
);

export function Projects() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [expanded, setExpanded] = useState(false);
  const filtered = orderedProjects.filter(
    (project) => category === "All" || project.category === category,
  );
  const visible =
    category === "All" && !expanded ? filtered.slice(0, 4) : filtered;
  return (
    <section className="section work-section" id="work">
      <div className="container">
        <SectionHeading
          number="02"
          label="Selected work"
          title="Things I’ve been building."
          description="Data pipelines, models, dashboards, and automations. Here’s the work, including what’s still a work in progress."
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
                {item}
              </button>
            ))}
          </div>
          <span className="project-count" aria-live="polite">
            {String(filtered.length).padStart(2, "0")} projects
          </span>
        </div>
        <div className="project-grid" id="project-results">
          {visible.map((project) => (
            <Reveal key={project.slug} className={`project-entry project-entry-${project.image} ${project.featured ? "project-featured" : "project-compact"}`}>
              <article className="project-card">
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-image-link"
                  aria-label={`Read the ${project.title} case study`}
                >
                  <ProjectVisual variant={project.image} />
                  <span className="image-arrow">
                    <ArrowUpRight size={21} />
                  </span>
                </Link>
                <div className="project-editorial-copy">
                  <div className="project-meta">
                    <span>
                      <b className="project-number">
                        {String(orderedProjects.indexOf(project) + 1).padStart(
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
        </div>
        {category === "All" && (
          <div className="more-projects">
            <button
              className="button button-outline"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls="project-results"
            >
              {expanded
                ? "Show selected projects"
                : `View all ${projects.length} projects`}
              <ArrowDown
                size={16}
                style={expanded ? { transform: "rotate(180deg)" } : {}}
              />
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
      </div>
    </section>
  );
}
