import "server-only";
import { useId } from "react";

// Original architectural studies, drawn from the owner's campus photographs:
// design-references/ugm/rectorate.png and ntu/The_Hive,_NTU_(I).jpg.
// Repetition follows the buildings' structural language, not a surveyed plan.
const cream = "#eee8d8";
const forest = "#264b3d";
const sage = "#728369";

function Foliage({ x, y, scale = 1, fill = forest }: { x: number; y: number; scale?: number; fill?: string }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <path d="M-76 33C-105 18-97-17-74-23C-87-51-56-76-35-66C-27-99 8-96 20-76C45-94 71-73 67-49C101-43 107-12 83 5C107 31 75 58 51 50C31 77-2 66-14 55C-43 73-76 62-76 33Z" fill={fill} />
    <path d="M-70-16C-51-22-37-12-30 1M-39-58C-21-55-16-37-18-21M22-63C15-40 23-28 41-25M61-29C47-12 49 1 62 12M-59 31C-33 16-20 26-16 39M4 9C27-4 40 10 38 32" fill="none" stroke="#b0b79a" strokeWidth="2" opacity=".35" />
  </g>;
}

export function UGMEditorialIllustration() {
  const id = useId().replace(/:/g, "");
  return <svg className="campus-artwork campus-artwork-ugm" viewBox="0 0 1200 800" role="img" aria-labelledby={`${id}-title ${id}-desc`} xmlns="http://www.w3.org/2000/svg">
    <title id={`${id}-title`}>Balairung, Universitas Gadjah Mada</title>
    <desc id={`${id}-desc`}>An original editorial interpretation of the supplied photograph: Balairung&apos;s long cream facade, tall central columns, seven arched entrances, red tiled roofs, campus trees, and Indonesian flag, seen from an oblique courtyard perspective.</desc>
    <defs>
      <pattern id={`${id}-paper`} width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".6" fill="#334c48" opacity=".13" /></pattern>
      <pattern id={`${id}-tiles`} width="13" height="9" patternUnits="userSpaceOnUse" patternTransform="skewY(6)"><path d="M0 0H13M0 9H13M3 0L5 9M10 0L12 9" fill="none" stroke="#edb29a" strokeWidth=".75" opacity=".45" /></pattern>
      <clipPath id={`${id}-roof`}><path d="M75 294L170 251L455 287L544 272L724 310L1109 397L1130 423L719 356L447 324L75 318Z" /></clipPath>
    </defs>
    <rect width="1200" height="800" fill="#e1e7de" />
    <path d="M0 150C230 110 351 173 580 142S1000 132 1200 109V0H0Z" fill="#eeeede" />
    <path d="M177 150C310 125 361 150 479 137M748 213C856 188 944 214 1075 195" fill="none" stroke="#f5f2e7" strokeWidth="17" opacity=".8" />
    <rect width="1200" height="800" fill={`url(#${id}-paper)`} />
    <path d="M0 650L447 611L1200 670V800H0Z" fill="#9aab87" />
    <path d="M419 652L715 644L1200 788V800H210Z" fill="#c3c3b4" />
    <path d="M420 662L714 652L1200 792M403 675L712 666M365 701L709 686M314 735L708 710" fill="none" stroke="#eeeee2" strokeWidth="2" />
    <path d="M55 654L107 601L1109 617L1156 680L690 704Z" fill="#536d59" opacity=".2" />

    {/* Receding wings and deep open corridors. */}
    <path d="M100 309L458 345V635L100 662Z" fill="#d7d3b9" />
    <path d="M715 349L1103 414V654L715 629Z" fill="#dcd8c0" />
    <path d="M113 343L451 374V567L113 586Z" fill="#465447" />
    <path d="M725 380L1093 437V596L725 573Z" fill="#495849" />
    {[0, 1, 2].map(row => <g key={row}>
      <path d={`M108 ${356 + row * 91}L453 ${385 + row * 82}V${397 + row * 82}L108 ${369 + row * 91}Z`} fill={cream} />
      <path d={`M720 ${395 + row * 81}L1098 ${450 + row * 70}V${459 + row * 70}L720 ${406 + row * 81}Z`} fill={cream} />
    </g>)}
    {Array.from({ length: 13 }, (_, i) => {
      const x = 117 + i * 26;
      return <g key={i}>
        <path d={`M${x} ${332+i*2.4}L${x+10} ${333+i*2.4}V${647-i*2}L${x} ${648-i*2}Z`} fill={cream} />
        <path d={`M${x+10} ${333+i*2.4}L${x+15} ${335+i*2.4}V${646-i*2}L${x+10} ${647-i*2}Z`} fill="#afa98f" />
      </g>;
    })}
    {Array.from({ length: 14 }, (_, i) => {
      const x = 726 + i * 27;
      return <g key={i}>
        <path d={`M${x} ${371+i*4}L${x+10} ${372+i*4}V${635+i*1.3}L${x} ${634+i*1.3}Z`} fill={cream} />
        <path d={`M${x+10} ${372+i*4}L${x+15} ${373+i*4}V${635+i*1.3}L${x+10} ${635+i*1.3}Z`} fill="#b3ad95" />
      </g>;
    })}
    <path d="M75 294L170 251L455 287L544 272L724 310L1109 397L1130 423L719 356L447 324L75 318Z" fill="#914e3f" />
    <rect x="60" y="240" width="1090" height="195" fill={`url(#${id}-tiles)`} clipPath={`url(#${id}-roof)`} />
    <path d="M75 318L447 324L719 356L1130 423" stroke="#583d32" strokeWidth="6" fill="none" />
    <path d="M170 251L455 287M724 310L1109 397" stroke="#be7a5e" strokeWidth="5" />

    {/* Projecting central colonnade, with a vaulted ground-floor arcade. */}
    <path d="M447 324L719 356V641L447 650Z" fill="#bcb9a1" />
    <path d="M414 324L695 356V651L414 659Z" fill="#eee7cc" />
    <path d="M414 324L447 305L727 343L695 356Z" fill="#f5eed7" />
    <path d="M407 319L447 299L732 337L695 351Z" fill="#a65b43" />
    <path d="M424 362L684 390V554L424 540Z" fill="#454c3d" />
    <path d="M424 442L684 465M424 451L684 474" stroke="#a1987f" strokeWidth="3" />
    {Array.from({ length: 7 }, (_, i) => {
      const x = 426 + i * 38;
      const y = 371 + i * 4;
      const base = 644 - i * 1.3;
      return <g key={i}>
        <path d={`M${x} ${y}V${y+170}H${x+13}V${y+2}Z`} fill="#f7f0d8" />
        <path d={`M${x+13} ${y+2}L${x+19} ${y+8}V${y+172}L${x+13} ${y+170}Z`} fill="#b1aa90" />
        <path d={`M${x-4} ${y-4}L${x+19} ${y-2}V${y+7}L${x-4} ${y+5}Z`} fill="#f7f0d8" />
        <path d={`M${x+2} ${base}V${base-49}C${x+2} ${base-75} ${x+29} ${base-76} ${x+29} ${base-49}V${base-1}Z`} fill="#525440" />
        <path d={`M${x-2} ${base}V${base-49}C${x-2} ${base-82} ${x+33} ${base-83} ${x+33} ${base-49}V${base-1}`} fill="none" stroke="#f7efd5" strokeWidth="6" />
        <path d={`M${x+9} ${base-3}V${base-43}M${x+24} ${base-3}V${base-43}`} stroke="#78785f" strokeWidth="1.3" />
      </g>;
    })}
    <path d="M414 543L695 558V573L414 561Z" fill="#f4edd2" />
    <path d="M414 561L695 573" stroke="#a49b7e" strokeWidth="2" />
    <path d="M412 655L699 646L747 668L376 680Z" fill="#a7aa98" />
    <path d="M403 663L708 654M393 669L722 660M382 675L735 666" stroke="#e4e2cc" strokeWidth="2" />
    <path d="M563 310V233M561 235H565" stroke="#67776c" strokeWidth="2" />

    {/* Flag and planting belong to the reference, rather than added ornament. */}
    <g className="campus-atmosphere">
      <path d="M1038 669L1000 274" stroke="#68766d" strokeWidth="3" />
      <path d="M1001 278C1023 264 1032 298 1064 280L1068 310C1040 329 1023 296 1004 308Z" fill="#ac493c" />
      <path d="M1004 308C1023 296 1040 329 1068 310L1071 339C1040 357 1026 326 1007 338Z" fill="#faf7e9" />
      <path d="M1026 668H1052L1059 677H1019Z" fill="#777b67" />
    </g>
    <g className="campus-greenery">
      <path d="M85 700L97 388M99 495L39 432M96 464L156 399M216 687L224 500M224 569L190 529" stroke="#58614c" strokeWidth="13" fill="none" />
      <Foliage x={73} y={370} scale={1.8} /><Foliage x={13} y={472} scale={1.5} /><Foliage x={174} y={448} scale={1.2} fill="#41644b" />
      <Foliage x={209} y={516} scale={.8} /><Foliage x={1148} y={562} scale={1.05} />
      <Foliage x={315} y={604} scale={.43} fill="#4c6b48" /><Foliage x={351} y={606} scale={.37} />
      <Foliage x={770} y={622} scale={.38} /><Foliage x={817} y={622} scale={.35} fill="#4c6b48" />
      <path d="M0 749C89 705 158 719 252 737L196 800H0ZM962 753C1043 735 1119 737 1200 759V800H1110Z" fill="#3d5b45" />
      <path d="M0 761C87 725 167 741 221 753M1016 758L1200 790" stroke="#80936a" strokeWidth="3" fill="none" />
    </g>
    <path d="M257 775L397 688M1156 771L757 674" stroke="#657d6c" strokeWidth="1.5" fill="none" />
  </svg>;
}

