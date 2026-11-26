import "server-only";
import Image from "next/image";
import { education } from "@/data/education";
import { Reveal } from "./ui";
import { NTUEditorialIllustration, UGMEditorialIllustration } from "./university-illustrations";
import styles from "./education.module.css";

export function Education() {
  return (
    <div className={styles.features}>
      {education.map((item, index) => (
        <article key={item.institution} className={styles.feature} aria-labelledby={`university-${item.monogram}`}>
          <figure className={styles.print}>
            <figcaption className={styles.folio}>
              <span>{item.monogram === "UGM" ? "Balairung" : "The Hive"}</span>
            </figcaption>
            <Reveal kind="image" className={styles.artwork} delay={index * 0.1}>
              {item.monogram === "UGM" ? <UGMEditorialIllustration /> : <NTUEditorialIllustration />}
            </Reveal>
          </figure>
          <Reveal className={styles.academic} delay={0.06 + index * 0.08}>
            <a className={`university-logo ${styles.logo}`} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.institution} official website (opens in a new tab)`}>
              <Image
                src={item.logo}
                alt={item.logoAlt}
                width={112}
                height={112}
                sizes="(max-width: 1000px) 64px, 76px"
              />
            </a>
            <div className={styles.copy}>
              <h3 id={`university-${item.monogram}`}>{item.institution}</h3>
              <p className={styles.degree}>{item.degree}</p>
              <div className={styles.details}>
                <p>{item.period}</p>
                <p>{item.location}</p>
              </div>
              {item.note && <p className={styles.note}>{item.note}</p>}
            </div>
          </Reveal>
        </article>
      ))}
    </div>
  );
}
