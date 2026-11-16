import { useId } from "react";
import type { Visual } from "@/data/projects";

const descriptions: Record<Visual, string> = {
  warehouse: "Travel routes weave into ordered booking records: an abstract study of bringing scattered events together.",
  dashboard: "Separate channels converge around a shared focal point: an abstract study of marketing attention and acquisition.",
  workflow: "Folded correspondence follows a blue thread toward a review seal: an abstract study of organizing internship applications.",
  security: "A vermilion interruption stands out among interwoven transaction paths beneath a magnifying circle: an abstract study of fraud investigation.",
  health: "Nested protective forms shelter a small core, with branching paths outside: an abstract study of maternal care and risk screening.",
  cafes: "A coffee cup anchors a constellation of neighborhood places and open pages: an abstract study of finding a productive study cafe.",
  fiscal: "Separated island-like forms share connecting ribbons: an abstract study of regional resources and human development across Indonesia.",
  attrition: "An ordered field of interlocking forms opens as one piece moves away: an abstract study of employee retention and departure.",
};
const paper = "#f8f7f4";
const ink = "#171717";
const blue = "#2459a6";
const orange = "#f26332";

// Original vector print studies. Positions and forms are compositional, never measured data.
function Artwork({ variant, pattern }: { variant: Visual; pattern: string }) {
  switch (variant) {
    case "warehouse":
      return <>
        <rect width="1000" height="640" fill={blue} />
        <circle cx="140" cy="115" r="260" fill={`url(#${pattern})`} />
        <g fill="none" stroke={paper} strokeWidth="2" opacity=".45">
          {[0,1,2,3,4,5].map(i=><path key={i} d={`M-50 ${230+i*30} C240 ${30+i*18} 230 ${590-i*12} 490 ${470-i*25} S760 ${120+i*30} 1050 ${160+i*32}`} />)}
        </g>
        <path d="M-70 500C210 500 220 120 435 120S650 530 1070 320" stroke={paper} strokeWidth="62" fill="none" />
        <path d="M-70 500C210 500 220 120 435 120S650 530 1070 320" stroke={ink} strokeWidth="2" strokeDasharray="3 12" fill="none" />
        <g transform="translate(610 160) rotate(-11)">
          <rect x="20" y="26" width="250" height="330" fill={ink} />
          <path d="M0 0H250V110A17 17 0 0 0 250 144V330H0V144A17 17 0 0 0 0 110Z" fill={paper} />
          <path d="M26 128H224" stroke={blue} strokeDasharray="3 8" />
          {[0,1,2,3,4,5,6].map(i=><rect key={i} x="30" y={178+i*15} width={i%3===0?120:190} height="3" fill={blue} />)}
          <circle cx="63" cy="66" r="24" fill={orange} />
          <path d="M110 49H216M110 65H185M110 81H203" stroke={blue} strokeWidth="3" />
        </g>
        <circle cx="230" cy="348" r="20" fill={orange} stroke={paper} strokeWidth="5" />
        <path d="M82 572H268M82 582H172" stroke={paper} strokeWidth="2" />
      </>;
    case "dashboard":
      return <>
        <rect width="1000" height="640" fill="#e5e8de" />
        <circle cx="830" cy="40" r="265" fill={paper} />
        <g transform="translate(480 330) rotate(-18)">
          {[-56,-28,0,28,56].map((a,i)=><path key={a} d="M-600-36H0L540-210V-145L0 36H-600Z" fill={[ink,blue,paper,blue,ink][i]} transform={`rotate(${a})`} opacity={i===2?1:.8} />)}
        </g>
        <circle cx="480" cy="330" r="160" fill={orange} />
        <circle cx="480" cy="330" r="122" fill={paper} />
        <circle cx="480" cy="330" r="82" fill={ink} />
        <circle cx="510" cy="302" r="18" fill={paper} />
        <circle cx="480" cy="330" r="188" stroke={ink} fill="none" />
        <path d="M480 108V162M480 498V552M258 330H312M648 330H702" stroke={ink} strokeWidth="2" />
        <rect x="760" y="430" width="210" height="160" fill={`url(#${pattern})`} />
        <path d="M92 98H223M92 108H170" stroke={ink} strokeWidth="2" />
      </>;
    case "workflow":
      return <>
        <rect width="1000" height="640" fill="#e7dfd1" />
        <path d="M-80 490C180 620 235 120 490 180S690 530 1080 170" fill="none" stroke={blue} strokeWidth="100" />
        <path d="M-80 490C180 620 235 120 490 180S690 530 1080 170" fill="none" stroke={paper} strokeWidth="2" strokeDasharray="4 14" />
        <g transform="translate(90 90) rotate(-12 170 110)">
          <rect width="340" height="220" fill={paper} stroke={ink} strokeWidth="2" />
          <path d="M0 0L170 138L340 0M0 220L122 103M340 220L218 103" fill="none" stroke={ink} strokeWidth="2" />
          <rect x="277" y="28" width="35" height="43" fill={orange} />
        </g>
        <g transform="translate(530 290) rotate(9 170 110)">
          <rect width="340" height="220" fill={paper} />
          <path d="M0 0L170 138L340 0M0 220L122 103M340 220L218 103" fill="none" stroke={blue} strokeWidth="2" />
          <circle cx="170" cy="112" r="68" fill={orange} />
          <path d="M141 113L161 133L203 90" fill="none" stroke={paper} strokeWidth="8" />
        </g>
        <g fill={ink}>{[0,1,2,3,4,5,6,7].map(i=><rect key={i} x={74+i*15} y="537" width="3" height={i%2?33:49} />)}</g>
        <circle cx="885" cy="98" r="42" fill={`url(#${pattern})`} />
      </>;
    case "security":
      return <>
        <rect width="1000" height="640" fill={ink} />
        <g fill="none" stroke="#7492bc" strokeWidth="2">
          {Array.from({length:19},(_,i)=><path key={i} d={`M-70 ${40+i*28}C210 ${260+i*9} 280 ${-100+i*35} 570 ${110+i*20}S790 ${710-i*14} 1080 ${380+i*14}`} />)}
        </g>
        <path d="M-70 292C210 341 280 215 570 330S790 570 1080 464" stroke={orange} strokeWidth="17" fill="none" />
        <circle cx="584" cy="337" r="168" fill="none" stroke={paper} strokeWidth="25" />
        <path d="M703 457L850 604" stroke={paper} strokeWidth="38" />
        <circle cx="584" cy="337" r="126" fill="none" stroke={paper} strokeWidth="1" strokeDasharray="3 9" />
        <circle cx="584" cy="337" r="29" fill={orange} />
        <circle cx="584" cy="337" r="56" fill="none" stroke={orange} />
        <path d="M80 85H210M80 99H150" stroke={paper} strokeWidth="2" />
      </>;
    case "health":
      return <>
        <rect width="1000" height="640" fill="#e5c7ba" />
        <path d="M-80 450C170 240 140 5 390-60M1080 530C785 410 930 100 670-60" fill="none" stroke={paper} strokeWidth="72" />
        <g transform="rotate(22 510 325)">
          <ellipse cx="510" cy="325" rx="200" ry="280" fill={blue} />
          <ellipse cx="510" cy="325" rx="145" ry="220" fill={paper} />
          <ellipse cx="510" cy="325" rx="93" ry="160" fill="#e5c7ba" />
          <ellipse cx="510" cy="325" rx="48" ry="90" fill={orange} />
          <circle cx="510" cy="310" r="24" fill={paper} />
        </g>
        <g fill="none" stroke={blue} strokeWidth="2">
          <path d="M68 570C190 430 140 355 250 275M164 444L77 360M173 419L250 433M850 121L903 70M850 121L940 145M850 121L824 54" />
          <circle cx="68" cy="570" r="10" /><circle cx="250" cy="275" r="10" />
        </g>
        <rect x="790" y="390" width="180" height="200" fill={`url(#${pattern})`} />
      </>;
    case "cafes":
      return <>
        <rect width="1000" height="640" fill="#d9c28a" />
        <g stroke={paper} fill="none" strokeWidth="24">
          <path d="M-50 140L1050 520M50-80L420 740M690-80L490 740M-70 540L1060 65" />
        </g>
        <g stroke={ink} fill="none" strokeWidth="2" strokeDasharray="4 10">
          <path d="M125 180L405 330L760 140L848 470L405 330L220 525" />
        </g>
        {[ [125,180],[760,140],[848,470],[220,525] ].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="23" fill={i%2?orange:blue}/><circle cx={x} cy={y} r="36" fill="none" stroke={ink}/></g>)}
        <g transform="translate(360 300) rotate(-14)">
          <circle r="156" fill={paper} /><circle r="123" fill="none" stroke={ink} strokeWidth="2" />
          <path d="M90-40C172-70 178 64 91 42" fill="none" stroke={paper} strokeWidth="30" />
          <circle r="96" fill={ink} /><circle r="79" fill="#8e573a" />
          <path d="M-48-31C-10-66 57-56 55-11" stroke={paper} strokeWidth="8" fill="none" />
        </g>
        <g transform="translate(698 372) rotate(12)">
          <path d="M0 0L104-18L208 0V157L104 140L0 157Z" fill={blue} />
          <path d="M104-18V140M24 34L80 25M24 53L80 44M130 26L184 35M130 45L184 54" stroke={paper} strokeWidth="2" />
        </g>
      </>;
    case "fiscal":
      return <>
        <rect width="1000" height="640" fill="#dfe4d8" />
        <g fill="none" stroke={paper} strokeWidth="2">
          {[0,1,2,3,4,5].map(i=><path key={i} d={`M-60 ${95+i*85}C260 ${-50+i*100} 510 ${750-i*83} 1080 ${100+i*80}`} />)}
        </g>
        <g fill={blue}>
          <ellipse cx="180" cy="234" rx="68" ry="185" transform="rotate(-38 180 234)" />
          <ellipse cx="422" cy="405" rx="145" ry="38" transform="rotate(9 422 405)" />
          <path d="M352 153L427 108L524 159L550 251L470 309L378 264Z" />
          <path d="M640 167L669 229L750 198L711 267L745 331L672 295L612 350L628 263L577 211Z" />
          <path d="M803 298L880 268L1007 328L965 423L870 398L822 348Z" />
          <ellipse cx="635" cy="445" rx="38" ry="17" /><ellipse cx="725" cy="465" rx="32" ry="15" />
        </g>
        <path d="M173 233C270 242 327 441 425 408S501 187 650 254S766 441 911 337" fill="none" stroke={orange} strokeWidth="18" />
        {[ [173,233],[425,408],[650,254],[911,337] ].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="26" fill={paper}/><circle cx={x} cy={y} r="9" fill={orange}/></g>)}
        <rect x="80" y="455" width="205" height="145" fill={`url(#${pattern})`} />
      </>;
    case "attrition":
      return <>
        <rect width="1000" height="640" fill="#e8e5dd" />
        <g transform="translate(100 95) rotate(-8 340 220)">
          {Array.from({length:24},(_,i)=>{
            const x=(i%6)*115,y=Math.floor(i/6)*115;
            if(i===10) return <rect key={i} x={x} y={y} width="91" height="91" rx="45" fill="none" stroke={blue} strokeDasharray="3 7" />;
            return <g key={i}><rect x={x} y={y} width="91" height="91" rx="45" fill={i%5===0?blue:ink}/><path d={`M${x+25} ${y+46}H${x+66}`} stroke={paper} strokeWidth="2" /></g>;
          })}
        </g>
        <path d="M640 270C747 254 748 130 875 141" stroke={blue} strokeWidth="2" strokeDasharray="4 10" fill="none" />
        <g transform="translate(851 110) rotate(24)"><rect width="112" height="112" rx="56" fill={orange}/><path d="M29 56H83" stroke={paper} strokeWidth="2" /></g>
        <path d="M805 434V583M792 447H941M818 460H928M831 473H915M844 486H902" stroke={blue} strokeWidth="2" />
      </>;
  }
}

export function ProjectVisual({variant, large = false}: {variant: Visual; large?: boolean}) {
  const pattern = `print-${useId().replace(/:/g, "")}`;
  return <div className={`project-visual visual-${variant}${large ? " visual-large" : ""}`} role="img" aria-label={`Conceptual illustration: ${descriptions[variant]} Not an actual system output or experimental result.`}>
    <svg viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={pattern} width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.4" fill={variant === "warehouse" ? paper : blue} /></pattern>
      </defs>
      <Artwork variant={variant} pattern={pattern} />
    </svg>
  </div>;
}
