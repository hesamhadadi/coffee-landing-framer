"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12"
      animate={{
        paddingTop: scrolled ? "1.1rem" : "2rem",
        paddingBottom: scrolled ? "1.1rem" : "2rem",
        backgroundColor: scrolled ? "rgba(6,4,2,0.88)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
      }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="font-display font-bold tracking-[0.2em] text-xl text-cream"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        OBS<span className="text-gold">IDIAN</span>
      </motion.div>

      <motion.ul
        className="hidden md:flex gap-10 list-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        {(["Menu", "Story", "Experience"] as const).map((label) => (
          <li key={label}>
            <a
              href={`#${label.toLowerCase()}`}
              data-cursor
              className="font-ui text-[0.7rem] tracking-[0.3em] uppercase text-fog no-underline transition-colors duration-300 hover:text-cream"
            >
              {label}
            </a>
          </li>
        ))}
      </motion.ul>

      <motion.button
        data-cursor
        className="font-ui text-[0.7rem] tracking-[0.3em] uppercase px-5 py-2.5 border border-gold-dim text-gold bg-transparent transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-black)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        Reserve
      </motion.button>
    </motion.nav>
  );
}
