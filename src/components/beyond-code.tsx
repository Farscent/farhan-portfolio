import { interests } from "@/data/interests";
import { Reveal, SectionHeading } from "./ui";

function StoryPanels() {
  return (
    <svg viewBox="0 0 480 190" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <pattern
          id="story-screentone"
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity=".2" />
        </pattern>
      </defs>
      <path
        d="M22 20H274L228 169H22Z"
        fill="url(#story-screentone)"
        stroke="currentColor"
      />
      <path
        d="M287 20H458V88H267ZM263 101H458V169H242Z"
        stroke="currentColor"
      />
      <circle cx="173" cy="61" r="20" className="interest-sun" />
      <path
        d="M23 135H44V103H76V122H99V86H124V119H148V96H177V132H203V111H245M23 151H233M48 110H56M48 118H56M107 96H115M107 105H115M155 106H165M155 115H165"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M45 65L66 43M70 68L80 54M90 71L99 63M125 36L127 24"
        stroke="currentColor"
        opacity=".4"
      />
      <path
        d="M304 43L349 30L365 48L352 68L306 72ZM363 31L389 26L402 45L389 64L365 66M416 31H441M411 42H441M407 53H435"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M274 142C312 106 359 167 391 133S438 123 458 115M283 154C327 125 354 172 389 148"
        stroke="currentColor"
      />
      <path
        d="M423 139V155M415 147H431M432 126V136M427 131H437"
        className="interest-sun"
        strokeWidth="1.5"
      />
      <text x="32" y="35" className="illustration-text">
        01
      </text>
      <text x="443" y="81" className="illustration-text">
        02
      </text>
      <text x="443" y="161" className="illustration-text">
        03
      </text>
    </svg>
  );
}

function CarSketch() {
  return (
    <svg viewBox="0 0 480 190" fill="none" aria-hidden="true" focusable="false">
      <path d="M22 156H458M22 164H295" stroke="currentColor" opacity=".2" />
      <path
        d="M65 125L74 104L126 95L175 61Q190 53 215 54L273 56Q296 59 320 88L390 103L415 120L416 136H378M323 136H167M111 136H65Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M143 94L181 66L214 63L219 92ZM230 64L272 66Q289 70 307 92H231ZM70 118L103 114M384 110L405 120H383ZM242 106H258M317 106H331M178 105L177 128M309 102L313 124"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="139" cy="134" r="26" stroke="currentColor" strokeWidth="2" />
      <circle cx="139" cy="134" r="15" stroke="currentColor" />
      <circle cx="351" cy="134" r="26" stroke="currentColor" strokeWidth="2" />
      <circle cx="351" cy="134" r="15" stroke="currentColor" />
      <path
        d="M139 119V149M124 134H154M351 119V149M336 134H366"
        stroke="currentColor"
        opacity=".4"
      />
      <path
        d="M27 87H74M37 95H65M396 71H451"
        stroke="currentColor"
        opacity=".3"
      />
      <path
        d="M32 25H100M105 25H130M135 25H143"
        className="interest-sun"
        strokeWidth="4"
      />
      <path d="M432 28V56M418 42H446" stroke="currentColor" opacity=".3" />
      <text x="26" y="182" className="illustration-text">
        Form + function
      </text>
      <text x="365" y="182" className="illustration-text">
        Always curious
      </text>
    </svg>
  );
}

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
            <Reveal key={interest.id}>
              <article className={`interest-card interest-${interest.id}`}>
                <div className="interest-header">
                  <span>After hours · 0{index + 1}</span>
                  <span className="interest-corner" aria-hidden="true">
                    ＋
                  </span>
                </div>
                <div className="interest-illustration">
                  {interest.id === "anime" ? <StoryPanels /> : <CarSketch />}
                </div>
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