function HivePlanting({ x, y, width }: { x: number; y: number; width: number }) {
  return <g className="campus-greenery">
    <path d={`M${x-width*.44} ${y+5}Q${x} ${y+38} ${x+width*.44} ${y+5}`} fill="none" stroke="#384d37" strokeWidth="13" />
    {Array.from({length: 17}, (_, i) => {
      const px = x-width*.42+i*width*.0525;
      const py = y+8+Math.sin(i/16*Math.PI)*13;
      const height = 12+(i*7%19);
      return <g key={i}>
        <path d={`M${px-9} ${py}Q${px-16} ${py-height*.7} ${px-3} ${py-height}Q${px+5} ${py-height-9} ${px+10} ${py-height*.5}Q${px+21} ${py-6} ${px+9} ${py+3}Z`} fill={['#537048',sage,'#3a5841','#91a073'][i%4]} />
        <path d={`M${px} ${py+2}L${px+2} ${py-height+4}`} stroke="#c2c6a1" strokeWidth=".9" opacity=".6" />
        {i%3===0 && <path d={`M${px+3} ${py+1}C${px+17} ${py+15} ${px-8} ${py+20} ${px+5} ${py+38}M${px+8} ${py+15}Q${px+20} ${py+12} ${px+16} ${py+23}M${px+2} ${py+28}Q${px-12} ${py+22} ${px-7} ${py+33}`} fill="none" stroke="#59784c" strokeWidth="3" />}
      </g>;
    })}
    <path d={`M${x-width*.45} ${y+12}Q${x} ${y+42} ${x+width*.45} ${y+12}`} fill="none" stroke="#a1ab84" strokeWidth="2" />
  </g>;
}

