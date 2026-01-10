"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CVButton from "./CVButton";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-8">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-extrabold max-w-4xl"
      >
        {t("title")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-muted max-w-2xl"
      >
        {t("description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <CVButton />
      </motion.div>
    </section>
  );
}
