"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";
import { PROCESS_STEPS, EXPERIENCE_ITEMS, GALLERY_ITEMS } from "../lib/data";

/* ── Ghost scrolling headlines ── */
export function GhostHeadlines() {
  const line1 = "Specialty Coffee · Single Origin · Direct Trade · Precision Roasting  ";
  const line2 = "Ethiopia · Colombia · Panama · Kenya · Guatemala · Yemen  ";

  return (
    <div className="overflow-hidden bg-ink py-2">
      {[
        { text: line1, dir: "normal" as const },
        { text: line2, dir: "reverse" as const },
      ].map(({ text, dir }, i) => (
        <div key={i} className="overflow-hidden py-2">
          <div
            className="whitespace-nowrap w-max font-display italic font-light"
            style={{
              fontSize: "clamp(2.8rem,5.5vw,4.5rem)",
              color: "rgba(201,160,94,0.07)",
              animation: `${dir === "normal" ? "gallery-scroll" : "gallery-scroll-rev"} 22s linear infinite`,
              letterSpacing: "0.02em",
            }}
          >
            {text.repeat(4)}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Philosophy ── */
export function Philosophy() {
  return (
    <section
      className="relative py-48 px-12 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 80% at 50% 50%, #1e0f07 0%, #060402 70%)",
      }}
    >
      {/* Decorative quotes */}
      <div
        className="absolute top-1/2 left-6 -translate-y-1/2 select-none pointer-events-none font-display"
        style={{ fontSize: "16rem", color: "rgba(201,160,94,0.04)", lineHeight: 1 }}
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <div
        className="absolute top-1/2 right-6 -translate-y-1/2 select-none pointer-events-none font-display"
        style={{ fontSize: "16rem", color: "rgba(201,160,94,0.04)", lineHeight: 1 }}
        aria-hidden="true"
      >
        &rdquo;
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <p className="font-ui text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-10">
            Our Philosophy
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <blockquote className="font-display font-light italic text-cream" style={{ fontSize: "clamp(1.8rem,4vw,3.5rem)", lineHeight: 1.28 }}>
            Good coffee doesn&apos;t ask you to{" "}
            <em className="not-italic font-semibold text-gold">acquire</em> a taste.
            <br />
            It reveals one you didn&apos;t know you had.
          </blockquote>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-10 font-ui text-[0.68rem] tracking-[0.4em] uppercase text-fog">
            — The Obsidian Manifesto
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Gallery ── */
export function Gallery() {
  const doubled = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

  return (
    <section className="overflow-hidden bg-ink py-12">
      <div
        className="flex gap-4 w-max"
        style={{ animation: "gallery-scroll 32s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <GalleryItem key={i} label={item.label} image={item.image} />
        ))}
      </div>
    </section>
  );
}

function GalleryItem({ label, image }: { label: string; image: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      data-cursor
      className="relative flex-shrink-0 w-64 h-80 overflow-hidden rounded-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover"
          sizes="256px"
        />
      </motion.div>
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(6,4,2,0.75) 0%, transparent 60%)" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 px-4 pb-4"
        animate={{ y: hovered ? 0 : 8, opacity: hovered ? 1 : 0.6 }}
        transition={{ duration: 0.35 }}
      >
        <span className="font-display italic text-base" style={{ color: "rgba(240,232,220,0.9)" }}>
          {label}
        </span>
      </motion.div>
    </div>
  );
}

/* ── Process ── */
export function Process() {
  return (
    <section className="py-24 bg-espresso">
      <Reveal>
        <h2 className="font-display font-semibold text-center text-cream mb-16" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
          From <em className="italic font-light text-gold">seed</em> to cup
        </h2>
      </Reveal>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        {PROCESS_STEPS.map((step, i) => (
          <ProcessStep key={step.n} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: (typeof PROCESS_STEPS)[number]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        data-cursor
        className="relative p-10 border-r last:border-r-0 overflow-hidden"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ background: hovered ? "rgba(201,160,94,0.03)" : "transparent" }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, #c9a05e, transparent)" }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div
          className="font-display font-bold mb-6 leading-none"
          style={{ fontSize: "4rem", color: "rgba(201,160,94,0.12)" }}
        >
          {step.n}
        </div>
        <h3 className="font-display font-semibold text-xl text-cream mb-3">{step.title}</h3>
        <p className="text-sm leading-relaxed text-fog">{step.desc}</p>
      </motion.div>
    </Reveal>
  );
}

/* ── Experience ── */
export function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start bg-black"
    >
      <div className="md:sticky" style={{ top: "25vh" }}>
        <Reveal direction="left">
          <p className="font-ui text-[0.65rem] tracking-[0.5em] uppercase text-gold mb-6">
            Why Obsidian
          </p>
          <h2
            className="font-display font-semibold text-cream leading-[1.1]"
            style={{ fontSize: "clamp(2.5rem,4vw,3.8rem)" }}
          >
            An experience
            <br />
            beyond the{" "}
            <em className="italic font-light text-gold">ordinary.</em>
          </h2>
          <p className="mt-6 text-sm leading-loose text-fog max-w-sm">
            We didn&apos;t open a café. We built a destination for people who believe their
            time deserves extraordinary things.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-0.5">
        {EXPERIENCE_ITEMS.map((item, i) => (
          <ExperienceCard key={item.n} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof EXPERIENCE_ITEMS)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        data-cursor
        className="relative p-10 border overflow-hidden"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          borderColor: hovered ? "rgba(201,160,94,0.2)" : "rgba(255,255,255,0.04)",
          background: hovered ? "rgba(201,160,94,0.025)" : "transparent",
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-0.5"
          style={{
            background: "linear-gradient(to bottom, #c9a05e, #7a2e18)",
            transformOrigin: "bottom",
          }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          initial={{ scaleY: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <p className="font-ui text-[0.58rem] tracking-[0.4em] uppercase text-gold opacity-60 mb-4">
          {item.n} ·
        </p>
        <h3 className="font-display font-semibold text-2xl text-cream mb-3">{item.title}</h3>
        <p className="text-sm leading-relaxed text-fog">{item.desc}</p>
      </motion.div>
    </Reveal>
  );
}

/* ── CTA ── */
export function CTA() {
  return (
    <section
      className="relative py-48 px-12 text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #060402, #1e0f07 50%, #060402)",
      }}
    >
      {/* Spinning rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[520px] h-[520px] rounded-full border"
          style={{
            borderColor: "rgba(201,160,94,0.05)",
            animation: "spin-slow 90s linear infinite",
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[380px] h-[380px] rounded-full border"
          style={{ borderColor: "rgba(201,160,94,0.04)" }}
        />
      </div>

      <div className="relative z-10">
        <Reveal>
          <h2
            className="font-display font-bold text-cream leading-[0.9]"
            style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
          >
            Visit
            <br />
            <em className="italic font-light text-gold">Obsidian</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 mb-12 text-base leading-loose text-fog">
            Shoreditch · London · Open daily 7am–10pm
            <br />
            New York · Milan · Tokyo — opening 2025
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <motion.button
            data-cursor
            className="inline-flex items-center gap-4 px-10 py-4 border font-ui text-[0.72rem] tracking-[0.3em] uppercase text-gold"
            style={{ borderColor: "rgba(122,94,42,0.7)", background: "transparent" }}
            whileHover={{ background: "#c9a05e", color: "#060402", borderColor: "#c9a05e", gap: "1.5rem" } as never}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            Reserve Your Table
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Footer ── */
export function Footer() {
  const cols = [
    {
      heading: "Menu",
      items: ["Espresso Bar", "Filter Coffees", "Cold Brew", "Signature Drinks", "Pastry & Food"],
    },
    {
      heading: "Visit",
      items: ["Shoreditch, London", "@obsidian.coffee", "+44 20 7234 5678", "Mon–Fri 7am–10pm", "Weekends 8am–11pm"],
    },
    {
      heading: "Explore",
      items: ["The Roastery", "Coffee School", "Subscription", "Private Events", "Journal"],
    },
  ];

  return (
    <footer className="px-12 pt-16 pb-8 border-t border-white-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="font-display font-bold tracking-[0.12em] text-3xl text-cream mb-4">
            OBS<span className="text-gold">IDIAN</span>
          </div>
          <p className="text-sm leading-loose text-fog max-w-xs">
            Coffee, elevated to the point where it asks something of you — and gives back
            more than you expected.
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.heading}>
            <h5 className="font-ui text-[0.6rem] tracking-[0.45em] uppercase text-gold mb-6">
              {col.heading}
            </h5>
            <ul className="space-y-2.5 list-none">
              {col.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-fog transition-colors duration-300 hover:text-cream"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="flex flex-col md:flex-row justify-between items-center pt-6 border-t gap-4"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        <p className="font-ui text-[0.68rem] tracking-wider" style={{ color: "rgba(154,136,120,0.45)" }}>
          © 2025 Obsidian Coffee Ltd{" "}
          <span className="text-gold opacity-50">·</span> All rights reserved
        </p>
        <p className="font-ui text-[0.68rem] tracking-wider" style={{ color: "rgba(154,136,120,0.45)" }}>
          Crafted with obsession <span className="text-gold opacity-50">·</span> London
        </p>
      </div>
    </footer>
  );
}
