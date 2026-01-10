"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";

export default function Grid() {
  const t = useTranslations("Grid.items");

  const copyEmail = async () => {
    await navigator.clipboard.writeText("tekeb98@gmail.com");
    alert("Email copied!");
  };

  const items = [
    { key: "collaboration", col: "md:col-span-2" },
    { key: "timezone", col: "md:col-span-1" },
    {
      key: "techstack",
      col: "md:col-span-2",
      showStack: true,
    },
    { key: "passion", col: "md:col-span-1" },
    {
      key: "cta",
      col: "md:col-span-3",
      cta: true,
    },
  ];

  return (
    <section
      id="about"
      className="py-28 max-w-7xl mx-auto px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className={`rounded-3xl border bg-card p-8 shadow-sm hover:shadow-xl transition ${item.col}`}
          >
            <h3 className="text-xl font-semibold mb-3">
              {t(`${item.key}.title`)}
            </h3>

            <p className="text-muted mb-4">
              {t(`${item.key}.description`)}
            </p>

            {item.showStack && (
              <p className="text-sm text-foreground/80">
                {t("techstack.stack")}
              </p>
            )}

            {item.cta && (
              <button
                onClick={copyEmail}
                className="
                  group mt-6 inline-flex items-center gap-2
                  rounded-full p-0.5
                  bg-linear-to-r from-purple-500 via-pink-500 to-indigo-500
                  transition hover:scale-105
                "
              >
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-full bg-background
                    px-6 py-3 text-sm font-semibold
                    text-foreground transition
                    group-hover:bg-transparent
                    group-hover:text-white
                  "
                >
                  <Mail
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                  {t("cta.button")}
                </span>
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
