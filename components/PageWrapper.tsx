"use client";

import { useTheme } from "next-themes";

export default function PageWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors">
      {children}
    </div>
  );
}
