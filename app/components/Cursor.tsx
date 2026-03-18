"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { damping: 20, stiffness: 180, mass: 0.4 });
  const ry = useSpring(my, { damping: 20, stiffness: 180, mass: 0.4 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const enter = () => {
      dotRef.current?.style.setProperty("width", "18px");
      dotRef.current?.style.setProperty("height", "18px");
      ringRef.current?.style.setProperty("width", "54px");
      ringRef.current?.style.setProperty("height", "54px");
      ringRef.current?.style.setProperty("border-color", "rgba(201,160,94,0.8)");
    };

    const leave = () => {
      dotRef.current?.style.setProperty("width", "10px");
      dotRef.current?.style.setProperty("height", "10px");
      ringRef.current?.style.setProperty("width", "38px");
      ringRef.current?.style.setProperty("height", "38px");
      ringRef.current?.style.setProperty("border-color", "rgba(201,160,94,0.4)");
    };

    window.addEventListener("mousemove", move);

    const interactables = document.querySelectorAll("button, a, [data-cursor]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [mx, my]);

  return (
    <>
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-[width,height] duration-200"
        style={{
          width: 10,
          height: 10,
          background: "#f0e8dc",
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] transition-[width,height,border-color] duration-300"
        style={{
          width: 38,
          height: 38,
          borderColor: "rgba(201,160,94,0.4)",
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
