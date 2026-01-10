"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function FloatingAvatar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ✅ prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  /* Mouse tilt */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-60, 60], [12, -12]);
  const rotateY = useTransform(x, [-60, 60], [-12, 12]);

  /* Scroll parallax */
  const { scrollY } = useScroll();
  const scrollOffset = useTransform(scrollY, [0, 400], [0, -24]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (!mounted) return null;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { duration: 0.6 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      style={{
        rotateX,
        rotateY,
        translateY: scrollOffset,
      }}
      className="relative w-44 h-44 md:w-56 md:h-56 perspective-distant"
    >
      {/* Glow */}
      <div
        className={`
          absolute inset-0 rounded-full blur-2xl opacity-50
          ${
            theme === "dark"
              ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "bg-linear-to-r from-blue-400 via-sky-400 to-indigo-400"
          }
        `}
      />

      {/* Avatar frame */}
      <div
        className="
          relative z-10 w-full h-full rounded-full
          bg-background/60 backdrop-blur-xl
          border border-white/20
          shadow-2xl
          flex items-center justify-center
        "
      >
        <img
          src="/avatar.png"
          alt="Avatar"
          draggable={false}
          className="
            w-[86%] h-[86%]
            rounded-full object-cover
            select-none
          "
        />
      </div>

      {/* Status badge */}
      <div
        className="
          absolute -top-4 right-2 z-20
          flex items-center gap-2
          px-3 py-1 rounded-full text-xs font-medium
          bg-background/80 backdrop-blur
          border shadow
        "
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Available
      </div>
    </motion.div>
  );
}
