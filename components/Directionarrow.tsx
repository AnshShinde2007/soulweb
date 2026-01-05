"use client";
import { motion } from "motion/react";

type Props = {
  rotate?: number;
  className?: string;
};

export default function DirectionArrow({ rotate = 0, className = "" }: Props) {
  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      style={{ rotate }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-12 h-12 rounded-full border border-white/40" />
    </motion.div>
  );
}
