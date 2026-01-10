"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type NavItem = {
  name: string;
  link: string;
};

export function FloatingNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <nav
      className="
        fixed top-6 left-1/2 z-100
        h-16
        w-[90%] max-w-5xl
        -translate-x-1/2
        rounded-full border
        bg-background/80 backdrop-blur
        shadow-lg
      "
    >
      <div className="flex h-full items-center justify-between px-6">
        {/* Navigation links */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium transition hover:text-accent"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
