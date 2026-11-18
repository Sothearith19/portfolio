"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { BriefcaseIcon, GraduationCapIcon } from "lucide-react";
import { useRef } from "react";
import { Reveal, Section } from "@/components/site/section";
import { experience } from "@/data/portfolio";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section id="experience" eyebrow="Journey" title="Experience & education">
      <ol ref={ref} className="relative ml-3 space-y-10 border-l border-border/60 pl-10">
        <motion.span
          aria-hidden
          style={{ scaleY }}
          className="absolute top-0 -left-px h-full w-px origin-top bg-gradient-to-b from-brand via-brand-2 to-transparent"
        />
        {experience.map((item, i) => {
          const Icon = item.type === "education" ? GraduationCapIcon : BriefcaseIcon;
          return (
            <li key={`${item.org}-${item.role}`} className="relative">
              <span className="absolute top-1 -left-[3.3rem] grid size-7 place-items-center rounded-full border bg-background text-brand shadow-md shadow-brand/20">
                <Icon className="size-3.5" />
              </span>
              <Reveal delay={i * 0.1}>
                <div className="rounded-2xl border bg-card/60 p-6 backdrop-blur transition-colors hover:border-brand/40">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold">{item.role}</h3>
                    <span className="rounded-full border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer" className="text-sm text-brand hover:underline">
                      {item.org}
                    </a>
                  ) : (
                    <p className="text-sm text-brand">{item.org}</p>
                  )}
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
