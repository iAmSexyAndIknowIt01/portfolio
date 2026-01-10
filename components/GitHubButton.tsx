"use client";

import { Github } from "lucide-react";

export default function GitHubButton() {
  return (
    <a
      href="https://github.com/iAmSexyAndIknowIt01"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        rounded-full border border-muted
        px-6 py-3 text-sm font-medium
        text-foreground
        hover:border-foreground
        hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
        transition
      "
    >
      <Github size={18} />
      GitHub
    </a>
  );
}