// V15 primary reference: design-references/ntu/the-hive_ntu-singapore.png.
// The new view centers the glazed crown and barrel-shaped teaching rooms;
// narrow circulation slots and a right-hand rain tree establish the depth.
function HiveTower({ x, top, width, floors, material, floorHeight = 88, planted = false, rear = false, crown = "fins" }: {
  x: number; top: number; width: number; floors: number; material: string;
  floorHeight?: number; planted?: boolean; rear?: boolean; crown?: "glazed" | "fins" | "none";
}) {
  const levels = Array.from({ length: floors }, (_, i) => floorHeight * (1 - i * .025));
  const base = top + levels.reduce((sum, height) => sum + height, 0);
  const baseWidth = width * (1 - (floors-1) * .032);
  return <g>
    {/* The occupied ground floor is recessed beneath the projecting rooms. */}
    <path d={`M${x-baseWidth*.44} ${base-14}Q${x} ${base+10} ${x+baseWidth*.44} ${base-14}V${base+53}Q${x} ${base+70} ${x-baseWidth*.44} ${base+53}Z`} fill={rear?"#465c51":"#233b34"} />
    {[-.38,-.13,.14,.38].map((position,i)=><g key={i}>
      <path d={`M${x+baseWidth*position} ${base-6}V${base+59}`} stroke="#a7b3a5" strokeWidth="5" />
      <path d={`M${x+baseWidth*position+4} ${base-5}V${base+58}`} stroke="#50675b" strokeWidth="2" />
    </g>)}
    <path d={`M${x-baseWidth*.44} ${base+23}Q${x} ${base+40} ${x+baseWidth*.44} ${base+23}`} stroke="#a0b1a4" strokeWidth="3" fill="none" />
    {levels.map((height, i) => {
      const y = top + levels.slice(0,i).reduce((sum,h)=>sum+h,0);
      const w = width * (1 - i * .032), h = height - 13;
      const l = x-w/2, r = x+w/2;
      const arc = w * .095;
      return <g key={i}>
        <path d={`M${l+18} ${y+h-1}Q${x} ${y+h+arc+7} ${r-18} ${y+h-1}V${y+h+15}Q${x} ${y+h+arc+18} ${l+18} ${y+h+15}Z`} fill={rear?"#526255":"#2c3a31"} />
        <path d={`M${l+14} ${y+7}C${l-4} ${y+15} ${l-5} ${y+h-15} ${l+13} ${y+h}C${l+w*.19} ${y+h+arc} ${r-w*.19} ${y+h+arc} ${r-13} ${y+h}C${r+5} ${y+h-15} ${r+4} ${y+15} ${r-14} ${y+7}Q${x} ${y+arc*.85+8} ${l+14} ${y+7}Z`} fill={`url(#${material})`} stroke={rear?"#7e8d7c":"#797965"} strokeWidth="1.3" />
        {/* Close-set relief ribs with heavier joints every fourth panel. */}
        {Array.from({length:16},(_,line)=>{
          const lineY = y+8+line*(h-10)/16;
          const edge = 8+Math.abs(line-7.5)*.55;
          return <g key={line}>
            <path d={`M${l+edge} ${lineY}C${l+w*.18} ${lineY+arc} ${r-w*.18} ${lineY+arc} ${r-edge} ${lineY}`} stroke={rear?"#72816d":"#897d63"} strokeWidth={line%4===0?"1.8":".85"} fill="none" opacity={rear ? .5 : .8} />
            <path d={`M${l+edge+1} ${lineY+1.8}C${l+w*.18} ${lineY+arc+1.8} ${r-w*.18} ${lineY+arc+1.8} ${r-edge-1} ${lineY+1.8}`} stroke="#faf1da" strokeWidth="1.15" fill="none" opacity={rear ? .32 : .7} />
          </g>;
        })}
        <path d={`M${l+9} ${y+h-4}Q${x} ${y+h+arc+3} ${r-9} ${y+h-4}`} stroke="#ece0c2" strokeWidth="3" fill="none" />
        <path d={`M${x-w*.27} ${y+19}V${y+h+arc*.6}M${x+w*.23} ${y+20}V${y+h+arc*.7}`} stroke="#6c705c" strokeWidth="1.1" opacity=".65" />
        <path d={`M${l+13} ${y+19}Q${l+2} ${y+h*.55} ${l+17} ${y+h-3}`} stroke="#fff2d5" strokeWidth="2.2" fill="none" opacity=".65" />
      </g>;
    })}
    {crown !== "none" && <g>
      <path d={`M${x-width*.44} ${top+4}V${top-(crown==="glazed"?80:48)}Q${x} ${top-(crown==="glazed"?123:68)} ${x+width*.44} ${top-(crown==="glazed"?80:48)}V${top+4}Q${x} ${top+32} ${x-width*.44} ${top+4}Z`} fill={crown==="glazed"?"#59665b":"#857a5e"} stroke="#aaa38b" strokeWidth="2" />
      {Array.from({length:crown==="glazed"?9:18},(_,i)=>{
        const count=crown==="glazed"?8:17;
        const px=x-width*.42+i*width*.84/count;
        const curve=Math.sin(i/count*Math.PI);
        return <path key={i} d={`M${px} ${top-(crown==="glazed"?80:48)-curve*(crown==="glazed"?21:10)}V${top+3+curve*12}`} stroke={crown==="glazed"?"#b4b69f":i%2?"#b9aa85":"#5d624f"} strokeWidth={crown==="glazed"?"2":"4"} />;
      })}
      {crown==="glazed" && <>
        <path d={`M${x-width*.44} ${top-78}Q${x} ${top-119} ${x+width*.44} ${top-78}`} stroke="#e0d3b5" strokeWidth="7" fill="none" />
        <path d={`M${x-width*.44} ${top-38}Q${x} ${top-7} ${x+width*.44} ${top-38}`} stroke="#999c85" strokeWidth="2" fill="none" />
        <path d={`M${x-width*.42} ${top-13}Q${x} ${top+20} ${x+width*.42} ${top-13}`} stroke="#e7dac0" strokeWidth="8" fill="none" />
        <path d={`M${x-width*.26} ${top-78}L${x-width*.1} ${top-72}V${top-19}L${x-width*.26} ${top-24}Z`} fill="#aab6a5" opacity=".28" />
      </>}
      <path d={`M${x-width*.47} ${top+5}Q${x} ${top+37} ${x+width*.47} ${top+5}`} stroke="#d8caab" strokeWidth="9" fill="none" />
      <path d={`M${x-width*.47} ${top+10}Q${x} ${top+42} ${x+width*.47} ${top+10}`} stroke="#6d725c" strokeWidth="2" fill="none" />
    </g>}
    {planted && <HivePlanting x={x} y={top-44} width={width*.88} />}
  </g>;
}

