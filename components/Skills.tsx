"use client";

import { useTranslations } from "next-intl";
import { Code } from "lucide-react";

const skills = [
  "Java",
  "Spring Boot",
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
];

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section className="py-28 bg-card/60 rounded-[3rem]">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {t("title")}
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-3xl border bg-background p-8 hover:shadow-xl transition"
          >
            <Code className="mb-4 text-accent" />
            <h3 className="font-semibold text-lg">{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
