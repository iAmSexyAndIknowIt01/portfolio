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
    <nav className="fixed top-6 left-1/2 z-100 w-[90%] max-w-5xl -translate-x-1/2 rounded-full border bg-background shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium hover:text-accent"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
