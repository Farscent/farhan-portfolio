"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
import { useMotionPreference } from "./ui";

const selections = ["interpolation", "stocks", "sentiment", "airflow"] as const;

export function EditorialGallery() {
  const rail = useRef<HTMLUListElement>(null);
  const reduced = useMotionPreference();
  function turn(direction: number) {
    const element = rail.current;
    if (!element) return;
    element.scrollBy({ left: direction * (element.firstElementChild?.getBoundingClientRect().width ?? element.clientWidth) + direction * 24, behavior: reduced ? "instant" : "smooth" });
  }
  return (
    <section className="editorial-gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <div><h3 id="gallery-title">Studies in data & form.</h3><p>Four projects, through an editorial lens. Swipe or use the arrows to explore.</p></div>
        <div className="gallery-controls" role="group" aria-label="Browse project illustrations">
          <button type="button" onClick={() => turn(-1)} aria-label="Previous project illustration" aria-controls="editorial-rail"><ArrowLeft size={20} /></button>
          <button type="button" onClick={() => turn(1)} aria-label="Next project illustration" aria-controls="editorial-rail"><ArrowRight size={20} /></button>
        </div>
      </div>
      <ul ref={rail} className="editorial-rail" id="editorial-rail" tabIndex={0} aria-label="Selected project illustrations" onKeyDown={event => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); turn(event.key === "ArrowRight" ? 1 : -1); }
        if (event.key === "Home" || event.key === "End") { event.preventDefault(); rail.current?.scrollTo({left: event.key === "Home" ? 0 : rail.current.scrollWidth, behavior: reduced ? "instant" : "smooth"}); }
      }}>
        {selections.map(visual => {
          const project = projects.find(item => item.image === visual)!;
          return <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="gallery-project">
              <ProjectVisual variant={project.image} />
              <div className="gallery-project-caption"><span>{project.category}</span><ArrowUpRight size={18} /><h4>{project.title}</h4></div>
            </Link>
          </li>;
        })}
      </ul>
    </section>
  );
}
