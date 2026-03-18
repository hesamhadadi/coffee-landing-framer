"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Particles ── */
function Particles() {
  const particles = useRef(
    Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 1.5 + 0.4,
      dur: 8 + Math.random() * 12,
      delay: -(Math.random() * 18),
      drift: (Math.random() - 0.5) * 120,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.current.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[var(--color-gold)]"
          style={{ left: `${p.left}%`, bottom: 0, width: p.size, height: p.size }}
          animate={{
            y: [0, -(typeof window !== "undefined" ? window.innerHeight + 40 : 1000)],
            x: [0, p.drift],
            opacity: [0, 0.85, 0.35, 0],
          }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

/* ── Rings ── */
function Rings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-[460px] h-[460px]">
        {[0, 55, 118].map((inset, i) => (
          <motion.div
            key={i}
            className="absolute border rounded-full"
            style={{
              inset: -inset,
              borderColor: `rgba(201,160,94,${0.12 - i * 0.03})`,
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [1, 0.45, 1] }}
            transition={{ duration: 7, delay: i * 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Espresso Cup SVG */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="240" height="300" viewBox="0 0 240 300" fill="none">
            {/* Steam */}
            {[78, 120, 162].map((sx, i) => (
              <motion.path
                key={i}
                d={`M${sx} 100 Q${sx - 8} 78 ${sx} 60 Q${sx + 8} 42 ${sx} 24`}
                stroke="rgba(240,232,220,0.25)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="80"
                initial={{ strokeDashoffset: 80, opacity: 0 }}
                animate={{ strokeDashoffset: [80, 0, 0, 80], opacity: [0, 0.7, 0.7, 0] }}
                transition={{ duration: 3, delay: i * 0.55, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
            {/* Saucer */}
            <ellipse cx="120" cy="238" rx="76" ry="11" fill="rgba(46,26,14,0.95)" stroke="rgba(201,160,94,0.3)" strokeWidth="1" />
            <ellipse cx="120" cy="235" rx="65" ry="8" fill="rgba(58,30,12,0.85)" />
            {/* Cup body */}
            <path d="M72 148 L81 228 Q86 238 120 238 Q154 238 159 228 L168 148 Z" fill="url(#hcg)" stroke="rgba(201,160,94,0.22)" strokeWidth="1" />
            {/* Coffee surface */}
            <ellipse cx="120" cy="150" rx="48" ry="8" fill="url(#hcofg)" />
            {/* Crema */}
            <motion.ellipse
              cx="120" cy="150" rx="48" ry="8"
              fill="none" stroke="rgba(201,160,94,0.4)" strokeWidth="2"
              animate={{ strokeOpacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <ellipse cx="120" cy="149" rx="48" ry="8" fill="none" stroke="rgba(201,160,94,0.55)" strokeWidth="0.8" />
            {/* Handle */}
            <path d="M168 165 Q198 165 198 186 Q198 207 168 207" fill="none" stroke="rgba(201,160,94,0.35)" strokeWidth="6" strokeLinecap="round" />
            {/* Highlight */}
            <path d="M82 172 Q84 196 86 214" stroke="rgba(240,232,220,0.07)" strokeWidth="4" strokeLinecap="round" />
            <defs>
              <radialGradient id="hcg" cx="38%" cy="28%">
                <stop offset="0%" stopColor="#5e2e14" />
                <stop offset="100%" stopColor="#190a04" />
              </radialGradient>
              <radialGradient id="hcofg" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#8a5028" />
                <stop offset="55%" stopColor="#3e1a08" />
                <stop offset="100%" stopColor="#180804" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Split Text ── */
function SplitText({
  text,
  delay,
  italic,
  goldColor,
}: {
  text: string;
  delay: number;
  italic?: boolean;
  goldColor?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={`block leading-[0.88] tracking-[-0.02em] font-display font-bold text-[clamp(4rem,11vw,9.5rem)] ${italic ? "italic font-light" : ""} ${goldColor ? "text-gold" : "text-cream"}`}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden align-bottom mr-[0.22em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: delay + wi * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ── Hero ── */
export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 220]);
  const opacity = useTransform(scrollY, [0, 550], [1, 0]);

  return (
    <section
      className="relative h-svh flex flex-col justify-end overflow-hidden"
      style={{ background: "radial-gradient(ellipse 100% 80% at 50% 82%, #1e0f07 0%, #060402 70%)" }}
    >
      <Particles />
      <Rings />

      {/* Hero text with parallax */}
      <motion.div className="relative z-10 px-12 pb-20" style={{ y, opacity }}>
        <motion.p
          className="font-ui text-[0.68rem] tracking-[0.5em] uppercase text-gold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Est. 2009 — London · Milan · New York
        </motion.p>

        <div>
          <SplitText text="Where Coffee" delay={2} />
          <SplitText text="Becomes Art" delay={2.22} italic goldColor />
        </div>

        <motion.p
          className="mt-8 max-w-md text-base leading-loose text-fog"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          We source extraordinary beans from the world&apos;s most remote farms — and do them justice.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-12 bottom-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
      >
        <span className="font-ui text-[0.58rem] tracking-[0.4em] uppercase text-fog" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <motion.div
          className="w-px bg-gradient-to-b from-[var(--color-gold)] to-transparent"
          animate={{ height: [20, 64, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
