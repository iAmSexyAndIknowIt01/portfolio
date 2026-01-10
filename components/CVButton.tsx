"use client";

import { useLocale } from "next-intl";

export default function CVButton() {
  const locale = useLocale();

  const cvPath =
    locale === "ja"
      ? "/en/cv/cv-ja.pdf"
      : "/en/cv/cv-en.pdf";

  return (
    <a
      href={cvPath}
      download
      className="
        relative inline-flex items-center justify-center
        rounded-full p-0.5
        bg-linear-to-r from-purple-500 via-pink-500 to-indigo-500
        hover:scale-105 transition
      "
    >
      <span
        className="
          rounded-full bg-background
          px-6 py-3 text-sm font-semibold
          text-foreground
          hover:bg-transparent hover:text-white
          transition
        "
      >
        Download CV
      </span>
    </a>
  );
}
