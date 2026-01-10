"use client";

import { useTranslations } from "next-intl";

export default function Approach() {
  const t = useTranslations("Approach");

  return (
    <section className="py-24 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">
        {t("title")}
      </h2>

      <p className="text-muted leading-relaxed">
        {t("description")}
      </p>
    </section>
  );
}
