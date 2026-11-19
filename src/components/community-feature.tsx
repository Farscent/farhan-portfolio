import { Reveal } from "./ui";

/** Original geometric print: a speaker, an open book, and a connected audience. */
function CommunityArtwork() {
  const paper = "#f8f7f4";
  const blue = "#2459a6";
  const orange = "#f26332";
  return (
    <svg
      className="community-artwork"
      viewBox="0 0 640 300"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      role="img"
      aria-label="Conceptual illustration of a speaker sharing knowledge with a connected group of students, with an open book and collaborative pathways."
      focusable="false"
    >
      <rect width="640" height="300" fill={blue} />
      <circle cx="538" cy="64" r="146" fill={paper} opacity=".07" />
      <path d="M0 254H640M35 23V277M606 23V277" stroke={paper} opacity=".25" />
      {/* A geometric speaker above a podium, connected to the learning network. */}
      <circle cx="132" cy="73" r="23" fill={paper} />
      <path d="M91 142V121C91 96 173 96 173 121V142" fill={paper} />
      <path d="M66 142H199L185 221H80Z" fill={orange} />
      <path d="M92 162H174M92 173H148M132 221V254M91 254H174" stroke={paper} strokeWidth="2" />
      <path d="M164 105L192 87V71" stroke={paper} strokeWidth="2" />
      <circle cx="192" cy="68" r="4" fill={orange} />
      {/* The open book is the central, shared source rather than a chart. */}
      <path d="M258 64C283 57 302 61 322 73C342 61 361 57 386 64V139C361 132 342 136 322 148C302 136 283 132 258 139Z" fill={paper} />
      <path d="M322 74V147M274 83L305 88M274 97L305 102M274 111L305 116M339 88L370 83M339 102L370 97M339 116L370 111" stroke={blue} strokeWidth="2" />
      <path d="M200 156H226V107H258M387 108H423M423 108L482 66M423 108L531 143M423 108L470 218M322 149V191" stroke={paper} strokeWidth="1.5" />
      <g stroke={paper} strokeWidth="1.5">
        <circle cx="423" cy="108" r="8" fill={blue} />
        <circle cx="482" cy="66" r="13" fill={orange} stroke="none" />
        <circle cx="531" cy="143" r="11" fill={blue} />
        <circle cx="470" cy="218" r="7" fill={paper} />
        <path d="M482 66L531 143L470 218" strokeDasharray="3 6" opacity=".55" />
      </g>
      {/* A small abstract audience, not a representation of attendance counts. */}
      {[268, 322, 376].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="214" r="12" fill={i === 1 ? orange : paper} />
          <path d={`M${x - 22} 254V246C${x - 22} 225 ${x + 22} 225 ${x + 22} 246V254`} stroke={paper} strokeWidth="2" />
        </g>
      ))}
      <path d="M268 190H376M268 190V198M376 190V198" stroke={paper} opacity=".6" />
      {Array.from({ length: 45 }, (_, i) => <circle key={i} cx={504 + (i % 9) * 10} cy={238 + Math.floor(i / 9) * 10} r="1.2" fill={paper} opacity=".4" />)}
      <path d="M62 32H105M559 33H581" stroke={orange} strokeWidth="4" />
    </svg>
  );
}

export function CommunityFeature() {
  return (
    <Reveal className="community-feature-reveal">
      <article className="community-feature" aria-labelledby="community-heading">
        <p className="community-label">Community / Mentorship / Leadership</p>
        <Reveal className="community-print" kind="image"><CommunityArtwork /></Reveal>
        <div className="community-content">
          <h3 id="community-heading">Learning is better when shared.</h3>
          <ol className="community-contributions" role="list">
            <li>
              <span className="community-number" aria-hidden="true">01</span>
              <div>
                <span className="community-role">Community Leadership</span>
                <h4>GDGoC UGM</h4>
                <p>Co-led a 24-member core team, supporting <strong>460+ members</strong> and 12 major technology events.</p>
              </div>
            </li>
            <li>
              <span className="community-number" aria-hidden="true">02</span>
              <div>
                <span className="community-role">Data Science &amp; AI Education</span>
                <h4>Computer Science Expo 2025</h4>
                <p>Taught introductory Python, data analysis, and machine learning to <strong>80+ high school students</strong>.</p>
              </div>
            </li>
            <li>
              <span className="community-number" aria-hidden="true">03</span>
              <div>
                <span className="community-role">Invited Speaker</span>
                <h4>KUBIK 2026</h4>
                <p>Shared university experiences and lessons on personal growth with <strong>138 incoming Computer Science students</strong>.</p>
              </div>
            </li>
            <li>
              <span className="community-number" aria-hidden="true">04</span>
              <div>
                <span className="community-role">Award Judge</span>
                <h4>Malam Apresiasi MIPA 2026</h4>
                <p>Evaluated <strong>10 student organizations</strong> for the Futuristic Organization Award, assessing innovation, impact, and sustainability.</p>
              </div>
            </li>
          </ol>
          <details className="community-details">
            <summary>Session &amp; judging notes</summary>
            <p>At the invitation of Himpunan Mahasiswa Ilmu Komputer UGM, delivered “Here’s How I’d Start Uni Again” on October 18, 2026.</p>
            <p>Malam Apresiasi MIPA was organized by the Faculty of Mathematics and Natural Sciences, Universitas Gadjah Mada. Judging used a structured, weighted scoring framework.</p>
          </details>
        </div>
      </article>
    </Reveal>
  );
}
