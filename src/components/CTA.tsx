"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200 via-transparent to-transparent dark:from-zinc-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-200 via-transparent to-transparent dark:from-zinc-800" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Join hundreds of companies that trust Kortex IT for their technology needs.
                Get a free consultation today.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white"
                />
                <button
                  type="submit"
                  className="h-12 px-6 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap"
                >
                  Get Started
                </button>
              </form>

              <p className="text-xs text-zinc-500 mt-4">
                No credit card required. Free 14-day trial.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
