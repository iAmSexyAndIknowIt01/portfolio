"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Lightbulb, Globe, Cpu } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Approach() {
  const t = useTranslations("Approach");

  return (
    <section className="py-28">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Title */}
        <motion.h2
          variants={item}
          className="text-4xl font-bold mb-6"
        >
          {t("title")}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-muted max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="rounded-3xl border bg-card p-8 text-left transition"
          >
            <Lightbulb className="mb-4 h-8 w-8 text-accent" />
            <h3 className="font-semibold text-lg mb-2">
              {t("ideas.title")}
            </h3>
            <p className="text-sm text-muted">
              {t("ideas.description")}
            </p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="rounded-3xl border bg-card p-8 text-left transition"
          >
            <Globe className="mb-4 h-8 w-8 text-accent" />
            <h3 className="font-semibold text-lg mb-2">
              {t("bridge.title")}
            </h3>
            <p className="text-sm text-muted">
              {t("bridge.description")}
            </p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="rounded-3xl border bg-card p-8 text-left transition"
          >
            <Cpu className="mb-4 h-8 w-8 text-accent" />
            <h3 className="font-semibold text-lg mb-2">
              {t("tech.title")}
            </h3>
            <p className="text-sm text-muted">
              {t("tech.description")}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
