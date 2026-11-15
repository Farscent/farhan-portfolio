import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { getSiteUrl, profile } from "@/data/profile";
import { ProjectVisual } from "@/components/project-visual";
import { RepositoryScreenshot } from "@/components/repository-screenshot";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projects/${slug}`,
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.summary,
    url: `${getSiteUrl()}/projects/${project.slug}`,
    author: { "@type": "Person", name: profile.name },
    codeRepository: project.repositoryUrl,
    keywords: project.technologies.join(", "),
  };
  return (
    <main className="project-page container" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div id="top" />
      <Link href="/#work" className="back-link">
        <ArrowLeft size={16} /> Back to selected work
      </Link>
      <div className="case-header">
        <p className="eyebrow">{project.category} / Case study</p>
        <h1>
          {project.title}
          <span className="blue">.</span>
        </h1>
        <p className="case-summary">{project.summary}</p>
        <div className="case-header-bottom">
          <span className="case-status">
            <span className="tiny-dot" />
            {project.status}
          </span>
          <div className="case-actions">
            <a
              className="button button-primary"
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} /> View repository <ArrowUpRight size={16} />
            </a>
            {project.demoUrl && (
              <a
                className="button button-outline"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live dashboard <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      <ProjectVisual variant={project.image} large />
      <div className="case-content">
        <aside className="case-aside">
          <p className="eyebrow">In this project</p>
          <nav aria-label="Case study sections">
            {[
              "Overview",
              "Problem",
              "Approach",
              "Architecture",
              "Outcomes",
            ].map((label) => (
              <a key={label} href={`#${label.toLowerCase()}`}>
                {label}
              </a>
            ))}
          </nav>
          <p className="eyebrow">Toolkit</p>
          <div className="tech-list">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </aside>
        <div className="case-narrative">
          <section id="overview">
            <p className="eyebrow">01. Overview</p>
            <h2>{project.eyebrow}</h2>
            <p>{project.summary}</p>
            <p className="case-context">{project.status}</p>
          </section>
          <section id="problem">
            <p className="eyebrow">02. The problem</p>
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </section>
          <section id="approach">
            <p className="eyebrow">03. The approach</p>
            <h2>The approach</h2>
            <ol className="approach-list">
              {project.approach.map((step, i) => (
                <li key={step}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>
          <section id="architecture">
            <p className="eyebrow">04. Technical architecture</p>
            <h2>Technical architecture</h2>
            <div className="architecture-flow">
              {project.architecture.map((step, i) => (
                <div key={step}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                  {i < project.architecture.length - 1 && (
                    <ArrowRight size={16} />
                  )}
                </div>
              ))}
            </div>
          </section>
          <section id="outcomes">
            <p className="eyebrow">05. Outcomes & reflection</p>
            <h2>Results and limitations</h2>
            <p>{project.outcome}</p>
            <div className="limitations">
              <h3>Scope & limitations</h3>
              <p>{project.limitations}</p>
            </div>
            <p className="source-note">
              Content checked against the{" "}
              <a
                href={`${project.repositoryUrl}#readme`}
                target="_blank"
                rel="noopener noreferrer"
              >
                repository README <ArrowUpRight size={12} />
              </a>{" "}
              on {project.sourceReviewed}. Team outcomes are credited to the
              project, not claimed as individual results.
            </p>
          </section>
          {project.screenshot && (
            <figure className="repository-screenshot">
              <RepositoryScreenshot
                url={project.screenshot.url}
                alt={project.screenshot.alt}
                variant={project.image}
              />
              <figcaption>
                Project dashboard, as documented in the repository.{" "}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open interactive report <ArrowUpRight size={12} />
                </a>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
      <Link className="next-project" href={`/projects/${nextProject.slug}`}>
        <div>
          <span className="eyebrow">Keep exploring</span>
          <h2>{nextProject.title}</h2>
        </div>
        <ArrowUpRight size={34} />
      </Link>
    </main>
  );
}
