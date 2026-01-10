"use client";

import { Github } from "lucide-react";

export default function GitHubButton() {
  return (
    <a
      href="https://github.com/iAmSexyAndIknowIt01"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border px-6 py-3 hover:bg-accent hover:text-white transition"
    >
      <Github size={18} />
      GitHub
    </a>
  );
}
