"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ⬅️ ЭНЭ Л АСУУДЛЫГ ШИЙДНЭ

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-1 border rounded"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
