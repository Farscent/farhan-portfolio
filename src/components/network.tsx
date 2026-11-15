"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Layers,
  Users,
} from "lucide-react";

export function Network() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 90, damping: 24 });
  const y = useSpring(0, { stiffness: 90, damping: 24 });
  return (
    <div
      className="network-scene"
      ref={ref}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const box = ref.current?.getBoundingClientRect();
        if (box) {
          x.set((event.clientX - box.x - box.width / 2) / 35);
          y.set((event.clientY - box.y - box.height / 2) / 35);
        }
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="network-meta">
        <span>
          <span className="tiny-dot" /> CONNECTING THE DOTS
        </span>
        <span>01 — ∞</span>
      </div>
      <motion.div
        className="network-canvas"
        style={{ x, y }}
        aria-hidden="true"
      >
        <svg className="network-lines" viewBox="0 0 500 450" fill="none">
          <defs>
            <radialGradient id="network-glow">
              <stop stopColor="#2563eb" stopOpacity=".12" />
              <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="250" cy="225" r="200" fill="url(#network-glow)" />
          <circle
            cx="250"
            cy="225"
            r="168"
            stroke="currentColor"
            strokeDasharray="2 7"
          />
          <circle cx="250" cy="225" r="110" stroke="currentColor" />
          <ellipse
            cx="250"
            cy="225"
            rx="214"
            ry="72"
            transform="rotate(-35 250 225)"
            stroke="currentColor"
          />
          <path
            d="M250 225L114 120M250 225L385 153M250 225L360 340M250 225L124 326M114 120L385 153L360 340L124 326Z"
            stroke="currentColor"
          />
          <g fill="#2563eb">
            <circle cx="114" cy="120" r="4" />
            <circle cx="385" cy="153" r="4" />
            <circle cx="360" cy="340" r="4" />
            <circle cx="124" cy="326" r="4" />
            <circle cx="288" cy="62" r="3" />
            <circle cx="67" cy="258" r="3" />
            <circle cx="431" cy="275" r="3" />
          </g>
        </svg>
        <div className="network-center">
          <span className="network-center-symbol">
            f<span>.</span>
          </span>
          <span>CURIOUS BY DESIGN</span>
        </div>
        <div className="network-node node-data">
          <Database size={19} />
          <div>
            Data<span>Find the signal</span>
          </div>
        </div>
        <div className="network-node node-ai">
          <BrainCircuit size={19} />
          <div>
            Intelligence<span>Explore what’s next</span>
          </div>
        </div>
        <div className="network-node node-people">
          <Users size={19} />
          <div>
            People<span>Build together</span>
          </div>
        </div>
        <div className="network-node node-impact">
          <Layers size={19} />
          <div>
            Impact<span>Make it meaningful</span>
          </div>
          <ArrowUpRight size={13} />
        </div>
      </motion.div>
      <div className="network-caption">
        <span>TECHNOLOGY × BUSINESS × PEOPLE</span>
        <span>YOGYAKARTA, ID</span>
      </div>
    </div>
  );
}
