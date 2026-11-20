"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRightIcon, AwardIcon, CheckCircle2Icon, GraduationCapIcon, SparklesIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "cn";
import { Reveal, Section } from "@/components/site/section";
import { awards, scholarships, type Scholarship } from "@/data/portfolio";

/** Counts up from 0 when scrolled into view. */
function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, to, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

/** A card wrapped in a slowly rotating gold gradient border. */
function GoldFrame({
  children,
  className,
  intense = false,
}: {
  children: React.ReactNode;
  className?: string;
  intense?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl p-px", className)}>
      <motion.div
        aria-hidden
        className="absolute top-1/2 left-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: intense
            ? "conic-gradient(from 0deg, #f59e0b, #fde68a, #b45309, #fcd34d, #f59e0b)"
            : "conic-gradient(from 0deg, transparent 0%, #f59e0b 12%, #fde68a 18%, transparent 30%, transparent 100%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: intense ? 8 : 6, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative h-full rounded-[calc(1rem-1px)] bg-card">{children}</div>
    </div>
  );
}

function ScholarshipCard({ item, index }: { item: Scholarship; index: number }) {
  const content = (
    <div className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-600 text-amber-950 shadow-lg shadow-amber-500/30">
          <GraduationCapIcon className="size-5" />
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase",
            item.accepted
              ? "bg-amber-400/15 text-amber-600 ring-1 ring-amber-400/40 dark:text-amber-300"
              : "bg-muted text-muted-foreground",
          )}
        >
          {item.accepted && <CheckCircle2Icon className="size-3" />}
          {item.status}
        </span>
      </div>
      <p className="mt-5 font-mono text-[11px] tracking-widest text-amber-600 uppercase dark:text-amber-300">
        Full scholarship
      </p>
      <h3 className="mt-1 flex items-center gap-1.5 font-heading text-lg leading-snug font-semibold">
        {item.school}
        {item.url && <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{item.note}</p>
    </div>
  );

  return (
    <Reveal delay={0.15 + index * 0.1} className="h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group h-full"
      >
        <GoldFrame className="h-full shadow-xl shadow-amber-500/5" intense={item.accepted}>
          {item.url ? (
            <a href={item.url} target="_blank" rel="noreferrer" className="block h-full">
              {content}
            </a>
          ) : (
            content
          )}
        </GoldFrame>
      </motion.div>
    </Reveal>
  );
}

export function Scholarships() {
  return (
    <Section
      id="scholarships"
      eyebrow="Recognition"
      title={
        <>
          <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
            Three full scholarships.
          </span>{" "}
          One goal.
        </>
      }
      description="Three universities offered me a full scholarship. I accepted Paragon International University, where I'm now in my final year."
    >
      {/* Headline stat */}
      <Reveal>
        <GoldFrame intense className="shadow-2xl shadow-amber-500/10">
          <div className="relative grid items-center gap-8 overflow-hidden p-8 sm:grid-cols-[auto_1fr] sm:p-10">
            <div
              aria-hidden
              className="absolute -top-24 -left-24 size-72 rounded-full bg-amber-400/20 blur-3xl"
            />
            <div className="relative flex items-end gap-3">
              <span className="bg-gradient-to-b from-amber-200 via-amber-400 to-amber-700 bg-clip-text font-heading text-8xl leading-none font-bold text-transparent sm:text-9xl">
                <CountUp to={scholarships.length} />
              </span>
              <motion.span
                aria-hidden
                animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5 }}
                className="mb-3 text-amber-400"
              >
                <SparklesIcon className="size-8" />
              </motion.span>
            </div>
            <div className="relative">
              <p className="font-heading text-2xl font-semibold sm:text-3xl">Full scholarships offered</p>
              <p className="mt-2 max-w-md text-pretty text-muted-foreground">
                From {scholarships.map((s) => s.school).join(" · ")}.
              </p>
            </div>
          </div>
        </GoldFrame>
      </Reveal>

      {/* One card per scholarship */}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {scholarships.map((item, i) => (
          <ScholarshipCard key={item.school} item={item} index={i} />
        ))}
      </div>

      {/* Other awards */}
      {awards.length > 0 && (
        <div className="mt-10">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              <AwardIcon className="size-4" /> Other awards
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {awards.map((award, i) => (
              <Reveal key={award.title} delay={i * 0.1}>
                <div className="flex items-center gap-4 rounded-2xl border bg-card/60 p-5 backdrop-blur transition-colors hover:border-amber-400/40">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border bg-background/60 text-xl">
                    {award.glyph}
                  </span>
                  <div>
                    <p className="font-heading font-semibold">{award.title}</p>
                    <p className="text-sm text-muted-foreground">{award.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
