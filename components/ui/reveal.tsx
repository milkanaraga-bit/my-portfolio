"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const rise: Variants = {
  hidden: { y: 48, opacity: 0 },
  visible: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Fade + rise into view on mount. Pass `index` for staggering within a group. */
export function Reveal({
  children,
  index = 0,
  className,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={rise}
      custom={index}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Line-mask text reveal: each line slides up from behind a mask. */
export function RevealText({
  lines,
  className,
  lineClassName,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.9,
              delay: 0.12 * i,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
