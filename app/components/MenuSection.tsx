"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MENU_ITEMS } from "../lib/data";
import Reveal from "./Reveal";

type MenuItem = (typeof MENU_ITEMS)[number];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        data-cursor
        className="relative overflow-hidden flex-shrink-0 w-72 h-[520px] border"
        style={{
          borderColor: "rgba(255,255,255,0.06)",
          borderRadius: 2,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          y: hovered ? -14 : 0,
          borderColor: hovered ? "rgba(201,160,94,0.28)" : "rgba(255,255,255,0.06)",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Real photo with zoom on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={item.image}
            alt={`${item.name} ${item.sub}`}
            fill
            className="object-cover"
            sizes="288px"
          />
        </motion.div>

        {/* Color tint overlay — keeps brand feel on top of photo */}
        <div
          className="absolute inset-0"
          style={{ background: item.bg, opacity: 0.55, mixBlendMode: "multiply" }}
        />

        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 60% at 50% 80%, ${item.accent}22, transparent)`,
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Bottom dark fade so text is always readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,4,2,0.97) 0%, rgba(6,4,2,0.4) 45%, rgba(6,4,2,0.1) 70%, transparent 100%)",
          }}
        />

        {/* Corner shine */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${item.accent}1a 100%)`,
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Card body */}
        <div className="absolute bottom-0 left-0 right-0 p-7">
          <p
            className="font-ui text-[0.58rem] tracking-[0.5em] uppercase mb-2"
            style={{ color: item.accent }}
          >
            {item.cat}
          </p>

          <h3 className="font-display text-[2rem] leading-[1.05] font-semibold text-cream">
            {item.name}{" "}
            <em className="font-light not-italic" style={{ color: item.accent }}>
              {item.sub}
            </em>
          </h3>

          <p className="mt-1 font-display font-light italic text-[1.05rem]" style={{ color: item.accent }}>
            {item.price}
          </p>

          <p className="mt-1 font-ui text-[0.6rem] tracking-[0.35em] uppercase text-fog opacity-60">
            {item.origin}
          </p>

          <motion.p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "rgba(200,185,165,0.9)" }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
            transition={{ duration: 0.4, delay: hovered ? 0.05 : 0 }}
          >
            {item.desc}
          </motion.p>

          {/* Underline draw */}
          <motion.div
            className="mt-4 h-px"
            style={{ background: `linear-gradient(to right, ${item.accent}, transparent)` }}
            animate={{ width: hovered ? 56 : 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-[var(--color-black)]">
      {/* Header */}
      <div className="px-12 mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <Reveal>
          <h2 className="font-display font-bold text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] text-cream">
            The
            <br />
            <em className="italic font-light text-gold">Menu</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-sm leading-loose text-fog max-w-xs">
            Every item crafted with the same obsessive precision. Hover to discover what
            makes each one extraordinary.
          </p>
        </Reveal>
      </div>

      {/* Scrollable row */}
      <div
        className="flex gap-5 overflow-x-auto px-12 pb-6"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {MENU_ITEMS.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
