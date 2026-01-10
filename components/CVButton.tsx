"use client";

export default function CVButton() {
  return (
    <a
      href="/cv-en.html"
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