function HiveRecess({ x, top, bottom, width }: { x: number; top: number; bottom: number; width: number }) {
  return <g>
    <path d={`M${x} ${top}Q${x+width*.5} ${top-18} ${x+width} ${top}V${bottom}H${x}Z`} fill="#253b33" />
    <path d={`M${x+width*.22} ${top}V${bottom}M${x+width*.68} ${top}V${bottom}`} stroke="#8b9279" strokeWidth="5" />
    {Array.from({length:7},(_,i)=><g key={i}>
      <path d={`M${x-9} ${top+33+i*69}Q${x+width/2} ${top+58+i*69} ${x+width+9} ${top+33+i*69}`} stroke="#89937e" strokeWidth="3" fill="none" />
      <path d={`M${x-9} ${top+40+i*69}Q${x+width/2} ${top+65+i*69} ${x+width+9} ${top+40+i*69}`} stroke="#182f29" strokeWidth="6" fill="none" />
    </g>)}
  </g>;
}

function HiveRainTree({ pattern }: { pattern: string }) {
  // Broad, irregular crown follows the new photograph, rather than a stack of
  // circular foliage symbols. The open lower branches reveal the facade.
  const crown="M1222 237C1171 212 1123 228 1093 247C1057 225 1018 252 1007 279C968 266 938 294 929 318C884 314 853 346 855 370C811 365 783 395 785 420C749 428 734 457 750 480C709 489 690 520 712 541C681 558 680 587 712 598C743 613 773 594 799 589C807 617 841 617 865 602C888 626 928 610 942 591C980 607 1008 578 1013 557C1053 566 1085 543 1089 519C1131 540 1159 514 1167 486C1205 493 1233 467 1220 439C1252 413 1250 371 1224 355C1257 315 1251 269 1222 237Z";
  return <g className="campus-greenery">
    <path d="M1129 763C1117 692 1129 629 1097 558C1069 507 1035 479 996 455M1108 598C1072 584 1044 561 1010 529L931 489M1097 556C1127 515 1160 481 1202 450M1058 519C1020 513 967 517 916 544L788 579M1123 670C1146 641 1175 620 1209 608" stroke="#4c5843" strokeWidth="17" strokeLinecap="round" fill="none" />
    <path d="M1124 756C1117 665 1121 610 1090 552M1090 552L998 458M1103 584L943 494M1051 523L919 546L790 580M1103 552L1197 454" stroke="#899575" strokeWidth="4" fill="none" />
    <path d={crown} fill="#365b44" />
    <path d="M1224 252C1176 237 1148 261 1121 279C1080 264 1054 294 1035 319C988 302 963 339 951 364C907 348 884 380 872 401C831 392 807 422 815 445C782 452 765 479 781 499C739 506 715 541 740 555C773 570 791 535 830 540C858 554 877 526 884 508C932 527 963 487 983 465C1032 485 1054 447 1068 426C1110 445 1155 421 1162 390C1202 405 1223 374 1215 346C1244 321 1240 276 1224 252Z" fill="#55794f" />
    <path d="M1203 268C1176 260 1142 286 1135 307C1104 291 1075 316 1068 339C1086 357 1110 337 1127 345C1150 356 1173 342 1178 325C1205 342 1221 298 1203 268ZM1019 354C994 349 971 375 970 393C938 380 914 402 920 425C941 441 970 423 980 408C1008 423 1043 394 1052 373C1040 360 1034 366 1019 354ZM886 445C856 430 835 457 839 477C807 466 782 492 791 510C814 524 834 497 849 504C873 520 905 488 907 468Z" fill="#829a66" opacity=".6" />
    <path d={crown} fill={`url(#${pattern})`} />
    <g fill="none"><path d="M1096 560C1072 515 1020 476 972 455M1056 522C1015 512 963 539 897 557M1108 551C1132 502 1168 465 1201 451" stroke="#3b563b" strokeWidth="5" opacity=".65" /><path d="M775 546L826 515L880 478L957 431M889 438L938 398L993 380M1027 362L1086 325L1150 301M1004 493L1068 457L1122 408M1148 392L1191 357" stroke="#9dab7d" strokeWidth="1.5" opacity=".55" /></g>
    <path d="M1200 657C1163 641 1138 660 1130 681C1096 667 1067 687 1065 711C1026 707 1000 734 1011 759L1200 800Z" fill="#496d48" />
  </g>;
}

