import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Compass,
  MapPin,
  MoveUpRight,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading, SocialLinks } from "@/components/ui";
import { Projects } from "@/components/projects";
import { BeyondCode } from "@/components/beyond-code";
import { getSiteUrl, profile } from "@/data/profile";
import { contactPrivacy } from "@/data/contact";
import { experience } from "@/data/experience";
import { Education } from "@/components/education";
import { skills } from "@/data/skills";
import { achievements, research } from "@/data/achievements";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: getSiteUrl(),
    description: profile.description,
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.linkedin],
    affiliation: { "@type": "CollegeOrUniversity", name: profile.university },
    homeLocation: { "@type": "Place", name: profile.location },
    knowsAbout: [
      "Data Science",
      "Artificial Intelligence",
      "Data Engineering",
      "Business Analytics",
    ],
  };
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero container" id="top">
        <Reveal className="hero-masthead">
          <div>
            <p className="hero-kicker">Computer Science, UGM</p>
            <h1>
              <span className="hero-greeting">Hey, I’m</span>{" "}
              <span className="hero-name">Farhan.</span>
            </h1>
          </div>
          <p className="hero-headline">
            I build with data, think in systems, and enjoy the process.
          </p>
        </Reveal>
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <p className="hero-description">
              Computer Science student at{" "}
              <strong>Universitas Gadjah Mada</strong>, exploring data
              engineering, artificial intelligence, and the intersection of
              technology and business.
            </p>
            <p className="hero-personal">
              Powered by curiosity, <a href="#beyond-code">anime</a>, and an
              unreasonable interest in <a href="#beyond-code">cars</a>.
            </p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-text" href="#contact">
                Let’s connect <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-social-row">
              <SocialLinks />
              <span className="vertical-divider" />
              <span>
                <MapPin size={13} /> Yogyakarta, Indonesia
              </span>
            </div>
          </Reveal>
          <Reveal className="hero-art" delay={0.15}>
            <figure className="portrait-frame">
              <Image
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                width={profile.portrait.width}
                height={profile.portrait.height}
                sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1100px) 36vw, 370px"
                preload
                className="hero-portrait"
              />
              <figcaption className="portrait-caption">
                <span>A face to the name</span>
                <strong>{profile.name}</strong>
              </figcaption>
            </figure>
            <p className="hero-art-note">
              <span className="tiny-cross">+</span> Usually learning something
              new.
            </p>
          </Reveal>
        </div>
        <div className="hero-bottom">
          <span>Technology · Data · Business</span>
          <a href="#about">
            About me <ArrowDown size={14} />
          </a>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container">
          <SectionHeading
            number="01"
            label="A little context"
            title="A little about me."
          />
          <div className="about-body">
            <Reveal className="about-statement">
              <span className="about-margin-note">Personal notes</span>
              <p>
                I like figuring out
                <br />
                how things work.
                <br />
                <em>And who they work for.</em>
              </p>
            </Reveal>
            <Reveal className="about-copy">
              <p>
                I’m studying Computer Science at UGM. The work I enjoy sits
                somewhere between <strong>data, technology, and people.</strong>
              </p>
              <p>
                Sometimes that means cleaning a dataset or building a pipeline.
                Other times it means trying a model and working out whether its
                results are actually useful. I’m interested in both the
                technical details and the business question behind them.
              </p>
              <p>
                I also enjoy planning projects, working with people from
                different backgrounds, and explaining technical ideas in plain
                language.
              </p>
            </Reveal>
          </div>
          <div className="pillars">
            {[
              {
                icon: Code2,
                title: "Technology",
                text: "Data pipelines, machine learning, and AI. I like understanding the details, then putting them to work.",
                label: "Build, test, learn",
              },
              {
                icon: Compass,
                title: "Business & strategy",
                text: "The question before the code: what does this need to do, and who needs it?",
                label: "Start with the question",
              },
              {
                icon: Users,
                title: "Leadership",
                text: "Planning the work, listening to the team, and helping everyone make progress together.",
                label: "Good work is a team sport",
              },
            ].map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="pillar">
                  <div className="pillar-top">
                    <pillar.icon size={23} strokeWidth={1.5} />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                  <span className="pillar-label">{pillar.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Projects />

      <section id="experience" className="section experience-section">
        <div className="container">
          <SectionHeading
            number="03"
            label="Experience & leadership"
            title="The teams I’ve worked with."
            description="Consulting projects, campus communities, and a fair amount of coordinating people."
          />
          <div className="timeline">
            {experience.map((item, i) => (
              <Reveal key={item.organization}>
                <article className="experience-row">
                  <div className="experience-period">
                    <span>{item.period}</span>
                    <span className="timeline-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="experience-content">
                    <div className="experience-org">
                      <h3>{item.organization}</h3>
                      <span className="role-kind">{item.kind}</span>
                    </div>
                    <h4>{item.role}</h4>
                    <p>{item.description}</p>
                    {item.highlights && (
                      <div className="experience-highlights">
                        {item.highlights.map((highlight) => (
                          <span key={highlight}>{highlight}</span>
                        ))}
                      </div>
                    )}
                    {item.previous?.map((previous) => (
                      <div className="previous-role" key={previous.role}>
                        <p className="previous-label">
                          Previous role <span>{previous.period}</span>
                        </p>
                        <h5>{previous.role}</h5>
                        <p>{previous.description}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="experience-note">
            A mix of consulting, project-based contributions, and student
            organization roles, with overlapping commitments.
          </p>
        </div>
      </section>

      <section id="education" className="section education-section">
        <div className="container">
          <SectionHeading
            number="04"
            label="Education"
            title="Where I’m learning."
          />
          <Education />
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container skills-layout">
          <div className="skills-intro">
            <SectionHeading
              number="05"
              label="My toolkit"
              title="What I work with."
            />
            <p>
              Tools I use for data work, alongside the planning and people
              skills that help a project come together.
            </p>
            <div className="toolkit-mark" aria-hidden="true">
              {"{ "}
              <span>learn</span>
              {" → "}
              <span>build</span>
              {" → "}
              <span>repeat</span>
              {" }"}
            </div>
          </div>
          <div className="skill-groups">
            {skills.map((group, i) => (
              <Reveal key={group.title}>
                <div className="skill-group">
                  <div className="skill-group-heading">
                    <span>0{i + 1}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-chips">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="section achievements-section">
        <div className="container">
          <SectionHeading
            number="06"
            label="Milestones & research"
            title="A few milestones."
          />
          <div className="achievement-layout">
            <div>
              {achievements.map((item) => (
                <Reveal key={item.title}>
                  <a
                    className="award-row"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="award-icon">
                      <Trophy size={22} strokeWidth={1.5} />
                    </span>
                    <div>
                      <span className="award-year">{item.year}</span>
                      <h3>{item.title}</h3>
                      <p>{item.context}</p>
                      <span className="award-detail">{item.detail}</span>
                    </div>
                    <ArrowUpRight size={19} />
                  </a>
                </Reveal>
              ))}
              <Reveal>
                <div className="community-note">
                  <Users size={20} />
                  <p>
                    <strong>Learning is better when shared.</strong>
                    <br />
                    Community leadership at GDGoC UGM and introductory Data
                    Science & AI teaching for 80+ high school students.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <article className="research-card">
                <div className="research-top">
                  <span className="eyebrow">Research · {research.year}</span>
                  <ArrowUpRight size={23} />
                </div>
                <h3>
                  <a
                    href={research.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {research.title}
                  </a>
                </h3>
                <p>{research.description}</p>
                <div className="research-bottom">
                  <span>{research.status}</span>
                  <a
                    href={research.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View DOI <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <BeyondCode />

      <section id="contact" className="contact-section">
        <div className="container">
          <Reveal>
            <div className="contact-top">
              <p className="eyebrow">08. Say hello</p>
              <MoveUpRight size={32} strokeWidth={1.3} />
            </div>
            <h2>
              Have something in mind<span className="blue">?</span>
            </h2>
            <div className="contact-bottom">
              <div>
                <p>
                  A project, an opportunity, or just a good conversation about
                  data and technology — I’d be happy to hear from you.
                </p>
                <a className="contact-email" href={`mailto:${profile.email}`}>
                  {profile.email}
                  <ArrowUpRight size={23} />
                </a>
                {contactPrivacy.showPhone && (
                  <a
                    className="phone-link"
                    href={`tel:${contactPrivacy.phone}`}
                  >
                    {contactPrivacy.phone}
                  </a>
                )}
                {profile.cvUrl && (
                  <a className="phone-link" href={profile.cvUrl}>
                    Download CV <ArrowDown size={15} />
                  </a>
                )}
              </div>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Let’s get in touch on LinkedIn (opens in a new tab)"
                >
                  Let’s get in touch <ArrowRight size={17} />
                </a>
                <SocialLinks labels />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
