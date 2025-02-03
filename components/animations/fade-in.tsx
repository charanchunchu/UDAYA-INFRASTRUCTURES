"use client"

import { motion } from "framer-motion"

export function FadeIn({ children, className = "", delay = 0, direction = null, fullWidth = false, padding = true }) {
  const animations = {
    up: {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
    down: {
      initial: { opacity: 0, y: -24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
    left: {
      initial: { opacity: 0, x: -24 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
    right: {
      initial: { opacity: 0, x: 24 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
    none: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, ease: "easeOut", delay },
    },
  }

  const directionAnimation = direction ? animations[direction] : animations.none

  return (
    <motion.div
      className={`${className} ${padding ? "py-4" : ""} ${fullWidth ? "w-full" : ""}`}
      initial={directionAnimation.initial}
      whileInView={directionAnimation.animate}
      viewport={{ once: true, margin: "-96px" }}
      transition={directionAnimation.transition}
    >
      {children}
    </motion.div>
  )
}