export function NTUEditorialIllustration() {
  const id = useId().replace(/:/g, "");
  return <svg className="campus-artwork campus-artwork-ntu" viewBox="0 0 1200 800" role="img" aria-labelledby={`${id}-title ${id}-desc`} xmlns="http://www.w3.org/2000/svg">
    <title id={`${id}-title`}>The Hive, Nanyang Technological University</title>
    <desc id={`${id}-desc`}>An editorial interpretation of the new NTU reference photograph: a tall central sandstone cylinder with a glazed crown and finely ribbed teaching rooms, shorter overlapping towers, recessed circulation shafts, and a broad rain tree framing the right side.</desc>
    <defs>
      <pattern id={`${id}-print`} width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".6" fill="#3b5551" opacity=".1" /></pattern>
      <linearGradient id={`${id}-stone`} x1="0" y1="0" x2="1" y2=".08"><stop stopColor="#8e8a70" /><stop offset=".16" stopColor="#c9bea0" /><stop offset=".4" stopColor="#e4d7b9" /><stop offset=".67" stopColor="#cabc9a" /><stop offset="1" stopColor="#87866d" /></linearGradient>
      <linearGradient id={`${id}-rear`} x1="0" y1="0" x2="1" y2="0"><stop stopColor="#7d8a79" /><stop offset=".32" stopColor="#bdc4aa" /><stop offset=".65" stopColor="#b4b59a" /><stop offset="1" stopColor="#677e6e" /></linearGradient>
      <pattern id={`${id}-leaves`} width="37" height="29" patternUnits="userSpaceOnUse"><path d="M2 10Q0 3 8 2M21 24Q14 19 17 14" fill="none" stroke="#b0ba86" strokeWidth="1.5" opacity=".25" /><path d="M31 11Q24 8 26 2M8 28Q2 22 10 19" fill="none" stroke="#173e30" strokeWidth="1.7" opacity=".3" /></pattern>
    </defs>
    <rect width="1200" height="800" fill="#d9e8e9" />
    <path d="M0 99C201 136 299 61 452 86S739 150 941 90S1103 72 1200 93M0 157C170 192 349 138 500 159" fill="none" stroke="#f0f0e4" strokeWidth="27" opacity=".6" />
    <path d="M0 226C182 257 359 218 526 231S811 271 1032 235" fill="none" stroke="#b7cfd1" strokeWidth="10" opacity=".35" />
    <rect width="1200" height="800" fill={`url(#${id}-print)`} />
    {/* Receding neighboring block and ground plane follow the new view. */}
    <path d="M0 475L190 517V739L0 711Z" fill="#e4e8da" />
    {[0,1,2,3].map(i=><g key={i}><path d={`M0 ${503+i*47}L184 ${539+i*43}V${560+i*43}L0 ${526+i*47}Z`} fill="#708b80" /><path d={`M34 ${510+i*47}V${532+i*47}M92 ${520+i*47}V${543+i*47}M150 ${532+i*47}V${555+i*47}`} stroke="#e5e8da" strokeWidth="5" /></g>)}
    <path d="M0 721L565 691L1200 737V800H0Z" fill="#9da98a" />
    <path d="M0 749L430 731L577 800H0Z" fill="#aeb4a3" />
    <path d="M0 753L425 737L554 800M0 784L358 771" stroke="#efeedb" strokeWidth="4" fill="none" />
    <path d="M220 727L660 698L1038 754L646 785Z" fill="#344e40" opacity=".24" />
    <HiveTower x={1115} top={236} width={214} floors={6} floorHeight={77} material={`${id}-rear`} rear crown="none" />
    <HiveTower x={1007} top={273} width={237} floors={5} floorHeight={83} material={`${id}-rear`} rear />
    <HiveTower x={771} top={252} width={183} floors={6} floorHeight={75} material={`${id}-rear`} rear crown="none" />
    <HiveTower x={155} top={335} width={135} floors={5} floorHeight={76} material={`${id}-rear`} rear crown="none" />
    <HiveTower x={214} top={300} width={177} floors={5} floorHeight={80} material={`${id}-rear`} rear crown="none" />
    <HiveRecess x={432} top={252} bottom={742} width={67} />
    <HiveRecess x={724} top={251} bottom={741} width={55} />
    <HiveTower x={899} top={286} width={250} floors={5} floorHeight={82} material={`${id}-stone`} />
    <HiveTower x={335} top={286} width={244} floors={5} floorHeight={83} material={`${id}-stone`} />
    {/* The tall, crowned central cylinder is the new composition's focal point. */}
    <HiveTower x={607} top={161} width={252} floors={6} floorHeight={98} material={`${id}-stone`} crown="glazed" />
    <g className="campus-greenery">
      <path d="M187 749C225 710 285 724 312 744C352 717 394 731 406 755L430 800H145Z" fill="#688153" />
      <path d="M565 755C596 717 647 723 669 746C696 723 735 729 751 757L770 800H552Z" fill="#506c47" />
      <path d="M572 754C608 734 631 739 650 750M670 750L716 746" stroke="#9eae7e" strokeWidth="2" fill="none" />
    </g>
    <HiveRainTree pattern={`${id}-leaves`} />
    {/* Slim campus lamps provide human scale without competing with the tree. */}
    <g className="campus-atmosphere">
      <path d="M830 791V604M469 768V676M400 774V704" stroke="#667d68" strokeWidth="5" />
      <path d="M812 594L849 591L841 610H822Z" fill="#b5c09c" stroke="#6e866e" strokeWidth="2" />
      <path d="M460 669L477 668L475 679H463Z" fill="#d8d6ac" />
      <ellipse cx="400" cy="700" rx="6" ry="10" fill="#c4b467" />
      <path d="M390 789H412M457 781H481M815 796H845" stroke="#4e6652" strokeWidth="2" />
    </g>
    <path d="M48 777L124 770M179 766L249 762M70 798L132 792" stroke="#ece8cb" strokeWidth="3" />
  </svg>;
}
