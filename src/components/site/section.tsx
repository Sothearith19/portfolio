"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "cn";

/** Fades and slides its children in when scrolled into view. */
export function Reveal({
  delay = 0,
  className,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    />
  );
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-5xl px-5 py-24 sm:py-32", className)}>
      <Reveal className="mb-12 max-w-2xl">
        <p className="mb-3 flex items-center gap-2 font-mono text-xs tracking-widest text-brand uppercase">
          <span className="h-px w-8 bg-brand/60" />
          {eyebrow}
        </p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
        {description && <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">{description}</p>}
      </Reveal>
      {children}
    </section>
  );
}
