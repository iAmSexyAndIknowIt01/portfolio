"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const projects = [
  {
    title: "Job Matching Platform",
    image: "/project1.png",
  },
  {
    title: "Construction Management System",
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
            key={p.title}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-3xl border bg-background"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-64 w-full object-cover transition duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
