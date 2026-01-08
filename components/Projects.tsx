"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const projects = [
  {
    key: "exstaffing",
    image: "/project1.png",
  },
  {
    key: "tikaa",
    image: "/project2.png",
  },
];

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section className="py-28 bg-card/60 rounded-[3rem]">
      <h2 className="text-3xl font-bold text-center mb-16">
        {t("title")}
      </h2>

      <div className="grid gap-10 md:grid-cols-2 px-6">
        {projects.map((p) => (
          <motion.div
            key={p.key}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="relative overflow-hidden rounded-3xl border bg-background group"
          >
            {/* Image */}
            <img
              src={p.image}
              alt={t(`${p.key}.title`)}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Title */}
            <div className="p-6">
              <h3 className="font-semibold text-lg">
                {t(`${p.key}.title`)}
              </h3>
            </div>

            {/* Hover popup */}
            <motion.div
              variants={{
                rest: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/70 text-white flex items-center justify-center p-6 text-center"
            >
              <p className="text-sm leading-relaxed">
                {t(`${p.key}.description`)}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
