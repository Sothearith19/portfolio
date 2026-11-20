"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { BriefcaseIcon, FlaskConicalIcon, GraduationCapIcon, TrophyIcon, UsersIcon } from "lucide-react";
import { useRef } from "react";
import { Reveal, Section } from "@/components/site/section";
import { experience, type Experience as ExperienceItem } from "@/data/portfolio";

const typeMeta: Record<ExperienceItem["type"], { icon: typeof BriefcaseIcon; label: string }> = {
  education: { icon: GraduationCapIcon, label: "Education" },
  research: { icon: FlaskConicalIcon, label: "Research" },
  leadership: { icon: UsersIcon, label: "Leadership" },
  competition: { icon: TrophyIcon, label: "Competition" },
  work: { icon: BriefcaseIcon, label: "Work" },
};

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="Experience, research & education"
      description="Where I've studied, what I'm researching, and the teams I've worked with."
    >
      <ol ref={ref} className="relative ml-3 space-y-8 border-l border-border/60 pl-8 sm:pl-10">
        <motion.span
          aria-hidden
          style={{ scaleY }}
          className="absolute top-0 -left-px h-full w-px origin-top bg-gradient-to-b from-brand via-brand-2 to-transparent"
        />
        {experience.map((item, i) => {
          const { icon: Icon, label } = typeMeta[item.type];
          return (
            <li key={`${item.org}-${item.role}`} className="relative">
              <span className="absolute top-5 -left-[2.8rem] grid size-7 place-items-center rounded-full border bg-background text-brand shadow-md shadow-brand/20 sm:-left-[3.3rem]">
                <Icon className="size-3.5" />
              </span>
              <Reveal delay={Math.min(i * 0.08, 0.3)}>
                <div className="rounded-2xl border bg-card/60 p-5 backdrop-blur transition-colors hover:border-brand/40 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">{label}</span>
                    {item.period && (
                      <span className="rounded-full border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-pretty">{item.role}</h3>
                  <p className="text-sm">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noreferrer" className="text-brand hover:underline">
                        {item.org}
                      </a>
                    ) : (
                      <span className="text-brand">{item.org}</span>
                    )}
                    {item.detail && <span className="text-muted-foreground"> · {item.detail}</span>}
                  </p>
                  {item.points.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand to-brand-2" />
                          <span className="text-pretty">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
