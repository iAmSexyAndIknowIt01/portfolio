"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Hero");

  return (
    <footer className="py-20 text-center border-t mt-32">
      <h3 className="text-2xl font-bold mb-4">
        {t("title")}
      </h3>

      <p className="text-muted mb-8">
        © {new Date().getFullYear()} Telmen Burgedbaatar. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 text-sm">
        <a
          href="mailto:tekeb98@gmail.com"
          className="hover:text-accent transition"
        >
          Email
        </a>
        <a
          href="https://github.com/iAmSexyAndIknowIt01"
          target="_blank"
          className="hover:text-accent transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          className="hover:text-accent transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
