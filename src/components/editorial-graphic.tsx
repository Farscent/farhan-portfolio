type MarkKind = "technology" | "strategy" | "leadership" | "analytics" | "security";

/** Original editorial symbols: shared two-unit strokes, open geometry, selective ink. */
export function EditorialMark({ kind }: { kind: MarkKind }) {
  return (
    <svg className={`editorial-mark editorial-mark-${kind}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true" focusable="false">
      {kind === "technology" && <>
        <path d="M14 28H39L61 50H86M14 72H39L61 50M50 14V35M50 65V86" />
        <path className="graphic-blue" d="M39 39H61V61H39Z" />
        <path className="graphic-orange" d="M8 22H20V34H8ZM80 44H92V56H80Z" fill="var(--bg)" />
        <circle cx="14" cy="72" r="6" fill="var(--bg)"/><circle cx="50" cy="14" r="4"/><circle cx="50" cy="86" r="4"/>
      </>}
      {kind === "strategy" && <>
        <path d="M14 77H42V50H67V23H88M42 50V23H55" />
        <path className="graphic-blue" d="M33 50L42 41L51 50L42 59Z" fill="var(--bg)"/>
        <path className="graphic-orange" d="M75 10H89V24H75Z" fill="var(--bg)"/>
        <circle cx="14" cy="77" r="6" fill="var(--bg)"/><path d="M20 89H88M56 77H67M67 61H78" opacity=".3"/>
      </>}
      {kind === "leadership" && <>
        <path d="M50 34V49M20 66V49H80V66M50 49V66" />
        <circle className="graphic-orange" cx="50" cy="22" r="8"/>
        <path className="graphic-blue" d="M36 37C36 25 64 25 64 37M8 86V82C8 70 32 70 32 82V86M38 86V82C38 70 62 70 62 82V86M68 86V82C68 70 92 70 92 82V86" />
        <circle cx="20" cy="66" r="6" fill="var(--bg)"/><circle cx="50" cy="66" r="6" fill="var(--bg)"/><circle cx="80" cy="66" r="6" fill="var(--bg)"/>
      </>}
      {kind === "analytics" && <>
        <path className="graphic-blue" d="M24 15H76V43C76 61 61 70 50 72C39 70 24 61 24 43ZM24 24H12V34C12 48 21 53 29 53M76 24H88V34C88 48 79 53 71 53"/>
        <path d="M50 72V84M33 89H67M31 84H69"/>
        <path className="graphic-orange" d="M36 49V39M50 49V30M64 49V23" strokeWidth="5"/>
        <path d="M8 75H17M83 75H92M12 66V84M88 66V84" opacity=".35"/>
      </>}
      {kind === "security" && <>
        <path className="graphic-blue" d="M50 12L80 24V49C80 68 61 81 50 88C39 81 20 68 20 49V24Z"/>
        <path d="M30 31H42V43H58V31H70M30 63H42V51H58V63H70"/>
        <path className="graphic-orange" d="M42 43H58V59H42Z" fill="var(--bg)"/>
        <circle cx="30" cy="31" r="3" fill="var(--bg)"/><circle cx="70" cy="63" r="3" fill="var(--bg)"/>
        <path d="M5 35V65M95 35V65M5 49H12M88 49H95" opacity=".3"/>
      </>}
    </svg>
  );
}

export function ResearchArtwork() {
  return (
    <svg className="research-artwork" viewBox="0 0 600 210" fill="none" aria-hidden="true" focusable="false">
      <circle cx="482" cy="100" r="88" stroke="var(--vermilion)" strokeWidth="18" opacity=".14" />
      <path d="M20 24H164V174H20Z" fill="var(--blue)" opacity=".045" />
      {Array.from({ length: 24 }, (_, i) => <circle key={i} cx={424 + (i % 8) * 18} cy={167 + Math.floor(i / 8) * 12} r="1.2" fill="var(--blue)" opacity=".4" />)}
      <path d="M15 188H585M45 20V188M145 20V188M245 20V188M345 20V188M445 20V188M545 20V188" stroke="currentColor" opacity=".12"/>
      <path d="M218 22L383 10L394 182L229 194Z" fill="var(--surface)" stroke="currentColor" strokeOpacity=".3"/>
      <path d="M202 13L367 25L355 197L190 185Z" fill="var(--bg)" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M222 43L341 52M219 60L295 66M212 143L331 152M211 154L330 163M210 165L284 171" stroke="currentColor" strokeWidth="2"/>
      <path d="M226 124L246 88L272 119L310 81L334 132" className="graphic-blue" strokeWidth="3"/>
      <circle cx="272" cy="119" r="5" fill="var(--vermilion)"/>
      <g className="graphic-blue" strokeWidth="1.5">
        <path d="M49 71L104 45L147 99L99 146L49 71ZM49 71L99 146M104 45L99 146M49 71L147 99"/>
        <circle cx="49" cy="71" r="7" fill="var(--bg)"/><circle cx="104" cy="45" r="7" fill="var(--bg)"/><circle cx="147" cy="99" r="7" fill="var(--bg)"/><circle cx="99" cy="146" r="7" fill="var(--bg)"/>
        <ellipse cx="481" cy="100" rx="69" ry="25" transform="rotate(-38 481 100)"/>
        <ellipse cx="481" cy="100" rx="69" ry="25" transform="rotate(38 481 100)"/>
        <ellipse cx="481" cy="100" rx="25" ry="69"/>
      </g>
      <circle cx="481" cy="100" r="6" fill="var(--vermilion)"/>
      <path d="M163 99H190M391 100H410" stroke="currentColor" strokeDasharray="3 5"/>
      <path d="M22 20H55M545 188H578" stroke="var(--vermilion)" strokeWidth="4"/>
    </svg>
  );
}
