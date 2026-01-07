"use client";

import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section className="py-28">
      <h2 className="text-3xl font-bold text-center mb-16">
        {t("title")}
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

        {/* Item */}
        <div className="relative pl-16 mb-16">
          <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent" />
          <h3 className="font-semibold text-lg">EXstaffing</h3>
          <p className="text-muted text-sm">2023.06 – 2025.12</p>
          <p className="mt-4">{t("exstaffing")}</p>
        </div>

        <div className="relative pl-16">
          <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent" />
          <h3 className="font-semibold text-lg">Tikaa</h3>
          <p className="text-muted text-sm">2025.12 – Now</p>
          <p className="mt-4">{t("tikaa")}</p>
        </div>
      </div>
    </section>
  );
}
