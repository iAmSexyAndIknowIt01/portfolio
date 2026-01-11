"use client";

import { useTranslations } from "next-intl";
import { Code, Users } from "lucide-react";

type Skill = {
  name: string;
  level: number; // 1 - 5
  description?: string; // hover дээр харагдана
};

type SkillCardProps = {
  title: string;
  skills: Skill[];
  icon: React.ElementType;
};

/* ---------- Skill Level (dots + fallback) ---------- */
function SkillLevel({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-2 mt-3">
      {Array.from({ length: 5 }).map((_, i) => {
        const active = i < level;

        return (
          <span
            key={i}
            title={`Level ${level} / 5`}
            className={`
              h-3.5 w-3.5 rounded-full transition
              ${active ? "bg-blue-300" : "bg-gray-300"}
            `}
          />
        );
      })}

      {/* Fallback text */}
      <span className="ml-2 text-xs text-muted-foreground">
        Lv.{level}
      </span>
    </div>
  );
}

/* ---------- Tooltip ---------- */
function Tooltip({ text }: { text: string }) {
  return (
    <div
      className="
        absolute z-10 bottom-full mb-3
        w-max max-w-xs px-3 py-2
        text-xs text-white bg-black/80
        rounded-lg shadow-lg
        opacity-0 scale-95
        transition-all duration-200
        group-hover:opacity-100 group-hover:scale-100
        pointer-events-none
      "
    >
      {text}
    </div>
  );
}

/* ---------- Skill Card ---------- */
function SkillCard({ title, skills, icon: Icon }: SkillCardProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Icon className="text-blue-500" />
        {title}
      </h3>

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              relative group
              rounded-3xl border bg-background p-6
              hover:shadow-xl transition
            "
          >
            {/* Tooltip (hover) */}
            {skill.description && (
              <Tooltip text={skill.description} />
            )}

            <p className="font-medium">{skill.name}</p>
            <SkillLevel level={skill.level} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Main ---------- */
export default function Skills() {
  const t = useTranslations("Skills");

  const techSkills = t.raw("techSkills") as Skill[];
  const softSkills = t.raw("softSkills") as Skill[];

  return (
    <section className="py-28 bg-card/60 rounded-[3rem] px-6">
      <h2 className="text-3xl font-bold mb-4 text-center">
        {t("title")}
      </h2>

      <p className="text-center text-muted-foreground mb-16">
        {t("level")}
      </p>

      <div className="grid gap-20 md:grid-cols-2">
        <SkillCard
          title={t("tech")}
          skills={techSkills}
          icon={Code}
        />

        <SkillCard
          title={t("soft")}
          skills={softSkills}
          icon={Users}
        />
      </div>
    </section>
  );
}
