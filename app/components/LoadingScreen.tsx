"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-8 bg-[var(--color-black)]"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          <motion.p
            className="font-display font-semibold tracking-[0.25em] text-5xl text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            OBSIDIAN
          </motion.p>

          <div
            className="w-48 h-px overflow-hidden"
            style={{ background: "rgba(201,160,94,0.15)" }}
          >
            <motion.div
              className="h-full bg-[var(--color-gold)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.3, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          <motion.p
            className="font-ui text-[0.6rem] tracking-[0.5em] uppercase text-fog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Where Coffee Becomes Art
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
