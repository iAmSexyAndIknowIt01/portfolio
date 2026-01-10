"use client";

import { useLocale } from "next-intl";
import { Download } from "lucide-react";

export default function CVButton() {
  const locale = useLocale();

  const cvPath =
    locale === "ja" ? "/cv/cv-ja.pdf" : "/cv/cv-en.pdf";

  return (
    <a
      href={cvPath}
      download
      className="inline-flex items-center gap-2 rounded-full border px-6 py-3 hover:bg-accent hover:text-white transition"
    >
      <Download size={18} />
      Download CV
    </a>
  );
}
