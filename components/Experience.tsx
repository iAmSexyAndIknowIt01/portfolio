"use client";

import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section className="py-28 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {t("title")}
      </h2>

      <div className="space-y-8">
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <h3 className="font-semibold text-lg">EXstaffing</h3>
          <p className="text-muted text-sm">2023.06 – 2025.12</p>
          <p className="mt-4">{t("exstaffing")}</p>
        </div>

        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <h3 className="font-semibold text-lg">Tikaa</h3>
          <p className="text-muted text-sm">2025.12 – Now</p>
          <p className="mt-4">{t("tikaa")}</p>
        </div>
      </div>
    </section>
  );
}
