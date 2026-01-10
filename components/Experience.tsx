"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function ExperienceItem({
  title,
  period,
  description,
  skills,
  delay = 0,
}: {
  title: string;
  period: string;
  description: string;
  skills: string[];
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={itemVariants}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="relative pl-20 mb-12"
    >
      {/* Timeline dot */}
      <span className="absolute left-4.5 top-6 w-4 h-4 rounded-full bg-accent ring-4 ring-background" />

      <div className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Skill tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full border bg-muted/40 text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section className="py-28">
      <h2 className="text-3xl font-bold text-center mb-16">
        {t("title")}
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

        <ExperienceItem
          title="EXstaffing"
          period="2023.06 – 2025.12"
          description={t("exstaffing")}
          skills={["Spring boot", "Struts", "Oracle", "Coldfusion", "Linux", "SVN", "BitBucket", "JQuery", "Jenkins"]}
          delay={0}
        />

        <ExperienceItem
          title="Mstaffing"
          period="2025.6 – Now"
          description={t("mstaffing")}
          skills={["Typescript", "Next.js", "Supabase", "Vercel", "Tailwind CSS", "Framer Motion","PostgreSQL","GitHub"]}
          delay={0.1}
        />

        <ExperienceItem
          title="Tikaa"
          period="2025.12 – Now"
          description={t("tikaa")}
          skills={["Java", "Oracle", ".Net", "Jsp", "Svn"]}
          delay={0.1}
        />
      </div>
    </section>
  );
}
