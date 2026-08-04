"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

type Direction = "up" | "left" | "right";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  left: { x: -36, y: 0 },
  right: { x: 36, y: 0 },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}) {
  const offset = offsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: smoothEase },
  },
};
