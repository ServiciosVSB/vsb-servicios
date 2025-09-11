export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

export const scaleOnTap = { whileTap: { scale: 0.98 } };
