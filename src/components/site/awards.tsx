"use client";

import { motion } from "framer-motion";
import { Reveal, Section } from "@/components/site/section";
import { awards } from "@/data/portfolio";

export function Awards() {
  return (
    <Section id="awards" eyebrow="Recognition" title="Awards & scholarships">
      <div className="grid gap-5 sm:grid-cols-2">
        {awards.map((award, i) => (
          <Reveal key={award.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-2xl border bg-card/60 p-6 backdrop-blur transition-colors hover:border-brand/40"
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br from-brand/30 to-brand-2/30 opacity-60 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <span className="relative grid size-12 place-items-center rounded-xl border bg-background/60 text-2xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                {award.glyph}
              </span>
              <h3 className="relative mt-4 font-heading text-lg font-semibold">{award.title}</h3>
              <p className="relative mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{award.detail}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
