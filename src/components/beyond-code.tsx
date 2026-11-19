import Image from "next/image";
import { interests } from "@/data/interests";
import { Reveal, SectionHeading } from "./ui";

export function BeyondCode() {
  return (
    <section id="beyond-code" className="section beyond-section">
      <div className="container">
        <SectionHeading
          number="07"
          label="Off the clock"
          title="Beyond the Code"
          description="There’s a person on the other side of all those notebooks."
        />
        <p className="beyond-intro">
          When I’m not working with data or exploring new technologies, you’ll
          probably find me watching anime, learning about cars, or discovering
          something new to obsess over.
        </p>
        <div className="interest-grid">
          {interests.map((interest, index) => (
            <Reveal key={interest.id} delay={index * 0.08}>
              <article className={`interest-card interest-${interest.id}`}>
                <div className="interest-header">
                  <span>After hours · 0{index + 1}</span>
                  <span className="interest-corner" aria-hidden="true">
                    ＋
                  </span>
                </div>
                <Reveal className="interest-illustration" kind="image">
                  <Image
                    src={interest.id === "anime" ? "/images/interests/anime-worldbuilding.svg" : "/images/interests/motorsport-engineering.svg"}
                    alt={interest.id === "anime"
                      ? "Original cinematic illustration of a traditional Japanese shrine and torii gate beneath a moonlit skyline of modern towers"
                      : "Original silver and black open-wheel racing car seen from above, with exposed slick tires, detailed aerodynamic bodywork, and subtle teal airflow lines"}
                    width={1200}
                    height={900}
                    sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1376px) 52vw, 700px"
                  />
                </Reveal>
                <div className="interest-copy">
                  <p className="interest-label">{interest.label}</p>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
