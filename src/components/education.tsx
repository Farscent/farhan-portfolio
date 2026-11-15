import "server-only";
import Image from "next/image";
import { education } from "@/data/education";
import { Reveal } from "./ui";

export function Education() {
  return (
    <div className="education-list">
      {education.map((item) => (
        <Reveal key={item.institution}>
          <article className="education-row">
            <div className="university-logo">
              <Image
                src={item.logo}
                alt={item.logoAlt}
                width={112}
                height={112}
                sizes="(max-width: 600px) 76px, 112px"
              />
            </div>
            <div className="education-academic">
              <h3>{item.institution}</h3>
              <p className="education-degree">{item.degree}</p>
              <p className="education-location">{item.location}</p>
              <p className="education-note">{item.note}</p>
            </div>
            <div className="education-details">
              <p>{item.period}</p>
              <p className="education-grade">
                <span>{item.gradeLabel}</span> <strong>{item.grade}</strong>
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
