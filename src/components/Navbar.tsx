"use client";

import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="glass rounded-xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
              <span className="text-white dark:text-zinc-900 font-bold text-sm">
                K
              </span>
            </div>
            <span className="font-semibold text-zinc-900 dark:text-white tracking-tight">
              Kortex IT
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#services"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            {mounted && (
              <a
                href="#contact"
                className="hidden sm:flex items-center justify-center h-9 px-4 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Get Started
              </a>
            )}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
